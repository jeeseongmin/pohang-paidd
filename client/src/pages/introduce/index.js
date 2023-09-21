import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Intro from "./Intro";
import Purpose from "./Purpose";
import History from "./History";
import Org from "./Org";
import Guide from "./Guide";
import Submenu from "../../components/Submenu";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";

const Index = () => {
  const dispatch = useDispatch();
  const [transForm, setTransForm] = useState(false);
  
  useEffect(() => {
    setTransForm(true);
  }, []);
  
  const currentMenu = useSelector((state) => state.setting.menu);
  const currentSubmenu = useSelector((state) => state.setting.submenu);
  
  return (
    <Layout>
      <div class="h-full z-0">
        <div class="relative mb-8">
          <div class="z-30 h-44 bg-purple-100 flex justify-center items-center relative">
            <h1 class="text-2xl font-bold md:font-normal md:text-4xl">
              협회소개
            </h1>
            <div
              class={
                "-bottom-10 z-30 absolute w-full h-1/2 lg:h-full flex flex-row justify-between items-center px-0 2xl:px-36 xl:px-32 md:px-8 " +
                (transForm
                  ? "transform -translate-y-10 delay-150 duration-700 "
                  : "")
              }
            >
              <img
                src="/image/index1-img1.png"
                alt="index-img"
                class="h-full object-cover"
              />
              <img
                src="/image/index1-img2.png"
                alt="index-img"
                class="h-full object-cover"
              />
            </div>
          </div>
          <div
            class="absolute bottom-22 z-40 w-full cursor-pointer flex flex-row justify-center bg-purple-100 px-0 2xl:px-36 xl:px-32 md:px-8">
            <Submenu menu={1} submenu={1}/>
            <Submenu menu={1} submenu={2}/>
            <Submenu menu={1} submenu={3}/>
            <Submenu menu={1} submenu={4}/>
            <Submenu menu={1} submenu={5}/>
          </div>
        </div>
        
        <div class="w-full h-auto">
          <switch>
            <Route exact path="/introduce">
              <Intro/>
            </Route>
            <Route exact path="/introduce/intro">
              <Intro/>
            </Route>
            <Route path="/introduce/purpose">
              <Purpose/>
            </Route>
            <Route path="/introduce/history">
              <History/>
            </Route>
            <Route path="/introduce/org">
              <Org/>
            </Route>
            <Route path="/introduce/guide">
              <Guide/>
            </Route>
          </switch>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
