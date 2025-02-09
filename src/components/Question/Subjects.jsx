import React, { useState, useEffect } from "react";
import Question from "./Question";
import { subjects, topicsBySubject } from "./SubjectsTopicsData";

function SubjectsWithTopics() {
  const [selectedSubject, setSelectedSubject] = useState("C");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
  const [topicDropdownOpen, setTopicDropdownOpen] = useState(false);

  useEffect(() => {
    if (selectedSubject) {
      const defaultTopic = topicsBySubject[selectedSubject]?.[0] || null;
      setSelectedTopic(defaultTopic);
    }
  }, [selectedSubject]);

  useEffect(() => {
    if (selectedTopic) {
      setQuestions(["Sample question related to " + selectedTopic]);
    }
  }, [selectedTopic]);

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
              {selectedSubject}
            </button>
            {subjectDropdownOpen && (
              <div className="absolute w-full bg-white border-2 border-slate-400 rounded-lg shadow-lg mt-2 z-10">
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

      <div className="w-full mt-6">
        <h2 className="text-2xl font-bold text-center">Question Paper</h2>
        <Question
          selectedTopic={selectedTopic}
          questions={questions}
          selectedSubject={selectedSubject}
        />
      </div>
    </div>
  );
}

export default SubjectsWithTopics;
