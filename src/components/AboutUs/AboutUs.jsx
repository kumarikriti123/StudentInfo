import React from 'react';

function AboutUs() {
  return (
    <div className="container flex justify-center items-center bg-gray-50 min-h-screen p-8 -mb-40">
      <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-6 text-red-700">About Us</h2>
        <p className="text-base text-gray-700 mb-6">
          Welcome to <span className="font-semibold text-red-600">Coding Age</span>, an institute dedicated to providing knowledge and training in coding. Our focus is on equipping students with the skills needed to excel in the ever-evolving tech industry. As part of their learning journey, our students have developed the <span className="font-semibold text-red-600">Student Management System</span>—a robust application built for educational institutions to manage student data effectively.
        </p>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed text-sm">
            At <span className="text-red-600 font-semibold">Coding Age</span>, our mission is to foster the next generation of coding professionals by offering hands-on training in cutting-edge technologies, empowering our students to build impactful solutions like the <span className="text-red-600 font-semibold">Student Management System</span>.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed text-sm">
            We aim to inspire and develop skilled coders who can contribute to real-world challenges by creating innovative and practical solutions for various industries, including education.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">About Coding Age</h3>
          <p className="text-gray-700 leading-relaxed text-sm">
            <span className="font-semibold text-red-600">Coding Age</span> is an institute that specializes in training individuals in the field of coding, offering a comprehensive curriculum that prepares students for real-world applications. Through projects like the <span className="font-semibold">Student Management System</span>, we provide our students with the opportunity to apply their learning and contribute to making education systems more efficient and effective.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
