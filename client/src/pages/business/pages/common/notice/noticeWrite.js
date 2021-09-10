import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@toast-ui/editor/dist/toastui-editor.css";
import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

import NoticeLayout from "../../../../../components/notice/noticeLayout";

const NoticeWrite = (props) => {
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

	const changeInfo = (e, type) => {
		const cp = { ...info };
		cp[type] = e.target.value;
		setInfo(cp);
	};

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
					"/api/notice/add/" + type,
					{
						key: process.env.REACT_APP_API_KEY,
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

	return (
		<div>
			<div class="flex flex-row justify-between items-center mb-8">
				<h1 class="text-3xl font-bold">공지사항 작성</h1>
			</div>
			<NoticeLayout
				titleRef={titleRef}
				contentRef={contentRef}
				changeInfo={changeInfo}
				info={info}
			/>

			<div class="flex justify-between items-center flex-col md:flex-row">
				<Link
					class="mb-4 md:mb-0 w-full md:w-auto  cursor-pointer px-0 md:px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					to={"/business/" + props.pages + "/notice"}
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
