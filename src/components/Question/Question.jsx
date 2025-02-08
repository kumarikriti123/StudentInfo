import React from "react";
import logo from "../../assets/logo.jpg";

const Question = ({ selectedTopic, selectedSubject, questions }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <header className="flex items-center gap-4 mb-10">
        <img src={logo} alt="Logo" className="w-16 h-16 object-cover rounded-full" />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Coding Age Assessment Test</h1>
          <p className="text-gray-600">codingage.biz | +91 9693243217</p>
        </div>
      </header>

      <section className="bg-white shadow-lg rounded-xl p-5 mb-10 border border-gray-200">
        <h2 className="text-2xl font-bold mb-5">Test Details</h2>
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div>
            <strong>Subject:</strong> {selectedSubject}
          </div>
          <div>
            <strong>Topic:</strong> {selectedTopic}
          </div>
        </div>
      </section>

      <section className="bg-white shadow-lg rounded-xl p-5 border border-gray-200">
        <h2 className="text-2xl font-bold mb-5">Questions</h2>
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">#</th>
              <th className="border border-gray-300 p-2">Question</th>
              <th className="border border-gray-300 p-2">Input</th>
              <th className="border border-gray-300 p-2">Output</th>
            </tr>
          </thead>
          <tbody>
            {questions.map(({ id, question, input, output }) => (
              <tr key={id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{id}</td>
                <td className="border border-gray-300 p-2">{question}</td>
                <td className="border border-gray-300 p-2 whitespace-pre-wrap">{input}</td>
                <td className="border border-gray-300 p-2 whitespace-pre-wrap">{output}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Question;
