import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { MdCancel } from "react-icons/md";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

const NoticeLayout = (props) => {
	const [loading, setLoading] = useState(true);
	const info = props.info;
	const changeInfo = props.changeInfo;
	const titleRef = props.titleRef;
	const contentRef = props.contentRef;
	const buttonRef = useRef(null);
	const isEdit = props.isEdit;

	const buttonClick = () => {
		buttonRef.current.click();
	};

	const onChange = async (e) => {
		let formData = new FormData();
		const config = {
			header: { "content-type": "multipart/form-data" },
		};
		formData.append("file", e.target.files[0]);
		axios.post("/api/file/upload_page", formData, config).then(async (res) => {
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
				alert("사진 업로드를 실패했습니다.");
			}
		});
	};

	const removeFile = async (filename) => {
		await axios.get("/api/file/delete/" + filename);
		const cp = [...info.fileList].filter(function (element, index) {
			return element !== filename;
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
				<h1 class="text-lg font-bold mb-4 md:mb-0">업로드 된 파일 목록</h1>
				<button
					class="text-sm outline-none w-full md:w-auto cursor-pointer px-0 md:px-8 py-1 justify-center border border-purple-300 bg-purple-300 text-white flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
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
								{/* <img
									class="w-full h-24 object-contain"
									src={
										window.location.origin +
										"/api/files/view/" +
										element.filename
									}
									alt="fileList"
								/> */}
								<a
									class="text-blue-500 underline"
									href={"http://phaidd.or.kr/uploads/" + element.filename}
									target="_blank"
									download
								>
									{element.filename}
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
			<div class="cursor-pointer w-full pt-2 pb-4 flex justify-end items-center border-b border-gray-300">
				<textarea
					ref={contentRef}
					class="w-full h-96 p-4 border-2 border-gray-300 outline-none focus:border-purple-700 resize-none	"
					onChange={(e) => changeInfo(e, "content")}
					value={info.content}
					placeholder="내용"
				></textarea>
			</div>
		</div>
	);
};

export default NoticeLayout;
