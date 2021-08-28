import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const NoticeWrite = (props) => {
	console.log(props);
	const type = props.pages;
	const dispatch = useDispatch();
	const history = useHistory();
	const [info, setInfo] = useState({
		type: "",
		title: "",
		content: "",
	});
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const currentEmail = useSelector((state) => state.setting.currentEmail);

	useEffect(() => {
		const cp = { ...info };
		cp.type = type;
		setInfo(cp);
	}, []);

	const submitInfo = () => {
		if (info.title === "") {
			alert("제목을 입력해주세요!");
			titleRef.current.focus();
		} else if (info.content === "") {
			alert("내용을 입력해주세요!");
			contentRef.current.focus();
		} else if (currentEmail === "master" || currentEmail === info.type) {
			axios
				.post(
					"/api/notice/add",
					{
						type: info.type,
						title: info.title,
						content: info.content,
					},
					{
						headers: {
							"Content-type": "application/json",
							Accept: "application/json",
						},
					}
				)
				.then((response) => {
					history.push("/business/" + info.type + "/notice");
				})
				.catch((response) => {
					console.log("Error!");
				});
		}
	};

	const changeInfo = (e, type) => {
		const cp = { ...info };
		cp[type] = e.target.value;
		setInfo(cp);
	};

	return (
		<div>
			<div class="flex flex-row justify-between items-center mb-8">
				<h1 class="text-3xl font-bold">공지사항 작성</h1>
			</div>
			<div class="w-full h-auto mb-4">
				{/* 딱 10개 씩만 로드하기 */}
				<div class="w-full pt-4 pb-2 flex justify-end items-center border-t-2 border-purple-600">
					<input
						ref={titleRef}
						type="text"
						class="flex-1 p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "title")}
						placeholder="제목"
					/>
				</div>
				<div class="cursor-pointer w-full pt-2 pb-4 flex justify-end items-center border-b border-gray-300">
					<textarea
						ref={contentRef}
						class="w-full h-96 p-4 border-2 border-gray-300 outline-none focus:border-purple-700 resize-none	"
						onChange={(e) => changeInfo(e, "content")}
						placeholder="내용"
					></textarea>
				</div>
			</div>
			<div class="flex justify-between items-center flex-col md:flex-row">
				<Link
					class="mb-4 md:mb-0 w-full md:w-auto  cursor-pointer px-0 md:px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					to={"/business/" + props.pages + "/default"}
					onClick={() => window.scrollTo(0, 0)}
				>
					뒤로 가기
				</Link>
				<button
					onClick={submitInfo}
					class="outline-none w-full md:w-auto cursor-pointer px-0 md:px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
				>
					제출하기
				</button>
			</div>
		</div>
	);
};

export default NoticeWrite;
