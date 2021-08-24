import React, { useEffect } from "react";
import Subtitle from "../../components/Subtitle";
const { kakao } = window;

const Guide = () => {
	useEffect(() => {
		const container = document.getElementById("map");
		const options = {
			center: new kakao.maps.LatLng(36.07593409799162, 129.3899033750228),
			level: 3,
		};
		var map = new kakao.maps.Map(container, options);
		var markerPosition = new kakao.maps.LatLng(
			36.07593409799162,
			129.3899033750228
		);
		var markerPosition2 = new kakao.maps.LatLng(
			36.07593409799162,
			129.3899033750228
		);
		var marker = new kakao.maps.Marker({
			position: markerPosition,
		});

		var marker2 = new kakao.maps.Marker({
			position: markerPosition2,
		});

		marker.setMap(map);
		marker2.setMap(map);
	}, []);

	return (
		<div class="px-5 2xl:px-36 xl:px-32 md:px-8 py-8 lg:py-16">
			<Subtitle text={"오시는 길"} />
			<div class="w-full h-96 flex flex-col justify-center items-center shadow-xl my-8">
				<div id="map" style={{ width: "100%", height: "400px" }}></div>
			</div>
			<div class="text-xl mb-16">경상북도 포항시 북구 새천년대로 1307, 3층</div>
			<Subtitle text={"대중교통"} />
			<div class="text-xl my-8">롯데낙천대 앞 정류장 120번, 121번, 700번</div>
		</div>
	);
};

export default Guide;
