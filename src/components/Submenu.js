import React from "react";
import { Route, Link } from "react-router-dom";

const Submenu = (props) => {
	const current = props.current;
	const page = props.page;
	const text = props.text;
	const address = props.address;
	const count = "w-1/" + props.count;
	console.log(count);
	return (
		<>
			<Link
				to={address}
				class={
					count +
					" max-w-xl py-4 text-center bg-purple-white " +
					(current === page
						? "text-purple-700 bg-white"
						: "text-white bg-purple-400 hover:bg-purple-300")
				}
			>
				{text}
			</Link>
		</>
	);
};

export default Submenu;
