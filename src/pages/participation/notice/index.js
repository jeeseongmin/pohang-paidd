import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Route, Link } from "react-router-dom";
import Subtitle from "../../../components/Subtitle";
import Paging from "../../../components/Paging";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const Index = () => {
	const [loading, setLoading] = useState(false);

	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);
	const [noticeList, setNoticeList] = useState([]);
	const currentEmail = useSelector((state) => state.setting.currentEmail);
	const API_KEY = process.env.REACT_APP_API_KEY;
	useEffect(() => {
		axios
			.get("/api/" + API_KEY + "/notice/type/participation/" + page)
			.then((Response) => {
				setNoticeList(Response.data);
			})
			.catch((Error) => {
				console.log(Error);
			});
	}, [page]);

	useEffect(() => {
		axios
			.get("/api/" + API_KEY + "/notice/type/participation")
			.then((Response) => {
				setTotalPage(Math.ceil(Response.data.length / 10));
				setLoading(true);
			})
			.catch((Error) => {
				console.log(Error);
			});
	}, [noticeList]);

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
				to={"/participation/detailNotice/" + data._id}
				class="cursor-pointer w-full px-2 lg:px-8 py-4 flex justify-end items-center border-b border-gray-300 hover:bg-gray-100"
			>
				<div class="text-base flex-1 pr-4 truncate	">{data.title}</div>
				<div class="text-base w-24 ">{date}</div>
			</Link>
		);
	}

	return (
		<div>
			<div class="flex flex-row justify-between items-center mb-4 md:mb-8">
				<Subtitle text={"공지사항"} />
				<div class="w-1/2 flex flex-row items-center relative justify-end ">
					<input
						type="text"
						name="name"
						placeholder="검색어"
						class="w-full h-full py-2 px-4 mr-2 border-2 border-gray-300 outline-none focus:border-purple-700 "
					/>
					<BsSearch size={28} class="cursor-pointer text-gray-300" />
				</div>
			</div>
			<div class="w-full h-auto mb-8 text-base lg:text-lg">
				{/* 딱 10개 씩만 로드하기 */}
				<div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center border-b-2 border-purple-600">
					<div class="text-lg flex-1 ">제목</div>
					<div class="text-lg w-24 ">날짜</div>
				</div>

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

				{currentEmail === "master" ? (
					<div class="relative md:absolute right-0 w-full md:w-auto flex justify-end md:block">
						<Link
							to={"/participation/writeNotice/0"}
							class="cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
						>
							작성하기
						</Link>
					</div>
				) : null}
			</div>{" "}
		</div>
	);
};

export default Index;
