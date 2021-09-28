import React from "react";
import { Route, Link } from "react-router-dom";

const Footer = () => {
	return (
		<div class="h-36 flex justify-start pl-5 lg:pl-5 2xl:px-36 xl:px-32">
			<div class="h-full w-full pt-2 pb-8 md:py-8 border-t-2 border-gray-200 flex flex-col md:flex-row justify-start items-center ">
				<div class="h-full w-1/2 mr-0 md:w-1/3 md:mr-24 lg:w-1/4 lg:mr-36 mb-2 lg:mb-0 flex justify-start md:justify-start items-center">
					<img src="/image/logo.png" class="w-full object-cover" alt="logo" />
				</div>
				<div class="ml-0 md:ml-8 text-xs">
					<p>경북 포항시 북구 새천년대로 1307 3층 Tel: 054-249-9588</p>
					<p>copyright(c) paidd. all rights reserved. WEB by. 두드림터치</p>
				</div>
				{/* <div class="w-auto invisible hidden lg:flex justify-center items-center cursor-pointer">
					<img src="/image/logo.png" class="h-full lg:h-full" alt="logo" />
				</div> */}
			</div>
		</div>
	);
};

export default Footer;
