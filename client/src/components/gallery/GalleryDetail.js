import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Skeleton from "@material-ui/lab/Skeleton";
import Subtitle from "../Subtitle";
import GalleryEdit from "./GalleryEdit";

const GalleryDetail = (props) => {
  const pages = props.pages;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  
  const currentEmail = useSelector((state) => state.setting.currentEmail);
  
  const id = props.id;
  
  const [info, setInfo] = useState({
    type: "",
    title: "",
    content: "",
    imgList: [],
    date: "",
    convertedImageUrlList: [],
  });
  const [deleteActionUrl, setDeleteActionUrl] = useState(props.type === "organization" ? "/organization/gallery/0" : `/business/${info.type}/gallery`);
  const [updateActionUrl, setUpdateActionUrl] = useState(props.type === "organization" ? "/organization/gallery/0" : `/business/${pages}/gallery`);
  
  useEffect(() => {
    console.log("updateActionUrl", updateActionUrl, pages)
  }, [updateActionUrl])
  useEffect(() => {
    document.getElementById("scrollRef").scrollTo(0, 0);
    
    axios
      .post(
        "/api/gallery/" + id,
        {key: process.env.REACT_APP_API_KEY},
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((Response) => {
        const cp = {
          type: Response.data.type,
          title: Response.data.title,
          content: Response.data.content,
          imgList: Response.data.imgList,
          date: dataToText(Response.data.createdAt),
          convertedImageUrlList: Response.data.convertedImageUrlList,
          imageUrlList: Response.data.imageUrlList,
        };
        setInfo(cp);
        setDeleteActionUrl(props.type === "organization" ? "/organization/gallery/0" : `/business/${cp.type}/gallery`);
        setLoading(true);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  
  const deleteGallery = () => {
    if (currentEmail === "master" || currentEmail === info.type) {
      axios
        .post(
          "/api/gallery/delete/" + id,
          {
            key: process.env.REACT_APP_API_KEY,
          },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          alert("삭제되었습니다.");
          history.push(deleteActionUrl);
          document.getElementById("scrollRef").scrollTo(0, 0);
          
          for (let i = 0; i < info.imgList.length; i++) {
            axios.get("/api/image/delete/" + info.imgList[i].id);
          }
        })
        .catch((response) => {
          console.log("Error!");
        });
    } else {
      alert("권한이 없습니다.");
    }
  };
  
  const dataToText = (date) => {
    let year = date.substring(2, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    return year + "." + month + "." + day;
  };
  
  const goEdit = () => {
    setIsEdit(true);
    document.getElementById("scrollRef").scrollTo(0, 0);
  };
  
  return (
    <>
      {!isEdit ? (
        <div>
          <div class="flex flex-row justify-between items-center mb-8">
            <Subtitle text={"자세히보기"}/>
          </div>
          <div class="text-sm lg:text-base w-full h-auto mb-8 border-t-2 border-b-2 border-purple-600">
            {/* 딱 10개 씩만 로드하기 */}
            <div class="w-full px-2 lg:px-8 py-4 flex justify-end items-center">
              {!loading ? (
                <Skeleton animation="wave"/>
              ) : (
                <>
                  <div class="text-lg flex-1 font-bold">{info.title}</div>
                  <div class="text-lg w-24 ">{info.date}</div>
                </>
              )}
            </div>
            {/*<div class="w-full px-2 lg:px-8 py-4 flex flex-col justify-end items-center border-t border-gray-300">*/}
            {/*  <ImageSlideShow/>*/}
            {/*</div>*/}
            <div class="w-full px-2 lg:px-8 py-4 flex flex-col justify-end items-center border-t border-gray-300">
              {info.convertedImageUrlList.map((element, index) => {
                return (
                  <div class="w-1/2 flex justify-center items-center my-4">
                    <img
                      class="w-full object-cover"
                      src={element}
                      alt="img"
                    />
                  </div>
                );
              })}
            </div>
            <div
              class="w-full h-full px-2 lg:px-8 py-4 flex justify-end items-center border-t border-gray-300">
              <div class="h-full text-base flex-1 pr-4">
								<textarea value={info.content}
                          className={"w-full resize-none h-48 border-none outline-none leading-8"}
                          readOnly/>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center flex-col md:flex-row">
            <Link
              class="w-full md:w-auto cursor-pointer px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
              to={updateActionUrl}
              onClick={() =>
                document.getElementById("scrollRef").scrollTo(0, 0)
              }
            >
              뒤로 가기
            </Link>
            {loading &&
            (currentEmail === "master" || currentEmail === info.type) ? (
              <div class="w-full md:w-auto flex flex-col md:flex-row">
                <div
                  // onClick={deleteGallery}
                  onClick={() => alert("웹사이트 개발중입니다. 포토갤러리를 이용할 수 없습니다. ")}
                  class="w-full md:w-auto my-4 md:my-0 justify-center mr-4 cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
                >
                  삭제하기
                </div>
                <div
                  onClick={goEdit}
                  class="w-full md:w-auto justify-center cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
                >
                  수정하기
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <GalleryEdit pages={pages} info={info} id={id} updateActionUrl={updateActionUrl}/>
      )}
      {}
    </>
  );
};

export default GalleryDetail;
