import CircularProgress from "@material-ui/core/CircularProgress";
import Skeleton from "@material-ui/lab/Skeleton";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Subtitle from "../../../../components/Subtitle";
import NoticeEdit from "./EditNotice";
import ReactHtmlParser from "react-html-parser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NoticeDetail = (props) => {
	const [loading, setLoading] = useState(false);
	const [oldDiv, setOldDiv] = useState(true);

	const dispatch = useDispatch();
	const history = useHistory();
	const [page, setPage] = useState(1);
	const [isEdit, setIsEdit] = useState(false);

	const currentEmail = useSelector((state) => state.setting.currentEmail);
	const currentPassword = useSelector((state) => state.setting.currentPassword);
	const API_KEY = process.env.REACT_APP_API_KEY;
	const [viewText, setViewText] = useState("");
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const onEditorStateChange = (editorState) => {
		// editorState에 값 설정
		setEditorState(editorState);
	};

	const id = props.id;

	const [info, setInfo] = useState({
		type: "",
		title: "",
		content: "",
		date: "",
		fileList: [],
	});

	const areaRef = useRef();

	useEffect(() => {
		document.getElementById("scrollRef").scrollTo(0, 0);

		axios
			.post(
				"/api/notice/" + id,
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
			.then((Response) => {
				const cp = {
					type: Response.data.type,
					title: Response.data.title,
					content: Response.data.content,
					fileList: Response.data.fileList,
					read: Response.data.read,
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
		if (currentEmail === "master" || currentEmail === "org4") {
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
					history.push("/organization/notice/0");
					document.getElementById("scrollRef").scrollTo(0, 0);
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
						<div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center relative">
							{!loading ? (
								<Skeleton animation="wave" />
							) : (
								<>
									<div class="w-full relative pr-24">
										<p class="w-full h-full break-words text-lg font-bold">
											{info.title}
										</p>
										{/* <div class="text-lg w-auto border border-black pr-4 relative">
										</div> */}
									</div>
									<div class="absolute right-0 text-md w-24 ">{info.date}</div>
								</>
							)}
						</div>
						<div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center relative border-t border-gray-300">
							{!loading ? (
								<Skeleton animation="wave" />
							) : (
								<>
									<div class="w-full relative pr-24">
										<p class="w-full h-full break-words text-md invisible ">
											Read {info.read}
										</p>
										{/* <div class="text-lg w-auto border border-black pr-4 relative">
										</div> */}
									</div>
									<div class="absolute right-0 text-md w-24">
										<span class="text-purple-500 font-bold mr-2">조회</span>{" "}
										{info.read}
									</div>
								</>
							)}
						</div>

						<div
							class={
								"w-full py-4 border-t border-b border-gray-300 px-4 flex flex-wrap flex-col items-center " +
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
												href={
													window.location.origin +
													"/uploads/" +
													element.filename
												}
												target="_blank"
												download
											>
												{element.filename}{" "}
												<span class="text-sm text-gray-300">(</span>
												<span class="text-sm text-blue-300">
													{element.size.toString()}
													{/* {element.size
														.toString()
														.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} */}
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
						<div class="w-full h-auto relative py-4 px-2 lg:px-8">
							<div
								class="mb-24"
								dangerouslySetInnerHTML={{ __html: info.content }}
							></div>
						</div>
					</div>
					<div class="flex justify-between items-center flex-col md:flex-row">
						<Link
							class="w-full md:w-auto cursor-pointer px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
							to={"/organization/notice/0"}
							onClick={() =>
								document.getElementById("scrollRef").scrollTo(0, 0)
							}
						>
							뒤로 가기
						</Link>
						{loading &&
						(currentEmail === "master" || currentEmail === "org4") ? (
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
				<NoticeEdit pages={"notice"} info={info} id={id} />
			)}
			{}
		</>
	);
};

export default NoticeDetail;
