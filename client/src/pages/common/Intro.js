import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import axios from "axios";
import Subtitle from "../../components/Subtitle";
import { ImageUtils } from "../../utils/ImageUtils";
import { CircularProgress } from "@mui/material";

const Intro = ({name}) => {
  const [info, setInfo] = useState({
    orgId: "",
    name: "",
    path: "",
    description: "",
    contents: [],
    employees: [],
    load: false,
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
        if (data.length > 0)
          setInfo({...data[0], load: true});
      }).catch(() => {
        setInfo({
          orgId: "",
          name: "",
          path: "",
          description: "",
          contents: [],
          employees: [],
          load: false,
        });
      })
  }
  
  return (
    info.load ?
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
          <div
            class={"w-full resize-none outline-none h-auto"}
            style={{whiteSpace: "pre-line"}}
          >{info.description}</div>
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
          {
            info.employees.length > 0 && info.employees.map((item, index) => {
              return <div
                className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                <div className='w-1/6 hidden md:block'>
                <span className='w-20 flex justify-between'>
                  {item.직위}
                </span>
                </div>
                <div className='w-1/6 text-center'>{item.성명} </div>
                <div className='w-2/6 text-center'>{item.전화번호}</div>
                <div className='w-2/6 ' style={{
                  whiteSpace: "pre-line"
                }}>
                  {item.업무내용}
                </div>
              </div>
            })
          }
        </div>
      </div> : <div class={"w-full h-96 flex flex-row justify-center items-center"}>
        <CircularProgress/>
      </div>
  );
};

export default Intro;
