import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Subtitle from "../../../components/Subtitle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import EditCounseling from "./EditCounseling";
import Skeleton from "@material-ui/lab/Skeleton";

const CounselingDetail = (props) => {
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();
	const [page, setPage] = useState(1);
	const [state, setState] = useState("default");
	const [response, setResponse] = useState("");

	const currentEmail = useSelector((state) => state.setting.currentEmail);
	const currentPassword = useSelector((state) => state.setting.currentPassword);

	const id = props.id;

	const [info, setInfo] = useState({
		status: "",
		title: "",
		content: "",
		date: "",
		writer: "",
		password: "",
		response: "",
	});

	const changeResponse = (e) => {
		const cp = e.target.value;
		setResponse(cp);
	};

	useEffect(() => {
		document.getElementById("scrollRef").scrollTo(0, 0);
		axios
			.post(
				"/api/counseling/" + id,
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
					status: Response.data.status,
					title: Response.data.title,
					content: Response.data.content,
					writer: Response.data.writer,
					date: dataToText(Response.data.createdAt),
					password: Response.data.password,
					response: Response.data.response,
				};
				setInfo(cp);
				setResponse(Response.data.response);
				setLoading(true);
			})
			.catch((Error) => {
				console.log(Error);
			});
	}, []);

	const respondCounseling = () => {
		if (response !== "" && currentEmail === "master") {
			axios
				.post(
					"/api/counseling/respond/" + id,
					{
						key: process.env.REACT_APP_API_KEY,
						status: "complete",
						response: response,
					},
					{
						headers: {
							"Content-type": "application/json",
							Accept: "application/json",
						},
					}
				)
				.then((response) => {
					alert("응답하였습니다.");
					window.scrollTo(0, 0);
					history.push("/participation/counseling/0");
					document.getElementById("scrollRef").scrollTo(0, 0);

					setState("default");
				})
				.catch((response) => {
					console.log("Error!");
				});
		} else {
			alert("권한이 없습니다.");
		}
	};

	const deleteCounseling = () => {
		if (currentEmail === "master") {
			axios
				.post(
					"/api/counseling/delete/" + id,
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
					history.push("/participation/counseling/0");
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
		if (info.status === "unread" || currentEmail === "master") {
			setState("edit");
			document.getElementById("scrollRef").scrollTo(0, 0);
		} else {
			alert("이미 접수되어 수정이 불가합니다.");
		}
	};

	return (
		<>
			{state === "default" ? (
				<div>
					<div class="flex flex-row justify-between items-center mb-8">
						<Subtitle text={"자세히보기"} />
					</div>
					<div class="text-sm lg:text-base w-full h-auto mb-8 border-t-2 border-b-2 border-purple-600">
						{/* 딱 10개 씩만 로드하기 */}
						<div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center md:hidden border-b border-gray-300">
							{!loading ? (
								<Skeleton animation="wave" />
							) : (
								<>
									<div class="text-lg flex-1 font-bold">{info.title}</div>
									<div class="text-lg w-24 ">{info.date}</div>
								</>
							)}
						</div>

						<div class="w-full px-2 lg:px-8 py-4 flex justify-end md:justify-between items-center">
							{!loading ? (
								<Skeleton animation="wave" />
							) : (
								<>
									<div class="text-lg flex-1 hidden md:block font-bold">
										{info.title}
									</div>
									<div class="text-lg w-24 hidden md:block">{info.date}</div>
									<div class="text-lg flex-1 block md:hidden">
										작성자 : {info.writer}
									</div>{" "}
								</>
							)}
						</div>
						<div class="w-full px-2 lg:px-8 py-4 flex justify-end md:justify-between items-center border-t border-gray-300">
							{!loading ? (
								<Skeleton animation="wave" />
							) : (
								<>
									<div class="text-lg flex-1 mr-4 hidden md:block">
										작성자 : {info.writer}
									</div>
									{info.status === "unread" ? (
										<div class="text-lg w-24 text-red-500">미접수</div>
									) : info.status === "read" ? (
										<div class="text-lg w-24 text-blue-500">처리중</div>
									) : (
										<div class="text-lg w-24 text-gray-500">처리완료</div>
									)}
								</>
							)}
						</div>
						<div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center border-t border-gray-300">
							<div class="h-96 text-base flex-1 pr-4 truncate	">
								{ReactHtmlParser(info.content)}
							</div>
						</div>
					</div>
					{loading && currentEmail === "master" ? (
						<>
							<div class="flex flex-row justify-between items-center mb-4">
								<Subtitle text={"응답하기 "} />
							</div>
							<div class="w-full p-4 h-auto mb-8 border-b-2 border-purple-600">
								<textarea
									// ref={contentRef}
									class="w-full h-48 p-4 border-2 transition delay-50 duration-300 border-gray-300 outline-none focus:border-purple-700 resize-none"
									onChange={(e) => changeResponse(e)}
									value={response}
									placeholder="응답할 내용을 입력하세요."
								></textarea>
								<div class="w-full flex justify-end my-4">
									<div
										onClick={respondCounseling}
										class="w-full md:w-auto transition delay-50 duration-300 my-4 md:my-0 justify-center cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
									>
										응답하기
									</div>
								</div>
							</div>
						</>
					) : null}
					{currentEmail !== "master" && response !== "" ? (
						<>
							<div class="flex flex-row justify-between items-center mb-4">
								<Subtitle text={"응답"} />
							</div>
							<div class="w-full p-4 h-auto mb-8 border-b-2 border-purple-600">
								<textarea
									// ref={contentRef}
									class="w-full h-48 p-4 border-2 border-gray-300 outline-none focus:border-purple-700 resize-none"
									value={response}
									disabled={true}
								></textarea>
							</div>
						</>
					) : null}
					<div class="flex justify-between items-center flex-col md:flex-row">
						<Link
							class="w-full md:w-auto cursor-pointer px-16 py-2 justify-center transition delay-50 duration-300 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
							to={"/participation/counseling/0"}
							onClick={() =>
								document.getElementById("scrollRef").scrollTo(0, 0)
							}
						>
							뒤로 가기
						</Link>
						{loading && currentEmail === "master" ? (
							<div class="w-full md:w-auto flex flex-col md:flex-row">
								<div
									onClick={deleteCounseling}
									class="w-full md:w-auto my-4 md:my-0 justify-center mr-4 cursor-pointer px-16 py-2 transition delay-50 duration-300 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
								>
									삭제하기
								</div>
								<div
									onClick={goEdit}
									class="w-full md:w-auto justify-center cursor-pointer px-16 py-2 transition delay-50 duration-300 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
								>
									수정하기
								</div>
							</div>
						) : null}
					</div>
				</div>
			) : null}
			{state === "edit" ? (
				<EditCounseling pages={"participation"} info={info} id={id} />
			) : null}
		</>
	);
};

export default CounselingDetail;
