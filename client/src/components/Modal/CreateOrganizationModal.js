import React, { useState } from 'react';
import { Box, Modal, TextField } from "@mui/material";
import Table from "../Organization/Table";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

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
    orgId: "org1", // ex) org1, org2, org3...
    name: "포항시지적장애인자립지원센터", // ex) 포항시지적장애인자립지원센터
    path: "Home > 주요사업 > 포항시지적장애인자립지원센터 > 센터소개", // ex) Home > 주요사업 > 포항시지적장애인자립지원센터 > 센터소개
    description: "포항시지적장애인자립지원센터는, 포항시에 사는 발달장애인이 스스로 자신의 삶을 이끌어갈 수 있도록 지원합니다. \n발달장애인과 가족이 다른 사람들과 어울려 함게 살아가는 것을 돕습니다.", // ex) ~~ 센터는 ~~ 의 일을 합니다.
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
  
  const onChangeInfo = (e) => {
    const _info = {...info};
    _info[e.target.name] = e.target.value;
    setInfo(_info);
    
  }
  
  const [tables, setTables] = useState([
    {
      시설현황: [
        {기관명: ["늘사랑보호주간센터"]},
        {센터장: ["우숙경"]},
        {사업개시일: ["2002.07.01"]},
        {전화: ["054)244-9577"]},
        {팩스: ["054)254-9588"]},
        {블로그: ["https://cafe.daum.net/phaeho"]},
      ]
    },
    {
      이용안내: [
        {대상자: ["포항시에 사는 발달장애인 (나이: 20세~60세까지)"]},
        {이용시간: ["평일 09:30 ~ 16:30"]},
        {이용료: ["월 250,000원 (중식비/교통비 포함)"]},
        {이용절차: ["https://drive.google.com/file/d/1wTFtGOKq75_hhh-DNw3jPgs-ffTgA14x/view?usp=sharing"]}
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
          [name]: [...item[name], {"": [""]}]
        }
      } else return item;
    })
    setTables(cp);
  }
  
  const addTable = () => {
    const _tables = [...tables];
    _tables.push({
      "": [
        {"": [""]},
      ]
    })
    setTables(_tables);
    focusNew();
  }
  
  const focusNew = () => {
  }
  
  const removeTable = (tableIndex) => {
    const _tables = [...tables].filter((item, index) => {
      return index !== tableIndex;
    })
    setTables(_tables);
  }
  
  const swap = (index, direction) => {
    const _tables = [...tables];
    const directionNumber = direction === "up" ? -1 : 1;
    [_tables[index], _tables[index + directionNumber]] = [_tables[index + directionNumber], _tables[index]];
    setTables(_tables);
    
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
          <TextField id="outlined-basic" value={info.orgId} label="기관 id" name={"orgId"}
                     onChange={(e) => onChangeInfo(e)}
                     variant="outlined"/>
          <TextField id="outlined-basic" value={info.name} label="기관 이름(name)" name={"name"}
                     onChange={(e) => onChangeInfo(e)}
                     variant="outlined"/>
          <textarea id="outlined-basic" value={info.description} class={"border border-gray-300 p-4 resize-none"}
                    placeholder={"기관 설명(description)"} name={"description"} onChange={(e) => onChangeInfo(e)}/>
          <TextField id="outlined-basic" value={info.path} label="해당 웹 사이트 내 기관이 위치한 path를 입력해주세요." name={"path"}
                     onChange={(e) => onChangeInfo(e)} variant="outlined"/>
        </div>
        <div>
          <p class={"mb-2"}>기관에 대해 더 자세한 정보를 적을 수 있는 표를 작성합니다.</p>
          <p class={"mb-2"}>- 일반적인 텍스트는 한 줄에 입력해주시고, 여러 줄로 표현해야하는 경우 행을 추가하여 입력해주세요.</p>
          <p class={"mb-2"}>- 링크나 이미지는 url을 입력해주세요.</p>
          <button
            onClick={() => addTable()}
            className="mb-12 rounded-full w-full md:w-auto cursor-pointer justify-center transition delay-50 duration-300 px-4 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold "
          >
            표 추가하기
          </button>
          <div className={"w-full"}>
            <div>
              {
                tables.map((item, tableIndex) => {
                  const name = Object.keys(item)[0];
                  return <div class={"mb-16"}>
                    <Table key={tableIndex} type={"create"} index={tableIndex} name={name} contents={item[name]}
                           tables={tables}
                           setTables={setTables} focusNew={focusNew}/>
                    <div
                      onClick={() => addRow(name)}
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300 bg-gray-200 text-center font-bold hover:bg-gray-300 transition delay-100 duration-100 cursor-pointer'>
                      {/*<div className='w-1/6'>{key}</div>*/}
                      <div className='flex-1'>컨텐츠 추가</div>
                    </div>
                    <div class={"flex flex-row justify-end gap-4"}>
                      <div class={"flex flex-row gap-4"}>
                        {tableIndex !== 0 && <button
                          onClick={() => swap(tableIndex, "up")}
                          
                          className='mt-4 px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300 bg-gray-200 text-center font-bold hover:bg-gray-300 transition delay-100 duration-100 cursor-pointer'>
                          <BsArrowUpShort size={24}/>
                        </button>}
                        {
                          tableIndex !== tables.length - 1 &&
                          <button
                            onClick={() => swap(tableIndex, "down")}
                            className='mt-4 px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300 bg-gray-200 text-center font-bold hover:bg-gray-300 transition delay-100 duration-100 cursor-pointer'>
                            <BsArrowDownShort size={24}/>
                          </button>
                        }
                      </div>
                      <button
                        onClick={() => removeTable(tableIndex)}
                        
                        className='mt-4 px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300 bg-gray-200 text-center font-bold hover:bg-gray-300 transition delay-100 duration-100 cursor-pointer'>
                        {name} 테이블 삭제
                      </button>
                    </div>
                  
                  </div>
                })
              }
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
