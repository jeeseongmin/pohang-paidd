import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenu, setSubmenu, setSidebar } from "../../reducers/setting";

const Sidebar = () => {
	const dispatch = useDispatch();
	const sidebar = useSelector((state) => state.setting.sidebar);
	const currentMenu = useSelector((state) => state.setting.menu);
	const [toggleArr, setToggleArr] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	useEffect(() => {
		const cp = [false, false, false, false, false, false];
		cp[currentMenu] = true;
		setToggleArr(cp);
	}, [sidebar]);

	const onToggleSidebar = (menu, submenu) => {
		if (sidebar === "on") {
			dispatch(setSidebar("off"));
		} else dispatch(setSidebar("on"));

		dispatch(setMenu(menu));
		dispatch(setSubmenu(submenu));
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
				class="w-full border-b border-purple-500 flex justify-between items-center"
			>
				<Link class="text-lg w-auto py-2">{props.text}</Link>
				{!toggleArr[props.num] && <img src="/image/arrowUp.png" alt="down" />}
				{/* <MdKeyboardArrowUp size={28} /> */}
				{toggleArr[props.num] && <img src="/image/arrowDown.png" alt="up" />}
				{/* <MdKeyboardArrowDown size={28} /> */}
			</div>
		);
	};

	const SubText = (props) => {
		return (
			<Link
				to={props.address}
				onClick={() => onToggleSidebar(props.menu, props.submenu)}
				class="cursor-pointer text-sm pl-4 py-3 text-gray-600"
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
			<div class="w-2/3 h-full bg-white flex flex-col justify-start items-start ">
				<div
					class={
						"z-20 w-auto px-5 h-14 flex justify-between bg-white lg:hidden sm:px-10 sm:h-16"
					}
				>
					<div class="h-full flex justify-center items-center text-purple-300">
						<div class="h-full flex justify-center items-center">
							<img
								onClick={onToggleSidebar}
								src="/image/close.png"
								alt="close"
							/>
						</div>
					</div>
				</div>
				{/* <div onClick={onToggleSidebar} class="w-full mb-4 text-purple-300">
					<img src="/image/close.png" alt="close" />
				</div> */}
				<div class="w-full flex flex-col mb-6 px-4">
					<MainText text={"협회소개"} address={"/introduce/intro"} num={1} />
					{toggleArr[1] && (
						<div class="flex flex-col">
							<SubText
								text={"인사말"}
								address={"/introduce/intro"}
								menu={1}
								submenu={1}
							/>
							<SubText
								text={"설립목적"}
								address={"/introduce/purpose"}
								menu={1}
								submenu={2}
							/>
							<SubText
								text={"연혁"}
								address={"/introduce/history"}
								menu={1}
								submenu={3}
							/>
							<SubText
								text={"조직도"}
								address={"/introduce/org"}
								menu={1}
								submenu={4}
							/>
							<SubText
								text={"오시는 길"}
								address={"/introduce/guide"}
								menu={1}
								submenu={5}
							/>
						</div>
					)}
				</div>
				<div class="w-full flex flex-col mb-6 px-4">
					<MainText
						text={"주요사업"}
						address={"/business/base/default"}
						num={2}
					/>
					{toggleArr[2] && (
						<div class="flex flex-col">
							<SubText
								text={"협회사업"}
								address={"/business/base/default"}
								menu={2}
								submenu={1}
							/>
							<SubText
								text={"지적장애인 자립지원센터"}
								address={"/business/org1/default"}
								menu={2}
								submenu={2}
							/>
							<SubText
								text={"장애인활동 지원사업"}
								address={"/business/org2/default"}
								menu={2}
								submenu={3}
							/>
							<SubText
								text={"방과후활동 서비스사업"}
								address={"/business/org3/default"}
								menu={2}
								submenu={4}
							/>
						</div>
					)}
				</div>
				<div class="w-full flex flex-col mb-6 px-4">
					<MainText text={"부설기관"} address={"/organization/0"} num={3} />
					{toggleArr[3] && (
						<div class="flex flex-col">
							<SubText
								text={"부설기관"}
								address={"/organization/0"}
								menu={3}
								submenu={1}
							/>
						</div>
					)}
				</div>
				<div class="w-full flex flex-col mb-6 px-4">
					<MainText
						text={"참여마당"}
						address={"/participation/notice"}
						num={4}
					/>
					{toggleArr[4] && (
						<div class="flex flex-col">
							<SubText
								text={"공지사항"}
								address={"/participation/notice"}
								menu={4}
								submenu={1}
							/>
							<SubText
								text={"건의 및 고충상담"}
								address={"/participation/counseling"}
								menu={4}
								submenu={2}
							/>
							<SubText
								text={"후원"}
								address={"/participation/support"}
								menu={4}
								submenu={3}
							/>
							<SubText
								text={"자원봉사"}
								address={"/participation/volunteer"}
								menu={4}
								submenu={4}
							/>
						</div>
					)}
				</div>
				<div class="w-full flex flex-col mb-6 px-4">
					<MainText text={"지역복지"} address={"/local"} num={5} />
					{toggleArr[5] && (
						<div class="flex flex-col">
							<SubText
								text={"지역복지"}
								address={"/local"}
								menu={4}
								submenu={5}
							/>
						</div>
					)}
				</div>
			</div>
			<div
				onClick={onToggleSidebar}
				class={"cursor-pointer flex-1 w-full h-full bg-black opacity-50 px-4"}
			></div>
		</div>
	);
};

export default Sidebar;
