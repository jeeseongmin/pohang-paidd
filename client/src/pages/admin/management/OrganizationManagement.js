import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPassword, } from "../../../reducers/setting";
import Layout from "../../../components/Layout";
import Select from "react-select";
import CreateOrganizationModal from "../../../components/Modal/CreateOrganizationModal";
import { CircularProgress } from "@mui/material";
import UpdateOrganizationModal from "../../../components/Modal/UpdateOrganizationModal";
import OrganizationIntro from "../../../components/Organization/OrganizationIntro";

const OrganizationManagement = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [refresh, setRefresh] = useState(new Date());
  
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
  const [currentInfo, setCurrentInfo] = useState({});
  
  const [organizationList, setOrganizationList] = useState([]);
  const [options, setOptions] = useState([]);
  
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
      loadList();
    }
  }, [refresh]);
  
  const changeInfo = (e, type) => {
    const cp = {...info};
    cp[type] = e.target.value;
    setInfo(cp);
  };
  
  const loadList = async () => {
    await axios.post("/api/organization", {
      key: process.env.REACT_APP_API_KEY,
    }).then((Response) => {
      console.log("Response : ", Response);
      const {data} = Response;
      if (data.length > 0) {
        const sorted = data.sort((a, b) => {
          const aNum = Number(a.orgId.split("org")[1]);
          const bNum = Number(b.orgId.split("org")[1]);
          return aNum - bNum;
        })
        setOrganizationList(sorted);
        setCurrentInfo({
          ...data.filter((item, index) => {
            return item.orgId === "org1";
          })[0], load: true
        })
        const _options = sorted.map((item, index) => {
          return {
            value: item.orgId,
            label: item.name,
          }
        })
        setSelectedValue("org1");
        setOptions(_options);
      }
      // {value: 'org1', label: '포항시지적장애인자립지원센터'},
      // {value: 'org2', label: '장애인활동지원사업'},
      // {value: 'org3', label: '방과후활동서비스사업'},
      // {value: 'business1', label: '늘사랑주간보호센터'}
    }).catch((error) => {
      console.log("error : ", error);
    })
  }
  
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
  
  // const options = [
  //   {value: 'org1', label: '포항시지적장애인자립지원센터'},
  //   {value: 'org2', label: '장애인활동지원사업'},
  //   {value: 'org3', label: '방과후활동서비스사업'},
  //   {value: 'business1', label: '늘사랑주간보호센터'}
  // ]
  
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
          
          <div class="flex-1 flex justify-center items-center py-8 ">
            <div class={"w-full flex flex-col px-5 2xl:px-36 xl:px-32 md:px-8 lg:py-2"}>
              
              <div class={"h-12 flex flex-col lg:flex-row justify-between mb-24 lg:mb-8"}>
                <Select className="basic-single w-96 outline-none mb-6"
                        classNamePrefix="select"
                        style={{width: "36px"}}
                        onChange={(e) => {
                          setSelectedValue(e.value);
                          setCurrentInfo({
                            ...organizationList.filter((item, index) => {
                              return item.orgId === e.value;
                            })[0], load: true
                          })
                        }}
                        value={options.filter(function (option) {
                          return option.value === selectedValue;
                        })}
                        options={options}/>
                <div class={"flex flex-row gap-4"}>
                  <button
                    onClick={() => setOpenCreateModal(true)}
                    className="h-10 w-full md:w-auto cursor-pointer justify-center transition delay-50 duration-300 px-4 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold "
                  >
                    기관 추가하기
                  </button>
                  <button
                    onClick={() => setOpenUpdateModal(true)}
                    className="h-10 w-full md:w-auto cursor-pointer justify-center transition delay-50 duration-300 px-4 py-2 border border-purple-700 text-purple-700 flex flex-row items-center hover:bg-purple-500 hover:text-white hover:font-bold "
                  >
                    기관 수정하기
                  </button>
                </div>
              
              </div>
              <div class={"w-full"}>
                {
                  currentInfo.load ?
                    <OrganizationIntro info={currentInfo}/> :
                    <div class={"w-full h-96 flex flex-row justify-center items-center"}>
                      <CircularProgress/>
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {openCreateModal &&
        <CreateOrganizationModal onClose={() => setOpenCreateModal(false)} setRefresh={setRefresh}/>
      }
      {openUpdateModal && currentInfo.load &&
        <UpdateOrganizationModal currentInfo={currentInfo} onClose={() => setOpenUpdateModal(false)}
                                 setRefresh={setRefresh}/>
      }
    </>
  );
};

export default OrganizationManagement;
