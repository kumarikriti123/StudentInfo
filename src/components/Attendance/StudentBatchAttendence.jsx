import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../../SupabaseClient';

function StudentBatchAttendence() {
    const navigate= useNavigate();
    const [students, setStudents] = useState([]);
    const [batches, setBatches] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([])

    const goToAttendenceList=()=>{
        navigate('/attendence');
      };

      useEffect(() => {
        
        const fetchBatches = async () => {
          const { data, error } = await supabase.from('batches').select('*');
          if (error) console.error(error);
          else setBatches(data);
        };
    
        
        const fetchStudents = async () => {
          const { data, error } = await supabase.from('students').select('*');
          if (error) console.error(error);
          else setStudents(data);
        };
    
        fetchBatches();
        fetchStudents();
      }, []);
    
      
      useEffect(() => {
        if (selectedBatch) {
          const filtered = students.filter(student => student.batch_id === selectedBatch);
          setFilteredStudents(filtered);
        } else {
          setFilteredStudents(students); 
        }
      }, [selectedBatch, students]);
    
  
  return (
    <div>
      <div className='flex justify-evenly w-[v-max] bg-gradient-to-r from-red-500 to-red-900 py-5'>
      <div className='text-lg font-semibold text-gray-100'>ATTENDENCE</div>
      </div>
      <div className="mb-2 mt-1 px-2 font-semibold ">
        <label htmlFor="batch" className="mr-2 ">Select Batch:</label>
        <select
          id="batch text-black "
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
          className="p-2 border lg:w-[10%] lg:h-[6vh] rounded bg-slate-600  text-white "
        >
          <option  value="">All Batches</option>
          {batches.map((batch) => (
            <option key={batch.id} value={batch.id} >
              {batch.batch_name}
            </option>
          ))}
        </select>
      </div>
      <div className='flex justify-between w-[v-max] bg-gradient-to-r from-gray-200 to-gray-300 py-2 px-1 lg:py-4 lg:px-3 lg:justify-between lg:font-semibold font-medium'>
        <div >S no.</div>
        <div >Name</div>
        <div >Total Class</div>
        <div >Absent</div>
        <div >Percentage</div>
        <div >View</div>
      </div>
      <div>

      <div className="student-list ">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student,index) => (
            <div key={student.id} className="student-item py-2 px-1 flex justify-around w-[v-max] bg-gradient-to-r from-gray-200 to-gray-300 lg:justify-between  ">
              <div className=' lg:px-2 text-center align-middle'><p>{index+1}</p></div>
              <div className=' px-8 text-center align-middle w-[1%]'><p>{student.name}</p></div>
              <div className=' px-10 text-center align-middle'><p>50</p></div>
              <div className=' px-8 text-left align-middle'><p>25</p></div>
              <div className=' px-6 text-center align-middle'><p>50%</p></div>
              <button onClick={goToAttendenceList}>
              <FontAwesomeIcon icon={faEye} className=' lg:w-16 lg:h-6 w-10 h-5 py-1  text-center align-middle' />
             </button>
            </div>
          ))
        ): (
          <p>No students found for this batch.</p>
        )}
      </div>
       </div>
    </div>
  )
}
export default StudentBatchAttendence;