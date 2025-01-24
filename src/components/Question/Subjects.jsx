import { useState, useEffect } from "react";

function SubjectsWithTopics() {
  const [selectedSubject, setSelectedSubject] = useState("C");
  const [selectedTopic, setSelectedTopic] = useState(null);

  const subjects = [
    "C",
    "Java",
    "HTML",
    "CSS",
    "Javascript",
    "Tailwind",
    "Dart",
    "Flutter",
    "DSA",
    "React-Js",
    "Git & GitHub",
  ];

  const topicsBySubject = {
    C: [
      "Algorithm",
      "Flowchart",
      "Variables",
      "Operators",
      "Conditions",
      "Loops",
      "Functions",
      "Pointers",
      "Arrays",
      "Structures",
      "File Handling",
      "Dynamic Memory Allocation",
      "Preprocessors",
      "Recursion"
    ],
    Java: [
      "OOP Concepts",
      "Collections",
      "Streams",
      "Exceptions",
      "Threads",
      "Generics",
      "File I/O",
      "JVM Architecture",
      "Annotations",
      "Lambda Expressions",
      "Interfaces",
      "Abstract Classes",
      "Encapsulation",
      "Polymorphism"
    ],
    HTML: [
      "Tags",
      "Forms",
      "Media",
      "Tables",
      "Semantics",
      "Headings",
      "Lists",
      "Attributes",
      "Hyperlinks",
      "Iframe",
      "Images",
      "Meta Tags",
      "HTML5 Features",
      "Data Attributes"
    ],
    CSS: [
      "Selectors",
      "Flexbox",
      "Grid",
      "Animations",
      "Media Queries",
      "Pseudo-classes",
      "Pseudo-elements",
      "Transitions",
      "Variables",
      "Colors",
      "Typography",
      "Box Model",
      "Positioning",
      "Z-index"
    ],
    Javascript: [
      "ES6 Features",
      "DOM Manipulation",
      "Promises",
      "Fetch API",
      "Events",
      "Arrow Functions",
      "Modules",
      "Closures",
      "Async/Await",
      "Error Handling",
      "Event Bubbling",
      "Prototypes",
      "Hoisting",
      "Destructuring"
    ],
    Tailwind: [
      "Utility Classes",
      "Themes",
      "Plugins",
      "Custom Configurations",
      "Responsive Design",
      "Typography",
      "Spacing",
      "Colors",
      "Grids",
      "Flexbox",
      "Shadows",
      "Backgrounds",
      "Hover States",
      "Animations"
    ],
    Dart: [
      "Syntax",
      "Functions",
      "Async Programming",
      "Collections",
      "Classes",
      "Constructors",
      "Inheritance",
      "Mixins",
      "Null Safety",
      "Streams",
      "Future API",
      "Error Handling",
      "Data Types",
      "Operators"
    ],
    Flutter: [
      "Widgets",
      "State Management",
      "Navigation",
      "Animations",
      "Testing",
      "Layouts",
      "Providers",
      "Forms",
      "Dio for HTTP",
      "Assets",
      "JSON Parsing",
      "Gesture Handling",
      "Themes",
      "Hot Reload"
    ],
    DSA: [
      "Arrays",
      "Linked Lists",
      "Stacks",
      "Queues",
      "Graphs",
      "Sorting",
      "Searching",
      "Dynamic Programming",
      "Greedy Algorithms",
      "Divide and Conquer",
      "Hashing",
      "Binary Search Trees",
      "Heaps",
      "Recursion"
    ],
    "React-Js": [
      "Components",
      "State",
      "Props",
      "Hooks",
      "Routing",
      "Context API",
      "Lifecycle Methods",
      "Forms",
      "Events",
      "Refs",
      "Fragments",
      "Error Boundaries",
      "Redux",
      "Performance Optimization"
    ],
    "Git & GitHub": [
      "Basic Commands",
      "Branching",
      "Merge Conflicts",
      "Rebasing",
      "Pull Requests",
      "Commit History",
      "Tags",
      "Stashing",
      "Git Hooks",
      "Git Ignore",
      "SSH Keys",
      "Collaboration",
      "Git Workflow",
      "Reverting Changes"
    ]
  };

  useEffect(() => {
    if (selectedSubject) {
      const defaultTopic = topicsBySubject[selectedSubject]?.[0] || null;
      setSelectedTopic(defaultTopic);
    }
  }, [selectedSubject]);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="flex justify-start items-start gap-8 pt-28 ml-7">
      <div className="w-48 bg-white text-black text-2xl border-2 border-slate-400 rounded-xl shadow-xl p-4">
        <div className="py-3 text-xl font-bold mb-2 px-5 cursor-pointer">
          Subjects
        </div>
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
      <h2 className="text-2xl font-bold px-5 mt-7 cursor-pointer">Topics</h2>

      <div className="flex-1 overflow-x-auto bg-white text-black text-2xl border-2 border-slate-400 rounded-xl shadow-xl scroll_batch p-4 ">
        <div className=" w-[100%] flex">
          {topicsBySubject[selectedSubject]?.map((topic, index) => (
            <div
              key={index}
              onClick={() => handleTopicClick(topic)}
              className={`py-2 px-5 mb-4 ml-3 text-2xl font-bold hover:bg-gray-100 hover:shadow-lg rounded-lg cursor-pointer whitespace-nowrap ${
                selectedTopic === topic ? "bg-gray-200 shadow-lg" : ""
              }`}
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubjectsWithTopics;
