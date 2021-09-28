import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import Subtitle from "../../../../../components/Subtitle";
import { HiHome } from "react-icons/hi";

const Business = () => {
	const [toggleObj, setToggleObj] = useState({
		top: false,
		bottom: false,
	});

	const onToggle = (e, type) => {
		const cp = { ...toggleObj };
		cp[type] = !cp[type];
		setToggleObj(cp);
	};

	return (
		<div>
			<Subtitle text={"주요사업"} />
			<div class="mt-2 mb-12 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
				<div class="mr-2">
					<HiHome size={16} />
				</div>
				Home {">"} 주요사업 {">"} 장애인활동사업 {">"} 주요사업
			</div>
			<div class="flex flex-wrap justify-around gap-4 mt-4 md:mt-8">
				<div
					onClick={(e) => onToggle(e, "top")}
					class="text-sm md:text-xl cursor-pointer w-full font-semibold rounded-sm px-2 md:px-4 py-2 border-2 border-purple-300 flex flex-row justify-between items-center"
				>
					<span>장애인활동지원사업 이용하기 ( 이용자 )</span>
					{!toggleObj.top && (
						<div class="text-gray-400">
							<BsChevronUp size={28} />
						</div>
					)}
					{toggleObj.top && (
						<div class="text-gray-400">
							<BsChevronDown size={28} />
						</div>
					)}
				</div>
				{toggleObj.top && (
					<div class="w-full">
						<h1 class="font-bold mb-3">1. 신청자격</h1>
						<p class="mb-2">- 대상</p>
						<div class="border border-black p-4 leading-8 mb-5">
							· 만 6세이상 ~ 만 65세 미만의 「장애인복지법」상 등록된 모든
							장애인(19.07.01개정)<br></br>· 65세 미만으로 「노인 장기
							요양법」에 의한 장기요양 급여를 받는 사람은 제외<br></br> ·
							활동지원 수급자였다가 만65세 이후에 「노인장기요양보험법」에 따른
							장기요양급여를 신청하여 장기요양 등급 외 판정을 받아
							활동지원급여가 적절하다고 판단된 장애인 (소득 수준 이나 장애유형에
							관계없이 신청가능)
						</div>
						<p class="mb-2">- 서비스 신청 제외 대상(법 제 5조)</p>
						<div class="border border-black p-4 leading-8 mb-5">
							<div class="mb-4">
								· 「국민기초생활 보장법」 제32조에 따른 보장시설에 입소중인 경우
								<br></br>· 「의료법 」 제3조에 따른 의료기관에 30일 초과하여
								입원 중인 자 <br></br>· 「장애인복지법」 제 32조의2에 따른 장애
								등록한 재외동포 및 외국인 <br></br>· 교정시설 또는 치료
								감호시설에 수용중인 경우 <br></br>· 다른 법령에 의해
								활동지원급여와 비슷한 급여를 받는 경우
							</div>
							<div>
								<div class="pl-2">
									{" "}
									* 보장시설 「국민기초생활 보장법」 제32조
								</div>
								<div class="pl-2 flex flex-row border-l-4 border-gray-300">
									<div class="w-1/2">
										1. 장애인 거주시설 <br></br>3. 아동복지시설 및 통합시설
										<br></br>5. 노숙인재활시설 및 노숙인요양시설
									</div>
									<div class="w-1/2">
										2. 노인주거복지시설 및 노인의료복지시설 <br></br>
										4. 정신질환자사회복귀시설 및 정신요양시설 <br></br>
										6. 기타 보건복지부령이 정하는 시설
									</div>
								</div>
							</div>
						</div>
						<p class="mb-2">- 만 65세 도래자의 경우</p>
						<div class="border border-black p-4 leading-8 mb-5">
							· 수급자가 만65세가 되는 경우에는 그 해당월의 다음달 말까지
							수급자격을 인정합니다.<br></br>
							예)2021년 7월 1일에 만 65세가 되는 경우 2021년 8월31일까지 지원
							받을 수 있습니다.<br></br>· 다만, 수급자격 유효기간 내
							노인장기요양 등급외 판정을 받은 사람은 수급자격 유효기간 범위내의
							잔여기간으로 합니다.
						</div>
						<h1 class="font-bold mt-8 mb-8">2. 활동지원서비스 신청절차</h1>
						<div class="mb-8 flex flex-row justify-center items-center">
							<img src="/image/business-b2-img1.png" alt="img1" />
						</div>
						<h1 class="font-bold mt-8 mb-8">3. 우리 기관 이용절차</h1>
						<div class="mb-8 flex flex-row justify-center items-center">
							<img src="/image/business-b2-img2.png" alt="img2" />
						</div>
						<div class="mb-8 flex flex-row justify-center items-center">
							<img src="/image/business-b2-img3.png" alt="img2" />
						</div>
						<h1 class="font-bold mt-8 mb-4">4. 급여 내용</h1>
						<div class="leading-8 mb-8">
							1) 월 한도액(매월 이용할 수 있는 급여) = 종합점수에 따른 활동지원
							급여 <br></br>2) 활동지원급여: 종합점수에 따라 1구간~15구간으로
							구분하여 지원
						</div>
						<h1 class="font-bold mt-8 mb-4">5. 서비스 내용</h1>
						<div class="leading-8 mb-8 border-t border-purple-700">
							<div class="border-b border-gray-200 px-2 lg:px-8 py-3 flex flex-row justify-center items-center">
								<div class="w-1/4">신체활동지원</div>
								<div class="flex-1">
									개인위생관리, 신체기능 유지 및 증진, 식사도움, 실내이동 도움
									등
								</div>
							</div>
							<div class="border-b border-gray-200 px-2 lg:px-8 py-3 flex flex-row justify-center items-center">
								<div class="w-1/4">가사활동지원</div>
								<div class="flex-1">청소 및 주변정돈, 세탁, 취사 등</div>
							</div>
							<div class="border-b border-gray-200 px-2 lg:px-8 py-3 flex flex-row justify-center items-center">
								<div class="w-1/4">사회활동지원</div>
								<div class="flex-1">등하교 및 출퇴근 지원, 외출 시 동행 등</div>
							</div>
							<div class="border-b border-gray-200 px-2 lg:px-8 py-3 flex flex-row justify-center items-center">
								<div class="w-1/4">그 밖의 제공 서비스</div>
								<div class="flex-1">
									수급자 자녀의 양육보조 (만 6세 이하 등 예외적인 경우에 한함)
									<br></br>
									생활상의 문제 상담 및 의사소통 도움 등 열거되지 않은 서비스
								</div>
							</div>
							<div class="px-2 lg:px-8 py-3 flex flex-col justify-center items-start">
								<h1>* 가사활동 지원</h1>
								<div class="px-4 border-l-4 border-gray-300">
									· 수급자 외의 가족의 가사활동지원은 포함하지 않음<br></br> ·
									이용자와 함께 있을 때 지원이 가능하며, 이용자 없이 가사지원을
									진행할 시 부정수급에 해당함 <br></br>(단, 수급자 또는 수급자의
									배우자가 출산 후 6개월 이내에 한하여 예외적으로 인정)
								</div>
							</div>
							<h1 class="font-bold mt-8 mb-4">
								6. 본인부담금 (시행일 : 20.06.01)
							</h1>
							<div class="leading-8 mb-8">
								1) 기초생활수급자 : 면제<br></br>2) 차상위자 : 20,000원<br></br>
								3) 기준 중위소득 70%, 120%, 180%로 분류되어 차등 부과 (21,000원
								~)<br></br>
								4) 본인부담금 납부 : 전월 25일~말일까지 납부되어야 바우처 자동
								생성<br></br>
							</div>
						</div>
					</div>
				)}
				<div
					onClick={(e) => onToggle(e, "bottom")}
					class="text-sm md:text-xl cursor-pointer w-full font-semibold rounded-sm px-2 md:px-4 py-2 border-2 border-purple-300 flex flex-row justify-between items-center"
				>
					<span>장애인활동지원사업 이용하기 ( 활동지원자 )</span>
					{!toggleObj.bottom && (
						<div class="text-gray-400">
							<BsChevronUp size={28} />
						</div>
					)}
					{toggleObj.bottom && (
						<div class="text-gray-400">
							<BsChevronDown size={28} />
						</div>
					)}
				</div>
				{toggleObj.bottom && (
					<div class="w-full">
						<h1 class="font-bold mb-3">1. 대상</h1>
						<p class="mb-2">
							- 만 18세 이상의 활동지원이 가능한자로 교육기관에서
							보건복지부장관이 정한 교육과정을 수료한 자
						</p>

						<div class="border border-black p-4 leading-8 mb-5">
							<div>
								<div class="mb-2">
									* 신청제외대상(아래 사항 중 하나라도 포함되면 불가)
								</div>
								<div class="pl-2 flex flex-row border-l-4 border-gray-300">
									· 「정신보건법」 제3호 제1호에 따른 정신질환자<br></br>
									(단, 전문의가 활동지원인력으로서 적합하다고 인정하는 사람
									제외)<br></br>· 마약·대마 또는 향정신성 의약품 중독자<br></br>
									· 피성년후견인, 피한정후견인<br></br>· 금고 이상의 형을
									선고받고 그 형의 진행이 끝나지 아니하였거나 그 집행을 받지
									아니하기로 확정되지 아니한 사람<br></br>· 성폭력 범조의 처벌
									등에 관한 특별법(제3조~제10조,제14조 )에 규정된 죄로 금고
									이상의 형을 선고받은 사람 <br></br>· 법 제30조 제1항 제2호 및
									제3호에 해당하여 활동지원인력의 자격이 상실된 날부터 1년이
									지나지 아니한 사람
								</div>
							</div>
						</div>
						<h1 class="font-bold mt-8 mb-8">2. 활동지원서비스 신청절차</h1>
						<div class="mb-8 flex flex-row justify-center items-center">
							<img src="/image/business-b2-img4.png" alt="img1" />
						</div>
						<h1 class="font-bold mt-8 mb-4">3. 근무 내용</h1>
						<div class="leading-8 mb-8">
							<span class="invisible">3. </span>신체활동지원, 가사활동지원,
							사회활동지원, 그 밖의 제공 서비스
						</div>
						<h1 class="font-bold mt-8 mb-4">4. 근무시간</h1>
						<div class="leading-8 mb-8">
							<span class="invisible">4. </span>이용자와 협의 후 조정 가능
						</div>
						<h1 class="font-bold mt-8 mb-4">5. 모집방법</h1>
						<div class="leading-8 mb-8">
							<span class="invisible">5. </span>수시, 중개기관 내방접수
						</div>
						<h1 class="font-bold mt-8 mb-4">6. 제출서류</h1>
						<div class="leading-8 mb-8">
							<span class="invisible">6. </span>교육이수증 사본 1부, 사진 1매,
							유사자격증(해당자)
						</div>
						<h1 class="font-bold mt-8 mb-4">7. 근무조건 및 기타사항</h1>
						<div class="leading-8 mb-8">
							<span class="invisible">7. </span>1) 급여 : 시간 장
							10,470원(최저임금+주휴수당) + 별도의 수당<br></br>{" "}
							<span class="invisible">7. </span>2) 배상책임 및 단체상해보험 가입
							<br></br>
							<span class="invisible">7. </span>3) 4대보험 가입 (월 60시간 이상){" "}
							<br></br>
							<span class="invisible">7. </span>4) 퇴직연금 가입 (월 60시간
							이상, 1년 이상 근무 후 퇴사시 지급)
							<br></br>
							<span class="invisible">7. </span>5) 기관에서 진행하는 기초 교육
							2시간 이수 (신규 활동지원사 대상)
							<br></br>
							<span class="invisible">7. </span>6) 보수교육 참석 (연 8시간 이상)
						</div>
						<h1 class="font-bold mt-8 mb-4">8. 접수방법</h1>
						<div class="leading-8 mb-8">
							<span class="invisible">8. </span>교육이수증 사본 1부, 사진 1매,
							유사자격증(해당자)
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Business;
