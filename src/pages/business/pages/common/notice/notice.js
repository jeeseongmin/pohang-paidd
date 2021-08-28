import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Route, Link } from "react-router-dom";
import Subtitle from "../../../../../components/Subtitle";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Notice = (props, { match }) => {
	const [page, setPage] = useState(1);
	const [noticeList, setNoticeList] = useState([]);
	console.log("notice", props);
	const currentEmail = useSelector((state) => state.setting.currentEmail);
	const currentPassword = useSelector((state) => state.setting.currentPassword);
	const type = props.pages;

	useEffect(() => {
		axios
			.get("/api/notice/type/" + type + "/" + page)
			.then((Response) => {
				console.log(Response.data);
				setNoticeList(Response.data);
			})
			.catch((Error) => {
				console.log(Error);
			});
	}, []);

	function NoticeBlock(props) {
		const data = props.data;
		console.log(data.createdAt);
		let year = data.createdAt.substring(2, 4);
		let month = data.createdAt.substring(5, 7);
		let day = data.createdAt.substring(8, 10);
		const dateToText = year + "." + month + "." + day;
		console.log(dateToText);

		return (
			<Link
				to={"/business/" + type + "/noticeDetail"}
				class="cursor-pointer w-full px-2 lg:px-8 py-4 flex justify-end items-center border-b border-gray-300 hover:bg-gray-100"
			>
				<div class="text-base flex-1 pr-4 truncate	">{data.content}</div>
				<div class="text-base w-24 ">{dateToText}</div>
			</Link>
		);
	}

	return (
		<div>
			<div class="flex flex-row justify-between items-center mb-8">
				<Subtitle text={"공지사항"} />

				<div class="w-1/2 flex flex-row items-center relative justify-end ">
					<input
						type="text"
						name="name"
						placeholder="검색어"
						class="w-full h-full py-2 px-4 mr-2 border-2 border-gray-300 outline-none focus:border-purple-600 "
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
				{noticeList.length !== 0 &&
					noticeList.map((element, index) => {
						return <NoticeBlock data={element} key={element._id} />;
					})}
			</div>
			<div class="flex flex-col lg:flex-row justify-center items-center my-8 relative">
				<div class="flex flex-row w-full justify-center items-center lg:w-auto mb-4 lg:mb-0">
					<div
						onClick={() => setPage(1)}
						class={
							"mr-2 w-8 h-8 flex justify-center items-center cursor-pointer " +
							(page === 1
								? "text-white border-2 border-purple-700 bg-purple-700  "
								: "border border-gray-300 text-gray-300")
						}
					>
						1
					</div>
					<div
						onClick={() => setPage(2)}
						class={
							"mr-2 w-8 h-8 flex justify-center items-center cursor-pointer " +
							(page === 2
								? "text-white border-2 border-purple-700 bg-purple-700  "
								: "border border-gray-300 text-gray-300")
						}
					>
						2
					</div>
					<div
						class={
							"mr-2 w-8 h-8 flex justify-center items-center cursor-pointer " +
							(page === 3
								? "text-white border-2 border-purple-700 bg-purple-700  "
								: "border border-gray-300 text-gray-300")
						}
						onClick={() => setPage(3)}
					>
						3
					</div>
				</div>

				{currentEmail === "master" || currentEmail === type ? (
					<div class="relative md:absolute right-0 w-full md:w-auto flex justify-end md:block">
						<Link
							to={"/business/" + type + "/noticeWrite"}
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
