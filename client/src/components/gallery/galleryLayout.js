import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useRef, useState } from "react";
import { MdCancel } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import { BsArrowDownCircle } from "react-icons/bs";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const GalleryLayout = (props) => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const history = useHistory();
  // const [info, setInfo] = useState(props.info);
  const info = props.info;
  const changeInfo = props.changeInfo;
  const changeImageUrlList = props.changeImageUrlList;
  const titleRef = props.titleRef;
  const isEdit = props.isEdit;
  const contentRef = props.contentRef;
  
  // 임시
  const [oneLine, setOneLine] = useState("");
  const convert = () => {
    if (oneLine !== "") {
      const test = oneLine.split(",").map((item) => item.trim())
      changeImageUrlList("multi", test, "");
      setOneLine("");
    }
  }
  
  const rowsRef = useRef();
  
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  
  const buttonRef = useRef(null);
  
  const deletePhoto = isEdit ? props.deletePhoto : null;
  
  /*
   1. image 파일 첨부하고, 올리기를 눌러야 됨.
   2. 올리기를 누르면 배열에 순서대로 저장이 됨.
   3. image 올린 목록들을 리스트로 볼 수 있음.
   4. comment 까지 올릴 수 있음.
   */
  
  // useEffect(() => {
  // 	const formData = new FormData();
  // 	formData.append("file", img);
  // 	// 서버의 upload API 호출
  // 	axios.post("/api/image/upload", formData).then((req, res) => {
  // 		console.log(res);
  // 		// const cp = [...imgList];
  // 		// cp.push(res.data.url);
  // 		// setImgList(cp);
  // 	});
  // }, [img]);
  
  const buttonClick = () => {
    buttonRef.current.click();
  };
  
  const addRow = () => {
    changeImageUrlList("add", "", 0);
    // const cp = [...info.imageUrlList, ""];
    // changeInfo("", cp)
    if (rowsRef.current)
      rowsRef?.current?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
    // rowsRef.current.scrollTop = rowsRef.current.scrollHeight;
  }
  
  const removeRow = (index) => {
    changeImageUrlList("remove", "", index);
    // console.log()
    // const cp = [...imageUrlList];
    // cp.splice(index, 1);
    // setImageUrlList(cp);
  }
  
  // const onChange = async (e) => {
  //   setLoading(false);
  //   const formData = new FormData();
  //   formData.append("file", e.target.files[0]);
  //   // 서버의 upload API 호출
  //   const res = await axios.post("/api/image/upload", formData);
  //   const cp = [...info.imgList];
  //   await cp.push({filename: res.data.filename, id: res.data.id});
  //   await changeInfo(cp, "imgList");
  //   setLoading(true);
  // };
  
  const removeImg = async (index) => {
    // if (isEdit) {
    //   const cp = [...info.imgList];
    //   const name = cp[index];
    //   deletePhoto(name);
    //   cp.splice(index, 1);
    //   await changeInfo(cp, "imgList");
    // } else {
    //   const cp = [...info.imgList];
    //   const id = cp[index].id;
    //   cp.splice(index, 1);
    //   changeInfo(cp, "imgList");
    //
    //   await axios.get("/api/image/delete/" + id);
    // }
    
    changeImageUrlList("remove", "", index);
  };
  
  return (
    <>
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
          // onChange={onChange}
        />
        <div class='w-full my-4 flex flex-row justify-center items-center'>
          {/*<h1 class='text-lg font-bold'>이미지 업로드하기</h1>*/}
          <button
            class='text-sm outline-none w-full md:w-60 cursor-pointer px-0 md:px-8 py-1 justify-center border border-purple-300 bg-purple-300 text-white flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold'
            onClick={handleOpen}>
            이미지 업로드하기
          </button>
        </div>
        <div class='w-full my-4 flex flex-row justify-between items-center'>
          <h1 class='text-lg font-bold'>업로드 된 이미지 목록</h1>
        </div>
        
        
        <div
          className={
            "w-full border-2 border-gray-300 px-4 py-4 mb-2 flex flex-wrap " +
            (loading ? "text-center" : "")
          }>
          {info.convertedImageUrlList.length === 0 && loading ? (
            <div className='text-gray-500'>업로드된 이미지가 없습니다.</div>
          ) : loading ? (
            info.convertedImageUrlList.map((element, index) => {
              return (
                <div className='w-24 mb-4 border border-gray-300 rounded-md relative mx-4'>
                  <img
                    className='w-full h-24 object-contain'
                    src={element}
                    alt='imgList'
                  />
                  <MdCancel
                    onClick={() => removeImg(index)}
                    size={24}
                    class='cursor-pointer rounded-full bg-white absolute -top-2 -right-2'
                  />
                </div>
              );
            })
          ) : (
            <div className='w-full h-24 my-2 py-4 flex justify-center items-center text-center'>
              <CircularProgress/>
            </div>
          )}
        </div>
        <div class='cursor-pointer w-full pt-2 pb-4 flex justify-end items-center'>
        <textarea
          ref={contentRef}
          class='w-full h-24 p-4 border-2 border-gray-300 outline-none focus:border-purple-700 resize-none	'
          onChange={(e) => changeInfo(e, "content")}
          value={info.content}
          placeholder='간략한 설명'></textarea>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{...style, width: 800}}>
          <h1 class={"text-3xl font-bold mb-4"}>이미지 주소 업로드</h1>
          <p id="parent-modal-description mb-12">
            원하는 이미지 주소를 구글 드라이브에서 복사해서 붙여넣으세요.
          </p>
          <div class={"w-full flex my-4 items-center justify-center"}>
            <input value={oneLine} placeholder={"one line"} class={"flex-1 border border-purple-300"}
                   onChange={(e) => setOneLine(e.target.value)}/>
            <button class={"w-12 text-purple-300 mx-0 px-0 mb-2 text-sm font-bold"} onClick={convert}>로드</button>
          </div>
          {/*<div class={"w-full flex justify-center mt-4"}>*/}
          {/*  <button*/}
          {/*    className='ext-sm outline-none w-full cursor-pointer px-0 md:px-8 py-1 justify-center border border-purple-300 bg-purple-300 text-white flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold'*/}
          {/*    onClick={addRow}>*/}
          {/*    행 추가*/}
          {/*  </button>*/}
          {/*</div>*/}
          <div class={"w-full flex justify-center items-center mb-4 "}>
            <BsArrowDownCircle size={24} class={"text-purple-500"}/>
          </div>
          <div class={"mb-8 auto max-h-60 overflow-y-scroll"}>
            {
              info.imageUrlList.map((element, index) => {
                return <div class={"flex flex-row gap-1"}>
                  <div class={"w-10 flex justify-center items-center mb-4 font-bold"}>{index}</div>
                  <input type={"text"}
                         class="outline-none w-full border-2 border-gray-300 px-4 py-2 mb-2 flex flex-wrap"
                         placeholder="이미지 주소를 입력해주세요."
                         value={element}
                         onChange={(e) => {
                           // const cp = [...info.imageUrlList];
                           // cp[index] = e.target.value;
                           // setImageUrlList(cp);
                           changeImageUrlList("change", e.target.value, index);
                         }
                         }
                  />
                  <button class={"w-12 text-purple-300 mx-0 px-0 mb-2 text-sm font-bold "}
                          onClick={() => removeRow(index)}>삭제
                  </button>
                </div>
              })
            }
            <div ref={rowsRef}/>
          </div>
          <div class={"flex flex-row justify-between items-center"}>
            <span><b>총 {info.imageUrlList.length}개의 이미지</b></span>
            <button
              class="w-full md:w-auto cursor-pointer mb-4 md:mb-0 px-16 py-2 justify-center border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold"
              onClick={handleClose}
            >
              닫기
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default GalleryLayout;
