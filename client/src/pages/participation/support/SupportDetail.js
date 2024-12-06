import React, { useEffect, useState, useRef } from "react";
import { Route, Link, withRouter, useHistory } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import CreatableSelect from "react-select/creatable";
import Subtitle from "../../../components/Subtitle";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import CircularProgress from "@material-ui/core/CircularProgress";

const SupportDetail = (props) => {
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const history = useHistory();

	const id = props.id;
	const [info, setInfo] = useState({});

	useEffect(() => {
		axios
			.post(
				"/api/support/" + id,
				{ key: process.env.REACT_APP_API_KEY },
				{
					headers: {
						"Content-type": "application/json",
						Accept: "application/json",
					},
				}
			)
			.then((Response) => {
				const cp = {
					...Response.data,
				};
				setInfo(cp);
				setLoading(true);
			})
			.catch((Error) => {
				console.log(Error);
			});
	}, []);

	const periodicalOptions = [
		{ value: "10000", label: "10000" },
		{ value: "30000", label: "30000" },
		{ value: "50000", label: "50000" },
	];

	return (
		<div class="w-full h-auto">
			<div class="flex flex-row justify-between items-center mb-4 md:mb-8">
				<div>
					<Subtitle text={"후원 정보 확인"} />
				</div>
			</div>
			{loading ? (
				<>
					<form class="border-t-2 border-b-2 border-purple-700 py-3 md:py-6 mb-4">
						<div class="mb-4">
							<h1 class="text-md mb-4 font-bold">후원자 정보</h1>
						</div>
						<div class="flex flex-row justify-between items-center mb-4">
							<p class="w-24 text-sm text-right">이름 : </p>
							<input
								type="text"
								class="flex-1 ml-4 px-4 py-2 border-2 border-gray-300 outline-none focus:border-purple-700"
								placeholder="성명(단체명)"
								value={info.name}
								disabled={true}
							/>
						</div>
						<div class="flex flex-row justify-start items-center mb-4">
							<p class="w-24 text-sm text-right">주민번호 : </p>
							<input
								type="text"
								class="flex-1 ml-4 px-4 py-2 border-2 border-gray-300 outline-none focus:border-purple-700"
								placeholder="주민(사업자)번호 (하이픈은 제외하고 입력해주세요)"
								value={info.private}
								disabled={true}
							/>
						</div>
						<div class="flex flex-row justify-start items-center mb-4">
							<p class="w-24 text-sm text-right">연락처 : </p>
							<input
								type="text"
								class="flex-1 ml-4 px-4 py-2 border-2 border-gray-300 outline-none focus:border-purple-700"
								placeholder="휴대폰번호 (하이픈은 제외하고 입력해주세요)"
								value={info.phone}
								disabled={true}
							/>
						</div>
						<div class="flex flex-row justify-start items-center mb-4">
							<p class="w-24 text-sm text-right">이메일 : </p>
							<input
								type="text"
								class="flex-1 px-4 py-2 ml-4 border-2 border-gray-300 outline-none focus:border-purple-700"
								placeholder="이메일"
								value={info.email}
								disabled={true}
							/>
						</div>
						<div class="flex flex-row justify-start items-center mb-4">
							<p class="w-24 text-sm text-right">주소 : </p>
							<input
								type="text"
								class="flex-1 px-4 py-2 ml-4 border-2 border-gray-300 outline-none focus:border-purple-700"
								placeholder="주소"
								value={info.address}
								disabled={true}
							/>
						</div>
						<div class="mt-8 mb-4">
							<h1 class="text-md mb-4 font-bold">후원 선택</h1>
						</div>
						<div class="w-full h-full">
							<div class="w-full flex flex-row items-center mb-4">
								<div
									class={
										"w-5 h-5 border-2 rounded-sm border-gray-300 flex justify-center items-center " +
										(info.periodical !== null ? "bg-gray-300" : "bg-white")
									}
								>
									{info.periodical !== null && (
										<AiOutlineCheck size={20} class="text-white" />
									)}
								</div>
								<div
									class={
										"flex flex-row items-center " +
										(info.periodical !== null ? "text-black" : "text-gray-500")
									}
								>
									<div class="mx-4 text-sm">정기후원</div>
									<div
										class={
											"w-0 h-6 hidden md:flex border-r " +
											(info.periodical !== null
												? "border-black"
												: "border-gray-500")
										}
									></div>
									<input
										type="text"
										class="w-1/2 md:flex-1 px-4 py-2 mx-4 border-2 border-gray-300 outline-none focus:border-purple-700"
										placeholder=""
										value={info.periodical}
										disabled={true}
									/>
									<div class="text-sm">원</div>
								</div>
							</div>
							<div class="w-full flex flex-row items-center mb-4">
								<div
									class={
										"cursor-pointer w-5 h-5 border-2 rounded-sm border-gray-300 flex justify-center items-center " +
										(info.temporary !== null ? "bg-gray-300" : "bg-white")
									}
								>
									{info.temporary !== null && (
										<AiOutlineCheck size={20} class="text-white" />
									)}
								</div>
								<div
									class={
										"flex flex-row items-center " +
										(info.temporary !== null ? "text-black" : "text-gray-500")
									}
								>
									<div class="mx-4 text-sm">일시후원</div>
									<div
										class={
											"w-0 h-6 hidden md:flex border-r " +
											(info.temporary !== null
												? "border-black"
												: "border-gray-500")
										}
									></div>
									<input
										type="text"
										class="w-1/2 md:flex-1 px-4 py-2 mx-4 border-2 border-gray-300 outline-none focus:border-purple-700"
										placeholder=""
										value={info.temporary}
										disabled={true}
									/>
									<div class="text-sm">원</div>
								</div>
							</div>
							<div class="w-full flex flex-row items-center mb-2 md:mb-0 ">
								<div
									class={
										"cursor-pointer w-5 h-5 border-2 rounded-sm border-gray-300 flex justify-center items-center " +
										(info.goods !== "" ? "bg-gray-300" : "bg-white")
									}
								>
									{info.goods !== "" && (
										<AiOutlineCheck size={20} class="text-white" />
									)}
								</div>
								<div
									class={
										"flex flex-row items-center " +
										(info.goods !== "" ? "text-black" : "text-gray-500")
									}
								>
									<div class="mx-4 text-sm">물품후원</div>
									<div
										class={
											"w-0 h-6 hidden md:block border-r " +
											(info.goods !== "" ? "border-black" : "border-gray-500")
										}
									></div>
									<input
										type="text"
										class="w-1/2 md:flex-1 px-4 py-2 mx-4 border-2 border-gray-300 outline-none focus:border-purple-700"
										placeholder=""
										value={info.goods}
										disabled={true}
									/>
								</div>
							</div>
						</div>
					</form>
					<div class="flex flex-col md:flex-row justify-between items-center">
						<Link
							class="w-full md:w-auto mb-4 md:mb-4 justify-center cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
							to="/participation/supportList/0"
							onClick={() =>
								document.getElementById("scrollRef").scrollTo(0, 0)
							}
						>
							뒤로 가기
						</Link>
					</div>
				</>
			) : (
				<div class="w-full h-full flex justify-center items-center">
					<CircularProgress />
				</div>
			)}
		</div>
	);
};

export default withRouter(SupportDetail);
