import React from "react";

const NoticeLayout = (props) => {
	const info = props.info;
	const changeInfo = props.changeInfo;
	const titleRef = props.titleRef;
	const contentRef = props.contentRef;
	return (
		<div class="w-full h-auto mb-4">
			{/* 딱 10개 씩만 로드하기 */}
			<div class="w-full pt-4 pb-2 mb-2 flex justify-end items-center border-t-2 border-purple-600">
				<input
					ref={titleRef}
					type="text"
					class="flex-1 p-4 border-2 border-gray-300 outline-none focus:border-purple-700"
					onChange={(e) => changeInfo(e, "title")}
					value={info.title}
					placeholder="제목"
				/>
			</div>
			<div class="cursor-pointer w-full pt-2 pb-4 flex justify-end items-center border-b border-gray-300">
				<textarea
					ref={contentRef}
					class="w-full h-96 p-4 border-2 border-gray-300 outline-none focus:border-purple-700 resize-none	"
					onChange={(e) => changeInfo(e, "content")}
					value={info.content}
					placeholder="내용"
				></textarea>
			</div>
		</div>
	);
};

export default NoticeLayout;
