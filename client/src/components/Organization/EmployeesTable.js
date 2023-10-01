import React from 'react';
import { GrClear } from "react-icons/gr";

const CustomTable = ({type, index, name, contents, employees, setEmployees}) => {
  
  // const handleChange = (e, type, _index, textRowIndex) => {
  //   const target = tables[index][name];
  //   console.log("hahahahaha", e.target.value, type, target);
  //   const targetKey = Object.keys(target);
  //   let obj = {};
  //
  //   console.log("obj", obj);
  //   let cp = [...tables];
  //
  //   if (type === "name") {
  //     cp[index] = {
  //       [e.target.value]: contents
  //     }
  //     console.log(cp);
  //   } else if (type === "key") {
  //     let _contents = [...contents];
  //     let _key = Object.keys(_contents[_index])[0];
  //     let _value = _contents[_index][_key];
  //
  //     obj = {
  //       [e.target.value]: _value
  //     }
  //     _contents[_index] = obj;
  //     cp[index] = {
  //       [name]: _contents
  //     }
  //   } else if (type === "value") {
  //     let _contents = [...contents];
  //     let _key = Object.keys(_contents[_index])[0];
  //     console.log("contents ", _contents, _key);
  //     _contents[_index][_key][textRowIndex] = e.target.value;
  //     cp[index] = {
  //       [name]: _contents
  //     }
  //   }
  //   console.log("cp", cp);
  //   setTables(cp);
  // }
  
  // const addInput = (contentRowIndex) => {
  //   let cp = [...tables];
  //   let _contents = [...contents];
  //   let _key = Object.keys(_contents[contentRowIndex])[0];
  //   console.log("contents ", _contents, _key);
  //   _contents[contentRowIndex][_key].push("");
  //   cp[index] = {
  //     [name]: _contents
  //   }
  //   setTables(cp);
  // }
  
  // const removeInput = (type, contentRowIndex, textRowIndex) => {
  //   if (type === "row") {
  //     let cp = [...tables];
  //     let _contents = [...contents];
  //     let _key = Object.keys(_contents[contentRowIndex])[0];
  //     console.log("contents ", _contents, _key);
  //     _contents[contentRowIndex][_key] = _contents[contentRowIndex][_key].filter((item, index) => {
  //       return index !== textRowIndex;
  //     })
  //     cp[index] = {
  //       [name]: _contents
  //     }
  //     setTables(cp);
  //   } else if (type === "content") {
  //     let cp = [...tables];
  //     let _contents = [...contents].filter((item, index) => {
  //       return index !== contentRowIndex;
  //     });
  //     cp[index] = {
  //       [name]: _contents
  //     }
  //     setTables(cp);
  //   }
  // }
  
  const handleChange = (e, rowIndex) => {
    const _employees = [...employees];
    _employees[rowIndex][e.target.name] = e.target.value;
    
    setEmployees(_employees);
  }
  const addRow = () => {
    const newEmployee = {
      "직위": "",
      "성명": "",
      "전화번호": "",
      "업무내용": "",
    }
    const _employee = [...employees, newEmployee];
    setEmployees(_employee);
  }
  
  const removeRow = (rowIndex) => {
    const _employees = [...employees].filter((item, index) => {
      return index !== rowIndex;
    });
    setEmployees(_employees)
  }
  
  if (type === "create") {
    return (
      <div className='mb-16 text-sm lg:text-base'>
        <div
          className='px-2 lg:px-8 py-3 flex flex-row justify-start items-center border-b-2 border-purple-700'>
          <div className='text-xl lg:text-2xl text-purple-700'>직원현황</div>
        </div>
        <div
          className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b-2 border-purple-700'>
          <div className='w-1/6 text-center'>직위</div>
          <div className='w-1/6 text-center'>성명</div>
          <div className='w-1/6 text-center'>전화번호</div>
          <div className='flex-1 text-center'>업무내용</div>
        </div>
        {
          employees.map((item, index) => {
            return <div
              className='h-16 px-2 lg:px-8 py-3 flex flex-row gap-4 justify-center items-center border-b border-gray-300'>
              <input className='w-1/6 hidden md:block p-4 outline-none border border-gray-300' name="직위"
                     onChange={(e) => handleChange(e, index)} value={item.직위}/>
              <input className='w-1/6 text-center p-4 outline-none border border-gray-300' name="성명"
                     onChange={(e) => handleChange(e, index)} value={item.성명}/>
              <input className='w-1/6 text-center p-4 outline-none border border-gray-300' name="전화번호"
                     onChange={(e) => handleChange(e, index)} value={item.전화번호}/>
              <textarea className='flex-1 resize-none outline-none border border-gray-300' name="업무내용"
                        onChange={(e) => handleChange(e, index)} value={item.업무내용}/>
              <button onClick={() => removeRow(index)} class={"h-auto w-auto font-bold"}>
                <GrClear size={24}/>
              </button>
            
            </div>
          })
        }
        <div
          onClick={() => addRow()}
          className='px-2 lg:px-8 py-3 flex flex-row justify-center items-center border-b border-gray-300 bg-gray-200 text-center font-bold hover:bg-gray-300 transition delay-100 duration-100 cursor-pointer'>
          {/*<div className='w-1/6'>{key}</div>*/}
          <div className='flex-1'>직원 추가</div>
        </div>
      </div>
    );
  } else {
    return <></>
  }
};

export default CustomTable;
