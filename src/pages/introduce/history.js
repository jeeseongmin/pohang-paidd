import React from "react";
import Subtitle from "../../components/Subtitle";

const history = () => {
	return (
		<div class="px-5 2xl:px-36 xl:px-32 md:px-8 py-8 lg:py-16">
			<Subtitle text={"연혁"} />

			<div class="flex flex-col justify-center items-center my-8">
				<div>
					<img src="/image/intro-img2.png" alt="history" />
				</div>
			</div>
		</div>
	);
};

export default history;
