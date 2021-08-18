import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import LocalTable from "./localTable";

const Index = ({ match }) => {
	const [page, setPage] = useState(0);
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		console.log(match.url);
		if (match.url === "/participation/notice") {
			setPage(1);
		} else if (match.url === "/participation/counseling") {
			setPage(2);
		} else if (match.url === "/participation/support") {
			setPage(3);
		} else if (match.url === "/participation/volunteer") {
			setPage(4);
		} else if (match.url === "/participation/writeCounsel") {
			setPage(5);
		}
	}, [match.url]);
	return (
		<div class="h-full z-0">
			<div class="z-0 h-56 bg-purple-100 flex justify-center items-center relative">
				<h1 class="text-4xl">지역복지</h1>
			</div>
			<div class="w-full h-auto px-36">
				<div class="py-8 flex flex-wrap">
					<div
						onClick={() => setSelected(0)}
						class={
							"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
							(selected === 0
								? "border border-purple-700 bg-purple-700 text-white font-bold"
								: "border border-gray-300 text-gray-300")
						}
					>
						장애인단체
					</div>
					<div
						onClick={() => setSelected(1)}
						class={
							"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
							(selected === 1
								? "border border-purple-700 bg-purple-700 text-white font-bold"
								: "border border-gray-300 text-gray-300")
						}
					>
						거주시설
					</div>
					<div
						onClick={() => setSelected(2)}
						class={
							"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
							(selected === 2
								? "border border-purple-700 bg-purple-700 text-white font-bold"
								: "border border-gray-300 text-gray-300")
						}
					>
						지역사회재활시설
					</div>
					<div
						onClick={() => setSelected(3)}
						class={
							"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
							(selected === 3
								? "border border-purple-700 bg-purple-700 text-white font-bold"
								: "border border-gray-300 text-gray-300")
						}
					>
						직업재활시설
					</div>
					<div
						onClick={() => setSelected(4)}
						class={
							"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
							(selected === 4
								? "border border-purple-700 bg-purple-700 text-white font-bold"
								: "border border-gray-300 text-gray-300")
						}
					>
						활동지원기관
					</div>
					<div
						onClick={() => setSelected(5)}
						class={
							"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
							(selected === 5
								? "border border-purple-700 bg-purple-700 text-white font-bold"
								: "border border-gray-300 text-gray-300")
						}
					>
						방문목욕기관
					</div>
					<div
						onClick={() => setSelected(6)}
						class={
							"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
							(selected === 6
								? "border border-purple-700 bg-purple-700 text-white font-bold"
								: "border border-gray-300 text-gray-300")
						}
					>
						주간활동지원기관
					</div>
					<div
						onClick={() => setSelected(7)}
						class={
							"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
							(selected === 7
								? "border border-purple-700 bg-purple-700 text-white font-bold"
								: "border border-gray-300 text-gray-300")
						}
					>
						방과후활동기관
					</div>
					<div
						onClick={() => setSelected(8)}
						class={
							"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
							(selected === 8
								? "border border-purple-700 bg-purple-700 text-white font-bold"
								: "border border-gray-300 text-gray-300")
						}
					>
						응급/긴급기관
					</div>
					<div
						onClick={() => setSelected(9)}
						class={
							"cursor-pointer text-sm mr-2 mb-2 px-4 py-2 w-auto rounded-full " +
							(selected === 9
								? "border border-purple-700 bg-purple-700 text-white font-bold"
								: "border border-gray-300 text-gray-300")
						}
					>
						기타공공기관
					</div>
				</div>
			</div>
			<div class="px-36">
				<LocalTable index={selected} key={selected} />
			</div>
		</div>
	);
};

export default Index;
