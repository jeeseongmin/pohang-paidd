import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Subtitle from "../../../components/Subtitle";
import Paging from "../../../components/Paging";
import axios from "axios";
import { useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { HiHome } from "react-icons/hi";
import { ImageUtils } from "../../../utils/ImageUtils";

const Gallery = (props) => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [galleryList, setGalleryList] = useState([]);
  
  const currentEmail = useSelector((state) => state.setting.currentEmail);
  const currentPassword = useSelector((state) => state.setting.currentPassword);
  const type = props.pages;
  
  useEffect(() => {
    axios
      .post(
        "/api/gallery/type/" + type + "/" + page,
        {key: process.env.REACT_APP_API_KEY},
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((Response) => {
        setGalleryList(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [page]);
  
  useEffect(() => {
    axios
      .post(
        "/api/gallery/type/" + type,
        {key: process.env.REACT_APP_API_KEY},
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((Response) => {
        setTotalPage(Math.ceil(Response.data.length / 8));
        setLoading(true);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [galleryList]);
  
  const dataToText = (date) => {
    let year = date.substring(2, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    return year + "." + month + "." + day;
  };
  
  function GalleryBlock(props) {
    const data = props.data;
    const date = dataToText(data.createdAt);
    
    return (
      <>
        <Link
          to={"/organization/galleryDetail/" + data._id}
          class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 cursor-pointer"
        >
          <div class="mb-4 h-48 border border-gray-100 shadow-xl">
            <img
              class="w-full h-full object-cover"
              src={
                ImageUtils.convertGoogleDriveImage2(data.convertedImageUrlList[0])
              }
              alt="logo"
            />
          </div>
          <div>
            <h1>
              <b>{data.title}</b>
            </h1>
            <p class="text-gray-300">{date}</p>
          </div>
        </Link>
      </>
    );
  }
  
  return (
    <div>
      <div class="flex flex-col border-b-2 border-purple-700 mb-8">
        <div class="flex flex-row justify-between items-center pb-4 lg:pb-0">
          <Subtitle text={"포토갤러리"}/>
          
          <div class="w-1/2 flex flex-row items-center relative justify-end ">
            {/* <input
             type="text"
             name="name"
             placeholder="검색어"
             autocomplete="off"
             class="w-full h-full py-2 px-4 mr-2 border border-gray-300 outline-none"
             />
             <BsSearch size={28} class="cursor-pointer text-gray-300" /> */}
          </div>
        </div>
        <div class="mt-1 mb-6 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center">
          <div class="mr-2">
            <HiHome size={16}/>
          </div>
          Home {">"} 부설기관 {">"} 늘사랑주간보호센터 {">"} 포토갤러리
        </div>
      </div>
      <div class="w-full flex flex-row flex-wrap border-b border-gray-200 ">
        {galleryList.length !== 0 ? (
          galleryList.map((element, index) => {
            return <GalleryBlock data={element} key={element._id}/>;
          })
        ) : loading ? (
          <div class="w-full flex justify-center items-center mb-8">
            등록된 내용이 없습니다.
          </div>
        ) : (
          <div class="py-4 w-full flex justify-center">
            <CircularProgress/>
          </div>
        )}
      </div>
      <div class="flex flex-col lg:flex-row justify-center items-center my-8 relative">
        <div class="flex flex-row w-full justify-center items-center lg:w-auto mb-4 lg:mb-0"></div>
        {/*
         setPage : 현재 페이지 설정 함수
         page : 현재 페이지
         total : 총 페이지
         */}
        <Paging setPage={setPage} page={page} total={totalPage}/>
        
        {currentEmail === "master" || currentEmail === type ? (
          <div class="relative md:absolute right-0 w-full md:w-auto flex justify-end md:block">
            <Link
              to={"/organization/galleryWrite/0"}
              class="cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
            >
              작성하기
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Gallery;
