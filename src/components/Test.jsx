import React, { useState, useEffect } from "react";
import { subjects, topicsBySubject } from "./Question/SubjectsTopicsData";

function Test() {
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
    <div className="flex flex-col w-full p-4 md:pt-28">
      <div className="md:hidden w-full bg-white text-black text-2xl border-2 border-slate-400 rounded-xl shadow-xl p-4">
        <div className="text-center font-bold text-3xl mb-4">Coding Age</div>

        <div className="flex w-full gap-2">
          <div className="relative w-1/2">
            <button
              onClick={() => setSubjectDropdownOpen(!subjectDropdownOpen)}
              className="w-full py-2 px-5 text-xl font-bold bg-gray-200 rounded-lg"
            >
              {selectedSubject || "Subject"}
            </button>
            {subjectDropdownOpen && (
              <div className="absolute w-full bg-white border-2 border-slate-400 rounded-lg shadow-lg mt-2 z-0">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedSubject(subject);
                      setSubjectDropdownOpen(false);
                    }}
                    className={`py-2 px-5 text-xl font-bold hover:bg-gray-100 hover:shadow-lg rounded-lg cursor-pointer ${
                      selectedSubject === subject ? "bg-gray-200 shadow-lg" : ""
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
              className="w-full py-2 px-5 text-xl font-bold bg-gray-200 rounded-lg"
            >
              {selectedTopic || "Topic"}
            </button>
            {topicDropdownOpen && (
              <div className="absolute w-full bg-white border-2 border-slate-400 rounded-lg shadow-lg mt-2 z-10">
                {topicsBySubject[selectedSubject]?.map((topic, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedTopic(topic);
                      setTopicDropdownOpen(false);
                    }}
                    className={`py-2 px-5 text-xl font-bold hover:bg-gray-100 hover:shadow-lg rounded-lg cursor-pointer ${
                      selectedTopic === topic ? "bg-gray-200 shadow-lg" : ""
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
          <div className="flex gap-3 w-max">
            <div className="py-2 px-4 text-lg font-bold bg-gray-800 text-white rounded-lg whitespace-nowrap">
              {`Subject : ${selectedSubject}`}
            </div>
            <div className="h-11 w-0.5 bg-red-950"></div>
            {subjects.map((subject, index) => (
              <button
                key={index}
                onClick={() => setSelectedSubject(subject)}
                className={`py-2 px-4 text-lg font-bold rounded-lg transition min-w-fit ${
                  selectedSubject === subject
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {subject}
              </button>
            ))}
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
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex mt-5 bg-white justify-center items-center relative">
        <div
          className="absolute top-0 centre transform rotate-[-10deg] bg-yellow-500 text-white text-xs font-bold px-2 py-1"
          style={{ zIndex: 10 }}
        >
          Topper
        </div>
        <div
          className="bg-red-700 text-white text-3xl font-bold flex-shrink-0 px-8 py-4 transition-all duration-300 ease-in-out hover:bg-red-800
    sm:w-4/5 sm:text-xl sm:px-6 sm:py-3 md:w-3/4 md:text-2xl lg:w-auto lg:text-3xl"
          style={{ clipPath: "polygon(1% 25%, 100% 0%, 100% 75%, 0% 100%)" }}
        >
          <p>{`Manjeet Kumar`}</p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="md:px-8 bg-gray-800 w-[95vw] text-white my-6 rounded-lg transition-transform transform flex flex-col md:flex-row gap-4">
          <div className="flex h-12 mr-5 items-center justify-center text-white text-2xl font-medium opacity-0">
            1.
          </div>

          <div className="h-16 w-16 bg-red-400 rounded-full flex items-center justify-center text-white font-semibold text-xl py-3 opacity-0">
            Avatar
          </div>

          <div className="md:w-[30vw] w-full flex items-center text-white text-lg font-medium py-3 px-5">
            Name
          </div>

          <div className="flex-1 h-12 items-center justify-center text-white text-lg font-medium pt-4">
            Marks
          </div>

          <div className="flex-1 h-12 items-center justify-center text-white text-lg font-medium pt-4">
            Full Marks
          </div>

          <div className="flex-1 h-12 items-center justify-center text-white text-lg font-medium pt-4">
            Percentage
          </div>

          <div className="flex-1 h-12 items-center justify-center text-white text-lg font-medium pt-4">
            Grade
          </div>
          <hr className="bg-slate-50" />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="px-4 md:px-8 bg-gray-800 w-[95vw] h-auto text-white p-4 rounded-lg transition-transform transform flex flex-col md:flex-row gap-4 hover:scale-95">
          <div className="flex h-12 mr-5 items-center justify-center text-white text-2xl font-medium pt-4">
            1.
          </div>

          <div className="h-16 w-16 bg-red-400 rounded-full flex items-center justify-center text-white font-semibold text-xl py-3">
            Avatar
          </div>

          <div className="md:w-[30vw] w-full flex items-center text-white text-lg font-medium py-3 px-5">
            Name
          </div>

          <div className="flex-1 h-12 items-center justify-center text-white text-lg font-medium pt-4">
            Marks
          </div>

          <div className="flex-1 h-12 items-center justify-center text-white text-lg font-medium pt-4">
            Full Marks
          </div>

          <div className="flex-1 h-12 items-center justify-center text-white text-lg font-medium pt-4">
            Percentage
          </div>

          <div className="flex-1 h-12 items-center justify-center text-white text-lg font-medium pt-4">
            Grade
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
