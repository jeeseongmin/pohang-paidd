import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  setCurrentEmail,
  setCurrentPassword,
  setLoginToken,
  setMenu,
  setProfile,
  setSidebar,
  setSubmenu,
} from "../../reducers/setting";
import Main from "./Main";
import Sub from "./Sub";

const Navbar = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.setting.sidebar);
  const profile = useSelector((state) => state.setting.profile);
  const loginToken = useSelector((state) => state.setting.loginToken);
  const currentEmail = useSelector((state) => state.setting.currentEmail);
  const currentPassword = useSelector((state) => state.setting.currentPassword);
  
  const profileRef = useRef(null);
  const subProfileRef = useRef(null);
  
  const [overMenu, setOverMenu] = useState([false, false, false, false, false]);
  
  const [loginInfo, setLoginInfo] = useState({
    position: "",
    email: "",
  });
  
  const [modalShow, setModalShow] = useState(false);
  
  useEffect(() => {
    if (sessionStorage.getItem("loginToken")) {
      if (currentEmail !== "" && currentPassword !== "") {
        setIsLogin(true);
        const payload = {
          position: "",
          email: currentEmail,
        };
        if (currentEmail === "master") {
          payload.position = "총 관리자";
        } else if (currentEmail === "org1") {
          payload.position = "지적장애인 자립지원센터 관리자";
        } else if (currentEmail === "org2") {
          payload.position = "장애인활동 지원사업 관리자";
        } else if (currentEmail === "org3") {
          payload.position = "방과후활동 서비스사업 관리자";
        } else if (currentEmail === "org4") {
          payload.position = "늘사랑보호주간센터 관리자";
        }
        setLoginInfo(payload);
      }
    }
  }, [sessionStorage.getItem("loginToken")]);
  
  const hoverAction = (menu, TF) => {
    const cp = [...overMenu];
    cp[menu] = TF;
    setOverMenu(cp);
  };
  
  const goPage = (num) => {
    dispatch(setMenu(num));
    dispatch(setSubmenu(1));
    document.getElementById("scrollRef").scrollTo(0, 0);
  };
  
  const logout = () => {
    sessionStorage.setItem("loginToken", false);
    dispatch(setLoginToken("logout"));
    dispatch(setCurrentEmail(""));
    dispatch(setCurrentPassword(""));
    dispatch(setProfile("off"));
    dispatch(setMenu(0));
    dispatch(setSubmenu(0));
    
    alert("로그아웃되었습니다.");
    history.push("/");
    window.location.reload();
  };
  
  const onToggleSidebar = () => {
    if (sidebar === "on") {
      dispatch(setSidebar("off"));
    } else dispatch(setSidebar("on"));
    // dispatch(setSidebar(!sidebar));
  };
  
  const onToggleProfile = () => {
    if (profile === "on") {
      dispatch(setProfile("off"));
    } else dispatch(setProfile("on"));
  };
  
  const goManagementPage = () => {
    dispatch(setProfile("off"));
    setModalShow(true);
    dispatch(setMenu(0));
    dispatch(setSubmenu(1));
    history.push("/admin/management/organization");
  };
  
  const goEditPage = () => {
    dispatch(setProfile("off"));
    setModalShow(true);
    dispatch(setMenu(0));
    dispatch(setSubmenu(1));
    history.push("/admin/edit");
  };
  
  useEffect(() => {
    if (profile === "off") return;
    
    function handleClick(e) {
      if (profileRef.current === null || subProfileRef.current === null) {
      
      } else if (
        !profileRef.current.contains(e.target) &&
        !subProfileRef.current.contains(e.target)
      ) {
        dispatch(setProfile("off"));
      }
    }
    
    window.addEventListener("click", handleClick);
    
    return () => window.removeEventListener("click", handleClick);
  }, [profile]);
  
  return (
    <>
      <div
        class={
          "z-50 w-full pl-5 pr-16 h-16 hidden justify-start shadow-lg bg-white lg:flex 2xl:px-36 xl:px-32 lg:pl-5 fixed "
        }
      >
        <div class="flex h-full justify-center items-center cursor-pointer">
          <Link class="h-full" to="/" onClick={() => goPage(0)}>
            <img
              src="/image/logo.png"
              class="h-full xl:h-full object-cover"
              alt="logo"
            />
          </Link>
        </div>
        <div class="z-30 flex-1 flex justify-around xl:justify-end items-center">
          <div
            onMouseOver={() => hoverAction(0, true)}
            onMouseOut={() => hoverAction(0, false)}
            class="h-full relative ml-4 xl:ml-12 flex items-center "
          >
            <Main overMenu={overMenu} menu={1}/>
            <div
              class={
                "border-t border-l border-r transition delay-50 duration-300 border-gray-100 w-40 absolute top-14 shadow-lg flex flex-col bg-white " +
                (overMenu[0] ? "block opacity-100" : "hidden opaicty-0")
              }
            >
              <Sub menu={1} submenu={1}/>
              <Sub menu={1} submenu={2}/>
              <Sub menu={1} submenu={3}/>
              <Sub menu={1} submenu={4}/>
              <Sub menu={1} submenu={5}/>
            </div>
          </div>
          <div
            onMouseOver={() => hoverAction(1, true)}
            onMouseOut={() => hoverAction(1, false)}
            class="h-full relative ml-4 xl:ml-12 flex items-center"
          >
            <Main overMenu={overMenu} menu={2}/>
            <div
              class={
                "border-t border-l border-r transition delay-50 duration-300 border-gray-100 w-56 absolute top-14 shadow-lg flex flex-col bg-white " +
                (overMenu[1] ? "block" : "hidden")
              }
            >
              <Sub menu={2} submenu={1}/>
              <Sub menu={2} submenu={2}/>
              <Sub menu={2} submenu={3}/>
              <Sub menu={2} submenu={4}/>
            </div>
          </div>
          
          <div
            onMouseOver={() => hoverAction(2, true)}
            onMouseOut={() => hoverAction(2, false)}
            class="h-full relative ml-4 xl:ml-12 flex items-center"
          >
            <Main overMenu={overMenu} menu={3}/>
            
            <div
              class={
                "border-t border-l border-r transition delay-50 duration-300 border-gray-100 w-40 absolute top-14 shadow-lg flex flex-col bg-white " +
                (overMenu[2] ? "block" : "hidden")
              }
            >
              <Sub menu={3} submenu={1}/>
            </div>
          </div>
          <div
            onMouseOver={() => hoverAction(3, true)}
            onMouseOut={() => hoverAction(3, false)}
            class="h-full relative ml-4 xl:ml-12 flex items-center"
          >
            <Main overMenu={overMenu} menu={4}/>
            <div
              class={
                "border-t border-l border-r transition delay-50 duration-300 border-gray-100 w-40 absolute top-14 shadow-lg flex flex-col bg-white " +
                (overMenu[3] ? "block" : "hidden")
              }
            >
              <Sub menu={4} submenu={1}/>
              <Sub menu={4} submenu={2}/>
              <Sub menu={4} submenu={3}/>
              <Sub menu={4} submenu={4}/>
            </div>
          </div>
          <div
            onMouseOver={() => hoverAction(4, true)}
            onMouseOut={() => hoverAction(4, false)}
            class="h-full relative ml-4 xl:ml-12 flex items-center"
          >
            <Main overMenu={overMenu} menu={5}/>
            <div
              class={
                "border-t border-l border-r transition delay-50 duration-300 border-gray-100 w-40 absolute top-14 shadow-lg flex flex-col bg-white " +
                (overMenu[4] ? "block" : "hidden")
              }
            >
              <Sub menu={5} submenu={1}/>
            </div>
          </div>
        </div>
        {isLogin ? (
          <div
            ref={profileRef}
            class="absolute h-full right-2 xl:right-10 w-auto flex justify-end items-center"
          >
            <img
              src="/image/profileDefault1.png"
              onClick={onToggleProfile}
              class="z-30 p-1 w-10 h-10 rounded-full cursor-pointer object-cover"
              alt="profile"
            />
            {profile === "on" ? (
              <div
                class="z-30 px-4 py-2 flex flex-col justify-center items-center -right-4 top-14 w-72 h-48 bg-white border border-gray-300 rounded-lg absolute">
                <div class="w-full h-full flex flex-col justify-around">
                  <div class="w-full flex flex-col">
                    <p class="font-bold w-auto">{loginInfo.position}</p>
                    <p class="text-gray-500">ID : {loginInfo.email}</p>
                  </div>
                  <div
                    onClick={goManagementPage}
                    class="cursor-pointer w-full py-1 border border-purple-400 text-purple-400 flex justify-center transition delay-50 duration-300 hover:bg-purple-400 hover:text-white"
                  >
                    기관 관리
                  </div>
                  <div
                    onClick={goEditPage}
                    class="cursor-pointer w-full py-1 border border-purple-400 text-purple-400 flex justify-center transition delay-50 duration-300 hover:bg-purple-400 hover:text-white"
                  >
                    정보 변경
                  </div>
                  <div
                    onClick={logout}
                    class="cursor-pointer w-full py-1 border border-purple-400 text-purple-400 flex justify-center transition delay-50 duration-300 hover:bg-purple-400 hover:text-white"
                  >
                    로그아웃
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      <div
        class={
          "z-20 w-full px-5 h-14 flex justify-between shadow-2xl bg-white lg:hidden sm:px-10 sm:h-16 fixed "
        }
      >
        <div class="h-full flex justify-center items-center text-purple-300">
          {/* <GiHamburgerMenu
           onClick={onToggleSidebar}
           size={28}
           class="cursor-pointer"
           /> */}
          <div class="h-full flex justify-center items-center">
            <img
              onClick={onToggleSidebar}
              src="/image/hamburger.png"
              alt="hamburger"
              class="object-cover"
            />
          </div>
        </div>
        <div class="flex flex-row justify-center items-center">
          <div class="flex justify-center items-center cursor-pointer">
            <Link to="/" onClick={() => goPage(0)}>
              <img src="/image/logo.png" class="h-5 sm:h-8" alt="logo"/>
            </Link>
          </div>
          {isLogin ? (
            <div
              ref={subProfileRef}
              class="ml-4 h-full w-auto flex justify-end items-center"
            >
              <img
                src="/image/profileDefault1.png"
                onClick={onToggleProfile}
                class="z-30 p-1 w-10 h-10 rounded-full cursor-pointer object-cover"
                alt="profile"
              />
              {profile === "on" ? (
                <div
                  class="z-30 px-4 py-2 flex flex-col justify-center items-center right-4 top-12 w-60 h-48 bg-white border border-gray-300 rounded-lg absolute">
                  <div class="w-full h-full flex flex-col justify-around">
                    <div class="w-full flex flex-col">
                      <p class="font-bold">{loginInfo.position}</p>
                      <p class="text-gray-500">ID : {loginInfo.email}</p>
                    </div>
                    <div
                      onClick={goManagementPage}
                      class="cursor-pointer w-full py-1 border border-purple-400 text-purple-400 flex justify-center transition delay-50 duration-300 hover:bg-purple-400 hover:text-white"
                    >
                      기관 관리
                    </div>
                    <div
                      onClick={goEditPage}
                      class="cursor-pointer w-full py-1 border border-purple-400 text-purple-400 flex justify-center transition delay-50 duration-300 hover:bg-purple-400 hover:text-white"
                    >
                      정보 변경
                    </div>
                    <div
                      onClick={logout}
                      class="cursor-pointer w-full py-1 border border-purple-400 text-purple-400 flex justify-center transition delay-50 duration-300 hover:bg-purple-400 hover:text-white"
                    >
                      로그아웃
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

// 반응형 xl부터 시작
// 기존에 px-10이고, xl:px-36이다.
//

export default Navbar;
