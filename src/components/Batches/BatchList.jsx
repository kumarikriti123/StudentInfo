import { useState, useEffect } from 'react';
import { supabase } from '../../SupabaseClient';
import { Loader, Placeholder } from 'rsuite';
import BatchDetails from './BatchDetails';


function BatchList(){
    const [batches, setBatches] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState('');
    
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
    
        fetchData();
      }, [selectedBatch]);

      const handleBatchClick = (batchName) => {
        setSelectedBatch(batchName);
      };

    return (
        <>
        <div className=" ">
          <div className="w-48 bg-white z-0 relative top-[15vh] mx-10 text-black text-2xl border-2 border-slate-400 rounded-xl shadow-xl p-4 ">
      <div 
        className="py-3 text-xl font-bold mb-2 px-5 cursor-pointer"
      >
        BATCHES
      </div>
        <div className="mt-2 overflow-y-auto h-[50vh] scroll_batch">
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
                className={`py-2 px-5 mb-4 text-2xl font-bold hover:bg-gray-100 hover:shadow-lg rounded-lg cursor-pointer ${
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
    <div className="">
        {selectedBatch && <BatchDetails batchName={selectedBatch} />}
      </div>
      </div>
      </> 
      
    )
}
export default BatchList ;