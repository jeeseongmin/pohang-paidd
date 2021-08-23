import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

import Notice from "./notice";
import Counseling from "./counseling";
import Support from "./support";
import Volunteer from "./volunteer";
import WriteCounsel from "./writeCounsel";
import WriteSupport from "./writeSupport";
import WriteVolunteer from "./writeVolunteer";
import Menu from "../../components/Submenu";

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
					<Menu
						text={"공지사항"}
						current={page}
						page={1}
						address={"/participation/notice"}
						count={4}
					/>
					<Menu
						text={"건의 및 고충상담"}
						current={page}
						page={2}
						address={"/participation/counseling"}
						count={4}
					/>
					<Menu
						text={"후원"}
						current={page}
						page={3}
						address={"/participation/support"}
						count={4}
					/>
					<Menu
						text={"자원봉사"}
						current={page}
						page={4}
						address={"/participation/volunteer"}
						count={4}
					/>
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
