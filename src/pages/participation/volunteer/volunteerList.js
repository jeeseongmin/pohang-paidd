import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Subtitle from "../../../components/Subtitle";
import Paging from "../../../components/Paging";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const VolunteerList = () => {
	const [loading, setLoading] = useState(false);

	const [page, setPage] = useState(1);
	const history = useHistory();
	const [totalPage, setTotalPage] = useState(0);
	const [volunteerList, setVolunteerList] = useState([]);
	const currentEmail = useSelector((state) => state.setting.currentEmail);
	const currentPassword = useSelector((state) => state.setting.currentPassword);

	useEffect(() => {
		if (currentEmail === "master") {
			axios
				.post(
					"/api/volunteer/page/" + page,
					{
						key: process.env.REACT_APP_API_KEY,
					},
					{
						headers: {
							"Content-type": "application/json",
							Accept: "application/json",
						},
					}
				)
				.then((Response) => {
					setVolunteerList(Response.data);
				})
				.catch((Error) => {
					console.log(Error);
				});
		}
	}, [page]);

	useEffect(() => {
		if (currentEmail === "master") {
			axios
				.post(
					"/api/volunteer",
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
		}
	}, [volunteerList]);

	const dataToText = (date) => {
		let year = date.substring(2, 4);
		let month = date.substring(5, 7);
		let day = date.substring(8, 10);
		return year + "." + month + "." + day;
	};

	function SupportBlock(props) {
		const data = props.data;
		const date = dataToText(data.createdAt);

		const readCheck = (status, id) => {
			window.scrollTo(0, 0);
			if (currentEmail === "master" && status === "unread") {
				axios
					.post("/api/volunteer/read/" + id, {
						key: process.env.REACT_APP_API_KEY,
						status: "read",
					})
					.then((response) => {
						history.push("/participation/volunteerDetail/" + data._id);
					})
					.catch((err) => console.log(err));
			} else {
				history.push("/participation/volunteerDetail/" + data._id);
			}
		};

		return (
			<Link
				onClick={() => readCheck(data.status, data._id)}
				class="cursor-pointer w-full px-2 lg:px-8 py-4 flex justify-end items-center border-b border-gray-300 hover:bg-gray-100"
			>
				<div class="text-base w-36 truncate pr-2">{data.name}</div>
				<div class="text-base w-36 pr-4 truncate ">{data.phone}</div>
				<div class="text-base flex-1 pr-4 truncate hidden md:block">
					{data.hopeContent}
				</div>
				<div class="text-base w-24 hidden md:block">{date}</div>
				{data.status === "unread" ? (
					<div class="text-base w-24 text-red-500">안읽음</div>
				) : data.status === "read" ? (
					<div class="text-base w-24 text-gray-500">읽음</div>
				) : (
					<div class="text-base w-24 text-gray-500">처리완료</div>
				)}
			</Link>
		);
	}
	return (
		<div>
			<div class="flex flex-row justify-start items-center mb-4 md:mb-8">
				<Subtitle text={"자원봉사 신청목록"} />
			</div>
			<div class="w-full h-auto mb-8">
				{/* 딱 10개 씩만 로드하기 */}
				<div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center border-b-2 border-purple-600">
					<div class="text-lg w-36 ">작성자</div>
					<div class="text-lg w-36">연락처</div>
					<div class="text-lg flex-1 hidden md:block">희망봉사내용</div>
					<div class="text-lg w-24 hidden md:block ">날짜</div>
					<div class="text-lg w-24 ">상태</div>
				</div>

				{volunteerList.length !== 0 ? (
					volunteerList.map((element, index) => {
						return <SupportBlock data={element} key={element._id} />;
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
				{/* 
					setPage : 현재 페이지 설정 함수
					page : 현재 페이지
					total : 총 페이지
				 */}
				<Paging setPage={setPage} page={page} total={totalPage} />
				<div class="flex w-full mb-8 absolute mt-8">
					<Link
						to="/participation/volunteer/0"
						class="w-auto justify-center cursor-pointer px-2 md:px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					>
						뒤로가기
					</Link>
				</div>
			</div>
		</div>
	);
};

export default VolunteerList;
