import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPassword, } from "../../../reducers/setting";
import Layout from "../../../components/Layout";
import { alpha, Divider, Menu, MenuItem, styled } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({theme}) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const BusinessManagement = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const [selected, setSelected] = useState("org1");
  
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
  
  return (
    <Layout>
      <div class="w-full h-full flex flex-col">
        <div>
          <div class="h-44 bg-purple-100 flex justify-center items-center ">
            <h1 class="text-4xl">사업 관리</h1>
          </div>
        </div>
        
        <div class="flex-1 flex justify-center items-center py-8 border border-black">
          <div class={"flex flex-row"}>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              // anchorEl={anchorEl}
              // open={open}
              // onClose={handleClose}
            >
              <MenuItem disableRipple>
                Edit
              </MenuItem>
              <MenuItem disableRipple>
                Duplicate
              </MenuItem>
              <Divider sx={{my: 0.5}}/>
              <MenuItem disableRipple>
                Archive
              </MenuItem>
              <MenuItem disableRipple>
                More
              </MenuItem>
            </StyledMenu></div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessManagement;
