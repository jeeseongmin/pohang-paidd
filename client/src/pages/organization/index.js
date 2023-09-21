// import NoticeDetail from "./common/notice/noticeDetail";
// import NoticeWrite from "./common/notice/writeNotice";
import NoticeDetail from "pages/notice/NoticeDetail";
import NoticeWrite from "pages/notice/NoticeWrite";
import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import OrgMenu from "../../components/Menu/OrgMenu";
import Business from "./common/Business";
import Gallery from "./common/Gallery.js";
import Intro from "./common/Intro";
import Notice from "./common/notice/index";
import GalleryDetail from "../../components/gallery/GalleryDetail";
import GalleryWrite from "../../components/gallery/GalleryWrite";

const Index = ({match}) => {
  const [selected, setSelected] = useState(0);
  const history = useHistory();
  const changeSelected = (num) => {
    setSelected(num);
    window.scrollTo(0, 0);
  };
  const [transForm, setTransForm] = useState(false);
  
  useEffect(() => {
    setTransForm(true);
  }, []);
  
  useEffect(() => {
    if (window.location.pathname.includes("notice")) {
      history.push(window.location.pathname);
      setSelected(2);
    } else if (window.location.pathname.includes("gallery")) {
      history.push(window.location.pathname);
      setSelected(3);
    } else {
      if (selected === 0) {
        history.push("/organization/intro/0");
      } else if (selected === 1) {
        history.push("/organization/business/0");
      } else if (selected === 2) {
        history.push("/organization/notice/0");
      } else if (selected === 3) {
        history.push("/organization/gallery/0");
      }
    }
  }, []);
  
  return (
    <Layout>
      <div class='h-full z-0'>
        <div class='z-0 h-56 bg-purple-100 flex justify-center items-center relative'>
          <h1 class='z-50 text-2xl font-bold md:font-normal md:text-4xl'>
            늘사랑주간보호센터
          </h1>
          <div
            class={
              "z-30 absolute w-full h-1/2 lg:h-full hidden lg:flex flex-row justify-between items-center bottom-0 px-0 2xl:px-36 xl:px-32  "
            }>
            <img
              src='/image/index3-img1.png'
              alt='index-img'
              class={
                "h-full translate-x-0 lg:translate-x-10 object-cover " +
                (transForm
                  ? "transform translate-x-30 delay-150 duration-700 "
                  : "")
              }
            />
            <img
              src='/image/index3-img2.png'
              alt='index-img'
              class={
                "h-full -translate-x-0 lg:-translate-x-10 object-cover " +
                (transForm
                  ? "transform -translate-x-16 delay-150 duration-700 "
                  : "")
              }
            />
          </div>
          {/* 나중에 부설기관이 늘어나면 추가하기 */}
          {/* <div class="px-36 w-full cursor-pointer absolute bottom-0 flex flex-row justify-center">
           <Link
           to="/organization"
           class={
           "w-1/5 max-w-xl py-4 text-center " +
           (page === 1
           ? "text-purple-700 bg-white font-bold"
           : "text-white bg-purple-300")
           }
           >
           늘사랑주간보호센터
           </Link>
           <Link
           class={
           "w-1/5 max-w-xl py-4 text-center " +
           (page === 2
           ? "text-purple-700 bg-white font-bold"
           : "text-white bg-purple-300")
           }
           >
           준비중
           </Link>
           </div> */}
        </div>
        <div class='w-full h-auto px-5 py-4 2xl:px-36 xl:px-32 md:px-8'>
          <div class='flex flex-row justify-start items-center py-8'>
            {[0, 1, 2, 3].map((element, index) => {
              return (
                <OrgMenu
                  index={element}
                  selected={selected}
                  changeSelected={changeSelected}
                />
              );
            })}
          </div>
          
          <div>
            <switch>
              <Route exact path='/organization/intro/0'>
                <Intro/>
              </Route>
              <Route exact path='/organization/business/0'>
                <Business/>
              </Route>
              <Route exact path='/organization/notice/0'>
                <Notice/>
              </Route>
              <Route exact path='/organization/gallery/0'>
                <Gallery pages={"org4"}/>
              </Route>
              <Route exact path='/organization/galleryWrite/0'>
                <GalleryWrite type={"organization"} pages={"org4"} id={match.params.type}/>
              </Route>
              <Route exact path='/organization/galleryDetail/:id'>
                <GalleryDetail type={"organization"} id={match.params.type} pages={"org4"}/>
              </Route>
              <Route exact path='/organization/writeNotice/0'>
                <NoticeWrite pages={"org4"} url='organization'/>
              </Route>
              <Route exact path='/organization/noticeDetail/:id'>
                <NoticeDetail id={match.params.type} url='organization'/>
              </Route>
            </switch>
            {/* <Content /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
