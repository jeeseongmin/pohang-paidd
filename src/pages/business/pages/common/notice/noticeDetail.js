import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import Subtitle from "../../../../../components/Subtitle";

const NoticeDetail = (props) => {
	const [page, setPage] = useState(1);
	return (
		<div>
			<div class="flex flex-row justify-between items-center mb-8">
				<Subtitle text={"자세히보기"} />
			</div>
			<div class="text-sm lg:text-base w-full h-auto mb-8 border-t-2 border-b-2 border-purple-600">
				{/* 딱 10개 씩만 로드하기 */}
				<div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center">
					<div class="text-lg flex-1 ">제목자리입니다.</div>
					<div class="text-lg w-24 ">21.05.01</div>
				</div>
				<div class="cursor-pointer w-full px-2 lg:px-8 py-4 flex justify-end items-center border-t border-gray-300">
					<div class="h-96 text-base flex-1 pr-4 truncate	">
						내용 자리입니다.
					</div>
				</div>
			</div>
			<div class="flex justify-between items-center">
				<Link
					class="w-full md:w-auto cursor-pointer px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					to={"/business/" + props.pages + "/default"}
					onClick={() => window.scrollTo(0, 0)}
				>
					뒤로 가기
				</Link>
			</div>
		</div>
	);
};

export default NoticeDetail;
