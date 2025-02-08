import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from "@fortawesome/free-solid-svg-icons";
import { Loader, Placeholder } from 'rsuite';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../../SupabaseClient';

function StudentBatchAttendence() {
    const navigate= useNavigate();
    const [students, setStudents] = useState([]);
    const [batches, setBatches] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState('');
    const [filteredStudents, setFilteredStudents] = useState([])
    const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState('');
  
  const [isListVisible, setIsListVisible] = useState(false);

  const handleBatchClick = (batchName) => {
    setSelectedBatch(batchName);
  };
 
  const toggleList = () => {
    setIsListVisible(!isListVisible);
  };

    const goToAttendenceList=()=>{
        navigate('/attendence');
      };

      useEffect(() => {
        
       

        const fetchData = async () => {
          try {
            setLoading(true);
            const { data, error } = await supabase.from('batches').select('*');
    
            if (error) {
              throw new Error(error.message);
            }
            setBatches(data);
            if (data.length > 0 && !selectedBatch) {
              setSelectedBatch(data[0].batch_name);
            }
          } catch (err) {
            setResponse(`Error fetching batches: ${err.message}`);
            console.error('Error fetching batches:', err);
          } finally {
            setLoading(false);
          }
        };
        
        const fetchStudents = async () => {
          const { data, error } = await supabase.from('students').select('*');
          if (error) console.error(error);
          else setStudents(data);
        };
        
        fetchData();
       
        fetchStudents();
      }, [selectedBatch]);
    
      
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
      <div className='flex justify-evenly w-[v-max]  py-5'>
      <div className='text-lg font-bold text-red-700 '>ATTENDENCE</div>
      </div>
      <div className="  bg-white z-0
       mx-10 text-black text-2xl border-2 border-slate-400 rounded-xl shadow-xl p-4">
          <div
            className="py-3 min-w-fit md:w-auto text-xl font-bold mb-2 px-5 cursor-pointer sm:text-black sm:bg-white bg-blue-950 text-white rounded-xl"
            onClick={toggleList} 
          >
            BATCHES
          </div>

          <div className={`mt-2  overflow-x-auto flex scroll_batch  ${isListVisible ? 'flex' : 'hidden'} md:flex`}>
            {loading ? (
              <div>
                <Placeholder.Paragraph rows={3} />
                <Loader center content="Loading..." />
              </div>
            ) : response ? (
              <div className="text-red-500">{response}</div>
            ) : batches.length > 0 ? (
              batches.map((batch) => (
                <div
                  key={batch.id}
                  onClick={() => handleBatchClick(batch.batch_name)}
                  className={`  py-2 px-5 mb-4 min-w-fit sm:text-2xl text-lg font-bold hover:bg-gray-100 hover:shadow-lg rounded-lg cursor-pointer ${
                    selectedBatch === batch.batch_name ? 'bg-gray-200 shadow-lg' : ''
                  }`}
                >
                  {batch.batch_name}
                </div>
              ))
            ) : (
              <div className="text-gray-500">No batches available</div>
            )}
          </div>
        </div>

       <div className='overflow-x-auto rounded-xl mt-10'>
       <table className="min-w-full bg-gradient-to-r from-red-500 to-red-800 text-white ">
  <thead>
    <tr className=" text-center">
      <th className="p-2 border-2 font-Rubik">S no.</th>
      <th className="p-2 border-2">Name</th>
      <th className="p-2 border-2">Total Class</th>
      <th className="p-2 border-2">Absent</th>
      <th className="p-2 border-2">Percentage</th>
      <th className="p-2 border-2">View</th>
    </tr>
  </thead>
  <tbody>
    {filteredStudents.length > 0 ? (
      filteredStudents.map((student, index) => (
        <tr key={student.id} className="bg-gradient-to-r from-gray-100 to-gray-200 text-center text-black ">
          <td className="p-2 border-2 ">{index + 1}</td>
          <td className="p-2 border-2">{student.name}</td>
          <td className="p-2 border-2">50</td> {/* Total Classes */}
          <td className="p-2 border-2">25</td> {/* Absent */}
          <td className="p-2 border-2">50%</td> {/* Percentage */}
          <td className="p-2 border-2">
            <button onClick={goToAttendenceList}>
              <FontAwesomeIcon icon={faEye} className="lg:w-16 lg:h-6 w-10 h-5 py-1 text-center align-middle" />
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="6" className="p-4 text-center">No students found for this batch.</td>
      </tr>
    )}
  </tbody>
</table>
</div>
    </div>
  )
}
export default StudentBatchAttendence;