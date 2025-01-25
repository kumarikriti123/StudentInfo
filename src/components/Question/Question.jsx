import React from "react";
import logo from "../../assets/logo.jpg";

const dynamicData = {
  topic: "POINTERS",
  date: "25 Jan 2025",
  name: "Cage-k3",
  batch: "Cage-k3",
};

const questions = [
  {
    id: 1,
    question: "Write a program to declare two integer variable, two pointer that point to that integer and perform addition using pointers",
    input: "5 3",
    output: "8",
  },
  {
    id: 2,
    question: "Print the Array using double pointer.",
    input: "1 2 3 4 5",
    output: "Array elements using double pointer:\n1\n2\n3\n4\n5",
  },
  {
    id: 3,
    question: "Sort Array by using pointer.",
    input: "2 3 1 5 4",
    output: "Array elements using pointer:\n1\n2\n3\n4\n5",
  },
  {
    id: 4,
    question: "Write a program to reverse an integer array of size 5 using a pointer. The pointer should point to the array and iterate through it for reversal.",
    input: "1 2 3 4 5",
    output: "Reversed array:\n5 4 3 2 1",
  },
  {
    id: 5,
    question: "Create a program to use a pointer to a function. Implement two functions (add and subtract) and use a function pointer to call one of them based on user input.",
    input: "Choose operation:\n1. Add\n2. Subtract\n\nEnter option : 2\nEnter two numbers: 10 5",
    output: "Result: 15",
  },
];

const Question = () => {
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
            <strong>Topic:</strong> {dynamicData.topic}
          </div>
          <div>
            <strong>Date:</strong> {dynamicData.date}
          </div>
          <div>
            <strong>Name:</strong> {dynamicData.name}
          </div>
          <div>
            <strong>Batch:</strong> {dynamicData.batch}
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
