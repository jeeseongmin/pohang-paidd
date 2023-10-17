import CircularProgress from "@material-ui/core/CircularProgress";
import Skeleton from "@material-ui/lab/Skeleton";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import axios from "axios";
import Subtitle from "components/Subtitle";
// import NoticeEdit from "pages/notice/NoticeEdit";
import NoticeEdit from "components/notice/NoticeEdit"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Viewer } from "@toast-ui/react-editor";
import DeleteConfirmModal from "../Modal/DeleteConfirmModal";

const NoticeDetail = (props) => {
  const [loading, setLoading] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [backUrl, setBackUrl] = useState();
  
  const currentEmail = useSelector((state) => state.setting.currentEmail);
  const currentPassword = useSelector((state) => state.setting.currentPassword);
  
  const id = props.id;
  
  const [info, setInfo] = useState({
    type: "",
    title: "",
    content: "",
    date: "",
    read: 0,
    fileList: [],
  });
  useEffect(() => {
    if (props.url === "business")
      setBackUrl("/business/" + props.pages + "/notice");
    else if (props.url === "organization") setBackUrl("/organization/notice/0");
    else if (props.url === "participation")
      setBackUrl("/participation/notice/0");
  }, []);
  
  useEffect(() => {
    document.getElementById("scrollRef").scrollTo(0, 0);
    
    axios
      .post(
        "/api/notice/" + id,
        {key: process.env.REACT_APP_API_KEY},
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((Response) => {
        const _text = Response.data.content.replace(/<p><\/p>/gi, "</br>");
        const cp = {
          type: Response.data.type,
          title: Response.data.title,
          // content: Response.data.content,
          content: _text,
          fileList: Response.data.fileList,
          read: Response.data.read,
          date: dataToText(Response.data.createdAt),
        };
        setInfo(cp);
        setLoading(true);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  
  const deleteNotice = async () => {
    if (currentEmail === "master" || currentEmail === info.type) {
      await info.fileList.forEach(async function (item, index) {
        await axios.get("/api/file/delete/" + item.filename);
      });
      await axios
        .post(
          "/api/notice/delete/" + id,
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
          history.push(backUrl);
        })
        .catch((response) => {
          console.log("Error!");
        });
    } else {
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
          <div class='flex flex-row justify-between items-center mb-8'>
            <Subtitle text={"자세히보기"}/>
          </div>
          <div class='text-sm lg:text-base w-full h-auto mb-8 border-t-2 border-b-2 border-purple-600'>
            {/* 딱 10개 씩만 로드하기 */}
            <div class='w-full px-2 lg:px-8 py-4 flex justify-end items-center relative'>
              {!loading ? (
                <Skeleton animation='wave'/>
              ) : (
                <>
                  <div class='w-full relative pr-24'>
                    <p class='w-full h-full break-words text-lg font-bold'>
                      {info.title}
                    </p>
                    {/* <div class="text-lg w-auto border border-black pr-4 relative">
                     </div> */}
                  </div>
                  <div class='absolute right-0 text-lg w-24 '>{info.date}</div>
                </>
              )}
            </div>
            <div class='w-full px-2 lg:px-8 py-4 flex justify-end items-center relative border-t border-gray-300'>
              {!loading ? (
                <Skeleton animation='wave'/>
              ) : (
                <>
                  <div class='w-full relative pr-24'>
                    <p class='w-full h-full break-words text-md invisible '>
                      Read {info.read}
                    </p>
                    {/* <div class="text-lg w-auto border border-black pr-4 relative">
                     </div> */}
                  </div>
                  <div class='absolute right-0 text-md w-24'>
                    <span class='text-purple-500 font-bold mr-2'>조회</span>{" "}
                    {info.read}
                  </div>
                </>
              )}
            </div>
            <div
              class={
                "w-full border-t border-b border-gray-300 px-4 pt-4 pb-2 flex flex-wrap flex-col " +
                (loading ? "text-center" : "")
              }>
              {info.fileList.length === 0 && loading ? (
                <div class='text-gray-500'>업로드된 파일이 없습니다.</div>
              ) : loading ? (
                info.fileList.map((element, index) => {
                  return (
                    <div class='w-full mb-4 rounded-md relative '>
                      <span class='mr-2 text-blue-600 font-bold'>
                        첨부 #{index + 1}
                      </span>
                      <a
                        class='hover:text-blue-500 '
                        href={
                          window.location.origin +
                          "/uploads/" +
                          element.filename
                        }
                        target='_blank'
                        download
                        rel='noreferrer'>
                        {element.filename}{" "}
                        <span class='text-sm text-gray-300'>(</span>
                        <span class='text-sm text-blue-300'>
                          {element.size.toString()}
                        </span>{" "}
                        <span class='text-red-500 text-sm'>bytes</span>
                        <span class='text-sm text-gray-300'>) </span>
                      </a>
                    </div>
                  );
                })
              ) : (
                <div class='w-full h-24 my-2 py-4 flex justify-center items-center text-center'>
                  <CircularProgress/>
                </div>
              )}
            </div>
            <div class='w-full relative py-4 px-2 lg:px-8 select-text h-auto min-h-screen'>
              {/* <div
               class='mb-24'
               dangerouslySetInnerHTML={{ __html: info.content }}></div> */}
              {loading && <Viewer initialValue={info.content}/>}
            </div>
          </div>
          <div class='flex justify-between items-center flex-col md:flex-row'>
            <Link
              class='w-full md:w-auto cursor-pointer px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold'
              to={backUrl}
              onClick={() =>
                document.getElementById("scrollRef").scrollTo(0, 0)
              }>
              뒤로 가기
            </Link>
            {loading &&
            (true ||
              currentEmail === "master" ||
              currentEmail === info.type) ? (
              <div class='w-full md:w-auto flex flex-col md:flex-row'>
                <div
                  onClick={() => setOpenDeleteModal(true)}
                  // onClick={() => alert("웹사이트 개발중입니다. 공지사항을 이용할 수 없습니다. ")}
                  class='w-full md:w-auto my-4 md:my-0 justify-center mr-4 cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold'>
                  삭제하기
                </div>
                <div
                  onClick={goEdit}
                  class='w-full md:w-auto justify-center cursor-pointer px-16 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold'>
                  수정하기
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <NoticeEdit
          pages={props.pages}
          info={info}
          id={id}
          url={props.url}
          backUrl={backUrl}
        />
      )}
      {openDeleteModal &&
        <DeleteConfirmModal type={"공지사항"} onClose={() => setOpenDeleteModal(false)} deleteAction={deleteNotice}/>
      }
    </>
  );
};

export default NoticeDetail;
