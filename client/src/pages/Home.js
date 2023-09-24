import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import { setMenu, setSubmenu } from "../reducers/setting";
import HomeNoticeBlock from "../components/notice/HomeNoticeBlock";

const Home = () => {
  const dispatch = useDispatch();
  const [photoList, setPhotoList] = useState([]);
  const [galleryList, setGalleryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoverBtn1, setHoverBtn1] = useState(false);
  const [hoverBtn2, setHoverBtn2] = useState(false);
  
  useEffect(() => {
    dispatch(setMenu(0));
    dispatch(setSubmenu(0));
    axios
      .post(
        "/api/gallery",
        {key: process.env.REACT_APP_API_KEY},
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((Response) => {
        setGalleryList(Response.data);
        setLoading(true);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  
  const goSubPage = (main, sub) => {
    dispatch(setMenu(main));
    dispatch(setSubmenu(sub));
    document.getElementById("scrollRef").scrollTo(0, 0);
    // document.getElementById("scrollRef").scrollTo(0, 0);
    // document.getElementById("root").scrollTop = 0;
  };
  
  const dataToText = (date) => {
    let year = date.substring(2, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    return year + "." + month + "." + day;
  };
  
  const goGallery = (type) => {
    if (type === "org4") {
      dispatch(setMenu(3));
      dispatch(setSubmenu(1));
    } else {
      dispatch(setMenu(2));
      dispatch(setSubmenu(3));
    }
    document.getElementById("scrollRef").scrollTo(0, 0);
  };
  
  return (
    <Layout>
      <div class="w-full h-full">
        {/* section 1 */}
        <Slider/>
        
        {/* section 2 */}
        <div class="flex flex-row items-center pt-10 lg:pt-16 px-5 2xl:px-36 xl:px-32 md:px-8">
          <div class="h-auto w-full lg:w-1/2">
            <h1 class="text-xl font-semibold mb-2 lg:text-3xl">
              경북지적발달장애인복지협회
            </h1>
            <h1 class="text-xl font-semibold lg:text-3xl">
              포항시지부 사업소개
            </h1>
            <div class="text-md py-4 md:text-xl md:py-8">
              발달장애인협회에서 진행되는 사업들을 살펴보세요.
            </div>
            <div class="flex flex-wrap">
              <Link
                to="/business/base/default"
                onClick={() => goSubPage(2, 1)}
                class="lg:text-base lg:p-4 py-2 px-4 text-xs cursor-pointer mr-4 mb-4 border border-purple-700 text-purple-700 rounded-full transition delay-50 duration-300 hover:border-purple-300 hover:bg-purple-300 hover:text-white"
              >
                협회 사업
              </Link>
              <Link
                to="/business/org1/intro"
                onClick={() => goSubPage(2, 2)}
                class="lg:text-base lg:p-4 py-2 px-4 text-xs cursor-pointer mr-4 mb-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 transition delay-50 duration-300 hover:bg-purple-300 hover:text-white"
              >
                포항시지적장애인자립지원센터
              </Link>
              <Link
                to="/business/org2/intro"
                onClick={() => goSubPage(2, 3)}
                class="lg:text-base py-2 px-4 lg:p-4 text-xs cursor-pointer mr-4 mb-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 transition delay-50 duration-300 hover:text-white"
              >
                장애인활동지원사업
              </Link>
              <Link
                to="/business/org3/intro"
                onClick={() => goSubPage(2, 4)}
                class="lg:text-base lg:p-4 text-xs cursor-pointer mr-4 mb-4 py-2 px-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 transition delay-50 duration-300 hover:text-white"
              >
                방과후활동서비스사업
              </Link>
              <Link
                to="/organization/intro/0"
                onClick={() => goSubPage(2, 5)}
                class="lg:text-base lg:p-4 text-xs cursor-pointer mr-4 mb-4 py-2 px-4 border border-purple-700 text-purple-700 rounded-full hover:border-purple-300 hover:bg-purple-300 transition delay-50 duration-300 hover:text-white"
              >
                사회복지이용시설 - 늘사랑주간보호센터
              </Link>
            </div>
          </div>
          <div class="flex-1 hidden flex-col justify-end items-center lg:flex">
            <img src="/image/home-img2.png" class="w-2/3" alt="main-img2"/>
          </div>
        </div>
        {/* section 3 */}
        {galleryList.length === 0 ? (
          <div class="mb-8"></div>
        ) : (
          <div class="flex flex-col px-5 py-8 2xl:px-36 xl:px-32 md:px-8">
            <div class="w-full">
              <h1 class="text-xl font-semibold lg:text-3xl">소식</h1>
              <div class="w-full flex flex-row justify-between items-center">
                <div class="text-md py-4 md:text-xl md:py-8">
                  발달장애인협회에서는 어떤 일들이 있었을까요?
                </div>
                <div class="flex flex-row">
                  {/* <div class="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"></div> */}
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="flex justify-end items-center"></div>
              <div class="w-full flex flex-row flex-wrap ">
                {galleryList.map((element, index) => {
                  if (index < 4) {
                    const destination =
                      element.type === "org4"
                        ? "/organization/galleryDetail/" + element._id
                        : "/business/" +
                        element.type +
                        "/gallery/" +
                        element._id;
                    return (
                      <Link
                        key={element.id}
                        to={destination}
                        onClick={() => goGallery(element.type)}
                        class="w-1/2 lg:w-1/4 px-2 md:w-1/4 md:px-4 mb-4 lg:mb-0"
                      >
                        <div class="cursor-pointer mb-4 h-36 border border-gray-200 md:h-48">
                          <img
                            class="w-full h-full object-cover"
                            src={
                              element.convertedImageUrlList[0]
                            }
                            alt="logo"
                          />
                        </div>
                        <div>
                          <h1 class="truncate">
                            <b>{element.title}</b>
                          </h1>
                          <p class="text-gray-300">
                            {dataToText(element.createdAt)}
                          </p>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        )}
        <HomeNoticeBlock/>
        <div class="flex flex-col w-full h-auto relative">
          <img
            src="/image/home-bg4.png"
            class="object-cover w-full"
            alt="home-bg4"
          />
          <div class="absolute h-1/2 right-8 lg:right-32 bottom-4 lg:bottom-8 flex flex-row ">
            <Link
              onMouseOver={() => setHoverBtn1(true)}
              onMouseLeave={() => setHoverBtn1(false)}
              to="/participation/support/0"
              onClick={() => goSubPage(4, 3)}
            >
              <img
                src={
                  hoverBtn1
                    ? "/image/home-bg4-btn1-hover.png"
                    : "/image/home-bg4-btn1.png"
                }
                alt="후원"
                class="cursor-pointer h-full mr-4 lg:mr-8"
              />
            </Link>
            <Link
              onMouseOver={() => setHoverBtn2(true)}
              onMouseLeave={() => setHoverBtn2(false)}
              to="/participation/volunteer/0"
              onClick={() => goSubPage(4, 4)}
            >
              <img
                src={
                  hoverBtn2
                    ? "/image/home-bg4-btn2-hover.png"
                    : "/image/home-bg4-btn2.png"
                }
                alt="자원봉사"
                class="cursor-pointer h-full"
              />
            </Link>
          </div>
        </div>
        
        {/* section 4 */}
        {/* <div class="flex flex-col lg:flex-row px-5 py-16 2xl:px-36 xl:px-32 md:px-8">
         <div class="w-full lg:w-1/3 mr-8">
         <h1 class="text-xl font-semibold lg:text-3xl">후원 및 자원봉사</h1>
         <div class="text-md py-4 md:text-xl md:py-8">
         더 많은 발달장애인에게 좋은 서비스를 지원할 수 있도록 후원과
         자원봉사 신청을 받습니다.
         </div>
         </div>
         <div class="flex-1 flex flex-row">
         <div class="w-1/2 flex flex-col justify-center items-center px-4 pb-4 md:pb-8 border border-gray-100 shadow-lg bg-white relative mr-4">
         <div class="z-20 w-full">
         <img
         class="w-full object-cover"
         src="/image/home-img3.png"
         alt="logo"
         />
         </div>
         <div class="flex flex-row items-end justify-start lg:justify-between my-4">
         <h1 class="text-xl lg:text-3xl text-purple-600 font-semibold">
         후원
         </h1>
         </div>
         <div class="w-full px-0 md:px-4 text-center flex">
         <Link
         to="/participation/support/0"
         onClick={() => goSubPage(4, 3)}
         class="w-full z-40 lg:text-xl text-xs py-2 md:py-3 cursor-pointer border border-purple-700 text-purple-700 rounded-full transition delay-50 duration-300 hover:border-purple-300 hover:bg-purple-300 hover:text-white"
         >
         자세히 보기
         </Link>
         </div>
         </div>
         <div class="w-1/2 flex flex-col justify-center items-center px-4 pb-4 md:pb-8 border border-gray-100 shadow-lg bg-white relative">
         <div class="z-20 w-full">
         <img
         class="w-full object-cover"
         src="/image/home-img4.png"
         alt="logo"
         />
         </div>
         <div class="flex flex-row items-end justify-start lg:justify-between my-4">
         <h1 class="text-xl lg:text-3xl text-purple-600 font-semibold">
         자원봉사
         </h1>
         </div>
         <div class="w-full px-0 md:px-4 text-center flex">
         <Link
         to="/participation/volunteer/0"
         onClick={() => goSubPage(4, 4)}
         class="w-full z-40 lg:text-xl text-xs py-2 md:py-3 cursor-pointer border border-purple-700 text-purple-700 rounded-full transition delay-50 duration-300 hover:border-purple-300 hover:bg-purple-300 hover:text-white"
         >
         자세히 보기
         </Link>
         </div>
         </div>
         </div>
         </div> */}
      </div>
    </Layout>
  );
};

export default Home;
