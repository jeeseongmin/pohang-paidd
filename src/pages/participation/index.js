import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

import Notice from "./notice";
import Counseling from "./counseling";
import Support from "./support";
import Volunteer from "./volunteer";
import WriteCounsel from "./writeCounsel";
import WriteSupport from "./writeSupport";
import WriteVolunteer from "./writeVolunteer";

const Index = ({ match }) => {
	const [page, setPage] = useState(1);

	useEffect(() => {
		console.log(match.url);
		if (match.url === "/participation/notice") {
			setPage(1);
		} else if (match.url === "/participation/counseling") {
			setPage(2);
		} else if (match.url === "/participation/support") {
			setPage(3);
		} else if (match.url === "/participation/volunteer") {
			setPage(4);
		} else if (match.url === "/participation/writeCounsel") {
			setPage(5);
		}
	}, [match.url]);
	return (
		<div class="h-full z-0">
			<div>
				<div class="z-0 h-44 bg-purple-100 flex justify-center items-center ">
					<h1 class="text-4xl">참여마당</h1>
				</div>
				<div class="px-36 w-full cursor-pointer  bottom-0 flex flex-row justify-center bg-purple-100">
					<Link
						to="/participation/notice"
						class={
							"w-1/4 max-w-xl py-4 text-center hover:bg-white hover:text-purple-700 hover:font-bold " +
							(page === 1
								? "text-purple-700 bg-white font-bold"
								: "text-white bg-purple-300")
						}
					>
						공지사항
					</Link>
					<Link
						to="/participation/counseling"
						class={
							"w-1/4 max-w-xl py-4 text-center hover:bg-white hover:text-purple-700 hover:font-bold " +
							(page === 2 || page === 5
								? "text-purple-700 bg-white font-bold"
								: "text-white bg-purple-300")
						}
					>
						건의 및 고충상담
					</Link>
					<Link
						to="/participation/support"
						class={
							"w-1/4 max-w-xl py-4 text-center hover:bg-white hover:text-purple-700 hover:font-bold " +
							(page === 3
								? "text-purple-700 bg-white font-bold"
								: "text-white bg-purple-300")
						}
					>
						후원
					</Link>
					<Link
						to="/participation/volunteer"
						class={
							"w-1/4 max-w-xl py-4 text-center hover:bg-white hover:text-purple-700 hover:font-bold " +
							(page === 4
								? "text-purple-700 bg-white font-bold"
								: "text-white bg-purple-300")
						}
					>
						자원봉사
					</Link>
				</div>
			</div>
			<div class="w-full h-auto">
				<switch>
					<Route exact path="/participation">
						<Notice />
					</Route>
					<Route exact path="/participation/notice">
						<Notice />
					</Route>
					<Route exact path="/participation/writeCounsel">
						<WriteCounsel />
					</Route>
					<Route exact path="/participation/counseling">
						<Counseling />
					</Route>
					<Route path="/participation/support">
						<Support />
					</Route>
					<Route path="/participation/volunteer">
						<Volunteer />
					</Route>
					<Route path="/participation/writeVolunteer">
						<WriteVolunteer />
					</Route>
					<Route path="/participation/writeSupport">
						<WriteSupport />
					</Route>
				</switch>
			</div>
		</div>
	);
};

export default Index;
