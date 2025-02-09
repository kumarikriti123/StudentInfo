import React from 'react';

function AboutUs() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-gray-50 min-h-screen px-6 sm:px-8 py-12 sm:mt-10 mt-26 md:mt-10 max-[640px]:mt-26">
  <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 border border-gray-200 w-full max-w-5xl text-center">
    <h2 className="text-3xl font-semibold mb-6 text-red-700">About Us</h2>
    
    <p className="text-lg text-gray-700 mb-6">
      Welcome to <span className="font-semibold text-red-600">Coding Age</span>, an institute dedicated to equipping students with industry-ready coding skills. Our students have developed the <span className="font-semibold text-red-600">Student Management System</span>—a robust application to streamline student data management in educational institutions.
    </p>

    <div className="grid gap-6 text-left">
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed text-base">
          At <span className="text-red-600 font-semibold">Coding Age</span>, we focus on hands-on training with cutting-edge technologies, enabling students to build impactful solutions like the <span className="text-red-600 font-semibold">Student Management System</span>.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Our Vision</h3>
        <p className="text-gray-700 leading-relaxed text-base">
          We aim to nurture skilled coders who create innovative solutions, solving real-world challenges across industries, including education.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">About Coding Age</h3>
        <p className="text-gray-700 leading-relaxed text-base">
          <span className="font-semibold text-red-600">Coding Age</span> specializes in coding education, providing students with industry-relevant skills and project-based learning experiences. Our curriculum prepares students to contribute effectively to modern tech-driven solutions.
        </p>
      </div>
    </div>
  </div>
</div>

  );
}

export default AboutUs;
