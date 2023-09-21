import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import GalleryLayout from "./GalleryLayout";
import Subtitle from "../Subtitle";

const GalleryEdit = (props) => {
  const history = useHistory();
  const [info, setInfo] = useState({
    title: props.info.title,
    content: props.info.content,
    imgList: props.info.imgList,
  });
  const id = props.id;
  const pages = props.pages;
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const currentEmail = useSelector((state) => state.setting.currentEmail);
  const [deletedList, setDeletedList] = useState([]);
  
  const changeInfo = (e, type) => {
    if (type === "imgList") {
      const cp = {...info};
      cp[type] = e;
      setInfo(cp);
    } else {
      const cp = {...info};
      cp[type] = e.target.value;
      setInfo(cp);
    }
  };
  
  const deletePhoto = (name) => {
    const cp = [...deletedList];
    cp.push(name);
    setDeletedList(cp);
  };
  
  const editSave = () => {
    if (info.title === "") {
      alert("제목을 입력해주세요!");
      titleRef.current.focus();
    } else if (info.content === "") {
      alert("내용을 입력해주세요!");
      contentRef.current.focus();
    } else if (info.imgList.length === 0) {
      alert("하나 이상의 이미지를 업로드 해주세요.");
    } else if (currentEmail === "master" || currentEmail === info.type) {
      axios
        .post(
          "/api/gallery/update/" + id,
          {
            key: process.env.REACT_APP_API_KEY,
            title: info.title,
            content: info.content,
            imgList: info.imgList,
          },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          alert("저장되었습니다.");
          history.push(props.updateActionUrl);
          document.getElementById("scrollRef").scrollTo(0, 0);
          
          for (let i = 0; i < deletedList.length; i++) {
            axios.post("/api/image/delete", {
              name: deletedList[i],
            });
          }
        })
        .catch((response) => {
          console.log("Error!");
        });
    }
  };
  
  return (
    <div>
      <div class="flex flex-row justify-between items-center mb-8">
        <Subtitle text={"수정하기"}/>
      </div>
      <GalleryLayout
        titleRef={titleRef}
        contentRef={contentRef}
        changeInfo={changeInfo}
        deletePhoto={deletePhoto}
        info={info}
        isEdit={true}
      />
      
      <div class="flex justify-between items-center flex-col md:flex-row">
        <Link
          class="w-full md:w-auto cursor-pointer mb-4 md:mb-0 px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
          to={"/organization/gallery/0"}
          onClick={() => document.getElementById("scrollRef").scrollTo(0, 0)}
        >
          뒤로 가기
        </Link>
        <div
          onClick={editSave}
          class="w-full md:w-auto cursor-pointer justify-center px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
        >
          저장하기
        </div>
      </div>
    </div>
  );
};

export default GalleryEdit;
