import React from 'react';
import { GrClear } from "react-icons/gr";

const CustomTable = ({type, index, name, contents, tables, setTables}) => {
  
  const handleChange = (e, type, _index, textRowIndex) => {
    const target = tables[index][name];
    const targetKey = Object.keys(target);
    let obj = {};
    
    let cp = [...tables];
    
    if (type === "name") {
      cp[index] = {
        [e.target.value]: contents
      }
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
      _contents[_index][_key] = e.target.value;
      cp[index] = {
        [name]: _contents
      }
    }
    setTables(cp);
  }
  
  const addInput = (contentRowIndex) => {
    let cp = [...tables];
    let _contents = [...contents];
    let _key = Object.keys(_contents[contentRowIndex])[0];
    _contents[contentRowIndex][_key].push("");
    cp[index] = {
      [name]: _contents
    }
    setTables(cp);
  }
  
  const removeInput = (type, contentRowIndex, textRowIndex) => {
    if (type === "row") {
      let cp = [...tables];
      let _contents = [...contents];
      let _key = Object.keys(_contents[contentRowIndex])[0];
      _contents[contentRowIndex][_key] = _contents[contentRowIndex][_key].filter((item, index) => {
        return index !== textRowIndex;
      })
      cp[index] = {
        [name]: _contents
      }
      setTables(cp);
    } else if (type === "content") {
      let cp = [...tables];
      let _contents = [...contents].filter((item, index) => {
        return index !== contentRowIndex;
      });
      cp[index] = {
        [name]: _contents
      }
      setTables(cp);
    }
  }
  
  if (type === "create") {
    return (
      <div className=' text-sm lg:text-base'>
        <div
          className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
          {/*<div className='text-xl lg:text-2xl text-purple-700'>{name}</div>*/}
          <input className='border border-purple-500 outline-none text-xl lg:text-2xl text-purple-700' value={name}
                 onChange={(e) => handleChange(e, "name")}/>
        </div>
        {
          contents.map((obj, contentRowIndex) => {
            const key = Object.keys(obj)[0];
            const value = obj[key];
            
            // 일반 텍스트
            return <div
              className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300'>
              {/*<div className='w-1/6'>{key}</div>*/}
              {/*<div className='flex-1'>{value}</div>*/}
              <input class={"p-4 h-16 -1/6 mr-8 border border-gray-300 outline-none"} placeholders={"name"} value={key}
                     onChange={(e) => handleChange(e, "key", contentRowIndex)}/>
              <div class={"flex-1 flex flex-col gap-4 mr-8"}>
                {/*{*/}
                {/*  value.map((item, textRowIndex) => {*/}
                {/*    return */}
                {/*  })*/}
                {/*}*/}
                <div className={"flex flex-row gap-4"}>
                      <textarea className={"p-4 h-16 flex-1 border border-gray-300 outline-none resize-none"}
                                placeholders={"content"}
                                value={value}
                                onChange={(e) => handleChange(e, "value", contentRowIndex)}/>
                  {/*<button onClick={() => removeInput("row", contentRowIndex, textRowIndex)} class={"font-bold"}>X*/}
                  {/*</button>*/}
                </div>
                
                {/*<button onClick={() => addInput(contentRowIndex)}*/}
                {/*        class={"rounded-full border border-gray-300 bg-gray-200 font-bold"}>행 추가*/}
                {/*</button>*/}
              </div>
              
              
              <button onClick={() => removeInput("content", contentRowIndex)}
                      className={"w-auto h-auto font-bold"}>
                <GrClear size={24}/>
              </button>
            </div>
            
          })
        }
      </div>
    );
  } else {
    return <></>
  }
};

export default CustomTable;
