import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const Notice = () => {
	const [page, setPage] = useState(1);
	return (
		<div class="px-36 py-16">
			<div class="flex flex-row justify-between items-center mb-8">
				<h1 class="text-3xl font-bold">공지사항</h1>
				<div class="flex flex-row items-center relative">
					<input
						type="text"
						name="name"
						placeholder="검색어"
						class="w-full h-full py-2 px-4 mr-2 border border-gray-300 outline-none"
					/>
					<BsSearch size={28} class="cursor-pointer text-gray-300" />
				</div>
			</div>
			<div class="w-full h-auto mb-8">
				{/* 딱 10개 씩만 로드하기 */}
				<div class="w-full px-8 py-4 flex justify-end items-center border-b-2 border-purple-600">
					<div class="text-lg flex-1 ">제목</div>
					<div class="text-lg w-24 ">날짜</div>
				</div>
				<div class="cursor-pointer w-full px-8 py-4 flex justify-end items-center border-b border-gray-300 hover:bg-gray-100">
					<div class="text-base flex-1 pr-4 truncate	">
						제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.제목입니다.
					</div>
					<div class="text-base w-24 ">21.05.01</div>
				</div>
				<div class="w-full px-8 py-4 flex justify-end items-center border-b border-gray-300">
					<div class="text-base flex-1 pr-4 truncate	">제목입니다.</div>
					<div class="text-base w-24 ">21.05.01</div>
				</div>
				<div class="w-full px-8 py-4 flex justify-end items-center border-b border-gray-300">
					<div class="text-base flex-1 pr-4 truncate	">제목입니다.</div>
					<div class="text-base w-24 ">21.05.01</div>
				</div>
				<div class="w-full px-8 py-4 flex justify-end items-center border-b border-gray-300">
					<div class="text-base flex-1 pr-4 truncate	">제목입니다.</div>
					<div class="text-base w-24 ">21.05.01</div>
				</div>
				<div class="w-full px-8 py-4 flex justify-end items-center border-b border-gray-300">
					<div class="text-base flex-1 pr-4 truncate	">제목입니다.</div>
					<div class="text-base w-24 ">21.05.01</div>
				</div>
				<div class="w-full px-8 py-4 flex justify-end items-center border-b border-gray-300">
					<div class="text-base flex-1 pr-4 truncate	">제목입니다.</div>
					<div class="text-base w-24 ">21.05.01</div>
				</div>
				<div class="w-full px-8 py-4 flex justify-end items-center border-b border-gray-300">
					<div class="text-base flex-1 pr-4 truncate	">제목입니다.</div>
					<div class="text-base w-24 ">21.05.01</div>
				</div>
				<div class="w-full px-8 py-4 flex justify-end items-center border-b border-gray-300">
					<div class="text-base flex-1 pr-4 truncate	">제목입니다.</div>
					<div class="text-base w-24 ">21.05.01</div>
				</div>
				<div class="w-full px-8 py-4 flex justify-end items-center border-b border-gray-300">
					<div class="text-base flex-1 pr-4 truncate	">제목입니다.</div>
					<div class="text-base w-24 ">21.05.01</div>
				</div>
				<div class="w-full px-8 py-4 flex justify-end items-center border-b border-gray-300">
					<div class="text-base flex-1 pr-4 truncate	">제목입니다.</div>
					<div class="text-base w-24 ">21.05.01</div>
				</div>
			</div>
			<div class="flex flex-row justify-center items-center">
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
		</div>
	);
};

export default Notice;
