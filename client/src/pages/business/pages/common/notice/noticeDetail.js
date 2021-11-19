import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Subtitle from "../../../../../components/Subtitle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import NoticeEdit from "./noticeEdit";
import Skeleton from "@material-ui/lab/Skeleton";
import CircularProgress from "@material-ui/core/CircularProgress";

const NoticeDetail = (props) => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const [page, setPage] = useState(1);
	const [isEdit, setIsEdit] = useState(false);

	const currentEmail = useSelector((state) => state.setting.currentEmail);
	const currentPassword = useSelector((state) => state.setting.currentPassword);

	const id = props.id;

	const [info, setInfo] = useState({
		type: "",
		title: "",
		content: "",
		date: "",
		fileList: [],
	});

	useEffect(() => {
		document.getElementById("scrollRef").scrollTo(0, 0);

		axios
			.post(
				"/api/notice/" + id,
				{ key: process.env.REACT_APP_API_KEY },
				{
					headers: {
						"Content-type": "application/json",
						Accept: "application/json",
					},
				}
			)
			.then((Response) => {
				const cp = {
					type: Response.data.type,
					title: Response.data.title,
					content: Response.data.content,
					fileList: Response.data.fileList,
					date: dataToText(Response.data.createdAt),
				};
				setInfo(cp);
				setLoading(true);
			})
			.catch((Error) => {
				console.log(Error);
			});
	}, []);

	const deleteNotice = async () => {
		if (currentEmail === "master" || currentEmail === info.type) {
			await info.fileList.forEach(async function (item, index) {
				await axios.get("/api/file/delete/" + item.filename);
			});
			await axios
				.post(
					"/api/notice/delete/" + id,
					{
						key: process.env.REACT_APP_API_KEY,
					},
					{
						headers: {
							"Content-type": "application/json",
							Accept: "application/json",
						},
					}
				)
				.then((response) => {
					alert("삭제되었습니다.");
					history.push("/business/" + info.type + "/notice");
				})
				.catch((response) => {
					console.log("Error!");
				});
		} else {
			alert("권한이 없습니다.");
		}
	};

	const dataToText = (date) => {
		let year = date.substring(2, 4);
		let month = date.substring(5, 7);
		let day = date.substring(8, 10);
		return year + "." + month + "." + day;
	};

	const goEdit = () => {
		setIsEdit(true);
		document.getElementById("scrollRef").scrollTo(0, 0);
	};

	return (
		<>
			{!isEdit ? (
				<div>
					<div class="flex flex-row justify-between items-center mb-8">
						<Subtitle text={"자세히보기"} />
					</div>
					<div class="text-sm lg:text-base w-full h-auto mb-8 border-t-2 border-b-2 border-purple-600">
						{/* 딱 10개 씩만 로드하기 */}
						<div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center">
							{!loading ? (
								<Skeleton animation="wave" />
							) : (
								<>
									<div class="text-lg flex-1 font-bold">{info.title}</div>
									<div class="text-lg w-24 ">{info.date}</div>
								</>
							)}
						</div>
						<div
							class={
								"w-full border-t border-gray-300 px-4 pt-4 pb-2 flex flex-wrap flex-col " +
								(loading ? "text-center" : "")
							}
						>
							{info.fileList.length === 0 && loading ? (
								<div class="text-gray-500">업로드된 파일이 없습니다.</div>
							) : loading ? (
								info.fileList.map((element, index) => {
									return (
										<div class="w-full mb-4 rounded-md relative ">
											<span class="mr-2 text-blue-600 font-bold">
												첨부 #{index + 1}
											</span>
											<a
												class="hover:text-blue-500 "
												href={"http://phaidd.or.kr/uploads/" + element.filename}
												target="_blank"
												download
											>
												{element.filename}{" "}
												<span class="text-sm text-gray-300">(</span>
												<span class="text-sm text-blue-300">
													{element.size
														.toString()
														.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
												</span>{" "}
												<span class="text-red-500 text-sm">bytes</span>
												<span class="text-sm text-gray-300">) </span>
											</a>
										</div>
									);
								})
							) : (
								<div class="w-full h-24 my-2 py-4 flex justify-center items-center text-center">
									<CircularProgress />
								</div>
							)}
						</div>
						<div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center border-t border-gray-300">
							<div class="h-96 text-base flex-1 pr-4 truncate	">
								{ReactHtmlParser(info.content)}
							</div>
						</div>
					</div>
					<div class="flex justify-between items-center flex-col md:flex-row">
						<Link
							class="w-full md:w-auto cursor-pointer px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
							to={"/business/" + props.pages + "/notice"}
							onClick={() =>
								document.getElementById("scrollRef").scrollTo(0, 0)
							}
						>
							뒤로 가기
						</Link>
						{loading &&
						(currentEmail === "master" || currentEmail === info.type) ? (
							<div class="w-full md:w-auto flex flex-col md:flex-row">
								<div
									onClick={deleteNotice}
									class="w-full md:w-auto my-4 md:my-0 justify-center mr-4 cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
								>
									삭제하기
								</div>
								<div
									onClick={goEdit}
									class="w-full md:w-auto justify-center cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
								>
									수정하기
								</div>
							</div>
						) : null}
					</div>
				</div>
			) : (
				<NoticeEdit pages={props.pages} info={info} id={id} />
			)}
			{}
		</>
	);
};

export default NoticeDetail;
