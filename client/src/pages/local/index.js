import React, { useState, useEffect } from "react";
import LocalTable from "./localTable";
import LocalMenu from "../../components/Menu/LocalMenu";
import Layout from "../../components/Layout";

const Index = ({ match }) => {
	const [selected, setSelected] = useState(0);
	const [transForm, setTransForm] = useState(false);

	useEffect(() => {
		setTransForm(true);
	}, []);
	const changeSelected = (num) => {
		setSelected(num);
		window.scrollTo(0, 0);
	};

	return (
		<Layout>
			<div class="h-full z-0">
				<div class="z-0 h-56 bg-purple-100 flex justify-center items-center relative">
					<h1 class="text-4xl">지역복지</h1>
					<div
						class={
							"absolute w-full h-1/2 lg:h-full hidden lg:flex flex-row justify-between items-end bottom-0 px-0 2xl:px-36 xl:px-32 "
						}
					>
						<img
							src="/image/index5-img1.png"
							alt="index-img"
							class={
								"h-1/2 translate-x-20 object-cover " +
								(transForm
									? "transform translate-x-30 delay-150 duration-700 "
									: "")
							}
						/>
						<img
							src="/image/index5-img2.png"
							alt="index-img"
							class={
								"h-full  object-cover " +
								(transForm
									? "transform -translate-x-10 delay-150 duration-700 "
									: "-translate-x-20")
							}
						/>
					</div>
				</div>
				<div class="w-full h-auto px-3 py-2 2xl:px-36 xl:px-32 md:px-3 lg:pt-8">
					<div class="py-4 md:pt-4 flex flex-wrap">
						{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((element, index) => {
							return (
								<LocalMenu
									index={element}
									selected={selected}
									changeSelected={changeSelected}
								/>
							);
						})}
					</div>
				</div>
				<div class="w-full h-auto px-3 py-2 2xl:px-36 xl:px-32 md:px-3 lg:py-8">
					<LocalTable index={selected} key={selected} />
				</div>
			</div>
		</Layout>
	);
};

export default Index;
