import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../SupabaseClient'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Placeholder } from "rsuite";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CustomLoader from "./Loader/Loader";

function StudentList() {
  const navigate = useNavigate();
  const [searchQuery , setSearchQuery] = useState("");
  const [students, setStudents] = useState([]);
  const [batchDetails, SetBatchDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevnvb5Jkg-tYcpHAtMgXIfGeHrkCI3FeNog&s";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from("students").select("*");

        if (error) {
          console.error("Error Fetching Data", error);
        } else {
          console.log("Data Fetched", data);
          setStudents(data);
        }
      } catch (err) {
        console.error("Error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchBatchDetails = async () => {
      const batchIds = students.map((student) => student.batch_id);
      if (batchIds.length > 0) {
        try {
          const { data, error } = await supabase
            .from("batches")
            .select("id,batch_name,batch_timing")
            .in("id", batchIds);

          if (error) {
            console.error("Error Fetching Data", error);
          } else {
            console.log("Data Fetched", data);
            const batchDetailsMap = data.reduce((acc, batch) => {
              acc[batch.id] = {
                batch_name: batch.batch_name,
                batch_timing: batch.batch_timing,
              };
              return acc;
            }, {});
            SetBatchDetails(batchDetailsMap);
          }
        } catch (err) {
          console.error("Error", err);
        }
      }
    };
    fetchBatchDetails();
  }, [students]);

  const filteredStudents = searchQuery
    ?students.filter(student => 
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : students;

  return (
    <div className="student-list-container overflow-x-auto relative top-[7vh] ">
      <div
        style={{
          marginLeft: "10vw",
          padding: "10vh 5vh 1vh 2vh",
          paddingBottom: "10vh",
          marginTop: "-1vh",
        }}
      >
        {loading ? (
          <>
            <div className="loading-placeholder">
              {/* Placeholder for loading */}
              <Placeholder.Paragraph rows={8} />
              <CustomLoader/>
            </div>
          </>
        ) : (
          <>
            <div className="search-container mb-4   ">
              <div className="flex items-center rounded-2xl border-2 border-red-800 w-[85vw] xl:w-[10vw] md:w-[30vw] ">
                <input 
                  type="text"
                  name="name"
                  className="text-black xl:w-24 h-8 px-2 py-1 rounded-l-2xl focus:outline-none"
                  placeholder="Search"
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button className="bg-transparent border-none p-2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-800 text-lg" />
                </button>
              </div>
            </div>
            
            <table className=" w-full bg-gradient-to-r from-gray-400 to-gray-300  mx-auto">
              <thead>
                <tr className="bg-gradient-to-r from-red-700 to-red-500 text-white py-4 ">
                  <th className="py-2 px-4 ">S NO.</th>
                  <th className="py-2 px-4 ">Photo</th>
                  <th className="py-2 px-4 ">Name</th>
                  <th className="py-2 px-4 ">Contact</th>
                  <th className="py-2 px-4 ">Batch</th>
                  <th className="py-2 px-4 ">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student, index) => (
                    <tr key={student.id} className=" text-black ">
                      <td className="py-2 px-4 text-center align-middle ">{index + 1 || 'N/A'}</td>
                      <td className="py-2 px-4 text-center align-middle">
                        <img src={imageUrl} alt="User" className="w-16 h-16 object-cover rounded-md" />
                      </td>
                      <td className="py-2 px-4 text-center align-middle ">{student.name || "N/A"}</td>
                      <td className="py-2 px-4 text-center align-middle">{student.phone_number || 'N/A'}</td>
                      <td className="py-2 px-4 text-center align-middle">{batchDetails[student.batch_id]?.batch_name || "Loading batch"}</td>
                      <td className="py-2 px-4 text-center align-middle">
                        <button 
                          className=" bg-blue-900  font-semibold  px-10 h-11 rounded-lg space-x-3  text-white transition-all duration-300 relative overflow-hidden"
                          onClick={() => navigate(`/profile/${student.name.toLowerCase()}`)}
                        >
                          <span className="">Profile</span>
                          <FontAwesomeIcon icon={faArrowRightLong} className="ml-3 text-xl align-middle animate-arrow " />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-custom-button text-3xl font-extrabold">
                      No users found matching your search query.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default StudentList;
