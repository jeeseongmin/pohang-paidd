import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";

const WriteSupport = () => {
	const [info, setInfo] = useState({
		name: "",
		privateNumber: "",
		phoneNumber: "",
		email: "",
		address: "",
		periodicalSupport: {
			status: false,
			content: "",
		},
		temporarySupport: {
			status: false,
			content: "",
		},
		itemSupport: {
			status: false,
			content: "",
		},
		agree: false,
	});
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
		console.log(info);
		if (info.title === "") {
			alert("제목을 입력해주세요!");
		} else if (info.email === "") {
			alert("이메일을 입력해주세요!");
		} else if (checkEmail) {
			alert("이메일 형식이 올바르지 않습니다.");
		} else if (info.content === "") {
			alert("내용을 입력해주세요!");
		} else if (info.password === "") {
			alert("비밀번호를 입력해주세요!");
		} else if (info.password !== info.passwordCheck) {
			alert("비밀번호가 일치하지 않습니다!");
		} else {
			alert("제출되었습니다!");
		}
	};
	const changeInfo = (e, type) => {
		const cp = { ...info };
		cp[type] = e.target.value;
		setInfo(cp);
	};

	const toggleSupportType = (e, type) => {
		const cp = { ...info };
		cp[type].status = !cp[type].status;
		setInfo(cp);
	};
	return (
		<div class="px-36 py-16">
			<div class="flex flex-row justify-between items-center mb-8">
				<div>
					<h1 class="text-3xl font-bold">후원 신청하기</h1>
				</div>
			</div>
			<form class="border-t-2 border-b-2 border-purple-700 py-6 mb-4">
				<div class="mb-4">
					<h1 class="text-md mb-4 font-bold">후원자 정보</h1>
				</div>
				<div class="flex flex-row justify-start items-center mb-2">
					<input
						type="text"
						class="w-1/2 p-4 border-2 border-gray-300 outline-none mr-4 focus:border-purple-700"
						onChange={(e) => changeInfo(e, "name")}
						placeholder="성명(단체명)"
					/>
					<input
						type="text"
						class="w-1/2 p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "priavateNumber")}
						placeholder="주민(사업자)번호 (하이픈은 제외하고 입력해주세요)"
					/>
				</div>
				<div class="flex flex-row justify-start items-center mb-2">
					<input
						type="text"
						class="w-1/2 p-4 border-2 border-gray-300 outline-none mr-4 focus:border-purple-700"
						onChange={(e) => changeInfo(e, "phoneNumber")}
						placeholder="휴대폰번호 (하이픈은 제외하고 입력해주세요)"
					/>
					<input
						type="text"
						class="w-1/2 p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "email")}
						placeholder="이메일"
					/>
				</div>
				<div class="flex flex-row justify-start items-center mb-2">
					<input
						type="text"
						class="w-full p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "address")}
						placeholder="주소"
					/>
				</div>
				<div class="mt-8 mb-4">
					<h1 class="text-md mb-4 font-bold">후원 선택</h1>
				</div>
				<div>
					<div class="flex flex-row items-center ">
						<div
							onClick={(e) => toggleSupportType(e, "periodicalSupport")}
							class={
								"cursor-pointer w-6 h-6 border-2 border-purple-700 flex justify-center items-center " +
								(info.periodicalSupport.status ? "bg-purple-700" : "bg-white")
							}
						>
							{info.periodicalSupport.status && (
								<AiOutlineCheck size={20} class="text-white" />
							)}
						</div>
						<div class="mx-4 text-sm">정기후원</div>
						<select>
							<option>10,000</option>
						</select>
					</div>
					<div></div>
					<div></div>
				</div>
			</form>
			<div class="flex justify-between items-center">
				<Link
					class="cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					to="/participation/counseling"
					onClick={() => window.scrollTo(0, 0)}
				>
					뒤로 가기
				</Link>
				<button
					onClick={submitInfo}
					class="cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
				>
					제출하기
				</button>
			</div>
		</div>
	);
};

export default WriteSupport;
