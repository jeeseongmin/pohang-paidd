import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import OrganizationIntro from "../../components/Organization/OrganizationIntro";

const Intro = ({name}) => {
  const [info, setInfo] = useState({
    orgId: "",
    name: "",
    path: "",
    description: "",
    contents: [],
    employees: [],
    load: false,
  });
  const moveUrl = function (url) {
    window.open(url, "_blank");
  };
  
  useEffect(() => {
    readOrganization();
  }, [])
  
  const readOrganization = async () => {
    await axios
      .post(
        `/api/organization/findByName/${name}`,
        {key: process.env.REACT_APP_API_KEY},
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      ).then((Response) => {
        const {data} = Response;
        if (data.length > 0)
          setInfo({...data[0], load: true});
      }).catch(() => {
        setInfo({
          orgId: "",
          name: "",
          path: "",
          description: "",
          contents: [],
          employees: [],
          load: false,
        });
      })
  }
  
  return (
    info.load ?
      <OrganizationIntro info={info}/> : <div class={"w-full h-96 flex flex-row justify-center items-center"}>
        <CircularProgress/>
      </div>
  );
};

export default Intro;
