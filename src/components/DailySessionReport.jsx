import React, { useState, useEffect } from "react";
import { subjects, topicsBySubject } from "./Question/SubjectsTopicsData";

function DailySessionReport() {
  const [selectedSubject, setSelectedSubject] = useState("C");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
  const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);

  useEffect(() => {
    if (selectedSubject) {
      const defaultTopic = topicsBySubject[selectedSubject]?.[0] || null;
      setSelectedTopic(defaultTopic);
    }
  }, [selectedSubject]);

  return (
    <div className="flex flex-col w-full p-4 md:pt-28 -mt-[100px] max-[880px]:mt-0">

      <div className="md:hidden w-full bg-white text-black text-xl border-2 border-slate-400 rounded-xl shadow-xl p-4">
        <div className="text-center font-bold text-2xl mb-4">Coding Age</div>

        <div className="flex w-full gap-2">
          <div className="relative w-1/2">
            <button
              onClick={() => setSubjectDropdownOpen(!subjectDropdownOpen)}
              className="w-full py-2 px-4 text-lg font-bold bg-gray-200 rounded-lg"
            >
              {`Subject: ${selectedSubject}`}
            </button>
            {subjectDropdownOpen && (
              <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedSubject(subject);
                      setSubjectDropdownOpen(false);
                    }}
                    className={`py-2 px-4 text-lg font-bold hover:bg-gray-100 rounded-lg cursor-pointer ${
                      selectedSubject === subject ? "bg-gray-300" : ""
                    }`}
                  >
                    {subject}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative w-1/2">
            <button
              onClick={() => setTopicDropdownOpen(!topicDropdownOpen)}
              className="w-full py-2 px-4 text-lg font-bold bg-gray-200 rounded-lg"
            >
              {`Topic: ${selectedTopic}`}
            </button>
            {topicDropdownOpen && (
              <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
                {topicsBySubject[selectedSubject]?.map((topic, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedTopic(topic);
                      setTopicDropdownOpen(false);
                    }}
                    className={`py-2 px-4 text-lg font-bold hover:bg-gray-100 rounded-lg cursor-pointer ${
                      selectedTopic === topic ? "bg-gray-300" : ""
                    }`}
                  >
                    {topic}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center w-full">
  <div className="scroll_list mt-2 p-2 border-2 border-gray-300 rounded-xl shadow-lg">
    <div className="flex gap-3 w-full">
      <div className="py-2 px-4 text-lg font-bold bg-gray-800 text-white rounded-lg whitespace-nowrap">
        {`Subject : ${selectedSubject}`}
      </div>
      <div className="h-11 w-0.5 bg-red-950"></div>
      <div className="flex gap-3 overflow-x-auto scroll_list">
        {subjects.map((subject, index) => (
          <button
            key={index}
            onClick={() => setSelectedSubject(subject)}
            className={`py-2 px-4 text-lg font-bold rounded-lg transition min-w-fit ${
              selectedSubject === subject
                ? "bg-gray-800 text-white cursor-default"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            disabled={selectedSubject === subject}
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  </div>

  <div className="scroll_list mt-4 p-2 border-2 border-gray-300 rounded-xl shadow-lg z-0">
    <div className="flex gap-3 w-full">
      <div className="py-2 px-4 text-lg font-bold bg-gray-800 text-white rounded-lg whitespace-nowrap">
        {`Topic : ${selectedTopic}`}
      </div>
      <div className="h-11 w-0.5 bg-red-950"></div>
      <div className="flex gap-3 w-max overflow-x-auto scroll_list">
        {topicsBySubject[selectedSubject]?.map((topic, index) => (
          <button
            key={index}
            onClick={() => setSelectedTopic(topic)}
            className={`py-2 px-4 text-lg font-bold rounded-lg transition min-w-fit ${
              selectedTopic === topic
                ? "bg-gray-800 text-white cursor-default"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            disabled={selectedTopic === topic}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  </div>
</div>


      <div className="w-full flex mt-5 bg-white justify-center items-center">
        <div
          className="bg-red-700 text-white text-2xl md:text-3xl font-bold px-6 md:px-8 py-3 md:py-4"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)" }}
        >
          Week 01
        </div>
      </div>

      <div className="w-full mt-6">
        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
          (day, index) => (
            <div
              key={index}
              className="px-3 md:px-12 bg-gray-800 w-full h-auto items-center justify-between text-white p-3 md:p-4 mb-3 md:mb-4 rounded-lg transition-transform transform hover:scale-95"
            >
              <div className="text-lg md:text-xl font-bold">
                {index + 1}. {day}
              </div>
              <hr className="my-2" />
              <div className="px-4 md:px-6 flex justify-between text-sm md:text-base">
                <p>30/01/2025</p>
                <p>Knowledge session</p>
                <p>Topic</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default DailySessionReport;
