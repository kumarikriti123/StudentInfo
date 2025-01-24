import { useLocation } from "react-router-dom";
import { useState } from "react";

function SubjectDetails() {
  const location = useLocation();
  const { subject, topics } = location.state || {};
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  if (!subject || !topics) {
    return <div className="text-center mt-10 text-red-500">No subject selected.</div>;
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Topics for {subject}</h1>
      <div className="grid grid-cols-1 gap-4 w-3/4 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            onClick={() => handleTopicClick(topic)}
            className={`p-4 text-xl font-bold border rounded-lg cursor-pointer ${
              selectedTopic === topic ? "bg-blue-200 border-blue-500" : "hover:bg-gray-100"
            }`}
          >
            {topic}
          </div>
        ))}
      </div>
      {selectedTopic && (
        <div className="mt-8 text-center text-xl">
          Selected Topic: <span className="font-bold">{selectedTopic}</span>
        </div>
      )}
    </div>
  );
}

export default SubjectDetails;
