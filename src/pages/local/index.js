import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import LocalTable from "./localTable";
import LocalMenu from "../../components/Menu/LocalMenu";

const Index = ({ match }) => {
	const [selected, setSelected] = useState(0);

	const changeSelected = (num) => {
		setSelected(num);
		window.scrollTo(0, 0);
	};

	return (
		<div class="h-full z-0">
			<div class="z-0 h-56 bg-purple-100 flex justify-center items-center relative">
				<h1 class="text-4xl">지역복지</h1>
			</div>
			<div class="w-full h-auto px-36">
				<div class="py-8 flex flex-wrap">
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element, index) => {
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
			<div class="px-36">
				<LocalTable index={selected} key={selected} />
			</div>
		</div>
	);
};

export default Index;
