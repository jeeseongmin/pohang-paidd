import React, { useEffect, useState, useRef } from "react";
import { Route, Link, withRouter, useHistory } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import Subtitle from "../../../components/Subtitle";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const VolunteerDetail = (props) => {
	const [loading, setLoading] = useState(false);

	const dispatch = useDispatch();
	const id = props.id;

	const history = useHistory();
	const [info, setInfo] = useState({});

	useEffect(() => {
		axios
			.post(
				"/api/volunteer/" + id,
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

	return (
		<div class="w-full h-auto">
			<div class="flex flex-row justify-between items-center mb-4 md:mb-8">
				<div>
					<Subtitle text={"자원봉사 신청내역"} />
				</div>
			</div>
			{loading ? (
				<>
					<form class="border-t-2 border-b-2 border-purple-700 py-6 mb-4">
						<div class="mb-4">
							<h1 class="text-md mb-4 font-bold">봉사자 정보</h1>
						</div>
						<div class="flex flex-row justify-start items-center mb-4">
							<p class="w-32 text-sm text-right">이름 : </p>
							<input
								type="text"
								class="flex-1 px-4 py-2 border-2 ml-4 border-gray-300 outline-none focus:border-purple-700"
								placeholder="성명(단체명)"
								disabled={true}
								value={info.name}
							/>
						</div>
						<div class="flex flex-row justify-start items-center mb-4">
							<p class="w-32 text-sm text-right">생년월일 : </p>
							<input
								type="text"
								class="flex-1 px-4 py-2 border-2 ml-4 border-gray-300 outline-none focus:border-purple-700"
								disabled={true}
								placeholder="생년월일 앞 6자리"
								value={info.birth}
							/>
						</div>
						<div class="flex flex-row justify-start items-center mb-4">
							<p class="w-32 text-sm text-right">연락처 : </p>
							<input
								type="text"
								class="flex-1 px-4 py-2 border-2 ml-4 border-gray-300 outline-none focus:border-purple-700"
								disabled={true}
								placeholder="휴대폰번호 (하이픈은 제외하고 입력해주세요)"
								value={info.phone}
							/>
						</div>
						<div class="flex flex-row justify-start items-center mb-4">
							<p class="w-32 text-sm text-right">VMS ID/연번 : </p>
							<input
								type="text"
								class="flex-1 px-4 py-2 border-2 ml-4 border-gray-300 outline-none focus:border-purple-700"
								disabled={true}
								placeholder="VMS ID/연번정보"
								value={info.vms}
							/>
						</div>
						<div class="flex flex-row justify-start items-center mb-4">
							<p class="w-32 text-sm text-right">최근봉사활동 : </p>
							<input
								type="text"
								class="flex-1 px-4 py-2 border-2 ml-4 border-gray-300 outline-none focus:border-purple-700"
								disabled={true}
								placeholder="최근봉사활동"
								value={info.activity}
							/>
						</div>
						<div class="flex flex-row justify-start items-center mb-4">
							<p class="w-32 text-sm text-right">희망봉사내용 : </p>
							<input
								type="text"
								class="flex-1 px-4 py-2 border-2 ml-4 border-gray-300 outline-none focus:border-purple-700"
								disabled={true}
								placeholder="희망봉사내용"
								value={info.hopeContent}
							/>
						</div>
						<div class="flex flex-row justify-start items-center">
							<p class="w-32 text-sm text-right">희망봉사 시간 : </p>
							<input
								type="text"
								class="flex-1 px-4 py-2 border-2 ml-4 border-gray-300 outline-none focus:border-purple-700"
								disabled={true}
								placeholder="희망봉사 시간"
								value={info.hopeTime}
							/>
						</div>
					</form>
					<div class="flex flex-col md:flex-row justify-between items-center">
						<Link
							class="w-full md:w-auto mb-4 md:mb-4 justify-center cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
							to="/participation/volunteerList/0"
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

export default withRouter(VolunteerDetail);
