import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Subtitle from "../../../../../components/Subtitle";

const Gallery = () => {
	const [page, setPage] = useState(1);
	return (
		<div>
			<div class="flex flex-row justify-between items-center mb-8">
				<Subtitle text={"포토갤러리"} />

				<div class="w-1/2 flex flex-row items-center relative justify-end ">
					<input
						type="text"
						name="name"
						placeholder="검색어"
						class="w-full h-full py-2 px-4 mr-2 border border-gray-300 outline-none"
					/>
					<BsSearch size={28} class="cursor-pointer text-gray-300" />
				</div>
			</div>
			<div class="w-full flex flex-row flex-wrap border-b border-gray-200 ">
				<div class="w-full lg:w-1/4 md:w-1/2 px-4 mb-8 cursor-pointer">
					<div class="mb-4 h-48 object-cover border border-gray-500">
						<img class="w-full h-full" src="/image/noImage.png" alt="logo" />
					</div>
					<div>
						<h1>
							<b>제목1</b>
						</h1>
						<p class="text-gray-300">21.07.01</p>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/2 px-4 mb-8 cursor-pointer">
					<div class="mb-4 h-48  object-cover border border-gray-500">
						<img class="w-full h-full" src="/image/noImage.png" alt="logo" />
					</div>
					<div>
						<h1>
							<b>제목2</b>
						</h1>
						<p class="text-gray-300">21.07.01</p>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/2 px-4 mb-8 cursor-pointer">
					<div class="mb-4 h-48  object-cover border border-gray-500">
						<img class="w-full h-full" src="/image/noImage.png" alt="logo" />
					</div>
					<div>
						<h1>
							<b>제목3</b>
						</h1>
						<p class="text-gray-300">21.07.01</p>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/2 px-4 mb-8 cursor-pointer">
					<div class="mb-4 h-48  object-cover border border-gray-500">
						<img class="w-full h-full" src="/image/noImage.png" alt="logo" />
					</div>
					<div>
						<h1>
							<b>제목4</b>
						</h1>
						<p class="text-gray-300">21.07.01</p>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/2 px-4 mb-8 cursor-pointer">
					<div class="mb-4 h-48 object-cover border border-gray-500">
						<img class="w-full h-full" src="/image/noImage.png" alt="logo" />
					</div>
					<div>
						<h1>
							<b>제목5</b>
						</h1>
						<p class="text-gray-300">21.07.01</p>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/2 px-4 mb-8 cursor-pointer">
					<div class="mb-4 h-48  object-cover border border-gray-500">
						<img class="w-full h-full" src="/image/noImage.png" alt="logo" />
					</div>
					<div>
						<h1>
							<b>제목6</b>
						</h1>
						<p class="text-gray-300">21.07.01</p>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/2 px-4 mb-8 cursor-pointer">
					<div class="mb-4 h-48  object-cover border border-gray-500">
						<img class="w-full h-full" src="/image/noImage.png" alt="logo" />
					</div>
					<div>
						<h1>
							<b>제목7</b>
						</h1>
						<p class="text-gray-300">21.07.01</p>
					</div>
				</div>
				<div class="w-full lg:w-1/4 md:w-1/2 px-4 mb-8 cursor-pointer">
					<div class="mb-4 h-48  object-cover border border-gray-500">
						<img class="w-full h-full" src="/image/noImage.png" alt="logo" />
					</div>
					<div>
						<h1>
							<b>제목8</b>
						</h1>
						<p class="text-gray-300">21.07.01</p>
					</div>
				</div>
			</div>
			<div class="flex flex-row justify-center items-center py-8">
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

export default Gallery;
