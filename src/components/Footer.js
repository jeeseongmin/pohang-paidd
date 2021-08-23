import React from "react";
import { Route, Link } from "react-router-dom";

const Footer = () => {
	return (
		<div class="px-36 flex justify-end py-8">
			<Link to="/admin" class="bg-purple-300 text-white px-6 py-2 rounded-full">
				로그인
			</Link>
		</div>
	);
};

export default Footer;
