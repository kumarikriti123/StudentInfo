import { useState, useEffect } from "react";
import { supabase } from "../../SupabaseClient";
import BatchDetails from "./BatchDetails";

function BatchList() {
  const [batches, setBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("batches").select("*");
        if (error) throw new Error(error.message);
        setBatches(data);
        if (data.length > 0 && !selectedBatch)
          setSelectedBatch(data[0].batch_name);
      } catch (err) {
        setResponse(`Error fetching batches: ${err.message}`);
        console.error("Error fetching batches:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBatchClick = (batchName) => {
    setSelectedBatch(batchName);
    setShowDropdown(false);
  };

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <div
      className={`mb-[20vh] ${
        isMobile ? "px-4 flex flex-col items-center" : "flex px-10"
      }`}
    >
      {isMobile ? (
        <div className="w-full mt-[15vh] flex flex-col items-center">
          <div className="flex justify-between items-center bg-white shadow-lg border border-gray-300 rounded-xl p-3 relative">
            <span
              onClick={toggleDropdown}
              className="text-lg font-semibold cursor-pointer w-full text-center"
            >
              {selectedBatch || "Select a Batch"}
            </span>
            {showDropdown && (
              <div className="absolute left-0 top-full mt-2 w-full bg-white shadow-lg border border-gray-300 rounded-lg z-10 max-h-60 overflow-y-auto">
                <ul>
                  {batches.length > 0 ? (
                    batches.map((batch) => (
                      <li
                        key={batch.id}
                        onClick={() => handleBatchClick(batch.batch_name)}
                        className="p-3 text-lg hover:bg-blue-100 cursor-pointer transition-all"
                      >
                        {batch.batch_name}
                      </li>
                    ))
                  ) : (
                    <li className="p-3 text-gray-500">No batches available</li>
                  )}
                </ul>
              </div>
            )}
          </div>
          {selectedBatch && <BatchDetails batchName={selectedBatch} />}
        </div>
      ) : (
        <div className="flex w-full">
          <div className="w-1/5 bg-white text-black text-xl border text-center border-gray-400 rounded-xl shadow-xl p-4 mt-[15vh]">
            <div className="text-center font-bold mb-4">
              BATCH: {selectedBatch}
            </div>
            <div
              className="overflow-y-auto max-h-[50vh]"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style>
                {`
      .scroll_batch::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
      }
    `}
              </style>
              {response ? (
                <div className="text-red-500">{response}</div>
              ) : batches.length > 0 ? (
                batches.map((batch) => (
                  <div
                    key={batch.id}
                    onClick={() => handleBatchClick(batch.batch_name)}
                    className={`py-2 px-4 mb-2 rounded-lg cursor-pointer text-lg hover:bg-blue-100 transition-all 
                        ${
                          selectedBatch === batch.batch_name
                            ? "bg-blue-200 shadow-md"
                            : ""
                        }`}
                  >
                    {batch.batch_name}
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-sm text-center">
                  No batches available
                </div>
              )}
            </div>
          </div>
          <div className="w-3/4 p-4">
            {selectedBatch && <BatchDetails batchName={selectedBatch} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default BatchList;
