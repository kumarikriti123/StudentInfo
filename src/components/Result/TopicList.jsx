import { useState } from 'react';
import MarkSheet from './MarkSheet';

function TopicList() {
  
  

  return (
    <>
    <div className='flex'>
      <div className="w-48 bg-white z-0 relative top-[15vh] mx-10 text-black text-2xl border-2 border-slate-400 rounded-xl shadow-xl p-4">
        <div
          className="py-3 text-xl font-bold mb-2 px-5 cursor-pointer"
        >
          TOPICS
        </div>
          <div className="mt-2 overflow-y-auto h-[50vh] scroll_batch">
            <div className="py-2 px-5 mb-4 text-xl font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer" >
              C
            </div>
            <div className="py-2 px-5 mb-4 text-xl font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer" >
              JAVA
            </div>
            <div className="py-2 px-5 mb-4 text-xl font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer">
              DSA
            </div>
            <div className="py-2 px-5 mb-4 text-xl font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer">
              GIT
            </div>
          </div> 
      </div>
      <div className=" ">
        <MarkSheet />
      </div>
      </div>
    </>
  );
}

export default TopicList;
