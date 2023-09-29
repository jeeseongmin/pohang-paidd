import React, { useState } from 'react';
import { Box, Modal, TextField } from "@mui/material";
import Table from "../Organization/Table";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CreateOrganizationModal = ({onClose}) => {
  const [info, setInfo] = useState({
    orgId: "", // ex) org1, org2, org3...
    name: "", // ex) 포항시지적장애인자립지원센터
    path: "", // ex) Home > 주요사업 > 포항시지적장애인자립지원센터 > 센터소개
    description: "", // ex) ~~ 센터는 ~~ 의 일을 합니다.
    contents: [],
    // 커스텀 contents
    // [{
    //   "사업현황" : {
    //     "센터명" : "포항시지적장애인자립지원센터",
    //     "센터장" : ""
    //   },
    //   "이용안내" : {},
    //   "직원현황" : {}
    // }]
    
    employees: [],
    // 가장 하단에 배치되는 직원 현황에 대한 데이터
    // 직원 현황은 contents와 구조가 좀 다르고, 또 무조건 있는 부분이기 때문에 modeling 시에 일부러 다른 컬럼에 넣었다.
    // [{
    //   "직위" : "관리책임자",
    //   "성명" : "김옥희",
    //   "전화번호" : "054-253-9500",
    //   "업무내용" : ["", "", "", ""]
    // }]
  });
  
  const [tables, setTables] = useState([
    {
      시설현황: [
        {기관명: "늘사랑보호주간센터"},
        {센터장: "우숙경"},
        {사업개시일: "2002.07.01"},
        {전화: "054)244-9577"},
        {팩스: "054)254-9588"},
        {블로그: "https://cafe.daum.net/phaeho"},
      ]
    },
    {
      이용안내: [
        {대상자: "포항시에 사는 발달장애인 (나이: 20세~60세까지"},
        {이용시간: "평일 09:30 ~ 16:30"},
        {이용료: "월 250,000원 (중식비/교통비 포함)"},
        {이용절차: "image::https://drive.google.com/file/d/1wTFtGOKq75_hhh-DNw3jPgs-ffTgA14x/view?usp=sharing"}
      ]
    }
  ]);
  
  const [employees, setEmployees] = useState([{
    "직위": "관리책임자",
    "성명": "김옥희",
    "전화번호": "054-254-9500",
    "업무내용": ["", "", "", ""]
  }]);
  
  const addRow = (name) => {
    const cp = [...tables].map((item) => {
      if (Object.keys(item)[0] === name) {
        return {
          [name]: [...item[name], {"이름": "설명"}]
        }
      } else return item;
    })
    setTables(cp);
  }
  
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{...style, width: "80%", height: "80%", overflowY: "scroll"}}>
        <h1 class={"text-3xl font-bold mb-4"}>기관 정보 생성</h1>
        <div class={"mb-8"}>기관에 대한 기본 정보들을 입력해주세요.</div>
        <div class={"h-auto flex flex-col gap-4 mb-8"}>
          <TextField id="outlined-basic" label="기관 id" variant="outlined"/>
          <TextField id="outlined-basic" label="기관 이름(name)" variant="outlined"/>
          <TextField id="outlined-basic" label="기관 설명(description)" variant="outlined"/>
          <TextField id="outlined-basic" label="해당 웹 사이트 내 기관이 위치한 path를 입력해주세요." variant="outlined"/>
        </div>
        <div>
          <p class={"mb-2"}>기관에 대해 더 자세한 정보를 적을 수 있는 표를 작성합니다.</p>
          <button
            className="rounded-full w-full md:w-auto cursor-pointer justify-center transition delay-50 duration-300 px-4 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold "
          >
            표 추가하기
          </button>
          <div className={"w-full"}>
            <div>
              {
                tables.map((item, index) => {
                  const name = Object.keys(item)[0];
                  console.log(item, name);
                  return <div class={"mb-16"}>
                    <Table key={index} type={"create"} index={index} name={name} contents={item[name]} tables={tables}
                           setTables={setTables}/>
                    <div
                      onClick={() => addRow(name)}
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300 bg-gray-200 text-center font-bold hover:bg-gray-300 transition delay-100 duration-100 cursor-pointer'>
                      {/*<div className='w-1/6'>{key}</div>*/}
                      <div className='flex-1'>추가</div>
                    </div>
                  </div>
                })
              }
              <div className='mb-16 text-sm lg:text-base'>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
                  <div className='text-xl lg:text-2xl text-purple-700'>시설현황</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6'>기관명</div>
                  <div className='flex-1'>늘사랑보호주간센터</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6'>센터장</div>
                  <div className='flex-1'>우숙경</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6'>사업개시일</div>
                  <div className='flex-1'>2002.07.01</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6'>전화</div>
                  <div className='flex-1'>054{")"}244-9577</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6'>팩스</div>
                  <div className='flex-1'>054{")"}254-9588</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6'>블로그</div>
                  <div className='flex-1'>
                  <span
                    className='cursor-pointer underline'
                    // onClick={() => moveUrl("https://cafe.daum.net/phaeho")}
                  >
                    https://cafe.daum.net/phaeho
                  </span>
                  </div>
                </div>
              </div>
              <div className='mb-16 text-sm lg:text-base'>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
                  <div className='text-xl lg:text-2xl text-purple-700'>이용안내</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6'>대상자</div>
                  <div className='flex-1'>
                    포항시에 사는 발달장애인 (나이 : 20세~60세까지)
                  </div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6'>이용시간</div>
                  <div className='flex-1'>평일 09:30 ~ 16:30</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6'>이용료</div>
                  <div className='flex-1'>월 250,000원 (중식비/교통비 포함)</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6'>이용절차</div>
                  <div className='flex-1'>
                    <img
                      src='/image/org-intro-img1.png'
                      alt='img'
                      className='h-auto xl:h-36 object-cover'
                    />
                    {/* <div class="inline-block">
                     <div>입소의뢰/접수 ＞ 초기면접 ＞ 입소여부 결정 및 계획</div>
                     <div class="invisible">＞ 상담 및 타기관 연계</div>
                     </div>
                     <div class="inline-block">
                     <div>＞ 적응기간 (1주) ＞ 입소 및 이용</div>
                     <div>＞ 상담 및 타기관 연계</div>
                     </div> */}
                  </div>
                </div>
              </div>
              <div className='mb-16 text-sm lg:text-base'>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
                  <div className='text-xl lg:text-2xl text-purple-700'>직원현황</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b-2 border-purple-700'>
                  <div className='w-1/6'>
                    <span className='w-20 flex justify-center'>직위</span>
                  </div>
                  <div className='w-1/6 text-center'>성명</div>
                  <div className='w-2/6 text-center'>전화번호</div>
                  <div className='w-2/6 text-center'>업무내용</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6 hidden md:block'>
            <span className='w-20 flex justify-between'>
              <span>시</span>
              <span>설</span>
              <span>장</span>
            </span>
                  </div>
                  <div className='w-1/6 text-center'>우숙경</div>
                  <div className='w-2/6 text-center'>054-244-9577</div>
                  <div className='w-2/6'>운영전반 및 조직관리 총괄</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6 hidden md:block'>
            <span className='w-20 flex justify-between'>
              <span>팀</span>
              <span>장</span>
            </span>
                  </div>
                  <div className='w-1/6 text-center'>문수영</div>
                  <div className='w-2/6 text-center'>054-244-9577</div>
                  <div className='w-2/6'>실무 총괄 / 예결산 총괄 / 프로그램 평가</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6 hidden md:block'>
            <span className='w-20 flex justify-between'>
              <span>사</span>
              <span>회</span>
              <span>복</span>
              <span>지</span>
              <span>사</span>
            </span>
                  </div>
                  <div className='w-1/6 text-center'>박은숙</div>
                  <div className='w-2/6 text-center'>070-5154-6983</div>
                  <div className='w-2/6'>프로그램 기획 / 이용자 지원 / 상담</div>
                </div>
                <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6 hidden md:block'>
            <span className='w-20 flex justify-between'>
              <span>사</span>
              <span>회</span>
              <span>복</span>
              <span>지</span>
              <span>사</span>
            </span>
                  </div>
                  <div className='w-1/6 text-center'>백용화</div>
                  <div className='w-2/6 text-center'>070-5154-6973</div>
                  <div className='w-2/6'>프로그램 진행 / 이용자 지원</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
      </Box>
    </Modal>
  );
};

export default CreateOrganizationModal;
