import React, { useEffect } from "react";
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
		<div class="px-36 py-16">
			<h1 class="text-3xl font-bold mb-8">오시는 길</h1>
			<div class="w-full h-96 flex flex-col justify-center items-center shadow-xl mb-8">
				<div id="map" style={{ width: "100%", height: "400px" }}></div>
			</div>
			<div class="text-xl mb-16">경상북도 포항시 북구 새천년대로 1307, 3층</div>
			<h1 class="text-3xl font-bold mb-8">대중교통</h1>
			<div class="text-xl mb-8">롯데낙천대 앞 정류장 120번, 121번, 700번</div>
		</div>
	);
};

export default Guide;
