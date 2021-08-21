import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

const volunteer = () => {
	return (
		<>
			<div class="px-36 py-16 mb-8">
				<div class="flex flex-row justify-between items-center mb-4">
					<h1 class="text-3xl font-bold">자원봉사</h1>
				</div>
				<div class="text-xl leading-10">
					더 많은 발달장애인에게 좋은 서비스를 지원할 수 있도록 후원과 자원봉사
					신청을 받고 있습니다.
				</div>
			</div>
			<div class="w-full">
				<img
					class="w-full"
					src="/image/participation-img2.png"
					alt="volunteer"
				/>
			</div>
			<div class="flex flex-row justify-center items-center my-16">
				<Link
					to="/participation/writeVolunteer"
					class="cursor-pointer px-16 py-4 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
				>
					자원봉사 신청
				</Link>
			</div>
		</>
	);
};

export default volunteer;
