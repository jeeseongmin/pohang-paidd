import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
	useEffect(() => {
		console.log("load!");
		// window.scrollTo(0, 0);
		document.getElementById("root").scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Navbar />
			<div class={"z-20 h-full pt-14 lg:pt-16 flex flex-col "}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
