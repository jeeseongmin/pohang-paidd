import React, { useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import Subtitle from "../../../components/Subtitle";
import Paging from "../../../components/Paging";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { HiHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";

const Index = () => {
	const [loading, setLoading] = useState(false);
	const [isSearch, setIsSearch] = useState(false);
	const [findText, setFindText] = useState("");

	const [page, setPage] = useState(1);
	const history = useHistory();
	const [totalPage, setTotalPage] = useState(0);
	const [counselingList, setCounselingList] = useState([]);
	const currentEmail = useSelector((state) => state.setting.currentEmail);
	const currentPassword = useSelector((state) => state.setting.currentPassword);

	const enterkey = () => {
		if (window.event.keyCode === 13) {
			searchList();
		}
	};

	const changeText = (e) => {
		const cp = e.target.value;
		setFindText(cp);
	};

	const searchList = () => {
		setIsSearch(true);
		setPage(1);
		if (findText !== "") {
			axios
				.post(
					"/api/counseling/search/page/" + page,
					{ key: process.env.REACT_APP_API_KEY, text: findText },
					{
						headers: {
							"Content-type": "application/json",
							Accept: "application/json",
						},
					}
				)
				.then((Response) => {
					setCounselingList(Response.data);
				})
				.catch((Error) => {
					console.log(Error);
				});
		} else {
			setIsSearch(false);
			axios
				.post(
					"/api/counseling/page/" + page,
					{ key: process.env.REACT_APP_API_KEY },
					{
						headers: {
							"Content-type": "application/json",
							Accept: "application/json",
						},
					}
				)
				.then((Response) => {
					setCounselingList(Response.data);
				})
				.catch((Error) => {
					console.log(Error);
				});
		}
	};

	useEffect(() => {
		if (isSearch) {
			axios
				.post(
					"/api/counseling/search/page/" + page,
					{
						key: process.env.REACT_APP_API_KEY,
						text: findText,
					},
					{
						headers: {
							"Content-type": "application/json",
							Accept: "application/json",
						},
					}
				)
				.then((Response) => {
					setCounselingList(Response.data);
				})
				.catch((Error) => {
					console.log(Error);
				});
		} else {
			axios
				.post(
					"/api/counseling/page/" + page,
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
					setCounselingList(Response.data);
				})
				.catch((Error) => {
					console.log(Error);
				});
		}
	}, [page]);

	useEffect(() => {
		setLoading(false);
		if (isSearch) {
			axios
				.post(
					"/api/counseling/search",
					{ key: process.env.REACT_APP_API_KEY, text: findText },
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
		} else {
			axios
				.post(
					"/api/counseling",
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
	}, [counselingList]);

	const dataToText = (date) => {
		let year = date.substring(2, 4);
		let month = date.substring(5, 7);
		let day = date.substring(8, 10);
		return year + "." + month + "." + day;
	};

	function CounselingBlock(props) {
		const data = props.data;
		const date = dataToText(data.createdAt);
		let status = "";
		if (data.status === "unread") {
			status = "미접수";
		} else {
			status = "처리중";
		}

		const readCheck = (status, id) => {
			window.scrollTo(0, 0);
			if (currentEmail === "master" && status === "unread") {
				axios
					.post("/api/counseling/read/" + id, {
						key: process.env.REACT_APP_API_KEY,
						status: "read",
					})
					.then((response) => {
						history.push("/participation/detailCounseling/" + data._id);
					})
					.catch((err) => console.log(err));
			} else {
				history.push("/participation/detailCounseling/" + data._id);
			}
		};

		return (
			<Link
				onClick={() => readCheck(data.status, data._id)}
				class="cursor-pointer w-full px-2 lg:px-8 py-4 flex justify-end items-center border-b border-gray-300 transition delay-50 duration-300 hover:bg-gray-100"
			>
				<div class="text-base flex-1 pr-4 truncate	">{data.title}</div>
				<div class="text-base w-24 truncate pr-2">{data.writer}</div>
				<div class="text-base w-24 hidden md:block">{date}</div>
				{data.status === "unread" ? (
					<div class="text-base w-24 text-red-500">미접수</div>
				) : data.status === "read" ? (
					<div class="text-base w-24 text-blue-500">처리중</div>
				) : (
					<div class="text-base w-24 text-gray-500">처리완료</div>
				)}
			</Link>
		);
	}
	return (
		<div>
			<div class="flex flex-row items-center justify-between mb-4 lg:mb-12">
				<div class="flex flex-col">
					<div class="flex flex-row justify-start items-center mb-4 md:mb-0">
						<Subtitle text={"건의 및 고충상담"} />
					</div>
					<div class="mt-2 mb-4 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
						<div class="mr-2">
							<HiHome size={16} />
						</div>
						Home {">"} 참여마당 {">"} 건의 및 고충상담
					</div>
				</div>
				<div class="w-1/2 flex flex-row items-center relative justify-end ">
					<input
						type="text"
						name="name"
						placeholder="제목, 내용 검색하기"
						autocomplete="off"
						onChange={changeText}
						value={findText}
						onKeyUp={enterkey}
						class="w-full h-full py-2 px-4 mr-2 border-2 border-gray-300 outline-none focus:border-purple-600 transition delay-50 duration-300 "
					/>
					<BsSearch
						size={28}
						onClick={searchList}
						class={
							"cursor-pointer transition delay-50 duration-300 " +
							(findText === "" ? "text-gray-300" : "text-purple-600")
						}
					/>
				</div>
			</div>
			<div class="w-full h-auto mb-8">
				{/* 딱 10개 씩만 로드하기 */}
				<div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center border-b-2 border-purple-600">
					<div class="text-lg flex-1 ">제목</div>
					<div class="text-lg w-24 ">작성자</div>
					<div class="text-lg w-24 hidden md:block ">날짜</div>
					<div class="text-lg w-24 ">상태</div>
				</div>

				{counselingList.length !== 0 ? (
					counselingList.map((element, index) => {
						return <CounselingBlock data={element} key={element._id} />;
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

				<div class="relative md:absolute right-0 w-full md:w-auto flex justify-end md:block">
					<Link
						to="/participation/writeCounsel/0"
						class="w-full md:w-auto justify-center cursor-pointer px-2 md:px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center transition delay-50 duration-300 hover:bg-purple-500 hover:text-white hover:font-bold"
					>
						작성하기
					</Link>
				</div>
			</div>{" "}
		</div>
	);
};

export default Index;
