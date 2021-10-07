import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import Subtitle from "../../../components/Subtitle";
import { useDispatch, useSelector } from "react-redux";
import { HiHome } from "react-icons/hi";

const Index = () => {
	const currentEmail = useSelector((state) => state.setting.currentEmail);

	return (
		<div>
			<div class="flex flex-row justify-between">
				<Subtitle text={"후원"} />
			</div>
			<div class="mt-2 mb-2 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
				<div class="mr-2">
					<HiHome size={16} />
				</div>
				Home {">"} 참여마당 {">"} 후원
			</div>
			<div class="py-8 mb-2 md:mb-4">
				<div class="text-base lg:text-lg leading-7 lg:leading-9">
					더 많은 발달장애인에게 좋은 서비스를 지원할 수 있도록 후원과 자원봉사
					신청을 받고 있습니다.{" "}
				</div>
				<div class="text-base lg:text-lg mb-4 md:mb-8 leading-7 lg:leading-9">
					후원금 및 후원물품은 법인세법 24조 및 소득세법 34조에 의해 소득공제
					혜택을 받을 수 있습니다. (기부영수증 발급)
				</div>
			</div>
			<div class="flex flex-row justify-center items-center mb-8 lg:mb-16">
				<img
					src="/image/participation-img1.png"
					alt=""
					class="w-full md:w-3/4 lg:w-2/3"
				/>
			</div>
			<div class="w-full flex flex-col justify-center items-start mb-8">
				<h1 class="px-2 lg:px-4 pb-4 text-xl md:text-2xl text-purple-700 font-bold">
					후원참여 및 문의
				</h1>
				<div class=" w-full border-t-2 border-purple-700">
					<div class="px-2 lg:px-4 flex flex-col md:flex-row text-xl py-2 border-b-2 border-gray-300">
						<div class="w-48 leading-10 mr-8 font-bold md:font-normal flex justify-center items-center">
							<div>포항시 지부</div>
							{/* <div></div> */}
						</div>
						<div class="flex-1 leading-10 text-base md:text-xl ">
							<div class="leading-7 md:leading-10">
								참여 | 농협 717043-51-008938 (경북지적발달장애인복지협회
								포항시지부)
							</div>
							<div>문의 | 054) 249-9588</div>
						</div>
					</div>
					<div class="px-2 lg:px-4 flex flex-col md:flex-row text-xl py-2 border-b-2 border-gray-300">
						<div class="w-48 leading-10 mr-8 font-bold md:font-normal flex justify-center items-center">
							<div class="text-center">
								늘사랑주간보호센터<br></br>(사회복지이용시설)
							</div>
						</div>
						<div class="flex-1 leading-10 text-base md:text-xl">
							<div class="leading-7 md:leading-10">
								참여 | 농협 717043-55-000638 (늘사랑주간보호센터)
							</div>
							<div>문의 | 054) 244-9577</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class={
					"mt-8 flex items-center flex-col md:flex-row " +
					(currentEmail === "master" ? "justify-around" : "justify-center")
				}
			>
				<Link
					to="/participation/writeSupport/0"
					onClick={() => document.getElementById("scrollRef").scrollTo(0, 0)}
					class="w-full md:w-auto justify-center cursor-pointer mb-4 md:mb-0 px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
				>
					후원 신청
				</Link>
				{currentEmail === "master" ? (
					<Link
						to="/participation/supportList/0"
						onClick={() => document.getElementById("scrollRef").scrollTo(0, 0)}
						class="w-full md:w-auto justify-center cursor-pointer px-2 md:px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
					>
						후원 목록
					</Link>
				) : null}
			</div>
		</div>
	);
};

export default Index;
