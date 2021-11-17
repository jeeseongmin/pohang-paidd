import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { MdCancel } from "react-icons/md";
import CircularProgress from "@material-ui/core/CircularProgress";

const NoticeLayout = (props) => {
	const [loading, setLoading] = useState(true);
	const info = props.info;
	const changeInfo = props.changeInfo;
	const titleRef = props.titleRef;
	const contentRef = props.contentRef;
	const buttonRef = useRef(null);
	const isEdit = props.isEdit;
	const deletePhoto = isEdit ? props.deletePhoto : null;

	const buttonClick = () => {
		buttonRef.current.click();
	};

	const loadFile = async (filename) => {
		const res = await axios.get("/api/file/load/" + filename);
		console.log("loadFile", res);
	};

	const onChange = async (e) => {
		console.log("e", e);
		setLoading(false);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		// 서버의 upload API 호출
		const res = await axios.post("/api/file/upload", formData);
		const cp = [...info.fileList];
		await cp.push({ filename: res.data.filename, id: res.data.id });
		await changeInfo(cp, "fileList");
		console.log("cp", cp);
		setLoading(true);
	};

	const removeImg = async (index) => {
		if (isEdit) {
			const cp = [...info.fileList];
			const name = cp[index];
			deletePhoto(name);

			cp.splice(index, 1);
			await changeInfo(cp, "fileList");
		} else {
			const cp = [...info.fileList];
			const id = cp[index].id;
			cp.splice(index, 1);
			changeInfo(cp, "fileList");

			await axios.get("/api/file/delete/" + id);
		}
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
			<div class="w-full my-4 flex flex-row justify-between items-center">
				<h1 class="text-lg font-bold">업로드 된 파일 목록</h1>
				<button
					class="text-sm outline-none w-full md:w-auto cursor-pointer px-0 md:px-8 py-1 justify-center border border-purple-300 bg-purple-300 text-white flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					onClick={buttonClick}
				>
					파일 업로드
				</button>
			</div>
			<div
				class={
					"w-full border-2 border-gray-300 px-4 py-4 mb-2 flex flex-wrap " +
					(loading ? "text-center" : "")
				}
			>
				{info.fileList.length === 0 && loading ? (
					<div class="text-gray-500">업로드된 파일이 없습니다.</div>
				) : loading ? (
					info.fileList.map((element, index) => {
						return (
							<div class="w-24 mb-4 border border-gray-300 rounded-md relative mx-4">
								{/* <img
									class="w-full h-24 object-contain"
									src={
										window.location.origin +
										"/api/files/view/" +
										element.filename
									}
									alt="fileList"
								/> */}
								<div
									onClick={() => loadFile(element.filename)}
									class="cursor-pointer w-full font-bold border border-black"
								>
									{index} : {element.filename}
								</div>
								<MdCancel
									onClick={() => removeImg(index)}
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
