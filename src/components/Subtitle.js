import React from "react";

const Subtitle = (props) => {
	const text = props.text;
	return (
		<>
			<h1 class="text-2xl font-bold lg:text-3xl">{text}</h1>
		</>
	);
};

export default Subtitle;
