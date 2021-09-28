import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Route, Link } from "react-router-dom";
import Subtitle from "../../../../../components/Subtitle";
import Paging from "../../../../../components/Paging";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { HiHome } from "react-icons/hi";

const Notice = (props, { match }) => {
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);
	const [noticeList, setNoticeList] = useState([]);
	const [findText, setFindText] = useState("");
	const currentEmail = useSelector((state) => state.setting.currentEmail);
	const currentPassword = useSelector((state) => state.setting.currentPassword);
	const type = props.pages;
	const [subtitle, setSubtitle] = useState("");

	useEffect(() => {
		if (window.location.href.includes("org1")) {
			setSubtitle("지적장애인자립지원센터");
		} else if (window.location.href.includes("org2")) {
			setSubtitle("장애인활동지원사업");
		} else if (window.location.href.includes("org3")) {
			setSubtitle("방과후활동지원서비스사업");
		}
	}, [window.location.href]);

	useEffect(() => {
		axios
			.post(
				"/api/notice/type/" + type + "/" + page,
				{ key: process.env.REACT_APP_API_KEY },
				{
					headers: {
						"Content-type": "application/json",
						Accept: "application/json",
					},
				}
			)
			.then((Response) => {
				setNoticeList(Response.data);
			})
			.catch((Error) => {
				console.log(Error);
			});
	}, [page, findText]);

	useEffect(() => {
		axios
			.post(
				"/api/notice/type/" + type,
				{ key: process.env.REACT_APP_API_KEY },
				{
					headers: {
						"Content-type": "application/json",
						Accept: "application/json",
					},
				}
			)
			.then((Response) => {
				setTotalPage(Math.ceil(Response.data.length / 10));
				setLoading(true);
			})
			.catch((Error) => {
				console.log(Error);
			});
	}, [noticeList, findText]);

	const changeText = (e) => {
		const cp = e.target.value;
		setFindText(cp);
	};

	const dataToText = (date) => {
		let year = date.substring(2, 4);
		let month = date.substring(5, 7);
		let day = date.substring(8, 10);
		return year + "." + month + "." + day;
	};

	function NoticeBlock(props) {
		const data = props.data;
		const date = dataToText(data.createdAt);

		return (
			<Link
				to={"/business/" + type + "/notice/" + data._id}
				class="cursor-pointer w-full px-2 lg:px-8 py-4 flex justify-end items-center border-b border-gray-300 hover:bg-gray-100"
			>
				<div class="text-base flex-1 pr-4 truncate	">{data.title}</div>
				<div class="text-base w-24 ">{date}</div>
			</Link>
		);
	}

	return (
		<div>
			<div class="flex flex-row justify-between items-center mb-8 lg:mb-2">
				<Subtitle text={"공지사항"} />
				<div class="w-1/2 flex flex-row items-center relative justify-end ">
					{/* <input
						type="text"
						name="name"
						placeholder="검색어"
						autocomplete="off"
						onChange={changeText}
						value={findText}
						class="w-full h-full py-2 px-4 mr-2 border-2 border-gray-300 outline-none focus:border-purple-600 "
						/>
					<BsSearch size={28} class="cursor-pointer text-gray-300" /> */}
				</div>
			</div>
			<div class="mb-12 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
				<div class="mr-2">
					<HiHome size={16} />
				</div>
				Home {">"} 주요사업 {">"} {subtitle} {">"} 공지사항
			</div>
			<div class="w-full h-auto mb-8 text-base lg:text-lg">
				{/* 딱 10개 씩만 로드하기 */}
				<div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center border-b-2 border-purple-600">
					<div class="text-lg flex-1 ">제목</div>
					<div class="text-lg w-24 ">날짜</div>
				</div>

				{/* {!loading ? (
					<div class="py-4 w-full flex justify-center">
						<CircularProgress />
					</div>
				) : null} */}

				{noticeList.length !== 0 ? (
					noticeList.map((element, index) => {
						return <NoticeBlock data={element} key={element._id} />;
					})
				) : loading ? (
					<div class="w-full flex justify-center items-center mt-8">
						등록된 내용이 없습니다.
					</div>
				) : (
					<div class="py-4 w-full flex justify-center">
						<CircularProgress />
					</div>
				)}
			</div>
			<div class="flex flex-col lg:flex-row justify-center items-center my-8 relative">
				<div class="flex flex-row w-full justify-center items-center lg:w-auto mb-4 lg:mb-0"></div>
				{/* 
					setPage : 현재 페이지 설정 함수
					page : 현재 페이지
					total : 총 페이지
				 */}
				<Paging setPage={setPage} page={page} total={totalPage} />

				{currentEmail === "master" || currentEmail === type ? (
					<div class="relative md:absolute right-0 w-full md:w-auto flex justify-end md:block">
						<Link
							to={"/business/" + type + "/notice/write"}
							class="cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
						>
							작성하기
						</Link>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Notice;
