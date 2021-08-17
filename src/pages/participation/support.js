import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

const Support = () => {
	return (
		<div class="px-36 py-16">
			<h1 class="text-3xl font-bold">후원</h1>
			<div class="py-8 mb-8">
				<div class="text-xl leading-10">
					더 많은 발달장애인에게 좋은 서비스를 지원할 수 있도록 후원과 자원봉사
					신청을 받고 있습니다.{" "}
				</div>
				<div class="text-xl leading-10">
					후원금 및 물품후원은 법인세법 24조 및 소득세법 34조에 의해 소득공제
					혜택을 받을 수 있습니다. (기부영수증 발급)
				</div>
			</div>
			<div class="flex flex-row justify-center items-center mb-8">
				<img src="/image/participation-img1.png" alt="" />
			</div>
			<div class="w-full flex flex-col justify-center items-start mb-8">
				<h1 class="p-4 text-2xl text-purple-700 font-bold">후원참여 및 문의</h1>
				<div class=" w-full border-t-2 border-purple-700">
					<div class="px-4 flex flex-row text-xl py-2 border-b-2 border-gray-300">
						<div class="w-48 leading-10 mr-8">
							<div>포항시 지부</div>
							<div></div>
						</div>
						<div class="flex-1 leading-10">
							<div>
								참여 | 농협 717043-51-008938 (경북지적발달장애인복지협회
								포항시지부)
							</div>
							<div>문의 | 054) 249-9588</div>
						</div>
					</div>
					<div class="px-4 flex flex-row text-xl py-2 border-b-2 border-gray-300">
						<div class="w-48 leading-10 mr-8">
							<div>늘사랑주간보호센터</div>
							<div></div>
						</div>
						<div class="flex-1 leading-10">
							<div>참여 | 농협 717043-55-000638 (늘사랑주간보호센터)</div>
							<div>문의 | 054) 244-9577</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex justify-center items-center">
				<Link
					to="/participation/writeSupport"
					class="cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
				>
					후원 신청
				</Link>
			</div>
		</div>
	);
};

export default Support;
