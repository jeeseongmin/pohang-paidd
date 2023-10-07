import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Org1 from "./pages/org1/index";
import Org2 from "./pages/org2/index";
import Org3 from "./pages/org3/index";
import Submenu from "../../components/Submenu";
import Layout from "../../components/Layout";
import Org5 from "./pages/org5";
import Business from "../common/Business";

const Index = ({match}) => {
  const [transForm, setTransForm] = useState(false);
  
  useEffect(() => {
    setTransForm(true);
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div class="h-full">
        <div class="relative mb-24 md:mb-16 lg:mb-8">
          <div class="h-44 bg-purple-100 flex justify-center items-center relative">
            <h1 class="text-2xl font-bold md:font-normal md:text-4xl">
              주요사업
            </h1>
            <div
              class={
                "-bottom-10 absolute w-full h-1/2 lg:h-full flex flex-row justify-between items-center px-0 2xl:px-36 xl:px-32 md:px-8 " +
                (transForm
                  ? "transform -translate-y-10 delay-150 duration-700 "
                  : "")
              }
            >
              <img
                src="/image/index2-img1.png"
                alt="index-img"
                class="h-full object-cover"
              />
              <img
                src="/image/index2-img2.png"
                alt="index-img"
                class="h-full object-cover"
              />
            </div>
          </div>
          <div
            class="w-full cursor-pointer absolute bottom-22 flex flex-row justify-center bg-purple-100 px-0 2xl:px-36 xl:px-32 md:px-0">
            <Submenu menu={2} submenu={1} key={1}/>
            <Submenu menu={2} submenu={2} Key={2}/>
            <Submenu menu={2} submenu={3} key={3}/>
            <Submenu menu={2} submenu={4} key={4}/>
            <Submenu menu={2} submenu={5} key={5}/>
          </div>
        </div>
        <div class="w-full h-auto px-5 py-8 2xl:px-36 xl:px-32 md:px-8 lg:py-16">
          <switch>
            <Route exact path="/business/base/:type">
              <Business type={"image"} menu={"협회사업"} orgId={match.params.type}/>
            </Route>
            
            <Route path="/business/org1/:type">
              <Org1 pages={"org1"} type={match.params.type}/>
            </Route>
            <Route path="/business/org2/:type">
              <Org2 pages={"org2"} type={match.params.type}/>
            </Route>
            <Route path="/business/org3/:type">
              <Org3 pages={"org3"} type={match.params.type}/>
            </Route>
            <Route path="/business/org5/:type">
              <Org5 pages={"org5"} type={match.params.type}/>
            </Route>
            
            {/* <Route exact path="/business/org1/:type">
             <Org1 pages={"org1"} type={match.params.type} />
             </Route>
             <Route exact path="/business/org2/:type">
             <Org2 pages={"org2"} type={match.params.type} />
             </Route>
             <Route exact path="/business/org3/:type">
             <Org3 pages={"org3"} type={match.params.type} />
             </Route> */}
          </switch>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
