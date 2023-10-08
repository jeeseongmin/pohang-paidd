// import NoticeWrite from "./pages/common/notice/noticeWrite";
// import NoticeWrite from "pages/notice/NoticeWrite";
import NoticeWrite from "components/notice/NoticeWrite"
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import OrgMenu from "../../components/Menu/orgMenu";
import Gallery from "./common/gallery";
import Intro from "./common/intro";
import Notice from "./pages/common/Notice";
import NoticeDetail from "./pages/common/notice/noticeDetail";
import Business from "../common/Business";

const Main = (props) => {
  const history = useHistory();
  const [selected, setSelected] = useState(0);
  const changeSelected = (num) => {
    setSelected(num);
    window.scrollTo(0, 0);
  };
  
  const Content = () => {
    if (window.location.pathname.includes("notice")) {
      history.push(window.location.pathname);
      setSelected(2);
    } else if (window.location.pathname.includes("gallery")) {
      history.push(window.location.pathname);
      setSelected(3);
    } else {
      if (selected === 0) {
        return <Intro/>;
      } else if (selected === 1) {
        return <Business type={"image"} menu={"협회사업"} orgId={"default"}/>;
      } else if (selected === 2) {
        if (props.type === "default") {
          return <Notice url='business'/>;
        } else if (props.type === "noticeWrite") {
          return <NoticeWrite url='business'/>;
        } else if (props.type === "noticeDetail") {
          return <NoticeDetail url='business'/>;
        }
        return <Notice/>;
      } else if (selected === 3) {
        return <Gallery/>;
      }
    }
  };
  
  return (
    <div class='h-full z-0'>
      <div class='w-full h-auto'>
        <div class='flex flex-row justify-start items-center pb-8'>
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
          <Content/>
        </div>
      </div>
    </div>
  );
};

export default Main;
