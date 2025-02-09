import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import dummyData from "../Data/data";
import Test from "../../Test";
import DailySessionReport from "../../DailySessionReport";
import StudentBatchAttendence from "../../Attendance/StudentBatchAttendence";

export const Student = () => {
  const navigate = useNavigate();
  const { batchId } = useParams();
  const [activeTab, setActiveTab] = useState("students");

  const batch = dummyData.branches
    .flatMap((branch) => branch.batches)
    .find((batch) => batch.id === parseInt(batchId));

  return (
    <div className="m-6 mt-28">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">📌 {batch.name}</h1>

      <div className="w-full flex justify-between bg-gray-100 p-2 md:p-3 rounded-xl shadow-lg my-2 md:my-4 overflow-x-auto overflow-y-hidden">
        {["students", "topics", "attendance", "test"].map((tab) => (
          <Button
            key={tab}
            label={tab.charAt(0).toUpperCase() + tab.slice(1)}
            onClick={() => setActiveTab(tab)}
            className={`min-w-fit md:w-[18%] text-xl transition-all duration-300 hover:scale-105 hover:shadow-black hover:shadow-md 
              ${activeTab === tab ? "bg-blue-600 scale-105 shadow-md shadow-black" : "bg-gray-200 text-black"}
            `}
          />
        ))}
      </div>

      {activeTab === "students" && (
        <div className="overflow-x-auto bg-white shadow-lg rounded-xl p-4">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-gradient-to-r from-red-400 to-red-900 text-white">
              <tr className="text-lg">
                <th className="md:p-3 max-w-full text-center">Sl.</th>
                <th className="p-3 text-center">Photo</th>
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center">Ph.no.</th>
                <th className="p-3 text-center">Marks</th>
                <th className="p-3 text-center">Attendance</th>
                <th className="p-3 text-center">Degree</th>
                <th className="p-3 text-center">View</th>
              </tr>
            </thead>
            <tbody>
              {batch.students.map((student, index) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-300 hover:bg-gray-100 transition-all"
                >
                  <td className="p-3 text-center font-bold text-gray-700">
                    {index + 1}
                  </td>
                  <td className="p-3 flex justify-center items-center">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-300 shadow"
                    />
                  </td>
                  <td className="p-3 text-center font-semibold text-gray-700">
                    {student.name}
                  </td>
                  <td className="p-3 text-center font-semibold text-gray-700">
                    {student.phone}
                  </td>
                  <td className="p-3 text-center font-semibold text-blue-500">
                    {student.marks}
                  </td>
                  <td className="p-3 text-center font-semibold text-green-500">
                    {student.attendance}
                  </td>
                  <td className="p-3 text-center font-semibold text-purple-500">
                    {student.occupation}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      className="text-gray-800 hover:text-blue-500 transition-all"
                      onClick={() =>
                        navigate(`/profile/${student.name.toLowerCase()}`)
                      }
                    >
                      <FontAwesomeIcon icon={faEye} size="lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "topics" && <DailySessionReport batchId={batchId} />}
      {activeTab === "attendance" && (
        <StudentBatchAttendence batchId={batchId} />
      )}
      {activeTab === "test" && <Test batchId={batchId} />}
    </div>
  );
};
