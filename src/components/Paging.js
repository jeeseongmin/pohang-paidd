import React, { useEffect, useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const Paging = (props) => {
	const [step, setStep] = useState(1);
	const [arr, setArr] = useState([]);

	const setPage = props.setPage;
	const page = props.page;
	const total = props.total;

	useEffect(() => {
		// 현재 page에 따라 첫 step과 arr 구성하기
		// let _step = Math.ceil(page / 5);
		setStep((Math.ceil(page / 5) - 1) * 5 + 1);
		//
		let _arr = [];
		for (let i = step; i < step + 5; i++) {
			if (i <= total) {
				_arr.push(i);
			}
		}
		setArr(_arr);
	}, [page, total]);

	function PageBtn(props) {
		const current = props.current;
		return (
			<div
				onClick={() => setPage(current)}
				class={
					"mr-2 w-8 h-8 flex justify-center items-center cursor-pointer " +
					(page === current
						? "text-white border-2 border-purple-700 bg-purple-700  "
						: "border border-gray-300 text-gray-300 hover:bg-purple-300 hover:text-purple-500")
				}
			>
				{current}
			</div>
		);
	}

	function LeftBtn() {
		return step !== 1 ? (
			<div class="mr-2 cursor-pointer">
				<VscChevronLeft />
			</div>
		) : null;
	}

	function RightBtn() {
		return step + 5 <= total ? (
			<div class="cursor-pointer">
				<VscChevronRight />
			</div>
		) : null;
	}

	return (
		<div class="flex flex-row w-full justify-center items-center lg:w-auto mb-4 lg:mb-0">
			<LeftBtn />
			{arr.map((element, index) => {
				return <PageBtn current={element} key={element} />;
			})}
			<RightBtn />
		</div>
	);
};

export default Paging;
