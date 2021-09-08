import React, { useState, useRef } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
	setLoginToken,
	setCurrentEmail,
	setCurrentPassword,
	setProfile,
} from "../../reducers/setting";

const Index = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const [info, setInfo] = useState({
		email: "",
		password: "",
	});

	const changeInfo = (e, type) => {
		const cp = { ...info };
		cp[type] = e.target.value;
		setInfo(cp);
	};

	const loginCheck = () => {
		axios
			.post(
				"/api/login",
				{
					key: process.env.REACT_APP_API_KEY,
					email: info.email,
					password: info.password,
				},
				{
					headers: {
						"Content-type": "application/json",
						Accept: "application/json",
					},
				}
			)
			.then((response) => {
				if (response.data.loginToken) {
					dispatch(setLoginToken("login"));
					dispatch(setCurrentEmail(info.email));
					dispatch(setCurrentPassword(info.password));
					dispatch(setProfile("off"));
					sessionStorage.setItem("loginToken", true);
					alert("로그인되었습니다.");
					history.push("/");
				} else {
					emailRef.current.focus();
				}
			})
			.catch((response) => {
				console.log("Error!");
			});
	};

	return (
		<div class="w-full h-full py-16 flex justify-center items-center bg-purple-200">
			<div class="mb-16">
				<div class="text-purple-500 font-bold text-center text-2xl pb-4 leading-9">
					포항시 발달장애인협회<br></br>관리자 로그인
				</div>
				<div class="w-96 h-auto flex flex-col px-4 py-2 justify-center items-center border border-purple-700 bg-white shadow-xl">
					<input
						ref={emailRef}
						type="text"
						class="w-full p-4 border-b-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "email")}
						placeholder="관리자 ID"
					/>
					<input
						ref={passwordRef}
						type="text"
						class="w-full p-4 border-b-2 border-gray-300 outline-none focus:border-purple-700"
						onChange={(e) => changeInfo(e, "password")}
						placeholder="관리자 password"
					/>
					<div class="w-full pt-6 pb-4 justify-center items-center">
						<div
							onClick={loginCheck}
							class="cursor-pointer border py-2 mb-4 text-center border-purple-700 bg-purple-700 rounded-sm text-white font-bold shadow-xl hover:bg-purple-500"
						>
							로그인
						</div>
						<div
							onClick={() => history.push("/")}
							class="cursor-pointer border py-2 text-center border-gray-600 bg-gray-500 rounded-sm text-white font-bold shadow-xl hover:bg-gray-300 hover:border-gray-400"
						>
							홈으로
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
