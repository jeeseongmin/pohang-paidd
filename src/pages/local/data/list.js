// 지역복지 탭에서 사용되는 모든 기관들에 대한 기관명, 전화번호, 주소에 대한 정보입니다.
var dataList = [
	// 장애인단체
	[
		{
			name: "(사)한국지체장애인협회 경북협회 포항시지회",
			phone: "277-0844",
			address: "포항시 남구 형산강북로 371",
		},
		{
			name: "(사)경북시각장애인연합회 포항지회",
			phone: "274-4495",
			address: "포항시 남구 중앙로 116, 2층",
		},
		{
			name: "(사)경북농아인협회 포항시지회",
			phone: "274-9980",
			address: "포항시 북구 죽도로 32, 3층",
		},
		{
			name: "(사)한국교통장애인협회 포항시지회",
			phone: "231-9700",
			address: "포항시 남구 섬안로 185",
		},
		{
			name: "(사)경북지적발달장애인복지협회 포항시지부",
			phone: "249-9588",
			address: "포항시 북구 새천년대로 1307, 3층",
		},
		{
			name: "(사)한국장애인부모회 포항시지부",
			phone: "252-3143",
			address: "포항시 북구 소티재로 126번길 4",
		},
		{
			name: "(사)경북신체장애인복지회 포항시지부",
			phone: "247-1335",
			address: "포항시 북구 두호로 37번길 6-4",
		},
		{
			name: "(사)경북장애인정보화협회 포항시지회",
			phone: "242-1335",
			address: "포항시 북구 법원로 8번길 20",
		},
		{
			name: "(사)경북뇌병변장애인인권협회 포항시지회",
			phone: "242-6622",
			address: "포항시 남구 중앙로 90 3층",
		},
		{
			name: "(사)경북장애인부모회 포항시지부",
			phone: "278-0113",
			address: "포항시 남구 상대로 152 1층",
		},
		{
			name: "(사)경북장애인부모회 포항시지부",
			phone: "286-4956",
			address: "포항시 북구 소티재로 151번길 9",
		},
		{
			name: "(사)한국신장장애인협회 경북협회 포항지부",
			phone: "274-0774",
			address: "포항시 남구 상대로 111",
		},
		{
			name: "(사)한국농어촌장애인진흥회 포항시지회",
			phone: "277-4400",
			address: "포항시 남구 상공로 31 섬안빌딩 4층",
		},
		{
			name: "(사)한국척수장애인협회 포항시지회",
			phone: "281-1574",
			address: "포항시 북구 장량로 87번길 6",
		},
		{
			name: "(사)전국산재장애인단체연합회 포항시지회",
			phone: "251-9370",
			address: "포항시 북구 법원로 63번길 21",
		},
		{
			name: "(사)경북시각장애인연합회",
			phone: "277-2551",
			address: "포항시 북구 법원로 105",
		},
		{
			name: "(사)경북장애인권익협회",
			phone: "274-1316",
			address: "포항시 북구 소티재로 151번길 9",
		},
		{
			name: "(사)경상북도장애인부모회",
			phone: "276-2023",
			address: "포항시 남구 연일중앙로 8, 2층",
		},
		{
			name: "(사)한국농어촌장애인진흥회 경북지부",
			phone: "281-0015",
			address: "포항시 남구 상대로 155",
		},
	],
	// 거주시설
	[
		{
			name: "나전복지마을",
			phone: "281-0015",
			address: "포항시 남구 장기면 장기로 1229번길 39",
		},
		{
			name: "도음터기쁨의집",
			phone: "255-0041",
			address: "포항시 북구 기계면 고지길 62-63",
		},
		{
			name: "마리아의집",
			phone: "272-0586",
			address: "포항시 남구 대잠동길 17-1",
		},
		{
			name: "민들레공동체",
			phone: "246-5005",
			address: "포항시 북구 청하면 용산길 277-6",
		},
		{
			name: "베들레헴공동체",
			phone: "262-8580",
			address: "포항시 북구 송라면 대전길 56-83",
		},
		{
			name: "엘림소망의집",
			phone: "256-6003",
			address: "포항시 북구 송라면 동해대로 2792-100",
		},
		{
			name: "예우리",
			phone: "716-1616",
			address: "포항시 남구 동해면 금광로 79",
		},
		{
			name: "향기마을",
			phone: "262-9870",
			address: "포항시 북구 흥해읍 사망공원길 502",
		},
		{
			name: "미소단기보호센터",
			phone: "293-8307",
			address: "포항시 남구 오천읍 구정길 23번길 20",
		},
		{
			name: "포항장애인단기보호시설",
			phone: "282-3633",
			address: "포항시 문화로 9번길 25",
		},
		{
			name: "나눔의 집",
			phone: "275-5509",
			address: "포항시 북구 양덕로 6번길 47-11",
		},
		{
			name: "멘토의 집",
			phone: "277-9270",
			address: "포항시 남구 희망대로 927-2",
		},
		{
			name: "예랑의 집",
			phone: "275-5509",
			address: "포항시 북구 양덕로 6번길 47-11",
		},
		{
			name: "우리집",
			phone: "275-5509",
			address: "포항시 북구 양덕로 6번길 47-11",
		},
		{
			name: "은혜의 집",
			phone: "277-9270",
			address: "포항시 남구 문예로 82번길 31",
		},
		{
			name: "카리타스장애인 공동생활가정",
			phone: "285-7842",
			address: "포항시 북구 문화로 9번길 25",
		},
		{
			name: "평화로운 집",
			phone: "249-9540",
			address: "포항시 북구 기계면 기계로 428번길 23-7",
		},
		{
			name: "포항장애인공동생활가정",
			phone: "285-7842",
			address: "포항시 북구 문화로 9번길 25",
		},
	],
	// 지역사회재활시설
	[
		{
			name: "포항시장애인종합복지관",
			phone: "282-4009",
			address: "포항시 남구 형산강북로 389",
		},
		{
			name: "포항시북부장애인종합복지관",
			phone: "231-1117",
			address: "포항시 북구 새천년대로 1486",
		},
		{
			name: "경상북도여성장애인복지관",
			phone: "290-9200",
			address: "포항시 남구 오천읍 냉천로 252번길 5-10",
		},
		{
			name: "경상북도시각장애인복지관",
			phone: "253-5900",
			address: "포항시 남구 섬안로 175",
		},
		{
			name: "경상북도시각장애인 주간보호센터",
			phone: "253-5900",
			address: "포항시 남구 섬안로 175",
		},
		{
			name: "늘사랑주간보호센터",
			phone: "244-9577",
			address: "포항시 북구 새천년대로 1307",
		},
		{
			name: "담쟁이주간보호센터",
			phone: "273-5304",
			address: "포항시 남구 연일읍 중단길 50",
		},
		{
			name: "밀알주간보호센터",
			phone: "282-9082",
			address: "포항시 북구 법원로 97번길 20-11",
		},
		{
			name: "사랑의 동산",
			phone: "261-5758",
			address: "포항시 북구 흥해읍 달전로 187",
		},
		{
			name: "선린동산",
			phone: "252-4406",
			address: "포항시 북구 삼호로 480-33",
		},
		{
			name: "선재장애인주간보호센터",
			phone: "248-6166",
			address: "포항시 남구 오천읍 문덕로 11번길 32-4",
		},
		{
			name: "우함주간보호센터",
			phone: "291-7972",
			address: "포항시 남구 청림서길 35번길 6",
		},
		{
			name: "주간보호센터 해뜨락",
			phone: "292-6111",
			address: "포항시 북구 청하면 청하로 243번길 24",
		},
		{
			name: "참좋은주간보호센터",
			phone: "231-7874",
			address: "포항시 북구 청하면 동해대로 2514-30",
		},
		{
			name: "포항장애인주간보호시설",
			phone: "282-3633",
			address: "포항시 북구 문화로 9번길 25",
		},
		{
			name: "중증장애인자립지원센터",
			phone: "231-1170",
			address: "포항시 북구 두호로 35",
		},
		{
			name: "포항시장애인체육회",
			phone: "232-7711",
			address: "포항시 남구 희망대로 810 포항체육관 1층",
		},
		{
			name: "포항시수어통역센터",
			phone: "274-9980",
			address: "포항시 북구 죽도로 32",
		},
		{
			name: "포항시장애인 생활이동지원센터",
			phone: "274-4495",
			address: "포항시 남구 중앙로 116",
		},
		{
			name: "경북장애인 생활이동지원센터",
			phone: "277-2551",
			address: "포항시 북구 법원로 105",
		},
		{
			name: "경북점자도서관",
			phone: "277-2999",
			address: "포항시 북구 법원로 105",
		},
	],
	// 작업재활시설
	[
		{
			name: "포항바이오파크",
			phone: "255-9500",
			address: "포항시 남구 섬안로 185",
		},
		{
			name: "카리타스보호작업시설",
			phone: "244-4009",
			address: "포항시 북구 청하면 사방공원길 35",
		},
		{
			name: "포항나누우리터",
			phone: "262-8151",
			address: "포항시 북구 흥해읍 사방공원길 502",
		},
		{
			name: "포항시장애인재활작업장",
			phone: "251-0844",
			address: " 포항시 북구 청하면 동해대로 2694-41",
		},
	],
	// 활동지원기관
	[
		{
			name: "(사)경북지적발달장애인복지협회 포항시지부",
			phone: "253-9500",
			address: "포항시 북구 새천년대로 1301, 3층 ",
		},
		{
			name: "포항시장애인종합복지관",
			phone: "282-7646",
			address: "포항시 남구 형산강북로 389",
		},
		{
			name: "경북시각장애인복지관",
			phone: "283-5903",
			address: "포항시 남구 섬안로 175",
		},
		{
			name: "경북장애인권익협회 포항시지회",
			phone: "231-4956",
			address: "포항시 북구 소티재로 151번길 9, 2층",
		},
		{
			name: "한국척수장애인협회 경상북도협회 포항시지회",
			phone: "281-1574",
			address: "포항시 북구 양덕남로 155, 1층",
		},
	],
	// 방문목욕기관
	[
		{
			name: "(사)전국산재장애인단체연합회 포항시협회",
			phone: "251-9370",
			address: "포항시 북구 법원로 63번길21, 1층",
		},
		{
			name: "단비재가복지센터",
			phone: "256-2200",
			address: "포항시 북구 중앙상가 6길 1, 2층",
		},
		{
			name: "우리재가복지센터",
			phone: "275-2411",
			address: "포항시 북구 중흥로 225번길3, 3층",
		},
	],
	// 주간활동지원기관
	[
		{
			name: "한국장애인부모회",
			phone: "252-3143",
			address: "포항시 북구 소티재로 126번길 4",
		},
		{
			name: "(사)경상북도장애인부모회",
			phone: "278-0113",
			address: "포항시 남구 대잠길 39-1",
		},
		{
			name: "사회복지법인 해솔",
			phone: "277-9270",
			address: "포항시 남구 중앙로 110, 2층 ",
		},
	],
	// 방과후활동기관
	[
		{
			name: "(사)경북지적발달장애인복지협회 포항시지부",
			phone: "249-9588",
			address: "포항시 북구 새천년대로 1301, 3층 ",
		},
		{
			name: "(사)한국장애인부모회 포항시지부",
			phone: "252-3143",
			address: "포항시 북구 소티재로 126번길 4",
		},
	],
	// 응급/긴급기관
	[
		{
			name: "포항시북구장애인종합복지관",
			phone: "231-1117",
			address: "포항시 북구 새천년대로 1486",
		},
		{
			name: "삼성의료기",
			phone: "050-815-8275",
			address: "포항시 북구 용흥로 26",
		},
		{
			name: "동산보청기의료기",
			phone: "246-2558",
			address: "포항시 북구 대신로 40",
		},
		{
			name: "경북신체장애인복지회 포항시지부",
			phone: "247-1335",
			address: "포항시 북구 두호로 37번길 6-4",
		},
	],
	// 기타공공기관
	[
		{
			name: "포항시청 노인장애인복지과",
			phone: "270-2971",
			address: "포항시 남구 시청로 1 ",
		},
		{
			name: "포항시 북구청 주민복지팀",
			phone: "240-7141",
			address: "포항시 남구 희망대로 790 ",
		},
		{
			name: "포항시 남구청 주민복지팀",
			phone: "270-6141",
			address: "포항시 북구 중앙로 325 ",
		},
		{
			name: "포항교육지원청 특수교육지원센터",
			phone: "242-4531",
			address: "포항시 북구 서동로 47번길 23",
		},
		{
			name: "경북장애인권익옹호기관",
			phone: "282-8295",
			address: "포항시 남구 대잠동길 4-5",
		},
	],
	// 화재 및 재난
	[
		{
			name: "119",
			phone: "(국번없이)119",
			address: "-",
		},
		{
			name: "포항북부소방서",
			phone: "260-2119 / 260-2251",
			address: "포항시 북구 중앙로 332",
		},
		{
			name: "포항남부소방서",
			phone: "292-0119 / 286-1193",
			address: "포항시 남구 동해안로 5890",
		},
	],
	// 응급상황
	[
		{
			name: "응급의료안전센터",
			phone: "1339",
			address: "-",
		},
		{
			name: "포항경찰서(북부)",
			phone: "(국번없이)182",
			address: "포항시 북구 중앙로 331",
		},
		{
			name: "포항경찰서(남부)",
			phone: "(국번없이)182",
			address: "포항시 남구 연일로 55",
		},
	],
	// 응급상담 및 병원
	[
		{
			name: "포항의료원",
			phone: "247-0551",
			address: "포항시 북구 용흥로 36",
		},
		{
			name: "좋은선린병원",
			phone: "247-6119",
			address: "포항시 북구 대신로 43",
		},
		{
			name: "포항세명기독병원",
			phone: "275-0005",
			address: "포항시 남구 포스코대로 351",
		},
		{
			name: "포항성모병원",
			phone: "272-0151",
			address: "포항시 남구 대잠동길 17",
		},
	],
];

export default dataList;
