import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../SupabaseClient';
import AttendanceList from './AttendenceList';

function StudentProfile() {
  const { name } = useParams();
  const [students, setStudents] = useState([]); 
  const [batchDetails, setBatchDetails] = useState({}); 
  const [activeSubject, setActiveSubject] = useState(null);
  const imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMuxbu7ivgBVDvQcqfmIWwIn2tMReKsskxlQ&s";

  const toggleSubject = (subject) => {
    if (activeSubject === subject) {
      setActiveSubject(null); 
    } else {
      setActiveSubject(subject); 
    }
  };

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('students').select('*');
        if (error) {
          console.error('Error Fetching Data', error);
        } else {
          setStudents(data);
        }
      } catch (err) {
        console.error("Error", err);
      }
    };
    fetchData();
  }, []);
  const user = students.find((student) => student.name.toLowerCase() === name.toLowerCase());
  if (!user) return <div>Student not found</div>;

  return (
    <div className=" bg-white p-10 top-[15vh] relative mx-auto">
  <div className="bg-gradient-to-r from-gray-400 to-gray-200 p-6 rounded-lg lg:flex flex-row items-center shadow-lg shadow-black ">
    <img 
      src={imgurl || 'defaultImagePath'}
      alt="student pic" 
      className="rounded-lg lg:w-[250px] lg:h-[250px] w-[300px] h-[250px] my-auto " 
    />
    <div className="lg:ml-14  ">
      <div className="lg:text-base text-xl font-medium text-black mt-4 flex">Name:{user.name || "N/A"}</div>
      <div className="lg:text-base text-xl font-medium text-black mt-2">Phone Number: {user.phone_number || "N/A"}</div>
      <div className="lg:text-base text-xl font-medium text-black mt-2">Email: {user.email || "N/A"}</div>
      <div className="lg:text-base text-xl font-medium text-black mt-2">Parent's Phone Number: {user.parent_number || "N/A"}</div>
      <div className="lg:text-base text-xl font-medium text-black mt-2">Course: {user.course || "N/A"}</div>
      <div className="lg:text-base text-xl font-medium text-black mt-2">Batch ID: {user.batch_id || "N/A"}</div>
  </div>
</div>

<div className="w-full max-w-full mx-auto mt-8 p-5 rounded-lg shadow-lg shadow-black border-2 border-gray-500 bg-gradient-to-r from-gray-200 to-gray-300">
  <h3 className='font-medium text-red-900 text-center text-lg sm:text-xl '>OVERALL PERFORMANCE</h3>

  
  <div className="mb-3 mt-1">
    <button
      className="w-full flex justify-between items-center px-4 py-1 text-base sm:text-xl bg-gradient-to-r from-gray-400 to-gray-200  text-black font-medium border border-gray-700 rounded-lg  transition-all"
      onClick={() => toggleSubject('C')}
    >
      C
      <span className={`transform transition-transform ${activeSubject === 'C' ? 'rotate-180' : ''}`}>↓</span>
    </button>
    <div
      className={`mt-2 pl-6 pr-4 py-2 text-black text-base font-medium bg-gray-300 border border-gray-400 rounded-lg transition-all ease-in-out duration-300 ${
        activeSubject === 'C' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}
    >
      <div className='font-medium text-gray-100 flex justify-between bg-red-800 px-2 py-2 rounded-md text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Topics</div>
        <div className=' sm:block'>Marks</div>
        <div className=' sm:block'>Grade</div>
      </div>
      
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-40'>Flowchart&Algorithm</div>
        <div className=' sm:block'>20</div>
        <div className='sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Input&Output</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Operators</div>
        <div className=' sm:block'>20</div>
        <div className='sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Conditions</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Loops</div>
        <div className='sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>2D-Loops</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Function</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Arrays</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>2D-Array</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>String</div>
        <div className='sm:block'>20</div>
        <div className='sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Pointer</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Structure</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Union</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>DMA</div>
        <div className='sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>File-Handling</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
    </div>
  </div>

  
  <div className="mb-4">
    <button
      className="w-full flex justify-between items-center px-4 py-1 text-base sm:text-xl bg-gradient-to-r from-gray-400 to-gray-200 text-black font-medium border border-gray-700 rounded-lg  transition-all"
      onClick={() => toggleSubject('Java')}
    >
      JAVA
      <span className={`transform transition-transform ${activeSubject === 'Java' ? 'rotate-180' : ''}`}>↓</span>
    </button>
    <div
      className={`mt-2 pl-6 pr-4 py-2 bg-gray-300 border text-base font-medium text-black border-gray-400 rounded-lg transition-all ease-in-out duration-300 ${
        activeSubject === 'Java' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}
    >
      <div className='font-medium text-gray-100 flex justify-between bg-red-800 px-2 py-2 rounded-md text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Topics</div>
        <div className=' sm:block'>Marks</div>
        <div className=' sm:block'>Grade</div>
      </div>
      
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Basics</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>OOPs</div>
        <div className='hidden sm:block'>20</div>
        <div className='hidden sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>String</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Exception-Handling</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Final Assessment</div>
        <div className='sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
    </div>
  </div>

  
  <div className="mb-4">
    <button
      className="w-full flex justify-between items-center px-4 py-1 text-base sm:text-xl bg-gradient-to-r from-gray-400 to-gray-200 text-black font-medium border  border-gray-700 rounded-lg  transition-all"
      onClick={() => toggleSubject('GitHub')}
    >
      GITHUB
      <span className={`transform transition-transform ${activeSubject === 'GitHub' ? 'rotate-180' : ''}`}>↓</span>
    </button>
    <div
      className={`mt-2 pl-6 pr-4 py-2 bg-gray-300 text-base font-medium text-black border border-gray-400 rounded-lg transition-all ease-in-out duration-300 ${
        activeSubject === 'GitHub' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}
    >
      <div className='font-medium text-gray-100 flex justify-between bg-red-800 px-2 py-2 rounded-md text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Topics</div>
        <div className=' sm:block'>Marks</div>
        <div className=' sm:block'>Grade</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Git & GitHub</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
    </div>
  </div>
  <div>
    <button
      className="w-full flex justify-between items-center px-4 py-1 text-base sm:text-xl bg-gradient-to-r from-gray-400 to-gray-200 font-medium text-black border border-gray-700 rounded-lg transition-all"
      onClick={() => toggleSubject('DSA')}
    >
      DSA
      <span className={`transform transition-transform ${activeSubject === 'DSA' ? 'rotate-180' : ''}`}>↓</span>
    </button>
    <div
      className={`mt-2 pl-6 pr-4 py-2 bg-gray-300 text-black font-medium border border-gray-400 rounded-lg transition-all ease-in-out duration-300 ${
        activeSubject === 'DSA' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}
    >
      <div className='font-medium text-gray-100 flex justify-between bg-red-800 px-2 py-2 rounded-md text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Topics</div>
        <div className=' sm:block'>Marks</div>
        <div className=' sm:block'>Grade</div>
      </div>
      <div className='flex justify-between py-1 px-2 text-xs sm:text-sm'>
        <div className='w-24 sm:w-36'>Binary Search</div>
        <div className=' sm:block'>20</div>
        <div className=' sm:block'>A+</div>
      </div>
    </div>
  </div>
</div>
 <AttendanceList />
 </div>
  );
}
export default StudentProfile;