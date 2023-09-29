import React from 'react';
import { ImageUtils } from "../../utils/ImageUtils";

const Table = ({type, index, name, contents, tables, setTables}) => {
  
  const handleChange = (e, type, _index) => {
    const target = tables[index][name];
    console.log("hahahahaha", e.target.value, type, target);
    const targetKey = Object.keys(target);
    let obj = {};
    
    console.log("obj", obj);
    let cp = [...tables];
    
    if (type === "name") {
      cp[index] = {
        [e.target.value]: contents
      }
      console.log(cp);
    } else if (type === "key") {
      let _contents = [...contents];
      let _key = Object.keys(_contents[_index])[0];
      let _value = _contents[_index][_key];
      
      obj = {
        [e.target.value]: _value
      }
      _contents[_index] = obj;
      cp[index] = {
        [name]: _contents
      }
    } else if (type === "value") {
      let _contents = [...contents];
      let _key = Object.keys(_contents[_index])[0];
      console.log("contents ", _contents, _key);
      _contents[_index][_key] = e.target.value;
      cp[index] = {
        [name]: _contents
      }
    }
    console.log("cp", cp);
    setTables(cp);
  }
  if (type === "create") {
    return (
      <div className=' text-sm lg:text-base'>
        <div
          className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
          {/*<div className='text-xl lg:text-2xl text-purple-700'>{name}</div>*/}
          <input className='text-xl lg:text-2xl text-purple-700' value={name}
                 onChange={(e) => handleChange(e, "name")}/>
        </div>
        {
          contents.map((obj, _index) => {
            const key = Object.keys(obj)[0];
            const value = obj[key];
            console.log("key", obj, key, value)
            if (value.includes("https")) {
              // 이미지
              if (value.includes("image::")) {
                const image = value.split("image::")[1];
                const convertedUrl = ImageUtils.convertGoogleDriveImage(image);
                return <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  <div className='w-1/6'>{key}</div>
                  <div className='flex-1'>
                    <img
                      src={convertedUrl}
                      alt='img'
                      className='h-auto xl:h-36 object-cover'
                    />
                  </div>
                </div>
              }
              // 링크
              else {
                return <div
                  className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                  {/*<div className='w-1/6'>{key}</div>*/}
                  <input className='w-1/6' value={key}
                         onChange={(e) => handleChange(e, "key", _index)}/>
                  {/*<div className='flex-1'>*/}
                  <input className='flex-1' value={value}
                         onChange={(e) => handleChange(e, "value", _index)}/>
                  {/*<span*/}
                  {/*  className='cursor-pointer underline'*/}
                  {/*  onClick={() => CommonUtils.moveUrl(value)}*/}
                  {/*>*/}
                  {/*  {value}*/}
                  {/*</span>*/}
                  {/*  </input>*/}
                </div>
              }
            }
            // 일반 텍스트
            else {
              return <div
                className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
                {/*<div className='w-1/6'>{key}</div>*/}
                {/*<div className='flex-1'>{value}</div>*/}
                <input class={"w-1/6"} placeholders={"name"} value={key}
                       onChange={(e) => handleChange(e, "key", _index)}/>
                <input class={"flex-1"} placeholders={"content"} value={value}
                       onChange={(e) => handleChange(e, "value", _index)}/>
              </div>
            }
          })
        }
      </div>
    );
  } else {
    return <></>
  }
};

export default Table;
