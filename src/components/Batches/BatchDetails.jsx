import { useEffect, useState } from 'react';
import { supabase } from '../../SupabaseClient';
import { useNavigate } from 'react-router-dom';

function BatchDetails({ batchName }) {
  const [batch, setBatch] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBatchDetails = async () => {
      try {
        if (batchName) {
          const { data, error } = await supabase
            .from('batches')
            .select('*')
            .eq('batch_name', batchName)
            .single();
          if (error) {
            console.error('Error fetching batch details:', error);
          } else {
            setBatch(data);
          }
        } else {
          setBatch(null);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchBatchDetails();
  }, [batchName]);

  if (!batchName) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No batch selected. Please select a batch from the list.
      </div>
    );
  }

  if (!batch) {
    return (
      <div className="text-center text-gray-500 mt-8">
        Loading details for batch: {batchName}
      </div>
    );
  }

  const navigateToQuestions = () => {
    navigate('/batch/question', { state: { batchName: batch.batch_name } });
  };

  return (
    <>
      <div className="bg-gray-200 rounded-xl text-black text-4xl p-5 ml-72 absolute top-[15vh]">
        {batch.batch_name}
        <div className="text-xl mt-5 mb-10">Time: {batch.batch_timing}</div>
        <div className="bg-white p-4 rounded-xl mb-10"></div>
        <button
          onClick={navigateToQuestions}
          className="py-2 px-4 rounded-2xl font-bold font-Rubik text-white text-lg mx-10 bg-gray-800"
        >
          Questions
        </button>
        <button className="py-2 px-4 rounded-2xl font-bold font-Rubik text-white text-lg mx-10 bg-gray-800">
          Result
        </button>
        <button className="py-2 px-4 rounded-2xl font-bold font-Rubik text-white text-lg mx-10 bg-gray-800">
          Attendance
        </button>
      </div>
    </>
  );
}

export default BatchDetails;
