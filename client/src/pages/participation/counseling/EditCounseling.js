import React, { useEffect, useState, useRef } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Subtitle from "../../../components/Subtitle";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const EditCounseling = (props) => {
	const history = useHistory();
	const [info, setInfo] = useState({
		status: "",
		title: "",
		content: "",
		email: "",
		password: "",
		passwordCheck: "",
	});
	const titleRef = useRef(null);
	const emailRef = useRef(null);
	const contentRef = useRef(null);
	const passwordRef = useRef(null);
	const currentEmail = useSelector((state) => state.setting.currentEmail);

	const id = props.id;

	useEffect(() => {
		if (currentEmail === "master") {
			setInfo({
				status: props.info.status,
				title: props.info.title,
				content: props.info.content,
				email: props.info.writer,
				password: props.info.password,
				passwordCheck: props.info.password,
			});
		} else {
			setInfo({
				status: props.info.status,
				title: props.info.title,
				content: props.info.content,
				email: props.info.writer,
				password: "",
				passwordCheck: "",
			});
		}
	}, []);

	const checkEmail = () => {
		// 이메일 검증 스크립트 작성
		var emailVal = info.email;
		var regExp =
			"/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i";
		// 검증에 사용할 정규식 변수 regExp에 저장
		if (emailVal.match(regExp) != null) {
			return true;
		} else {
			return false;
		}
	};

	const submitInfo = () => {
		if (info.title === "") {
			alert("제목을 입력해주세요!");
			titleRef.current.focus();
		} else if (info.email === "") {
			alert("이메일을 입력해주세요!");
			emailRef.current.focus();
		} else if (!checkEmail) {
			alert("이메일 형식이 올바르지 않습니다.");
			emailRef.current.focus();
		} else if (info.content === "") {
			alert("내용을 입력해주세요!");
			contentRef.current.focus();
		} else if (info.password === "") {
			alert("비밀번호를 입력해주세요!");
			passwordRef.current.focus();
		} else if (info.password !== info.passwordCheck) {
			alert("비밀번호가 일치하지 않습니다!");
			passwordRef.current.focus();
		} else {
			axios
				.post(
					"/api/counseling/update/" + id,
					{
						key: process.env.REACT_APP_API_KEY,
						title: info.title,
						content: info.content,
						// response: "",
					},
					{
						headers: {
							"Content-type": "application/json",
							Accept: "application/json",
						},
					}
				)
				.then((response) => {
					window.scrollTo(0, 0);
					history.push("/participation/counseling/0");
					alert("수정되었습니다!");
					document.getElementById("scrollRef").scrollTo(0, 0);
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
		<div class="w-full h-auto">
			<div class="flex flex-row justify-between items-center mb-8">
				<div>
					<Subtitle text={"수정하기"} />
				</div>
			</div>
			<form class="border-t-2 border-b-2 border-purple-700 py-6 mb-4">
				<h1 class="text-sm mb-8">
					등록된 비밀번호를 통해 작성된 내용을 수정 및 삭제하실 수 있습니다.
				</h1>
				<div class="flex flex-row justify-start items-center mb-2">
					<input
						ref={titleRef}
						type="text"
						class="w-1/2 md:w-auto flex-1 p-4 border-2 border-gray-300 outline-none mr-4 focus:border-purple-700"
						onChange={(e) => changeInfo(e, "title")}
						value={info.title}
						placeholder="제목"
					/>
					<input
						ref={emailRef}
						type="text"
						class="w-36 md:w-72 p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "email")}
						value={info.email}
						placeholder="이메일"
						disabled={true}
					/>
				</div>
				<div class="flex flex-row justify-start items-start mb-2">
					<textarea
						ref={contentRef}
						class="w-full h-96 p-4 border-2 border-gray-300 outline-none focus:border-purple-700 resize-none"
						onChange={(e) => changeInfo(e, "content")}
						value={info.content}
						placeholder="내용"
					></textarea>
				</div>
				<div class="flex flex-row justify-start items-start mb-2">
					<input
						ref={passwordRef}
						type="password"
						disabled={true}
						class="w-1/2 md:w-60 p-4 border-2 border-gray-300 outline-none mr-4 focus:border-purple-700"
						onChange={(e) => changeInfo(e, "password")}
						value={info.password}
						placeholder="비밀번호"
					/>
					<input
						type="password"
						disabled={true}
						class="w-1/2 md:w-60 p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "passwordCheck")}
						value={info.passwordCheck}
						placeholder="비밀번호 확인"
					/>
				</div>
			</form>

			<div class="flex flex-col md:flex-row justify-between items-center">
				<Link
					class="w-full md:w-auto mb-4 md:mb-4 justify-center cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					to="/participation/counseling/0"
					onClick={() => document.getElementById("scrollRef").scrollTo(0, 0)}
				>
					뒤로 가기
				</Link>
				<button
					onClick={submitInfo}
					class="w-full md:w-auto cursor-pointer justify-center px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold "
				>
					제출하기
				</button>
			</div>
		</div>
	);
};

export default EditCounseling;
