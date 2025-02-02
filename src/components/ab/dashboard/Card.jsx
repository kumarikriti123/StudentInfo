/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Hr } from "../Hr"
import { useNavigate } from 'react-router-dom';


export const Card = ({ data}) => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("../batchDetail/BatchDetail.jsx");
  // };
  return (
    
    
    <div className={`max-h-full w-[90%] md:max-h-full md:w-[43%]  lg:w-[30%] bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl block flex-wrap mx-4 my-4 shadow md:inline-block transition-all duration-300 hover:scale-101 hover:shadow-black hover:shadow-lg`}
    // onClick={handleClick}
    >
      <div className="flex justify-between">
        <p className="font-semibold m-1 text-sm  rounded-xl p-1 ">{data.date}</p>
        <p className="font-semibold m-1 text-sm  rounded-xl p-1 ">{data.time}</p>
      </div>
      <Hr className="border-white"/>

      <div className="flex flex-col m-2 h-[80%] bg-gray-100 rounded-2xl font-semibold">
        {/* BatchName */}
        <h1 className="text-center font-extrabold text-2xl text-gray-800 uppercase my-6">{data.name}</h1>
        <div className="mx-4 flex flex-col justify-evenly">
          {/* Subject */}
          <p className="text-center bg-gray-50 text-gray-800 font-semibold px-4 py-2 rounded-lg shadow shadow-red-200 mb-4">
               📚 Subject : <span className="text-gray-900 font-bold">{data.subject}</span>
           </p>
           
          {/* <Hr className="border-white"/> */}
          {/* <h2>Topic : {topic}</h2> */}
          <div className="flex justify-between items-center">
              <h2>📖 Topic:</h2>
               <p className="bg-gray-50 px-4 py-1 rounded-lg  ">{data.topic}</p>
          </div>
          <Hr className="border-white"/>
          {/* <h2>Session : {session} </h2> */}
          <div className="flex justify-between items-center">
              <h2>🕒 Session:</h2>
              <p className="bg-gray-50 px-4 py-1 rounded-lg  ">{data.session}</p>
          </div>
          <Hr className="border-gray-400"/>
          {/* Total Students */}
          <div className="flex justify-between items-center">
              <h2>👥 Total Students:</h2>
               <p className="bg-gray-50 px-4 py-1 rounded-lg ">{data.totalStudent}</p>
          </div>
          <Hr className="border-white"/>
             {/* Present and Absent*/}
            <div className="flex justify-between font-semibold ">
                <p>✅ Present : <span className="text-green-600 font-bold">{data.present}</span></p>
                <p>❌ Absent: <span className="text-red-600 pr-4 font-bold">{data.absent}</span></p>
            </div>

            <Hr className="border-white"/>
            {/* Online  and  Offline */}
            <div className="flex justify-between font-semibold mb-2">
                <p>🌐 Online : <span className="text-blue-600 font-bold">{data.online}</span></p>
                <p>🏫 Offline : <span className="text-purple-600 pr-4 font-bold">{data.offline}</span></p>
            </div>
            <Hr className="border-white"/>


      </div>

    </div>
  </div>
  
  );
};


//