import React from "react";
import Subtitle from "../../components/Subtitle";
const purpose = () => {
	return (
		<>
			<div class="px-5 2xl:px-36 xl:px-32 md:px-8 pt-8 lg:pt-16">
				<Subtitle text={"설립목적"} />
			</div>
			<div class="px-5 2xl:px-36 xl:px-32 md:px-8 relative">
				<div class="w-full relative">
					<img
						class="w-full object-contain "
						src="/image/intro-purpose.png"
						alt="purpose"
					/>
				</div>
			</div>
		</>
	);
};

export default purpose;
