import { useEffect, useState } from "react";
import { supabase } from "../../SupabaseClient";
import { useNavigate } from "react-router-dom";

function BatchDetails({ batchName }) {
  const [batch, setBatch] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBatchDetails = async () => {
      try {
        if (batchName) {
          const { data, error } = await supabase
            .from("batches")
            .select("*")
            .eq("batch_name", batchName)
            .single();
          if (error) console.error("Error fetching batch details:", error);
          else setBatch(data);
        } else setBatch(null);
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchBatchDetails();
  }, [batchName]);

  if (!batchName) {
    return (
      <div className="text-center text-gray-500 mt-8">
        No batch selected. Please select a batch.
      </div>
    );
  }

  if (!batch) {
    return (
      <div className="text-center text-gray-500 mt-8">
        Loading details for batch: {batchName}...
      </div>
    );
  }

  return (
    <div className="mt-28 ml-2 mx-auto w-full max-w-lg p-5 bg-gray-100 rounded-xl shadow-lg">
      <div className="flex px-12 justify-between items-start w-full">
        <div className="text-center text-2xl font-bold">{batch.batch_name}</div>
        <div className="text-lg text-right mt-2">
          <b>Time-</b> {batch.batch_timing}
        </div>
      </div>

      <hr className="w-full h-0.5 mt-7 bg-slate-900" />

      <div className="my-10">
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            onClick={() =>
              navigate("/batch/question", {
                state: { batchName: batch.batch_name },
              })
            }
            className="px-6 py-2 rounded-lg font-semibold text-white bg-gray-800 hover:bg-gray-700 transition"
          >
            Questions
          </button>
          <button
            onClick={() => navigate("/marks")}
            className="px-6 py-2 rounded-lg font-semibold text-white bg-gray-800 hover:bg-gray-700 transition"
          >
            Result
          </button>
          <button
            onClick={() => navigate("/attendance")}
            className="px-6 py-2 rounded-lg font-semibold text-white bg-gray-800 hover:bg-gray-700 transition"
          >
            Attendance
          </button>
        </div>
      </div>
    </div>
  );
}

export default BatchDetails;
