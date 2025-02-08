import { useState } from 'react';
import MarkSheet from './MarkSheet';

function TopicList() {
  const [isListVisible, setIsListVisible] = useState(false);

 
  const toggleList = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <>
    <div className=' mb-[20vh] '>
      <div className=" overflow-x-auto md:w-48 bg-white z-0 relative top-[15vh] mx-10 text-black text-2xl border-2 border-slate-400 rounded-xl shadow-xl p-4  ">
        <div
          className="min-w-fit py-3 text-xl font-bold mb-2 px-5 cursor-pointer sm:text-black sm:bg-white bg-blue-950 text-white rounded-xl" onClick={toggleList} 
        >
          TOPICS
        </div>
          <div className={` mt-2 sm:overflow-y-auto overflow-x-auto sm:h-[50vh] scroll_batch flex ${isListVisible ? 'block' : 'hidden'} md:block`}>
            <div className="py-2 px-5 mb-4 text-xl font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer mx-4 sm:mx-0" >
              C
            </div>
            <div className="py-2 px-5 mb-4 text-xl font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer mx-4 sm:mx-0" >
              JAVA
            </div>
            <div className="py-2 px-5 mb-4 text-xl font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer mx-4 sm:mx-0">
              DSA
            </div>
            <div className="py-2 px-5 mb-4 text-xl font-bold bg-gray-100 shadow-lg rounded-lg cursor-pointer mx-4 sm:mx-0">
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
