import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

// 공지사항 탭
import Notice from "./notice";
import WriteNotice from "./notice/writeNotice";
import NoticeDetail from "./notice/noticeDetail";
// 자원봉사 탭
import Volunteer from "./volunteer";
import VolunteerList from "./volunteer/volunteerList";
import VolunteerDetail from "./volunteer/volunteerDetail";
import WriteVolunteer from "./volunteer/writeVolunteer";
// 건의 및 고충 상담 탭
import Counseling from "./counseling";
import WriteCounsel from "./counseling/writeCounsel";
import CounselingDetail from "./counseling/counselingDetail";
// 후원 탭
import Support from "./support";
import SupportList from "./support/supportList";
import SupportDetail from "./support/supportDetail";
import WriteSupport from "./support/writeSupport";

import Submenu from "../../components/Submenu";
import Layout from "../../components/Layout";

const Index = ({ match }) => {
	const [transForm, setTransForm] = useState(false);

	useEffect(() => {
		setTransForm(true);
	}, []);

	return (
		<Layout>
			<div class="h-full z-0">
				<div class="relative mb-16 lg:mb-8">
					<div class="z-0 h-44 bg-purple-100 flex justify-center items-center relative">
						<h1 class="text-2xl font-bold md:font-normal md:text-4xl">
							참여마당
						</h1>
						<div
							class={
								"z-30 absolute w-full h-1/2 lg:h-full flex flex-row justify-between items-center -bottom-10 px-0 2xl:px-36 xl:px-32 md:px-8 " +
								(transForm
									? "transform -translate-y-10 delay-150 duration-700 "
									: "")
							}
						>
							<img
								src="/image/index4-img1.png"
								alt="index-img"
								class="h-full object-cover"
							/>
							<img
								src="/image/index4-img2.png"
								alt="index-img"
								class="h-full object-cover"
							/>
						</div>
					</div>
					<div class="z-40 absolute w-full cursor-pointer bottom-22 flex flex-row justify-center bg-purple-100 px-0 2xl:px-36 xl:px-32 md:px-8">
						<Submenu menu={4} submenu={1} />
						<Submenu menu={4} submenu={2} />
						<Submenu menu={4} submenu={3} />
						<Submenu menu={4} submenu={4} />
					</div>
				</div>
				<div class="w-full h-auto px-5 py-8 2xl:px-36 xl:px-32 md:px-8 lg:py-16">
					<switch>
						<Route exact path="/participation/notice/0">
							<Notice />
						</Route>
						<Route exact path="/participation/detailNotice/:id">
							<NoticeDetail id={match.params.type} />
						</Route>
						<Route exact path="/participation/writeNotice/0">
							<WriteNotice />
						</Route>
						<Route exact path="/participation/writeCounsel/0">
							<WriteCounsel />
						</Route>
						<Route exact path="/participation/writeVolunteer/0">
							<WriteVolunteer />
						</Route>
						<Route exact path="/participation/writeSupport/0">
							<WriteSupport />
						</Route>
						<Route exact path="/participation/counseling/0">
							<Counseling />
						</Route>
						<Route exact path="/participation/detailCounseling/:id">
							<CounselingDetail id={match.params.type} />
						</Route>
						<Route exact path="/participation/support/0">
							<Support />
						</Route>
						<Route exact path="/participation/supportList/0">
							<SupportList />
						</Route>
						<Route exact path="/participation/supportDetail/:id">
							<SupportDetail id={match.params.type} />
						</Route>
						<Route exact path="/participation/volunteer/0">
							<Volunteer />
						</Route>
						<Route exact path="/participation/volunteerList/0">
							<VolunteerList />
						</Route>
						<Route exact path="/participation/volunteerDetail/:id">
							<VolunteerDetail id={match.params.type} />
						</Route>
					</switch>
				</div>
			</div>
		</Layout>
	);
};

export default Index;
