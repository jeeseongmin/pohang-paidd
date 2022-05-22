import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import NoticeLayout from "../../../components/notice/noticeLayout";

const WriteNotice = (props) => {
  const type = props.pages;
  const dispatch = useDispatch();
  const history = useHistory();
  const [info, setInfo] = useState({
    type: "",
    title: "",
    content: "",
    fileList: [],
  });
  const titleRef = useRef(null);
  const contentRef = useRef(null);

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

  useEffect(() => {
    document.getElementById("scrollRef").scrollTo(0, 0);
    const cp = { ...info };
    cp.type = type;
    setInfo(cp);
  }, []);

  const submitInfo = () => {
    if (info.title === "") {
      alert("제목을 입력해주세요!");
      titleRef.current.focus();
    } else if (info.content === "") {
      alert("내용을 입력해주세요!");
    } else if (currentEmail === "master" || currentEmail === info.type) {
      axios
        .post(
          "/api/notice/add/" + type,
          {
            key: process.env.REACT_APP_API_KEY,
            title: info.title,
            content: info.content,
            fileList: info.fileList,
            read: 0,
          },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          alert("업로드되었습니다.");
          history.push("/participation/notice/0");
          document.getElementById("scrollRef").scrollTo(0, 0);
        })
        .catch((response) => {
          console.log("Error!");
        });
    }
  };

  return (
    <div>
      <div class='flex flex-row justify-between items-center mb-8'>
        <h1 class='text-3xl font-bold'>공지사항 작성</h1>
      </div>
      <NoticeLayout
        titleRef={titleRef}
        contentRef={contentRef}
        changeInfo={changeInfo}
        info={info}
      />
      <div class='flex justify-between items-center flex-col md:flex-row'>
        <Link
          class='mb-4 md:mb-0 w-full md:w-auto  cursor-pointer px-0 md:px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center transition delay-50 duration-300 hover:bg-purple-500 hover:text-white hover:font-bold'
          to={"/participation/notice/0"}
          onClick={() => document.getElementById("scrollRef").scrollTo(0, 0)}>
          뒤로 가기
        </Link>
        <button
          onClick={submitInfo}
          class='outline-none w-full md:w-auto cursor-pointer px-0 md:px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center transition delay-50 duration-300 hover:bg-purple-500 hover:text-white hover:font-bold'>
          제출하기
        </button>
      </div>
    </div>
  );
};

export default WriteNotice;
