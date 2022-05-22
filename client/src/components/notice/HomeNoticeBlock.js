import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BsDot } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useHistory } from "react-router-dom";

const HomeNoticeBlock = () => {
  const history = useHistory();
  const [noticeType, setNoticeType] = useState("all");
  const [loading, setLoading] = useState(false);
  const [noticeList, setNoticeList] = useState([]);
  const [allNoticeList, setAllNoticeList] = useState([]);
  const modalMenuRef = useRef();
  const [modalMenu, setModalMenu] = useState(false);
  const onToggleMenu = () => {
    setModalMenu(!modalMenu);
  };

  const typeName = {
    org1: "포항시지적장애인자립지원센터",
    org2: "장애인활동지원사업",
    org3: "방과후활동서비스사업",
    org4: "늘사랑주간보호센터",
    participation: "참여마당",
  };

  const typeUrl = {
    org1: "/business/org1/notice/",
    org2: "/business/org2/notice/",
    org3: "/business/org3/notice/",
    org4: "/business/org4/notice/",
    participation: "/participation/detailNotice/",
  };

  const onChangeMenu = async (name) => {
    onToggleMenu();
    setNoticeType(name);
  };

  useEffect(() => {
    if (!modalMenu) return;
    function handleClick(e) {
      if (modalMenuRef.current === null) {
        return;
      } else if (!modalMenuRef.current.contains(e.target)) {
        setModalMenu(false);
      }
    }
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [modalMenu]);

  useEffect(() => {
    setLoading(false);
    axios
      .post(
        "/api/notice",
        { key: process.env.REACT_APP_API_KEY },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((Response) => {
        setAllNoticeList(Response.data);
        const cp = Response.data.filter(function (element, index) {
          if (noticeType !== "all") return element.type === noticeType;
          else return true;
        });
        setNoticeList(cp);
        setLoading(true);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, [noticeType]);

  function dateToString(date) {
    const dt = new Date(date);
    const year = String(dt.getFullYear()).slice(2, 4);
    const month = String(dt.getMonth() + 1);
    const day = String(dt.getDate());
    return year + "." + month + "." + day;
  }

  return (
    <div class='my-8 w-full flex flex-col py-8 px-5 2xl:px-36 xl:px-32 md:px-8'>
      <div class='flex flex-col md:flex-row justify-between mb-4'>
        <span class='font-bold text-xl lg:text-3xl'>주요공지</span>
        <div
          ref={modalMenuRef}
          class='text-sm relative cursor-pointer mt-4 md:mt-0 w-full md:w-72 h-14 border-2 border-gray-400'>
          <div
            onClick={onToggleMenu}
            class='pl-2 w-full h-full flex justify-between items-center text-md text-gray-400 font-bold'>
            <div class='w-full flex justify-center items-center'>
              {noticeType === "all" && <p>전체보기</p>}
              {noticeType === "org1" && <p>포항시지적장애인자립지원센터</p>}
              {noticeType === "org2" && <p>장애인활동지원사업</p>}
              {noticeType === "org3" && <p>방과후활동서비스사업</p>}
              {noticeType === "org4" && <p>늘사랑주간보호센터</p>}
              {noticeType === "participation" && <p>참여마당</p>}
            </div>
            <div class=' w-12 pr-4 h-full flex justify-center items-center'>
              <IoIosArrowDown size={28} />
              {/* <IoIosArrowUp size={28} /> */}
            </div>
          </div>
          <div
            class={
              "z-40 absolute shadow-xl font-bold w-full h-60 left-0 top-14 border-l-2 border-r-2 border-t-2 text-purple-500 border-purple-100 grid-rows-6 " +
              (modalMenu ? "grid" : "hidden")
            }>
            <div
              onClick={() => onChangeMenu("all")}
              class={
                "flex justify-center items-center border-b-2 border-purple-100 hover:text-purple-500 hover:bg-purple-100 transition delay-50 duration-150 " +
                (noticeType === "all"
                  ? "bg-purple-100 text-purple-500"
                  : "bg-white text-black")
              }>
              전체보기
            </div>
            <div
              onClick={() => onChangeMenu("org1")}
              class={
                "flex justify-center items-center border-b-2 border-purple-100 hover:text-purple-500 hover:bg-purple-100 transition delay-50 duration-150 " +
                (noticeType === "org1"
                  ? "bg-purple-100 text-purple-500"
                  : "bg-white text-black")
              }>
              {" "}
              포항시지적장애인자립지원센터
            </div>
            <div
              onClick={() => onChangeMenu("org2")}
              class={
                "flex justify-center items-center border-b-2 border-purple-100 hover:text-purple-500 hover:bg-purple-100 transition delay-50 duration-150 " +
                (noticeType === "org2"
                  ? "bg-purple-100 text-purple-500"
                  : "bg-white text-black")
              }>
              {" "}
              장애인활동지원사업
            </div>
            <div
              onClick={() => onChangeMenu("org3")}
              class={
                "flex justify-center items-center border-b-2 border-purple-100 hover:text-purple-500 hover:bg-purple-100 transition delay-50 duration-150 " +
                (noticeType === "org3"
                  ? "bg-purple-100 text-purple-500"
                  : "bg-white text-black")
              }>
              {" "}
              방과후활동서비스사업
            </div>
            <div
              onClick={() => onChangeMenu("org4")}
              class={
                "flex justify-center items-center border-b-2 border-purple-100 hover:text-purple-500 hover:bg-purple-100 transition delay-50 duration-150 " +
                (noticeType === "org4"
                  ? "bg-purple-100 text-purple-500"
                  : "bg-white text-black")
              }>
              {" "}
              늘사랑주간보호센터
            </div>
            <div
              onClick={() => onChangeMenu("participation")}
              class={
                "flex justify-center items-center border-b-2 border-purple-100 hover:text-purple-500 hover:bg-purple-100 transition delay-50 duration-150 " +
                (noticeType === "participation"
                  ? "bg-purple-100 text-purple-500"
                  : "bg-white text-black")
              }>
              {" "}
              참여마당
            </div>
          </div>
        </div>
      </div>
      <div class='flex flex-row mb-4 text-xl text-gray-500'>
        <div>
          경북지적발달장애인복지협회 포항시지부의 주요 공지를 확인하세요!
        </div>
      </div>
      <div class='flex flex-col h-60 pt-4 border-t border-gray-400'>
        {!loading && (
          <div class='w-full py-2 flex justify-center items-center'>
            <CircularProgress size={28} />
          </div>
        )}
        {loading &&
          noticeList.map((element, index) => {
            if (index < 5) {
              return (
                <div
                  onClick={() =>
                    history.push(typeUrl[element.type] + element._id)
                  }
                  class='h-10 px-2 flex flex-row justify-between items-center text-md  cursor-pointer hover:bg-gray-100'>
                  <div class='flex-1 truncate pr-4'>
                    <BsDot class='inline-block' />{" "}
                    <span
                      class={
                        noticeType === "all" ? "mr-2 font-bold" : "hidden"
                      }>
                      {"[" + typeName[element.type] + "]"}
                    </span>
                    <span class={noticeType === "all" ? "" : "font-bold"}>
                      {element.title}
                    </span>
                  </div>
                  <div class='w-16 text-sm'>
                    {dateToString(new Date(element.createdAt))}
                  </div>
                </div>
              );
            }
          })}
        {loading && noticeList.length === 0 && (
          <div class='py-2 w-full flex justify-center items-center font-bold text-gray-400'>
            {noticeType === "all" ? "" : typeName[noticeType] + "의 "}{" "}
            공지사항이 존재하지 않습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeNoticeBlock;
