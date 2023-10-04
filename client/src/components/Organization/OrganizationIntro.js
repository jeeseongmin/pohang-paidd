import React from 'react';
import Subtitle from "../Subtitle";
import { HiHome } from "react-icons/hi";
import { ImageUtils } from "../../utils/ImageUtils";
import { CommonUtils } from "../../utils/CommonUtils";

/**
 * 기관에 관한 소개 페이지 컴포넌트
 */
const OrganizationIntro = ({info}) => {
  return (
    <div>
      <Subtitle text={`${info.name.includes("사업") ? "사업소개" : "센터소개"}`}/>
      <div className='mt-1 mb-4 w-full flex flex-row text-sm text-gray-400 items-center'>
        <div className='mr-2'>
          <HiHome size={16}/>
        </div>
        {/*Home {">"} 부설기관 {">"} 늘사랑주간보호센터 {">"} 센터소개*/}
        {info.path}
      </div>
      <div className='text-xl font-bold leading-9 py-2 md:py-4'>
        {info.name}
      </div>
      <div className='text-base lg:text-lg mb-8 leading-7 lg:leading-9'>
        <div
          className={"w-full resize-none outline-none h-auto"}
          style={{whiteSpace: "pre-line"}}
        >{info.description}</div>
      </div>
      {
        info.contents.length > 0 && info.contents.map((item, index) => {
          const tableName = Object.keys(item)[0];
          return <div className='mb-16 text-sm lg:text-base'>
            <div
              className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
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
                                        onClick={() => CommonUtils.moveUrl(elem[key])}>
                                        {elem[key]}
                                      </span>
                      </div>
                    </div>
                  }
                } else {
                  return <div
                    className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                    <div className='w-1/6'>{key}</div>
                    <div className='flex-1 leading-7' style={{whiteSpace: "pre-line"}}>{elem[key]}</div>
                  </div>
                }
              })
            }
          </div>
        })
      }
      
      <div className='mb-16 text-sm lg:text-base'>
        <div
          className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
          <div className='text-xl lg:text-2xl text-purple-700'>직원현황</div>
        </div>
        <div
          className='py-3 flex flex-row gap-4 items-center border-b-2 border-purple-700'>
          <div className='min-w-36 w-1/6'>
            <div className='w-full flex justify-center '>직위</div>
          </div>
          <div className='min-w-24 w-1/6 text-center'>성명</div>
          <div className='min-w-36 w-1/4 text-center'>전화번호</div>
          <div className='flex-1 text-center'>업무내용</div>
        </div>
        {
          info.employees.length > 0 && info.employees.map((item, index) => {
            return <div
              className=' py-3 flex flex-row gap-4 items-center border-b border-gray-300'>
              <div className='min-w-36 w-1/6'>
                <div className='w-full flex justify-center'>
                  {item.직위}
                </div>
              </div>
              <div className='min-w-24 w-1/6 text-center'>{item.성명} </div>
              <div className='min-w-36 w-1/4 text-center'>{item.전화번호}</div>
              <div className=' flex-1 leading-7 ' style={{
                whiteSpace: "pre-line"
              }}>
                {item.업무내용}
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default OrganizationIntro;
