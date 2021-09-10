import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import axios from "axios";
// import { backUrl } from "../../config/config";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const GalleryLayout = (props) => {
	const [loading, setLoading] = useState(true);
	const history = useHistory();
	const info = props.info;
	const changeInfo = props.changeInfo;
	const titleRef = props.titleRef;
	const isEdit = props.isEdit;
	const contentRef = props.contentRef;
	const [img, setImg] = useState(null);
	const [url, setUrl] = useState(null);

	const buttonRef = useRef(null);

	const deletePhoto = isEdit ? props.deletePhoto : null;

	/*
		1. image 파일 첨부하고, 올리기를 눌러야 됨.
		2. 올리기를 누르면 배열에 순서대로 저장이 됨.
		3. image 올린 목록들을 리스트로 볼 수 있음.
		4. comment 까지 올릴 수 있음.
		5. 
	*/

	// useEffect(() => {
	// 	const formData = new FormData();
	// 	formData.append("file", img);
	// 	// 서버의 upload API 호출
	// 	axios.post("/api/image/upload", formData).then((req, res) => {
	// 		console.log(res);
	// 		// const cp = [...imgList];
	// 		// cp.push(res.data.url);
	// 		// setImgList(cp);
	// 	});
	// }, [img]);

	const buttonClick = () => {
		buttonRef.current.click();
	};

	const onChange = async (e) => {
		setLoading(false);
		const formData = new FormData();
		formData.append("file", e.target.files[0]);
		// 서버의 upload API 호출
		const res = await axios.post("/api/image/upload", formData);
		const cp = [...info.imgList];
		await cp.push({ filename: res.data.filename, id: res.data.id });
		await changeInfo(cp, "imgList");
		setLoading(true);
	};

	const removeImg = async (index) => {
		if (isEdit) {
			const cp = [...info.imgList];
			const name = cp[index];
			deletePhoto(name);

			cp.splice(index, 1);
			await changeInfo(cp, "imgList");
		} else {
			const cp = [...info.imgList];
			const id = cp[index].id;
			cp.splice(index, 1);
			changeInfo(cp, "imgList");

			await axios.get("/api/image/delete/" + id);
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
				<h1 class="text-lg font-bold">업로드 된 이미지 목록</h1>
				<button
					class="text-sm outline-none w-full md:w-auto cursor-pointer px-0 md:px-8 py-1 justify-center border border-purple-300 bg-purple-300 text-white flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					onClick={buttonClick}
				>
					이미지 업로드
				</button>
			</div>
			<div
				class={
					"w-full border-2 border-gray-300 px-4 py-4 mb-2 flex flex-wrap " +
					(loading ? "text-center" : "")
				}
			>
				{info.imgList.length === 0 && loading ? (
					<div class="text-gray-500">업로드된 이미지가 없습니다.</div>
				) : loading ? (
					info.imgList.map((element, index) => {
						return (
							<div class="w-24 mb-4 border border-gray-300 rounded-md relative mx-4">
								<img
									class="w-full h-24 object-contain"
									src={
										window.location.origin +
										"/api/image/view/" +
										element.filename
									}
									alt="imgList"
								/>
								{/* <img
									class="w-full h-24 object-contain"
									src={
										"http://localhost:5000/api/image/view/" + element.filename
									}
									alt="imgList"
								/> */}
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
			<div class="cursor-pointer w-full pt-2 pb-4 flex justify-end items-center">
				<textarea
					ref={contentRef}
					class="w-full h-24 p-4 border-2 border-gray-300 outline-none focus:border-purple-700 resize-none	"
					onChange={(e) => changeInfo(e, "content")}
					value={info.content}
					placeholder="간략한 설명"
				></textarea>
			</div>
		</div>
	);
};

export default GalleryLayout;
