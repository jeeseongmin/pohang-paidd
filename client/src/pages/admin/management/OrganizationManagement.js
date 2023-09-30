import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPassword, } from "../../../reducers/setting";
import Layout from "../../../components/Layout";
import Select from "react-select";
import Subtitle from "../../../components/Subtitle";
import { HiHome } from "react-icons/hi";
import CreateOrganizationModal from "../../../components/Modal/CreateOrganizationModal";

const OrganizationManagement = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const [openCreateModal, setOpenCreateModal] = useState(true);
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState("org1");
  
  const currentEmail = useSelector((state) => state.setting.currentEmail);
  const currentPassword = useSelector((state) => state.setting.currentPassword);
  
  const [info, setInfo] = useState({
    email: "",
    password: "",
    newPassword: "",
  });
  
  useEffect(() => {
    if (currentEmail === "" || currentPassword === "") {
      alert("로그인 후 이용가능합니다.");
      history.push("/admin");
    } else {
      const cp = {
        email: currentEmail,
        password: "",
        newPassword: "",
      };
      setInfo(cp);
    }
  }, []);
  
  const changeInfo = (e, type) => {
    const cp = {...info};
    cp[type] = e.target.value;
    setInfo(cp);
  };
  
  async function onEdit() {
    if (info.password === "") {
      alert("현재 비밀번호를 입력해주세요.");
      passwordRef.current.focus();
    } else if (info.newPassword === "") {
      alert("새 비밀번호를 입력해주세요.");
      newPasswordRef.current.focus();
    }
    // 현재 비밀번호가 맞는지
    else if (info.password !== currentPassword) {
      alert("현재 비밀번호를 정확히 입력해주세요.");
    } else {
      let id;
      await axios
        .post(
          "/api/user/findbyemail",
          {
            key: process.env.REACT_APP_API_KEY,
            email: info.email,
          },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((Response) => {
          id = Response.data[0]._id;
        })
        .catch((Error) => {
          console.log(Error);
        });
      
      await axios
        .post(
          "/api/user/update/" + id,
          {
            key: process.env.REACT_APP_API_KEY,
            email: info.email,
            password: info.newPassword,
          },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          alert("비밀번호가 변경되었습니다!");
          dispatch(setCurrentPassword(info.newPassword));
          history.push("/");
        })
        .catch((response) => {
          console.log("Error!");
        });
    }
  }
  
  const options = [
    {value: 'org1', label: '포항시지적장애인자립지원센터'},
    {value: 'org2', label: '장애인활동지원사업'},
    {value: 'org3', label: '방과후활동서비스사업'},
    {value: 'business1', label: '늘사랑주간보호센터'}
  ]
  
  return (
    <>
      <Layout>
        <div class="w-full h-full flex flex-col">
          <div>
            <div class="h-44 bg-purple-100 flex flex-col justify-center items-center gap-4">
              <h1 class="text-4xl">기관 관리</h1>
              <div>기관의 [센터 소개]를 관리합니다.</div>
            
            </div>
          </div>
          <div>
          
          </div>
          
          <div class="flex-1 flex justify-center items-center py-8 ">
            <div class={"w-full flex flex-col px-5 py-2 2xl:px-36 xl:px-32 md:px-8 lg:py-2"}>
              
              <div class={"h-12 flex flex-row justify-between"}>
                <Select className="basic-single w-96 outline-none mb-6"
                        classNamePrefix="select"
                        style={{width: "36px"}}
                        onChange={(e) => setSelectedValue(e.value)}
                        value={options.filter(function (option) {
                          return option.value === selectedValue;
                        })}
                        options={options}/>
                <button
                  onClick={() => setOpenCreateModal(true)}
                  className="h-10 w-full md:w-auto cursor-pointer justify-center transition delay-50 duration-300 px-4 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold "
                >
                  기관 추가하기
                </button>
              </div>
              <div class={"w-full"}>
                <div>
                  <div class={"flex flex-row justify-between"}>
                    <Subtitle text={`${"센터 이름"}`}/>
                    <button
                      className="rounded-full w-full md:w-auto cursor-pointer justify-center transition delay-50 duration-300 px-4 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold "
                    >
                      수정하기
                    </button>
                  </div>
                  
                  <div className='mt-1 mb-4 w-full hidden lg:flex flex-row text-sm text-gray-400 items-center'>
                    <div className='mr-2'>
                      <HiHome size={16}/>
                    </div>
                    Home {">"} 부설기관 {">"} 늘사랑주간보호센터 {">"} 센터소개
                  </div>
                  
                  <div className='text-base lg:text-lg mb-8 leading-7 lg:leading-9'>
                    <b>늘사랑주간보호센터</b>는 장애당사자의 역량강화, 자기결정권강화,
                    사회통합지원을 통한 <b>발달장애인의 행복한 삶</b>을 미션으로
                    발달장애인이 낮 시간 동안 다양한 활동을 하는 사회복지이용시설입니다.
                  </div>
                  <div className='mb-16 text-sm lg:text-base'>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
                      <div className='text-xl lg:text-2xl text-purple-700'>시설현황</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>기관명</div>
                      <div className='flex-1'>늘사랑보호주간센터</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>센터장</div>
                      <div className='flex-1'>우숙경</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>사업개시일</div>
                      <div className='flex-1'>2002.07.01</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>전화</div>
                      <div className='flex-1'>054{")"}244-9577</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>팩스</div>
                      <div className='flex-1'>054{")"}254-9588</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>블로그</div>
                      <div className='flex-1'>
            <span
              className='cursor-pointer underline'
              // onClick={() => moveUrl("https://cafe.daum.net/phaeho")}
            >
              https://cafe.daum.net/phaeho
            </span>
                      </div>
                    </div>
                  </div>
                  <div className='mb-16 text-sm lg:text-base'>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
                      <div className='text-xl lg:text-2xl text-purple-700'>이용안내</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>대상자</div>
                      <div className='flex-1'>
                        포항시에 사는 발달장애인 (나이 : 20세~60세까지)
                      </div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>이용시간</div>
                      <div className='flex-1'>평일 09:30 ~ 16:30</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>이용료</div>
                      <div className='flex-1'>월 250,000원 (중식비/교통비 포함)</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6'>이용절차</div>
                      <div className='flex-1'>
                        <img
                          src='/image/org-intro-img1.png'
                          alt='img'
                          className='h-auto xl:h-36 object-cover'
                        />
                        {/* <div class="inline-block">
                         <div>입소의뢰/접수 ＞ 초기면접 ＞ 입소여부 결정 및 계획</div>
                         <div class="invisible">＞ 상담 및 타기관 연계</div>
                         </div>
                         <div class="inline-block">
                         <div>＞ 적응기간 (1주) ＞ 입소 및 이용</div>
                         <div>＞ 상담 및 타기관 연계</div>
                         </div> */}
                      </div>
                    </div>
                  </div>
                  <div className='mb-16 text-sm lg:text-base'>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
                      <div className='text-xl lg:text-2xl text-purple-700'>직원현황</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b-2 border-purple-700'>
                      <div className='w-1/6'>
                        <span className='w-20 flex justify-center'>직위</span>
                      </div>
                      <div className='w-1/6 text-center'>성명</div>
                      <div className='w-2/6 text-center'>전화번호</div>
                      <div className='w-2/6 text-center'>업무내용</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6 hidden md:block'>
            <span className='w-20 flex justify-between'>
              <span>시</span>
              <span>설</span>
              <span>장</span>
            </span>
                      </div>
                      <div className='w-1/6 text-center'>우숙경</div>
                      <div className='w-2/6 text-center'>054-244-9577</div>
                      <div className='w-2/6'>운영전반 및 조직관리 총괄</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6 hidden md:block'>
            <span className='w-20 flex justify-between'>
              <span>팀</span>
              <span>장</span>
            </span>
                      </div>
                      <div className='w-1/6 text-center'>문수영</div>
                      <div className='w-2/6 text-center'>054-244-9577</div>
                      <div className='w-2/6'>실무 총괄 / 예결산 총괄 / 프로그램 평가</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6 hidden md:block'>
            <span className='w-20 flex justify-between'>
              <span>사</span>
              <span>회</span>
              <span>복</span>
              <span>지</span>
              <span>사</span>
            </span>
                      </div>
                      <div className='w-1/6 text-center'>박은숙</div>
                      <div className='w-2/6 text-center'>070-5154-6983</div>
                      <div className='w-2/6'>프로그램 기획 / 이용자 지원 / 상담</div>
                    </div>
                    <div
                      className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                      <div className='w-1/6 hidden md:block'>
            <span className='w-20 flex justify-between'>
              <span>사</span>
              <span>회</span>
              <span>복</span>
              <span>지</span>
              <span>사</span>
            </span>
                      </div>
                      <div className='w-1/6 text-center'>백용화</div>
                      <div className='w-2/6 text-center'>070-5154-6973</div>
                      <div className='w-2/6'>프로그램 진행 / 이용자 지원</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {openCreateModal &&
        <CreateOrganizationModal onClose={() => setOpenCreateModal(false)}/>
      }
    </>
  );
};

export default OrganizationManagement;
