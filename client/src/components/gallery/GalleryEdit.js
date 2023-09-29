import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import GalleryLayout from "./GalleryLayout";
import Subtitle from "../Subtitle";
import { ImageUtils } from "../../utils/ImageUtils";

const GalleryEdit = (props) => {
  const history = useHistory();
  // const list = ["https://drive.google.com/file/d/1JghogJncHGb_rpCXqjIeUe_S5NX5gFxA/view?usp=drive_link", "https://drive.google.com/file/d/1-X-NFKgkoNzQA0_6OOFTjEETV5LOhmgO/view?usp=drive_link", "https://drive.google.com/file/d/1SKTBcKnFiccRWuSq3baIU6ACsJPHDPsm/view?usp=drive_link", "https://drive.google.com/file/d/1m7RbujRJUyZUJHfKPOt1l3xbnfmWjVLH/view?usp=drive_link", "https://drive.google.com/file/d/15uNnWRRmD3D-MZzFDdfThZqPUTexTIgq/view?usp=drive_link", "https://drive.google.com/file/d/1Li5C4E2sKVqNXy-_iYwCO0nBE436Jk-p/view?usp=drive_link", "https://drive.google.com/file/d/1OTJHpV7XeFpzAger_JCK473JgAP_qxOU/view?usp=drive_link"];
  const [info, setInfo] = useState({
    title: props.info.title,
    content: props.info.content,
    imgList: props.info.imgList,
    imageUrlList: props.info.imageUrlList.length > 0 ? props.info.imageUrlList : [],
    convertedImageUrlList: [],
  });
  // const [convertedList, setConvertedList] = useState(info.convertedImageUrlList ? info.convertedImageUrlList : []);
  
  const id = props.id;
  const pages = props.pages;
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const currentEmail = useSelector((state) => state.setting.currentEmail);
  const [deletedList, setDeletedList] = useState([]);
  
  useEffect(() => {
    convertImageUrl();
  }, [info.imageUrlList])
  
  const convertImageUrl = () => {
    const urlList = [...info.imageUrlList];
    const converted = urlList.map((item) => {
      return ImageUtils.convertGoogleDriveImage(item);
    })
    const cp = {...info};
    cp.convertedImageUrlList = converted;
    setInfo(cp);
  }
  
  const changeInfo = (e, type) => {
    if (type === "imgList" || type === "imageUrlList") {
      const cp = {...info};
      cp[type] = e;
      setInfo(cp);
    } else {
      const cp = {...info};
      cp[type] = e.target.value;
      setInfo(cp);
    }
  };
  
  const changeImageUrlList = (type, e, index) => {
    if (type === "add") {
      const cp = {...info};
      const haha = cp.imageUrlList;
      haha.push("");
      cp.imageUrlList = haha;
      setInfo(cp);
    } else if (type === "change") {
      const cp = {...info};
      cp.imageUrlList[index] = e;
      setInfo(cp);
    } else if (type === "remove") {
      const cp = {...info};
      cp.imageUrlList.splice(index, 1);
      cp.convertedImageUrlList.splice(index, 1);
      setInfo(cp);
    } else if (type === "multi") {
      const cp = {...info};
      cp.imageUrlList = e;
      setInfo(cp);
    }
  }
  
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
    } else if (info.imageUrlList.length === 0) {
      alert("하나 이상의 이미지를 업로드 해주세요.");
    } else if (currentEmail === "master" || currentEmail === info.type) {
      
      // console.log("info", info, convertedList);
      // return;
      axios
        .post(
          "/api/gallery/update/" + id,
          {
            key: process.env.REACT_APP_API_KEY,
            title: info.title,
            content: info.content,
            imgList: info.imgList,
            imageUrlList: info.imageUrlList,
            convertedImageUrlList: info.convertedImageUrlList,
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
            axios.get(`/api/image/delete/${deletedList[i].id}`, {
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
        changeImageUrlList={changeImageUrlList}
        // convertedList={convertedList}
        deletePhoto={deletePhoto}
        info={info}
        isEdit={true}
      />
      
      <div class="flex justify-between items-center flex-col md:flex-row">
        <Link
          class="w-full md:w-auto cursor-pointer mb-4 md:mb-0 px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
          to={props.updateActionUrl}
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
