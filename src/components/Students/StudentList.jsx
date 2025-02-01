import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../../SupabaseClient'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Placeholder } from "rsuite";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CustomLoader from "../Loader/Loader";

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
    <div className="student-list-container overflow-x-auto relative top-[7vh]  ">
      <div
        style={{
          marginLeft: "2vw",
          padding: "5vh 5vh 1vh 2vh",
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
        <div className="search-container mb-4 sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:z-10 sm:w-full lg:top-5 lg:left-9  bg-white">
          <div className="flex items-center rounded-2xl border-2 border-red-800 w-full max-w-xs sm:max-w-xs md:max-w-xs lg:max-w-xs xl:max-w-xs">
            <input
              type="text"
              name="name"
              className="text-black w-full h-10 px-3 py-2 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-red-800"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-transparent border-none p-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-800 text-lg" />
            </button>
          </div>
        </div>
        <div className="pt-4 sm:pt-16 lg:pt-3"> 
          <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-100px)]">
            <table className="w-full bg-gradient-to-r from-gray-400 to-gray-300 mx-auto">
              <thead>
                <tr className="bg-gradient-to-r from-red-500 to-red-800 text-white py-4 ">
                  <th className="py-2 px-4">S NO.</th>
                  <th className="py-2 px-4">Photo</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Contact</th>
                  <th className="py-2 px-4">Batch</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student, index) => (
                    <tr key={student.id} className="text-black border-b last:border-b-0">
                      <td className="py-2 px-4 text-center align-middle">{index + 1 || 'N/A'}</td>
                      <td className="py-2 px-4 text-center align-middle flex justify-center items-center">
                        <img src={student.photo_url} alt="User" className="w-15 h-14 object-cover rounded-full" />
                      </td>
                      <td className="py-2 px-4 text-center align-middle">{student.name || "N/A"}</td>
                      <td className="py-2 px-4 text-center align-middle">{student.phone_number || 'N/A'}</td>
                      <td className="py-2 px-4 text-center align-middle">{batchDetails[student.batch_id]?.batch_name || "Loading batch"}</td>
                      <td className="py-2 px-4 text-center align-middle">
                        <button 
                          className="bg-gradient-to-r from-red-600 to-red-700 font-semibold px-10 h-11 rounded-lg space-x-3 text-white transition-all duration-300 relative overflow-hidden"
                          onClick={() => navigate(`/profile/${student.name.toLowerCase()}`)}
                        >
                          <span>Profile</span>
                          <FontAwesomeIcon icon={faArrowRightLong} className="ml-3 text-xl align-middle animate-arrow" />
                        </button>
                      </td>  
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-custom-button text-xl font-extrabold">
                      No users found matching your search query.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </>
    )}
  </div>
</div>
  );
}

export default StudentList;