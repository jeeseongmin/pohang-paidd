import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Subtitle from "../../../../../../components/Subtitle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const NoticeEdit = (props) => {
	const history = useHistory();
	const [info, setInfo] = useState({
		title: props.info.title,
		content: props.info.content,
	});
	const id = props.id;
	const pages = props.pages;
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const currentEmail = useSelector((state) => state.setting.currentEmail);
	const API_KEY = process.env.REACT_APP_API_KEY;

	const changeInfo = (e, type) => {
		const cp = { ...info };
		cp[type] = e.target.value;
		setInfo(cp);
	};

	useEffect(() => {
		setInfo(props.info);
	}, []);

	const editSave = () => {
		if (info.title === "") {
			alert("제목을 입력해주세요!");
			titleRef.current.focus();
		} else if (info.content === "") {
			alert("내용을 입력해주세요!");
		} else if (currentEmail === "master" || currentEmail === info.type) {
			axios
				.post(
					"/api/" + API_KEY + "/notice/update",
					{
						id: id,
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
					alert("저장되었습니다.");
					history.push("/business/" + props.pages + "/" + id);
				})
				.catch((response) => {
					console.log("Error!");
				});
		}
	};

	return (
		<div>
			<div class="flex flex-row justify-between items-center mb-8">
				<Subtitle text={"수정하기"} />
			</div>
			<div class="w-full h-auto mb-4">
				{/* 딱 10개 씩만 로드하기 */}
				<div class="w-full pt-4 pb-2 mb-2 flex justify-end items-center border-t-2 border-purple-600">
					<input
						ref={titleRef}
						type="text"
						class="flex-1 p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "title")}
						value={info.title}
						placeholder="제목"
					/>
				</div>
				{/* <div class="cursor-pointer w-full pt-2 pb-4 flex justify-end items-center border-b border-gray-300">
					<textarea
						ref={contentRef}
						class="w-full h-96 p-4 border-2 border-gray-300 outline-none focus:border-purple-700 resize-none	"
						onChange={(e) => changeInfo(e, "content")}
						placeholder="내용"
					></textarea>
				</div> */}
				<CKEditor
					editor={ClassicEditor}
					class="w-full "
					data={info.content}
					onInit={(editor) => {
						// You can store the "editor" and use when it is needed.
						// console.log("Editor is ready to use!", editor);
						editor.editing.view.change((writer) => {
							writer.setStyle(
								"height",
								"50px",
								editor.editing.view.document.getRoot()
							);
						});
					}}
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log("Editor is ready to use!", editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						setInfo({
							...info,
							content: data,
						});
					}}
					onBlur={(event, editor) => {
						// console.log("Blur.", editor);
					}}
					onFocus={(event, editor) => {
						// console.log("Focus.", editor);
					}}
				/>
			</div>
			<div class="flex justify-between items-center flex-col md:flex-row">
				<Link
					class="w-full md:w-auto cursor-pointer mb-4 md:mb-0 px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					to={"/business/" + pages + "/default"}
					onClick={() => window.scrollTo(0, 0)}
				>
					뒤로 가기
				</Link>
				<div
					onClick={editSave}
					class="w-full md:w-auto cursor-pointer justify-center px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
				>
					저장하기
				</div>
			</div>
		</div>
	);
};

export default NoticeEdit;
