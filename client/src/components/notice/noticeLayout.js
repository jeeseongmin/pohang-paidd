import CircularProgress from "@material-ui/core/CircularProgress";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import axios from "axios";
import React, { useRef, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { MdCancel } from "react-icons/md";

const NoticeLayout = (props) => {
  const [loading, setLoading] = useState(true);
  const info = props.info;
  const changeInfo = props.changeInfo;
  const titleRef = props.titleRef;
  const editorRef = props.editorRef;
  const buttonRef = useRef(null);
  const isEdit = props.isEdit;
  const fileList = props.fileList;
  const imgList = props.imgList;
  const changeList = props.changeList;
  const setImgList = props.setImgList;
  
  const buttonClick = () => {
    buttonRef.current.click();
  };
  
  /**
   * 파일 업로드 onChange 함수
   * @param {*} e
   */
  const onChange = async (e) => {
    let formData = new FormData();
    const config = {
      header: {"content-type": "multipart/form-data"},
    };
    formData.append("file", e.target.files[0]);
    if (e.target.files[0].size > 10 * 1024 * 1024) {
      alert("10MB 이하의 파일만 업로드 가능합니다.");
      e.target.value = null;
    } else {
      await axios
        .post("/api/file/upload_page", formData, config)
        .then(async (res) => {
          if (res.data.success) {
            const cp = [...fileList];
            await cp.push({
              filename: res.data.file.filename,
              size: res.data.file.size,
            });
            // await changeInfo(cp, "fileList");
            await changeList(cp, "fileList");
            setLoading(true);
            e.target.value = null;
          } else {
            alert("파일 업로드를 실패했습니다.");
          }
        });
    }
  };
  
  /**
   * 파일 개별 삭제
   * @param {*} filename
   */
  const removeFile = async (filename) => {
    const res = await axios.get("/api/file/delete/" + filename);
    const cp = [...fileList].filter(function (element, index) {
      return element.filename !== filename;
    });
    changeList(cp, "fileList");
  };
  
  return (
    <div class='w-full h-auto mb-4'>
      {/* 딱 10개 씩만 로드하기 */}
      <div class='w-full pt-4 pb-2 mb-2 flex justify-end items-center border-t-2 border-purple-600'>
        <input
          ref={titleRef}
          type='text'
          class='flex-1 p-4 border-2 border-gray-300 outline-none focus:border-purple-700'
          onChange={(e) => changeInfo(e, "title")}
          value={info.title}
          placeholder='제목'
        />
      </div>
      <input
        ref={buttonRef}
        type='file'
        class='hidden'
        name='img'
        onChange={onChange}
      />
      <div class='w-full my-4 flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center'>
        <div class='flex flex-col md:flex-row mb-4 md:mb-0 justify-start items-start md:items-center'>
          <h1 class='text-lg font-bold mr-0 md:mr-2 mb-2 md:mb-0'>
            업로드 된 파일 목록
          </h1>
          <p class='text-xs font-bold text-red-500'>파일 별 크기는 10MB 이하</p>
        </div>
        <button
          class='text-sm outline-none w-full md:w-auto cursor-pointer px-0 md:px-8 py-2 md:py-1 justify-center border border-purple-300 bg-purple-300 text-white flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold'
          onClick={buttonClick}>
          파일 업로드
        </button>
      </div>
      <div
        class={
          "w-full border-2 border-gray-300 px-4 py-4 mb-2 flex flex-wrap flex-col " +
          (loading ? "text-center" : "")
        }>
        {fileList && fileList.length === 0 && loading ? (
          <div class='text-gray-500'>업로드된 파일이 없습니다.</div>
        ) : loading ? (
          fileList &&
          fileList.map((element, index) => {
            return (
              <div class='w-full mb-4 border border-gray-300 rounded-md relative'>
                {/* 
                 // localhost
                 <a
                 class="text-blue-500 underline"
                 href={"http://localhost:5000/uploads/" + element.filename}
                 target="_blank"
                 download
                 > */}
                <a
                  class='text-blue-500'
                  href={window.location.origin + "/uploads/" + element.filename}
                  target='_blank'
                  download
                  rel='noreferrer'>
                  <span class='underline'>{element.filename}</span>{" "}
                  <span class='text-sm text-gray-300'>(</span>
                  <span class='text-sm text-blue-300'>
                    {element.size.toString()}
                  </span>{" "}
                  <span class='text-red-500 text-sm'>bytes</span>
                  <span class='text-sm text-gray-300'>) </span>
                </a>
                
                <MdCancel
                  onClick={() => removeFile(element.filename)}
                  size={24}
                  class='cursor-pointer rounded-full bg-white absolute -top-2 -right-2'
                />
              </div>
            );
          })
        ) : (
          <div class='w-full h-24 my-2 py-4 flex justify-center items-center text-center'>
            <CircularProgress/>
          </div>
        )}
      </div>
      {isEdit ? (
        <Editor
          initialValue={info.content}
          height='600px'
          initialEditType='wysiwyg'
          useCommandShortcut={true}
          ref={editorRef}
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              console.log("blob", blob);
              // alert("이미지 업로드 기능은 일시적으로 사용이 불가합니다.")
              
              // 서버의 upload API 호출
              // if (blob.size > 10 * 1024 * 1024) {
              //   alert("10MB 이하의 이미지만 업로드 가능합니다.");
              //   blob = null;
              // } else {
              //   let formData = new FormData();
              //   formData.append("file", blob);
              //   await axios
              //     .post("/api/image/upload", formData)
              //     .then(async (res) => {
              //       if (res.data.success) {
              //         const cp = [...imgList];
              //         cp.push({
              //           filename: res.data.filename,
              //           id: res.data.id,
              //           url: res.data.url,
              //           deleted: false,
              //         });
              //         await changeList(cp, "imgList");
              //         callback(res.data.url, "alt text");
              //       } else {
              //         alert("이미지 업로드를 실패했습니다.");
              //         return "error";
              //       }
              //     });
              // }
            },
          }}
        />
      ) : (
        <Editor
          initialValue=''
          // previewStyle="vertical"
          height='600px'
          initialEditType='wysiwyg'
          useCommandShortcut={true}
          ref={editorRef}
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              alert("현재 파일 업로드는 불가능합니다. 구글 드라이브를 통한 URL을 활용해주시기 바랍니다.");
              console.log("blob", blob)
              
              // 서버의 upload API 호출
              // if (blob.size > 10 * 1024 * 1024) {
              //   alert("10MB 이하의 파일만 업로드 가능합니다.");
              //   blob = null;
              // } else {
              //   let formData = new FormData();
              //   formData.append("file", blob);
              //   await axios
              //     .post("/api/image/upload", formData)
              //     .then(async (res) => {
              //       if (res.data.success) {
              //         const cp = [...imgList];
              //         cp.push({
              //           filename: res.data.filename,
              //           id: res.data.id,
              //           url: res.data.url,
              //           deleted: false,
              //         });
              //         await changeList(cp, "imgList");
              //         callback(res.data.url, "alt text");
              //       } else {
              //         alert("이미지 업로드를 실패했습니다.");
              //         return "error";
              //       }
              //     });
              // }
            },
          }}
        />
      )}
    </div>
  );
};

export default NoticeLayout;
