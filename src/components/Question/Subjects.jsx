import React, { useState, useEffect } from 'react';
import Question from './Question';
import '../../index.css'

function SubjectsWithTopics() {
  const [selectedSubject, setSelectedSubject] = useState("C");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);

  const subjects = ["C", "Java", "HTML", "CSS", "Javascript", "Python", "Tailwind", "Dart", "Flutter", "DSA", "React-Js", "Git & GitHub"];

  const topicsBySubject = {
    C: [
      "Basic", "Algorithm", "Flowchart", "Variables", "Operators", "Conditions", "Loops", 
      "Functions", "Arrays", "Strings", "Pointers", "Structures & Union", "DMA" , "File Handling", 
    ],
    Java: [
      "Basic", "OOP's", "Collections", "Streams", "Exceptions", "Multithreading", 
      "JDBC", "JavaFX", "Serialization", "Annotations", "Lambda Expressions", "Generics"
    ],
    HTML: [
      "Tags", "Forms", "Media", "Tables", "Semantic Elements", "Canvas", 
      "SVG", "Attributes", "Responsive Design", "HTML5 Features"
    ],
    CSS: [
      "Selectors", "Flexbox", "Grid", "Animations", "Transitions", "Media Queries", 
      "Pseudo-classes", "Pseudo-elements", "Custom Properties", "CSS Variables", 
      "Keyframes", "Typography"
    ],
    Javascript: [
      "ES6 Features", "DOM Manipulation", "Promises", "Events", "Asynchronous Programming", 
      "Closures", "Callbacks", "Modules", "Fetch API", "Error Handling", "Event Loop", 
      "Prototypes", "Object-Oriented Programming"
    ],
    Python: [
      "Syntax", "Data Types", "Functions", "Modules", "Packages", "File Handling", 
      "Error Handling", "OOP Concepts", "Iterators", "Generators", "Decorators", 
      "NumPy", "Pandas", "Django", "Flask"
    ],
    Tailwind: [
      "Utility Classes", "Themes", "Plugins", "Custom Configurations", "Grid Layout", 
      "Responsive Design", "Dark Mode", "Animations", "Typography Utilities"
    ],
    Dart: [
      "Syntax", "Functions", "Async Programming", "Collections", "Classes", 
      "Interfaces", "Mixins", "Error Handling", "Null Safety", "Extension Methods"
    ],
    Flutter: [
      "Widgets", "State Management", "Navigation", "Animations", "Layouts", 
      "Themes", "Forms", "Networking", "Provider", "Bloc", "Integration Testing"
    ],
    DSA: [
      "Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", 
      "Sorting Algorithms", "Searching Algorithms", "Hashing", "Dynamic Programming", 
      "Greedy Algorithms", "Backtracking"
    ],
    "React-Js": [
      "Components", "State", "Props", "Hooks", "Context API", "React Router", 
      "Redux", "Lifecycle Methods", "Higher-Order Components", "Portals", 
      "Error Boundaries", "Server-Side Rendering (SSR)", "React Testing Library"
    ],
    "Git & GitHub": [
      "Basic Commands", "Branching", "Merge Conflicts", "Rebasing", "Pull Requests", 
      "Git Workflow", "Stashing", "Cherry-Picking", "Tags", "Git Hooks", "GitHub Actions"
    ]
  };
  

  const questionsByTopic = {
    Algorithm: ["What is an algorithm?", "Explain time complexity.", "What are sorting algorithms?"],
    Flowchart: ["What is a flowchart?", "Draw a flowchart for a loop.", "Flowchart vs Pseudocode"],
    Variables: ["What are variables?", "How to declare variables in C?", "What is variable scope?"],
    Operators: ["What are operators?", "Explain arithmetic operators.", "What is operator precedence?"],
  };

  useEffect(() => {
    if (selectedSubject) {
      const defaultTopic = topicsBySubject[selectedSubject]?.[0] || null;
      setSelectedTopic(defaultTopic);
    }
  }, [selectedSubject]);

  useEffect(() => {
    if (selectedTopic) {
      setQuestions(questionsByTopic[selectedTopic] || ["No questions available for this topic."]);
    }
  }, [selectedTopic]);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="flex justify-start items-start gap-8 pt-28 ml-7 scroll_batch">
      <div className="w-48 bg-white text-black text-2xl border-2 border-slate-400 rounded-xl shadow-xl p-4 scroll_batch">
        <div className="py-3 text-xl font-bold mb-2 px-5 cursor-pointer scroll_batch">Subjects</div>
        <div className="mt-2 overflow-y-auto h-[60vh] scroll_batch">
          {subjects.map((subject, index) => (
            <div
              key={index}
              onClick={() => handleSubjectClick(subject)}
              className={`py-2 px-5 mb-4 text-2xl font-bold hover:bg-gray-100 hover:shadow-lg rounded-lg cursor-pointer ${
                selectedSubject === subject ? "bg-gray-200 shadow-lg" : ""
              }`}
            >
              {subject}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
  <h2 className="text-2xl font-bold px-5 mt-7 cursor-pointer">Topics</h2>
  <div className="bg-white text-black text-2xl border-2 border-slate-400 rounded-xl shadow-xl p-4">
  <div className="flex w-[80vw] overflow-x-auto scroll_batch_topic whitespace-nowrap">
  {topicsBySubject[selectedSubject]?.map((topic, index) => (
    <div
      key={index}
      onClick={() => handleTopicClick(topic)}
      className={`py-2 px-5 mb-4 ml-3 text-xl font-bold hover:bg-gray-100 hover:shadow-lg rounded-lg cursor-pointer ${
        selectedTopic === topic ? "bg-gray-200 shadow-lg" : ""
      }`}
    >
      {topic}
    </div>
  ))}
</div>
</div>
  <Question selectedTopic={selectedTopic} questions={questions} />
</div>
    </div>
  );
}

export default SubjectsWithTopics;
