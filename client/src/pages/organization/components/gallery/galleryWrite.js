import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import GalleryLayout from "../../../../components/gallery/galleryLayout";

const GalleryWrite = (props) => {
	const type = props.pages;
	const dispatch = useDispatch();
	const history = useHistory();
	const [info, setInfo] = useState({
		title: "",
		content: "",
		imgList: [],
	});
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const currentEmail = useSelector((state) => state.setting.currentEmail);

	const changeInfo = (e, type) => {
		if (type === "imgList") {
			const cp = { ...info };
			cp[type] = e;
			setInfo(cp);
		} else {
			const cp = { ...info };
			cp[type] = e.target.value;
			setInfo(cp);
		}
	};

	useEffect(() => {
		document.getElementById("scrollRef").scrollTo(0, 0);
		const cp = { ...info };
		cp.type = type;
		setInfo(cp);
	}, []);

	const submit = () => {
		if (info.title === "") {
			alert("제목을 입력해주세요!");
			titleRef.current.focus();
		} else if (info.content === "") {
			alert("내용을 입력해주세요!");
			contentRef.current.focus();
		} else if (info.imgList.length === 0) {
			alert("1개 이상의 이미지를 업로드 해주세요.");
		} else if (currentEmail === "master" || currentEmail === info.type) {
			axios
				.post(
					"/api/gallery/add/" + type,
					{
						key: process.env.REACT_APP_API_KEY,
						title: info.title,
						content: info.content,
						imgList: info.imgList,
					},
					{
						headers: {
							"content-type": "application/json",
							Accept: "application/json",
						},
					}
				)
				.then((response) => {
					alert("업로드 되었습니다.");
					history.push("/organization/gallery/0");
					document.getElementById("scrollRef").scrollTo(0, 0);
				})
				.catch((response) => {
					console.log("Error!");
				});
		}
	};

	return (
		<div>
			<div class="flex flex-row justify-between items-center mb-8">
				<h1 class="text-3xl font-bold">포토 갤러리 업로드</h1>
			</div>
			<GalleryLayout
				titleRef={titleRef}
				contentRef={contentRef}
				changeInfo={changeInfo}
				info={info}
				isEdit={false}
			/>

			<div class="flex justify-between items-center flex-col md:flex-row">
				<Link
					class="mb-4 md:mb-0 w-full md:w-auto  cursor-pointer px-0 md:px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					to={"/organization/gallery/0"}
					onClick={() => window.scrollTo(0, 0)}
				>
					뒤로 가기
				</Link>
				<button
					onClick={submit}
					class="outline-none w-full md:w-auto cursor-pointer px-0 md:px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
				>
					제출하기
				</button>
			</div>
		</div>
	);
};

export default GalleryWrite;
