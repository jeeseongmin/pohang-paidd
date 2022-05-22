import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import NoticeLayout from "../../../../../components/notice/noticeLayout";

const NoticeWrite = (props) => {
  const type = props.pages;
  const dispatch = useDispatch();
  const history = useHistory();
  const editorRef = useRef();

  const [info, setInfo] = useState({
    type: "",
    title: "",
    content: "",
  });
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  // imgList는 에디터에 업로드된 이미지 체크만을 위한 배열
  const [imgList, setImgList] = useState([]);
  const [fileList, setFileList] = useState([]);
  const currentEmail = useSelector((state) => state.setting.currentEmail);

  const changeInfo = async (e, type) => {
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
    document.getElementById("scrollRef").scrollTo(0, 0);
    const cp = { ...info };
    cp.type = type;
    setInfo(cp);
  }, []);

  /**
   * 에디터 상에서 삭제된 이미지에 대해 DB에서도 지울 수 있도록 한다.
   * submit 전에 호출됨.
   * 현재는 업로드 된 이미지들의 목록화에 오류가 있어, 최대 1개에 대해서만 검토 가능.
   */
  const editorImageCheck = async () => {
    const editorContents = editorRef.current.getInstance().getHTML();
    for (const [index, data] of imgList.entries()) {
      if (!editorContents.includes(data.filename) && !data.deleted) {
        try {
          const res = await axios.get("/api/image/delete/" + data.id);
          const cp = [...imgList];
          cp[index].deleted = true;
          setImgList(cp);
        } catch (err) {
          console.log("이미 삭제된 파일입니다.");
        }
      }
    }
  };

  const submitInfo = async () => {
    if (info.title === "") {
      alert("제목을 입력해주세요!");
      titleRef.current.focus();
    }
    // else if (info.content === "") {
    //   alert("내용을 입력해주세요!");
    //   contentRef.current.focus();
    // }
    else if (currentEmail === "master" || currentEmail === info.type) {
      await editorImageCheck();
      await axios
        .post(
          "/api/notice/add/" + type,
          {
            key: process.env.REACT_APP_API_KEY,
            title: info.title,
            content: editorRef.current.getInstance().getHTML(),
            fileList: info.fileList,
          },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          history.push("/business/" + info.type + "/notice");
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
        editorRef={editorRef}
        imgList={imgList}
        fileList={fileList}
        changeList={changeList}
      />

      <div class='flex justify-between items-center flex-col md:flex-row'>
        <Link
          class='mb-4 md:mb-0 w-full md:w-auto  cursor-pointer px-0 md:px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold'
          to={"/business/" + props.pages + "/notice"}
          onClick={() => window.scrollTo(0, 0)}>
          뒤로 가기
        </Link>
        <button
          onClick={submitInfo}
          class='outline-none w-full md:w-auto cursor-pointer px-0 md:px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold'>
          제출하기
        </button>
      </div>
    </div>
  );
};

export default NoticeWrite;
