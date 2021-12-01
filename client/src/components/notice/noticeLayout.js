import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";

import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "@toast-ui/editor/dist/toastui-editor.css";
// import { Editor } from "@toast-ui/react-editor";

import "tui-color-picker/dist/tui-color-picker.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import uml from "@toast-ui/editor-plugin-uml";
import { Viewer } from "@toast-ui/react-editor";

// cursor-pointer w-full h-auto border-2 border-gray-300
const editorStyle = {
	cursor: "pointer",
	width: "100%",
	minHeight: "20rem",
	border: "2px solid rgba(209, 213, 219, var(--tw-border-opacity))",
};

const NoticeLayout = (props) => {
	const [loading, setLoading] = useState(true);
	const info = props.info;
	const changeInfo = props.changeInfo;
	const titleRef = props.titleRef;
	const contentRef = props.contentRef;
	const buttonRef = useRef(null);
	const isEdit = props.isEdit;

	// draft.js
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	useEffect(() => {
		const blocksFromHtml = htmlToDraft(info.content);
		if (blocksFromHtml) {
			const { contentBlocks, entityMap } = blocksFromHtml;
			const contentState = ContentState.createFromBlockArray(
				contentBlocks,
				entityMap
			);
			const editorState = EditorState.createWithContent(contentState);
			setEditorState(editorState);
		}
	}, []);

	const onEditorStateChange = async (editorState) => {
		// editorState에 값 설정
		await setEditorState(editorState);
		let text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
		if (text !== "") {
			await changeInfo(
				draftToHtml(convertToRaw(editorState.getCurrentContent())),
				"content"
			);
		}
	};

	// Toast ui
	const editorRef = useRef();

	const btnClickListener = () => {
		const editorInstance = editorRef.current.getInstance();
		const getContent_md = editorInstance.getMarkdown();
		console.log("마크다운----");
		console.log(getContent_md);
		const getContent_html = editorInstance.getHTML();
		console.log("HTML----");
		console.log(getContent_html);
	};

	const buttonClick = () => {
		buttonRef.current.click();
	};

	const onChange = async (e) => {
		let formData = new FormData();
		const config = {
			header: { "content-type": "multipart/form-data" },
		};
		formData.append("file", e.target.files[0]);
		if (e.target.files[0].size > 10 * 1024 * 1024) {
			alert("10MB 이하의 파일만 업로드 가능합니다.");
			e.target.value = null;
		} else {
			await axios
				.post("/api/file/upload_page", formData, config)
				.then(async (res) => {
					if (res.data.success) {
						const cp = [...info.fileList];
						await cp.push({
							filename: res.data.file.filename,
							size: res.data.file.size,
						});
						await changeInfo(cp, "fileList");
						setLoading(true);
						e.target.value = null;
					} else {
						alert("파일 업로드를 실패했습니다.");
					}
				});
		}
	};

	const removeFile = async (filename) => {
		const res = await axios.get("/api/file/delete/" + filename);
		const cp = [...info.fileList].filter(function (element, index) {
			return element.filename !== filename;
		});
		changeInfo(cp, "fileList");
	};

	return (
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
			<input
				ref={buttonRef}
				type="file"
				class="hidden"
				name="img"
				onChange={onChange}
			/>
			<div class="w-full my-4 flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
				<div class="flex flex-col md:flex-row mb-4 md:mb-0 justify-start items-start md:items-center">
					<h1 class="text-lg font-bold mr-0 md:mr-2 mb-2 md:mb-0">
						업로드 된 파일 목록
					</h1>
					<p class="text-xs font-bold text-red-500">파일 별 크기는 10MB 이하</p>
				</div>
				<button
					class="text-sm outline-none w-full md:w-auto cursor-pointer px-0 md:px-8 py-2 md:py-1 justify-center border border-purple-300 bg-purple-300 text-white flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					onClick={buttonClick}
				>
					파일 업로드
				</button>
			</div>
			<div
				class={
					"w-full border-2 border-gray-300 px-4 py-4 mb-2 flex flex-wrap flex-col " +
					(loading ? "text-center" : "")
				}
			>
				{info.fileList && info.fileList.length === 0 && loading ? (
					<div class="text-gray-500">업로드된 파일이 없습니다.</div>
				) : loading ? (
					info.fileList &&
					info.fileList.map((element, index) => {
						return (
							<div class="w-full mb-4 border border-gray-300 rounded-md relative">
								{/* 
								// localhost
								<a
									class="text-blue-500 underline"
									href={"http://localhost:5000/uploads/" + element.filename}
									target="_blank"
									download
								> */}
								<a
									class="text-blue-500"
									href={window.location.origin + "/uploads/" + element.filename}
									target="_blank"
									download
								>
									<span class="underline">{element.filename}</span>{" "}
									<span class="text-sm text-gray-300">(</span>
									<span class="text-sm text-blue-300">
										{element.size.toString()}
									</span>{" "}
									<span class="text-red-500 text-sm">bytes</span>
									<span class="text-sm text-gray-300">) </span>
								</a>

								<MdCancel
									onClick={() => removeFile(element.filename)}
									size={24}
									class="cursor-pointer rounded-full bg-white absolute -top-2 -right-2"
								/>
							</div>
						);
					})
				) : (
					<div class="w-full h-24 my-2 py-4 flex justify-center items-center text-center">
						<CircularProgress />
					</div>
				)}
			</div>
			{/* <div class="cursor-pointer w-full pt-2 pb-4 flex justify-end items-center border-b border-gray-300"> */}
			{/* <textarea
					ref={contentRef}
					class="w-full h-96 p-4 border-2 border-gray-300 outline-none focus:border-purple-700 resize-none	"
					onChange={(e) => changeInfo(e, "content")}
					value={info.content}
					placeholder="내용"
				></textarea> */}
			{/* <div class="text-sm text-right my-2">
				엔터 시에는 [Shift + Enter] 를 사용해주세요.
			</div> */}
			<div style={editorStyle}>
				<Editor
					// 에디터와 툴바 모두에 적용되는 클래스
					wrapperClassName="wrapper-class"
					// 에디터 주변에 적용된 클래스
					editorClassName="editor"
					// 툴바 주위에 적용된 클래스
					toolbarClassName="toolbar-class"
					// 툴바 설정
					toolbar={{
						// inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
						list: { inDropdown: true },
						textAlign: { inDropdown: true },
						link: { inDropdown: true },
						history: { inDropdown: false },
					}}
					placeholder="내용을 작성해주세요."
					// 한국어 설정
					localization={{
						locale: "ko",
					}}
					// 초기값 설정
					editorState={editorState}
					// 에디터의 값이 변경될 때마다 onEditorStateChange 호출
					onEditorStateChange={onEditorStateChange}
				/>
			</div>

			{/* <Editor
				initialValue="hello react editor world!"
				// previewStyle="vertical"
				height="600px"
				initialEditType="markdown"
				useCommandShortcut={true}
				plugins={[colorSyntax, tableMergedCell, uml]}
				ref={editorRef}
			/>
			<button onClick={btnClickListener}>클릭하면 값을 콘솔에</button> */}
			{/* <Viewer initialValue={editorRef.current.getInstance().getMarkdown()} /> */}
			{/* <Viewer
				initialValue={editorRef.current
					.getInstance()
					.getMarkdown()
					.replace(/\n/gi, "</br>")}
			/> */}
		</div>
	);
};

export default NoticeLayout;
