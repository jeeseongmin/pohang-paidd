import React, { useEffect, useState, useRef } from "react";
import { Route, Link, withRouter, useHistory } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import CreatableSelect from "react-select/creatable";
import Subtitle from "../../../components/Subtitle";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const WriteSupport = () => {
	const history = useHistory();
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

	const nameRef = useRef(null);
	const privateNumberRef = useRef(null);
	const phoneNumberRef = useRef(null);
	const emailRef = useRef(null);
	const addressRef = useRef(null);

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
		if (info.name === "") {
			alert("이름을 입력해주세요!");
			nameRef.current.focus();
		} else if (info.privateNumber === "") {
			alert("주민(사업자)번호를 입력해주세요!");
			privateNumberRef.current.focus();
		} else if (info.privateNumber.includes("-")) {
			alert("하이픈(-) 제외 후 입력해주세요.");
			privateNumberRef.current.focus();
		} else if (info.phoneNumber === "") {
			alert("휴대폰번호를 입력해주세요!");
			phoneNumberRef.current.focus();
		} else if (info.phoneNumber.includes("-")) {
			alert("하이픈(-) 제외 후 입력해주세요.");
			phoneNumberRef.current.focus();
		} else if (info.email === "" || !checkEmail) {
			alert("이메일 형식이 올바르지 않습니다.");
			emailRef.current.focus();
		} else if (info.address === "") {
			alert("주소를 입력해주세요!");
			addressRef.current.focus();
		} else if (
			!info.periodicalSupport.status &&
			!info.temporarySupport.status &&
			!info.itemSupport.status
		) {
			alert("후원 방식을 선택해주세요.");
		} else if (
			info.periodicalSupport.status &&
			info.periodicalSupport.content === ""
		) {
			alert("정기 후원할 금액을 입력해주세요");
		} else if (
			info.temporarySupport.status &&
			info.temporarySupport.content === ""
		) {
			alert("일시 후원할 금액을 입력해주세요");
		} else if (info.itemSupport.status && info.itemSupport.content === "") {
			alert("물품 후원할 내용을 입력해주세요.");
		} else if (!info.agree) {
			alert("개인정보 수집 및 이용 동의에 체크해주세요");
		} else {
			axios
				.post(
					"/api/support/add/unread",
					{
						key: process.env.REACT_APP_API_KEY,
						name: info.name,
						private: info.privateNumber,
						phone: info.phoneNumber,
						email: info.email,
						address: info.address,
						periodical: info.periodicalSupport.content,
						temporary: info.temporarySupport.content,
						goods: info.itemSupport.content,
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
					history.push("/participation/support/0");
					alert("제출되었습니다!");
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

	const toggleSupportType = (e, type) => {
		const cp = { ...info };
		cp[type].status = !cp[type].status;
		setInfo(cp);
	};

	const toggleAgree = (e, type) => {
		const cp = { ...info };
		cp[type] = !cp[type];
		setInfo(cp);
	};
	const changeSupportItem = (value, type) => {
		const cp = { ...info };
		cp[type].content = value.value;
		setInfo(cp);
	};

	const periodicalOptions = [
		{ value: "10000", label: "10000" },
		{ value: "30000", label: "30000" },
		{ value: "50000", label: "50000" },
	];
	return (
		<div class="w-full h-auto">
			<div class="flex flex-row justify-between items-center mb-4 md:mb-8">
				<div>
					<Subtitle text={"후원 신청하기"} />
				</div>
			</div>
			<form class="border-t-2 border-b-2 border-purple-700 py-3 md:py-6 mb-4">
				<div class="mb-4">
					<h1 class="text-md mb-4 font-bold">후원자 정보</h1>
				</div>
				<div class="flex flex-row justify-start items-center mb-2">
					<input
						ref={nameRef}
						type="text"
						class="w-1/2 p-4 transition delay-50 duration-300 border-2 border-gray-300 outline-none mr-4 focus:border-purple-700"
						onChange={(e) => changeInfo(e, "name")}
						placeholder="성명(단체명)"
					/>
					<input
						ref={privateNumberRef}
						type="text"
						class="w-1/2 p-4 transition delay-50 duration-300 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "privateNumber")}
						placeholder="주민(사업자)번호 (하이픈은 제외하고 입력해주세요)"
					/>
				</div>
				<div class="flex flex-row justify-start items-center mb-2">
					<input
						ref={phoneNumberRef}
						type="text"
						class="w-1/2 p-4 transition delay-50 duration-300 border-2 border-gray-300 outline-none mr-4 focus:border-purple-700"
						onChange={(e) => changeInfo(e, "phoneNumber")}
						placeholder="휴대폰번호 (하이픈은 제외하고 입력해주세요)"
					/>
					<input
						ref={emailRef}
						type="text"
						class="w-1/2 p-4 transition delay-50 duration-300 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "email")}
						placeholder="이메일"
					/>
				</div>
				<div class="flex flex-row justify-start items-center mb-2">
					<input
						ref={addressRef}
						type="text"
						class="w-full p-4 transition delay-50 duration-300 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "address")}
						placeholder="주소"
					/>
				</div>
				<div class="mt-8 mb-4">
					<h1 class="text-md mb-4 font-bold">후원 선택</h1>
				</div>
				<div class="w-full">
					<div class="w-full flex flex-row items-center mb-4">
						<div
							onClick={(e) => toggleSupportType(e, "periodicalSupport")}
							class={
								"cursor-pointer w-5 h-5 border-2 rounded-sm border-purple-700 flex justify-center items-center " +
								(info.periodicalSupport.status ? "bg-purple-700" : "bg-white")
							}
						>
							{info.periodicalSupport.status && (
								<AiOutlineCheck size={20} class="text-white" />
							)}
						</div>
						<div
							class={
								"flex flex-row items-center " +
								(info.periodicalSupport.status ? "text-black" : "text-gray-500")
							}
						>
							<div
								onClick={(e) => toggleSupportType(e, "periodicalSupport")}
								class="cursor-pointer mx-4 text-sm"
							>
								정기후원
							</div>
							<div
								onClick={(e) => toggleSupportType(e, "periodicalSupport")}
								class={
									"cursor-pointer w-0 h-6 border-r " +
									(info.periodicalSupport.status
										? "border-black"
										: "border-gray-500")
								}
							></div>
							<div
								onClick={(e) => toggleSupportType(e, "periodicalSupport")}
								class="cursor-pointer ml-4 text-sm hidden md:inline-block"
							>
								금액 입력 :{" "}
							</div>
							<div class="w-36 md:w-48 mx-4">
								<CreatableSelect
									isClearable
									options={periodicalOptions}
									isDisabled={!info.periodicalSupport.status}
									onChange={(value) =>
										changeSupportItem(value, "periodicalSupport")
									}
									styles={{
										control: (base, state) => ({
											...base,
											border: state.isFocused
												? "1px solid rgba(109, 40, 217, var(--tw-border-opacity))"
												: "1px solid #e3e3e3",
											// This line disable the blue border
											boxShadow: state.isFocused ? 0 : 0,
											color: info.periodicalSupport.status
												? "black"
												: "#e3e3e3",
											"&:hover": {
												border: state.isFocused
													? "1px solid rgba(109, 40, 217, var(--tw-border-opacity))"
													: "1px solid gray",
											},
										}),
									}}
								/>
							</div>
							<div class="text-sm">원</div>
						</div>
					</div>
					<div class="w-full flex flex-row items-center mb-4">
						<div
							onClick={(e) => toggleSupportType(e, "temporarySupport")}
							class={
								"cursor-pointer w-5 h-5 border-2 rounded-sm border-purple-700 flex justify-center items-center " +
								(info.temporarySupport.status ? "bg-purple-700" : "bg-white")
							}
						>
							{info.temporarySupport.status && (
								<AiOutlineCheck size={20} class="text-white" />
							)}
						</div>
						<div
							class={
								"flex flex-row items-center " +
								(info.temporarySupport.status ? "text-black" : "text-gray-500")
							}
						>
							<div
								onClick={(e) => toggleSupportType(e, "temporarySupport")}
								class="cursor-pointer mx-4 text-sm"
							>
								일시후원
							</div>
							<div
								onClick={(e) => toggleSupportType(e, "temporarySupport")}
								class={
									"cursor-pointer w-0 h-6 border-r " +
									(info.temporarySupport.status
										? "border-black"
										: "border-gray-500")
								}
							></div>
							<div
								onClick={(e) => toggleSupportType(e, "temporarySupport")}
								class="cursor-pointer ml-4 text-sm hidden md:inline-block"
							>
								금액 입력 :{" "}
							</div>
							<div class="w-36 md:w-48 mx-4">
								<CreatableSelect
									isClearable
									options={periodicalOptions}
									isDisabled={!info.temporarySupport.status}
									onChange={(value) =>
										changeSupportItem(value, "temporarySupport")
									}
									styles={{
										control: (base, state) => ({
											...base,
											border: state.isFocused
												? "1px solid rgba(109, 40, 217, var(--tw-border-opacity))"
												: "1px solid #e3e3e3",
											// This line disable the blue border
											boxShadow: state.isFocused ? 0 : 0,
											color: info.temporarySupport.status ? "black" : "#e3e3e3",
											"&:hover": {
												border: state.isFocused
													? "1px solid rgba(109, 40, 217, var(--tw-border-opacity))"
													: "1px solid gray",
											},
										}),
									}}
								/>
							</div>
							<div class="text-sm">원</div>
						</div>
					</div>
					<div class="w-full flex flex-row items-center ">
						<div
							onClick={(e) => toggleSupportType(e, "itemSupport")}
							class={
								"cursor-pointer w-5 h-5 border-2 rounded-sm border-purple-700 flex justify-center items-center " +
								(info.itemSupport.status ? "bg-purple-700" : "bg-white")
							}
						>
							{info.itemSupport.status && (
								<AiOutlineCheck size={20} class="text-white" />
							)}
						</div>
						<div
							class={
								"flex flex-row items-center " +
								(info.itemSupport.status ? "text-black" : "text-gray-500")
							}
						>
							<div
								onClick={(e) => toggleSupportType(e, "itemSupport")}
								class="cursor-pointer mx-4 text-sm"
							>
								물품후원
							</div>
							<div
								onClick={(e) => toggleSupportType(e, "itemSupport")}
								class={
									"cursor-pointer w-0 h-6 border-r " +
									(info.itemSupport.status ? "border-black" : "border-gray-500")
								}
							></div>
							<div
								onClick={(e) => toggleSupportType(e, "itemSupport")}
								class="cursor-pointer ml-4 text-sm hidden md:inline-block"
							>
								물품 입력 :{" "}
							</div>
							<div class="w-36 md:w-48 mx-4">
								<CreatableSelect
									isClearable
									isDisabled={!info.itemSupport.status}
									onChange={(value) => changeSupportItem(value, "itemSupport")}
									styles={{
										control: (base, state) => ({
											...base,
											border: state.isFocused
												? "1px solid rgba(109, 40, 217, var(--tw-border-opacity))"
												: "1px solid #e3e3e3",
											// This line disable the blue border
											boxShadow: state.isFocused ? 0 : 0,
											color: info.itemSupport.status ? "black" : "#e3e3e3",
											"&:hover": {
												border: state.isFocused
													? "1px solid rgba(109, 40, 217, var(--tw-border-opacity))"
													: "1px solid gray",
											},
										}),
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="mt-8 mb-4">
					<h1 class="text-md mb-4 font-bold">개인정보동의</h1>
				</div>
				<div class="text-xs md:text-base leading-5 md:leading-7 w-full h-full border border-black p-4 mb-8">
					<div>
						본 기관은 고객의 개인정보를 소중하게 생각하며, 고객의 개인정보보호를
						가장 효과적이고 안전하게 보호하기 위하여 항상 최선의 노력을 다하고
						있습니다. 또한 개인정보보호에 관한 주요 법률인 「개인정보보호법」을
						비롯한 모든 개인정보보호 관련 법률을 준수하고 있습니다.
					</div>
					<div class="w-full h-full p-4 border border-black my-4">
						개인정보수집 및 이용.제공동의서 작성 후에도 「개인정보보호법」등
						관계법령에서 예외로 규정한 것을 제외하고 동의자가 원하는 경우
						동의여부를 언제든지 철회할 수 있습니다. 다만, 동의를 하지 않거나
						철회한 경우 기부금영수증 및 확인서 발급에 제한을 받을 수 있습 니다.
					</div>
					<div class="leading-5 md:leading-7">
						<h1>
							<span>■ </span>수집항목: 후원자의 이력관리, 확인서 발급에 필요한
							개인정보{" "}
						</h1>
						<h1>
							<span class="invisible">■ </span>- 개인정보: 성명,
							주민번호(사업자번호), 휴대폰 번호, 이메일, 주소 등
						</h1>
						<h1>
							<span>■ </span> 수집 및 이용목적
						</h1>
						<h1>
							<span class="invisible">■ </span>- 후원자 이력관리{" "}
						</h1>
						<h1>
							<span>■ </span> 보유 및 이용기간: 준영구
						</h1>
						<h1>
							<span class="invisible">■ </span>- 후원신청서는 본 시설에서
							보유하며 법적 보관연한이 경과한 기록에 대해서 후원자 본인이
							폐기요청을 하는 경우 폐기하도록 합니다.
						</h1>
					</div>
				</div>
				<div
					onClick={(e) => toggleAgree(e, "agree")}
					class="flex flex-row items-center mb-4"
				>
					<div
						class={
							"cursor-pointer w-5 h-5 border-2 rounded-sm border-purple-700 flex justify-center items-center " +
							(info.agree ? "bg-purple-700" : "bg-white")
						}
					>
						{info.agree && <AiOutlineCheck size={20} class="text-white" />}
					</div>
					<div class="flex-1 cursor-pointer w-auto mx-4 text-sm font-bold">
						「개인정보보호법」에 따라 위와 같이 개인정보 수집 및 이용에
						동의합니다.
					</div>
				</div>
			</form>
			<div class="flex flex-col md:flex-row justify-between items-center">
				<Link
					class="w-full md:w-auto mb-4 md:mb-4 transition delay-50 duration-300 justify-center cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					to="/participation/support/0"
					onClick={() => document.getElementById("scrollRef").scrollTo(0, 0)}
				>
					뒤로 가기
				</Link>
				<button
					onClick={submitInfo}
					class="w-full md:w-auto cursor-pointer transition delay-50 duration-300 justify-center px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold "
				>
					제출하기
				</button>
			</div>
		</div>
	);
};

export default withRouter(WriteSupport);
