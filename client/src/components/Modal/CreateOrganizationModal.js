import React, { useEffect, useState } from 'react';
import { Box, Modal, TextField } from "@mui/material";
import CustomTable from "../Organization/CustomTable";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import EmployeesTable from "../Organization/EmployeesTable";
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
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
    description: "포항시지적장애인자립지원센터는, 포항시에 사는 발달장애인이 스스로 자신의 삶을 이끌어갈 수 있도록 지원합니다. \n발달장애인과 가족이 다른 사람들과 어울려 함께 살아가는 것을 돕습니다.", // ex) ~~ 센터는 ~~ 의 일을 합니다.
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
  
  useEffect(() => {
    readOrganization();
  }, [])
  
  const readOrganization = async () => {
    await axios
      .post(
        "/api/organization/findByName/포항시지적장애인자립지원센터",
        {key: process.env.REACT_APP_API_KEY},
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      ).then((Response) => {
        console.log(Response)
      })
  }
  
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
        {대상자: "포항시에 사는 발달장애인 (나이: 20세~60세까지)"},
        {이용시간: "평일 09:30 ~ 16:30"},
        {이용료: "월 250,000원 (중식비/교통비 포함)"},
        {이용절차: "https://drive.google.com/file/d/1wTFtGOKq75_hhh-DNw3jPgs-ffTgA14x/view?usp=sharing"}
      ]
    }
  ]);
  
  const [employees, setEmployees] = useState([{
    "직위": "관리책임자",
    "성명": "김옥희",
    "전화번호": "054-249-9588",
    "업무내용": "자립지원센터 총괄",
  }, {
    "직위": "사무국장",
    "성명": "조혜령",
    "전화번호": "054-249-9588",
    "업무내용": "직원 및 이용자 고충처리담당,\n예결산 관련 회계 총괄",
  }, {
    "직위": "전문요원",
    "성명": "김민정",
    "전화번호": "070-5154-6982",
    "업무내용": "자립생활지원사업, 차량 및 시설물 관리,\n협회후원금 관련 업무",
  }, {
    "직위": "전문요원",
    "성명": "양수정",
    "전화번호": "070-5154-4930",
    "업무내용": "문화체육활동지원사업, 장애인일자리사업,\n입회회원 관리",
  }, {
    "직위": "전문요원",
    "성명": "백승훈",
    "전화번호": "070-5154-6982",
    "업무내용": "문화체육활동지원사업, 시설관리",
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
  
  const saveInfo = async () => {
    if (info.orgId === "") {
      alert("기관 id를 입력해주세요.");
    } else if (info.name === "") {
      alert("기관 이름을 입력해주세요.");
    } else if (info.description === "") {
      alert("기관 description을 입력해주세요.");
    } else if (info.path === "") {
      alert("기관 path를 입력해주세요.");
    } else {
      // api 호출
      await axios
        .post(
          "/api/organization/add/new",
          {
            key: process.env.REACT_APP_API_KEY,
            orgId: info.orgId,
            name: info.name,
            path: info.path,
            description: info.description,
            contents: tables,
            employees: employees,
          },
          {
            headers: {
              "content-type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          alert("업로드 되었습니다.");
          onClose();
          // history.push(createActionUrl);
          document.getElementById("scrollRef").scrollTo(0, 0);
        })
        .catch((response) => {
          console.log("Error!");
        });
    }
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
          <TextField id="outlined-multiline-static" rows={4} value={info.description} label={"기관 설명(description)"}
                     placeholder={"기관 설명(description)"} name={"description"} onChange={(e) => onChangeInfo(e)}
                     multiline/>
          <TextField id="outlined-basic" value={info.path} label="해당 웹 사이트 내 기관이 위치한 path를 입력해주세요." name={"path"}
                     onChange={(e) => onChangeInfo(e)} variant="outlined"/>
        </div>
        <div>
          <p class={"mb-2"}>기관에 대해 더 자세한 정보를 적을 수 있는 표를 작성합니다.</p>
          <p class={"mb-2"}>- 일반적인 텍스트는 한 줄에 입력해주시고, 여러 줄로 표현해야하는 경우 행을 추가하여 입력해주세요.</p>
          <p class={"mb-2"}>- 링크나 이미지는 url을 입력해주세요.</p>
          <div class={"flex flex-row justify-center"}>
            <button
              onClick={() => addTable()}
              className="mb-12 rounded-full w-full md:w-auto cursor-pointer justify-center transition delay-50 duration-300 px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold "
            >
              표 추가하기
            </button>
          </div>
          <div className={"w-full"}>
            <div>
              {
                tables.map((item, tableIndex) => {
                  const name = Object.keys(item)[0];
                  return <div class={"mb-16"}>
                    <CustomTable key={tableIndex} type={"create"} index={tableIndex} name={name} contents={item[name]}
                                 tables={tables}
                                 setTables={setTables}/>
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
            
            </div>
            {/* 직원 현황 */}
            <div>
              <div className={"w-full border-b border-gray-400 mb-8"}></div>
              <p className={"mb-2"}>직원 현황에 대해 자세한 정보를 적을 수 있는 표를 작성합니다.</p>
              <p className={"mb-2"}>- 직원 현황 표는 상단의 표와는 별개로 필수적으로 들어가야 합니다.</p>
              
              <EmployeesTable type={"create"}
                              employees={employees}
                              setEmployees={setEmployees}/>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col md:flex-row">
          <button
            class="mb-4 md:mb-0 w-full md:w-auto  cursor-pointer px-0 md:px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
            onClick={onClose}
          >
            닫기
          </button>
          <button
            onClick={saveInfo}
            className="outline-none w-full md:w-auto cursor-pointer px-0 md:px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
          >
            저장하기
          </button>
        </div>
      
      </Box>
    </Modal>
  );
};

export default CreateOrganizationModal;
