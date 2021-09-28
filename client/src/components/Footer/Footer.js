import React from "react";
import { Route, Link } from "react-router-dom";

const Footer = () => {
	return (
		<div class="px-0 flex justify-start xl:px-36 lg:px-32 md:px-8 ">
			<div class="w-full pt-2 pb-8 md:py-8 border-t-2 border-gray-200 flex flex-col md:flex-row justify-between items-center">
				<div class="w-full md:w-auto mb-2 lg:mb-0 flex justify-center md:ustify-start items-center">
					<img
						src="/image/logo.png"
						class="h-full md:h-full object-cover"
						alt="logo"
					/>
				</div>
				<div class="ml-0 md:ml-8 text-xs">
					<p>경북 포항시 북구 새천년대로 1307 3층 Tel: 054-249-9588</p>
					<p>copyright(c) paidd. all rights reserved. WEB by. 두드림터치</p>
				</div>
				<div class="invisible hidden lg:flex justify-center items-center cursor-pointer">
					<img src="/image/logo.png" class="h-full lg:h-full" alt="logo" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
