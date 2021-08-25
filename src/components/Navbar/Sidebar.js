import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenu, setSubmenu, toggleSidebar } from "../../reducer/settingSlice";
import { GrClose } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Sidebar = () => {
	const dispatch = useDispatch();
	const sidebar = useSelector((state) => state.setting.sidebar);
	const menu = useSelector((state) => state.setting.menu);
	const submenu = useSelector((state) => state.setting.submenu);
	const [toggleArr, setToggleArr] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	useEffect(() => {
		console.log("menu : ", menu);
		const cp = [false, false, false, false, false, false];
		cp[menu] = true;
		setToggleArr(cp);
	}, [sidebar]);

	const onToggleSidebar = () => {
		console.log("onToggleSidebar");
		dispatch(toggleSidebar(sidebar));
	};

	const onToggleMenu = (target) => {
		// 선택된 메뉴가 열려있을 경우 => 닫기
		if (toggleArr[target]) {
			const cp = [false, false, false, false, false, false];
			setToggleArr(cp);
		}
		// 선택된 메뉴가 닫혀있을 경우 => 열기
		else {
			const cp = [false, false, false, false, false, false];
			cp[target] = true;
			setToggleArr(cp);
		}
	};

	const MainText = (props) => {
		return (
			<div
				onClick={() => onToggleMenu(props.num)}
				class="w-full border-b-2 border-purple-500 flex justify-between items-center"
			>
				<Link to={props.address} class="text-xl w-auto font-bold py-2">
					{props.text}
				</Link>
				{!toggleArr[props.num] && <MdKeyboardArrowUp size={28} />}
				{toggleArr[props.num] && <MdKeyboardArrowDown size={28} />}
			</div>
		);
	};

	const SubText = (props) => {
		return (
			<Link
				to={props.address}
				class="cursor-pointer text-sm py-2 text-gray-600"
			>
				{props.text}
			</Link>
		);
	};

	return (
		<div
			class={
				"z-40 w-full h-full absolute top-0 left-0 flex flex-row justify-start items-center "
			}
		>
			<div class="w-2/3 h-full bg-white flex flex-col justify-start items-start py-8 px-4">
				<div class="w-full mb-4 text-purple-300">
					<VscChromeClose size={32} class="cursor-pointer" />
				</div>
				<div class="w-full flex flex-col mb-4">
					<MainText text={"협회소개"} address={"/introduce/intro"} num={1} />
					{toggleArr[1] && (
						<div class="flex flex-col">
							<SubText text={"인사말"} address={"/introduce/intro"} />
							<SubText text={"설립목적"} address={"/introduce/purpose"} />
							<SubText text={"연혁"} address={"/introduce/history"} />
							<SubText text={"조직도"} address={"/introduce/org"} />
							<SubText text={"오시는 길"} address={"/introduce/guide"} />
						</div>
					)}
				</div>
				<div class="w-full flex flex-col mb-4">
					<MainText
						text={"주요사업"}
						address={"/business/base/default"}
						num={2}
					/>
					{toggleArr[2] && (
						<div class="flex flex-col">
							<SubText text={"협회사업"} address={"/business/base/default"} />
							<SubText
								text={"포항시지적장애인자립지원센터"}
								address={"/business/b1/default"}
							/>
							<SubText
								text={"장애인활동지원사업"}
								address={"/business/b2/default"}
							/>
							<SubText
								text={"방과후활동서비스사업"}
								address={"/business/b3/default"}
							/>
						</div>
					)}
				</div>
				<div class="w-full flex flex-col mb-4">
					<MainText text={"부설기관"} address={"/organization/0"} num={3} />
					{toggleArr[3] && (
						<div class="flex flex-col">
							<SubText text={"부설기관"} address={"/organization/0"} />
						</div>
					)}
				</div>
				<div class="w-full flex flex-col mb-4">
					<MainText
						text={"참여마당"}
						address={"/participation/notice"}
						num={4}
					/>
					{toggleArr[4] && (
						<div class="flex flex-col">
							<SubText text={"공지사항"} address={"/participation/notice"} />
							<SubText
								text={"건의 및 고충상담"}
								address={"/participation/counseling"}
							/>
							<SubText text={"후원"} address={"/participation/support"} />
							<SubText text={"자원봉사"} address={"/participation/volunteer"} />
						</div>
					)}
				</div>
				<div class="w-full flex flex-col mb-4">
					<MainText text={"지역복지"} address={"/local"} num={5} />
					{toggleArr[5] && (
						<div class="flex flex-col">
							<SubText text={"지역복지"} address={"/local"} />
						</div>
					)}
				</div>
			</div>
			<div
				onClick={onToggleSidebar}
				class={"cursor-pointer flex-1 w-full h-full bg-black opacity-50"}
			></div>
		</div>
	);
};

export default Sidebar;
