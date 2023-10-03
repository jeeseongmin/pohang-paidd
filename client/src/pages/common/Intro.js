import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import axios from "axios";
import Subtitle from "../../components/Subtitle";
import { ImageUtils } from "../../utils/ImageUtils";

const Intro = ({name}) => {
  const [info, setInfo] = useState({
    orgId: "",
    name: "",
    path: "",
    description: "",
    contents: [],
    employees: [],
  });
  const moveUrl = function (url) {
    window.open(url, "_blank");
  };
  
  useEffect(() => {
    readOrganization();
  }, [])
  
  const readOrganization = async () => {
    await axios
      .post(
        `/api/organization/findByName/${name}`,
        {key: process.env.REACT_APP_API_KEY},
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      ).then((Response) => {
        const {data} = Response;
        console.log(data)
        
        setInfo(data[0]);
      })
  }
  
  return (
    <div>
      <Subtitle text={"센터소개"}/>
      <div class='mt-1 mb-4 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center'>
        <div class='mr-2'>
          <HiHome size={16}/>
        </div>
        {/*Home {">"} 부설기관 {">"} 늘사랑주간보호센터 {">"} 센터소개*/}
        {info.path}
      </div>
      <div class='text-xl font-bold leading-9 py-2 md:py-4'>
        {info.name}
      </div>
      <div class='text-base lg:text-lg mb-8 leading-7 lg:leading-9'>
        {/*{info.description}*/}
        <textarea
          class={"w-full resize-none outline-none h-auto"}
          value={info.description} readOnly/>
        {/*<b>늘사랑주간보호센터</b>는 장애당사자의 역량강화, 자기결정권강화,*/}
        {/*사회통합지원을 통한 <b>발달장애인의 행복한 삶</b>을 미션으로*/}
        {/*발달장애인이 낮 시간 동안 다양한 활동을 하는 사회복지이용시설입니다.*/}
      </div>
      {
        info.contents.length > 0 && info.contents.map((item, index) => {
          const tableName = Object.keys(item)[0];
          return <div className='mb-16 text-sm lg:text-base'>
            <div className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
              <div className='text-xl lg:text-2xl text-purple-700'>{tableName}</div>
            </div>
            {
              item[tableName].length > 0 && item[tableName].map((elem, index) => {
                const key = Object.keys(elem)[0];
                if (elem[key].includes("https")) {
                  if (elem[key].includes("https://drive.google.com")) {
                    return <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>{key}</div>
                      <div className='flex-1'>
                        <img
                          src={ImageUtils.convertGoogleDriveImage(elem[key])}
                          alt='img'
                          className='h-auto xl:h-36 object-cover'
                        />
                      </div>
                    </div>
                  } else {
                    return <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>{key}</div>
                      <div className='flex-1'>
                        <span
                          className='cursor-pointer underline'
                          onClick={() => moveUrl(elem[key])}>
                          {elem[key]}
                        </span>
                      </div>
                    
                    </div>
                  }
                } else {
                  return <div
                    className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                    <div className='w-1/6'>{key}</div>
                    <div className='flex-1'>{elem[key]}</div>
                  </div>
                }
              })
            }
          </div>
        })
      }
      <div class='mb-16 text-sm lg:text-base'>
        <div class='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
          <div class='text-xl lg:text-2xl text-purple-700'>직원현황</div>
        </div>
        <div class='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b-2 border-purple-700'>
          <div class='w-1/6'>
            <span class='w-20 flex justify-center'>직위</span>
          </div>
          <div class='w-1/6 text-center'>성명</div>
          <div class='w-2/6 text-center'>전화번호</div>
          <div class='w-2/6 text-center'>업무내용</div>
        </div>
        <div class='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
          <div class='w-1/6 hidden md:block'>
            <span class='w-20 flex justify-between'>
              <span>시</span>
              <span>설</span>
              <span>장</span>
            </span>
          </div>
          <div class='w-1/6 text-center'>우숙경</div>
          <div class='w-2/6 text-center'>054-244-9577</div>
          <div class='w-2/6'>운영전반 및 조직관리 총괄</div>
        </div>
        <div class='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
          <div class='w-1/6 hidden md:block'>
            <span class='w-20 flex justify-between'>
              <span>팀</span>
              <span>장</span>
            </span>
          </div>
          <div class='w-1/6 text-center'>문수영</div>
          <div class='w-2/6 text-center'>054-244-9577</div>
          <div class='w-2/6'>실무 총괄 / 예결산 총괄 / 프로그램 평가</div>
        </div>
        <div class='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
          <div class='w-1/6 hidden md:block'>
            <span class='w-20 flex justify-between'>
              <span>사</span>
              <span>회</span>
              <span>복</span>
              <span>지</span>
              <span>사</span>
            </span>
          </div>
          <div class='w-1/6 text-center'>박은숙</div>
          <div class='w-2/6 text-center'>070-5154-6983</div>
          <div class='w-2/6'>프로그램 기획 / 이용자 지원 / 상담</div>
        </div>
        <div class='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
          <div class='w-1/6 hidden md:block'>
            <span class='w-20 flex justify-between'>
              <span>사</span>
              <span>회</span>
              <span>복</span>
              <span>지</span>
              <span>사</span>
            </span>
          </div>
          <div class='w-1/6 text-center'>백용화</div>
          <div class='w-2/6 text-center'>070-5154-6973</div>
          <div class='w-2/6'>프로그램 진행 / 이용자 지원</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
