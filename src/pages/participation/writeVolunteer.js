import React, { useEffect, useState, useRef } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import CreatableSelect from "react-select/creatable";

const WriteVolunteer = ({ history }) => {
	const [info, setInfo] = useState({
		name: "",
		birth: "",
		phoneNumber: "",
		vms: "",
		activity: "",
		hopeContent: "",
		hopeTime: "",
		agree: false,
	});

	const nameRef = useRef(null);
	const birthRef = useRef(null);
	const phoneNumberRef = useRef(null);
	const vmsRef = useRef(null);
	const activityRef = useRef(null);
	const hopeContentRef = useRef(null);
	const hopeTimeRef = useRef(null);
	const agreeRef = useRef(null);

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
		} else if (info.birth === "") {
			alert("생년월일을 입력해주세요!");
			birthRef.current.focus();
		} else if (info.birth.length !== 6) {
			alert("생년월일 앞 6자리를 입력해주세요.");
			birthRef.current.focus();
		} else if (info.phoneNumber === "") {
			alert("휴대폰번호를 입력해주세요!");
			phoneNumberRef.current.focus();
		} else if (info.phoneNumber.includes("-")) {
			alert("하이픈(-) 제외 후 입력해주세요.");
			phoneNumberRef.current.focus();
		} else if (info.vms === "") {
			alert("VMS ID/연번을 입력해주세요!");
			vmsRef.current.focus();
		} else if (info.activity === "") {
			alert("최근 봉사활동 내역을 입력해주세요.");
			activityRef.current.focus();
		} else if (info.hopeContent === "") {
			alert("희망봉사 내용을 적어주세요.");
			hopeContentRef.current.focus();
		} else if (info.hopeTime === "") {
			alert("희망봉사 시간을 적어주세요.");
			hopeTimeRef.current.focus();
		} else if (!info.agree) {
			alert("개인정보 수집 및 이용 동의에 체크해주세요");
		} else {
			alert("제출되었습니다!");
			window.scrollTo(0, 0);
			history.push("/participation/volunteer");
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
		<div class="px-36 py-16">
			<div class="flex flex-row justify-between items-center mb-8">
				<div>
					<h1 class="text-3xl font-bold">자원봉사 신청하기</h1>
				</div>
			</div>
			<form class="border-t-2 border-b-2 border-purple-700 py-6 mb-4">
				<div class="mb-4">
					<h1 class="text-md mb-4 font-bold">봉사자 정보</h1>
				</div>
				<div class="flex flex-row justify-start items-center mb-2">
					<input
						ref={nameRef}
						type="text"
						class="w-1/2 p-4 border-2 border-gray-300 outline-none mr-4 focus:border-purple-700"
						onChange={(e) => changeInfo(e, "name")}
						placeholder="성명(단체명)"
					/>
					<input
						ref={birthRef}
						type="text"
						class="w-1/2 p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "birth")}
						placeholder="생년월일 앞 6자리"
					/>
				</div>
				<div class="flex flex-row justify-start items-center mb-2">
					<input
						ref={phoneNumberRef}
						type="text"
						class="w-1/2 p-4 border-2 border-gray-300 outline-none mr-4 focus:border-purple-700"
						onChange={(e) => changeInfo(e, "phoneNumber")}
						placeholder="휴대폰번호 (하이픈은 제외하고 입력해주세요)"
					/>
					<input
						ref={vmsRef}
						type="text"
						class="w-1/2 p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "vms")}
						placeholder="VMS ID/연번정보"
					/>
				</div>
				<div class="flex flex-row justify-start items-center mb-2">
					<input
						ref={activityRef}
						type="text"
						class="w-full p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "activity")}
						placeholder="최근봉사활동"
					/>
				</div>
				<div class="flex flex-row justify-start items-center mb-2">
					<input
						ref={hopeContentRef}
						type="text"
						class="w-3/4 p-4 border-2 border-gray-300 outline-none mr-4 focus:border-purple-700"
						onChange={(e) => changeInfo(e, "hopeContent")}
						placeholder="희망봉사내용"
					/>
					<input
						ref={hopeTimeRef}
						type="text"
						class="w-1/4 p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "hopeTime")}
						placeholder="희망봉사 시간"
					/>
				</div>

				<div class="mt-8 mb-4">
					<h1 class="text-md mb-4 font-bold">개인정보동의</h1>
				</div>
				<div class=" w-full h-full border border-black p-4 mb-8">
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
					<div class="leading-7">
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
					<div class="cursor-pointer w-auto mx-4 text-sm font-bold">
						「개인정보보호법」에 따라 위와 같이 개인정보 수집 및 이용에
						동의합니다.
					</div>
				</div>
			</form>
			<div class="flex justify-between items-center">
				<Link
					class="cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					to="/participation/support"
					onClick={() => window.scrollTo(0, 0)}
				>
					뒤로 가기
				</Link>
				<button
					onClick={submitInfo}
					class="cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold "
				>
					제출하기
				</button>
			</div>
		</div>
	);
};

export default withRouter(WriteVolunteer);
