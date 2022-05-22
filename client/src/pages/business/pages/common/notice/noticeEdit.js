import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import NoticeLayout from "../../../../../components/notice/noticeLayout";
import Subtitle from "../../../../../components/Subtitle";

const NoticeEdit = (props) => {
  const history = useHistory();
  const [info, setInfo] = useState({
    title: props.info.title,
    content: props.info.content,
  });
  const id = props.id;
  const pages = props.pages;
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const editorRef = useRef(null);
  const [imgList, setImgList] = useState([]);
  const [fileList, setFileList] = useState(props.info.fileList);

  const currentEmail = useSelector((state) => state.setting.currentEmail);

  const changeInfo = (e, type) => {
    if (type === "fileList" || type === "content") {
      const cp = { ...info };
      cp[type] = e;
      setInfo(cp);
    } else {
      const cp = { ...info };
      cp[type] = e.target.value;
      setInfo(cp);
    }
  };

  /**
   * Mongo DB에 저장 시 에디터 상에서 삭제된 파일은 지우는 것이 효율적이다.
   * 따라서 업로드 시에 어떤 항목들이 있는지에 대한 목록.
   * @param {*} data
   * @param {*} type
   */
  const changeList = async (data, type) => {
    if (type === "fileList") {
      setFileList(data);
    } else if (type === "imgList") {
      setImgList(data);
    }
  };

  useEffect(() => {
    setInfo(props.info);
  }, []);

  const editSave = () => {
    if (info.title === "") {
      alert("제목을 입력해주세요!");
      titleRef.current.focus();
    } else if (info.content === "") {
      alert("내용을 입력해주세요!");
    } else if (currentEmail === "master" || currentEmail === info.type) {
      axios
        .post(
          "/api/notice/update/" + id,
          {
            // id: id,
            key: process.env.REACT_APP_API_KEY,
            title: info.title,
            content: editorRef.current.getInstance().getHTML(),
            fileList: fileList,
            read: info.read,
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
          history.push("/business/" + props.pages + "/notice/" + id);
        })
        .catch((response) => {
          console.log("Error!");
        });
    }
  };

  return (
    <div>
      <div class='flex flex-row justify-between items-center mb-8'>
        <Subtitle text={"수정하기"} />
      </div>
      <NoticeLayout
        titleRef={titleRef}
        contentRef={contentRef}
        changeInfo={changeInfo}
        editorRef={editorRef}
        imgList={imgList}
        fileList={fileList}
        changeList={changeList}
        info={info}
        isEdit={true}
      />

      <div class='flex justify-between items-center flex-col md:flex-row'>
        <Link
          class='w-full md:w-auto cursor-pointer mb-4 md:mb-0 px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold'
          to={"/business/" + pages + "/notice"}
          onClick={() => window.scrollTo(0, 0)}>
          뒤로 가기
        </Link>
        <div
          onClick={editSave}
          class='w-full md:w-auto cursor-pointer justify-center px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold'>
          저장하기
        </div>
      </div>
    </div>
  );
};

export default NoticeEdit;
