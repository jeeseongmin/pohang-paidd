import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<div class={"z-20 h-full pt-14 lg:pt-16 flex flex-col"}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
