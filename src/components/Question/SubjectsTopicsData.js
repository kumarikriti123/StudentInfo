const subjects = [
    "C", "Java", "HTML", "CSS", "Javascript", "Python",
    "Tailwind", "Dart", "Flutter", "DSA", "React-Js", "Git & GitHub"
  ];
  
  const topicsBySubject = {
    C: ["Basic", "Algorithm", "Flowchart", "Variables", "Operators", "Conditions", "Loops", 
        "Functions", "Arrays", "Strings", "Pointers", "Structures & Union", "DMA", "File Handling"],
    Java: ["Basic", "OOP's", "Collections", "Streams", "Exceptions", "Multithreading", 
           "JDBC", "JavaFX", "Serialization", "Annotations", "Lambda Expressions", "Generics"],
    HTML: ["Tags", "Forms", "Media", "Tables", "Semantic Elements", "Canvas", 
           "SVG", "Attributes", "Responsive Design", "HTML5 Features"],
    CSS: ["Selectors", "Flexbox", "Grid", "Animations", "Transitions", "Media Queries", 
          "Pseudo-classes", "Pseudo-elements", "Custom Properties", "CSS Variables", 
          "Keyframes", "Typography"],
    Javascript: ["ES6 Features", "DOM Manipulation", "Promises", "Events", "Asynchronous Programming", 
                 "Closures", "Callbacks", "Modules", "Fetch API", "Error Handling", "Event Loop", 
                 "Prototypes", "Object-Oriented Programming"],
    Python: ["Syntax", "Data Types", "Functions", "Modules", "Packages", "File Handling", 
             "Error Handling", "OOP Concepts", "Iterators", "Generators", "Decorators", 
             "NumPy", "Pandas", "Django", "Flask"],
    Tailwind: ["Utility Classes", "Themes", "Plugins", "Custom Configurations", "Grid Layout", 
               "Responsive Design", "Dark Mode", "Animations", "Typography Utilities"],
    Dart: ["Syntax", "Functions", "Async Programming", "Collections", "Classes", 
           "Interfaces", "Mixins", "Error Handling", "Null Safety", "Extension Methods"],
    Flutter: ["Widgets", "State Management", "Navigation", "Animations", "Layouts", 
              "Themes", "Forms", "Networking", "Provider", "Bloc", "Integration Testing"],
    DSA: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", 
          "Sorting Algorithms", "Searching Algorithms", "Hashing", "Dynamic Programming", 
          "Greedy Algorithms", "Backtracking"],
    "React-Js": ["Components", "State", "Props", "Hooks", "Context API", "React Router", 
                 "Redux", "Lifecycle Methods", "Higher-Order Components", "Portals", 
                 "Error Boundaries", "Server-Side Rendering (SSR)", "React Testing Library"],
    "Git & GitHub": ["Basic Commands", "Branching", "Merge Conflicts", "Rebasing", "Pull Requests", 
                     "Git Workflow", "Stashing", "Cherry-Picking", "Tags", "Git Hooks", "GitHub Actions"]
  };
  
  export { subjects, topicsBySubject };
  