import React from 'react';

const Home = () => {
  return (
    <div className="font-sans bg-gray-50 relative top-[15vh]">

      <section id="about" className="py-10 bg-white ">
        <div className="max-w-screen-xl mx-auto px-2">
          <h2 className="text-3xl font-semibold text-red-800">Welcome to Coding Age</h2>
          <p className="mt-4 text-gray-600">
            Learn coding in a supportive and dynamic environment. Whether you're a beginner or looking to enhance your skills, our coding courses will guide you to success. Join our community of tech enthusiasts and start your coding journey today!
          </p>
        </div>
      </section>

      <section id="features" className="py-10">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-red-800">Course Features</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-medium text-gray-800">Interactive Lessons</h3>
              <p className="mt-4 text-gray-600">Hands-on coding exercises to solidify your understanding.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-medium text-gray-800">Expert Instructors</h3>
              <p className="mt-4 text-gray-600">Learn from experienced professionals who are passionate about teaching.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-medium text-gray-800">Flexible Schedule</h3>
              <p className="mt-4 text-gray-600">Access courses at your own pace, anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="xl:flex items-center justify-center gap-12 flex-wrap">
        
          <div className="bg-white text-center p-14 rounded-xl shadow-2xl max-w-lg w-full sm:w-1/3 xl:mx-auto">
            <h1 className="text-6xl font-extrabold text-red-900 mb-6 leading-tight tracking-tight">
              Coding is the new literacy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              In a world that’s constantly evolving, mastering coding is no longer optional. It's the gateway to innovation, creativity, and future-proofing your career. Learn the most essential skill of the modern age.
            </p>
            <a
              href="#learn-more"
              className="inline-block bg-gray-800 text-white py-3 px-10 rounded-full text-lg font-semibold shadow-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>

          <div className="bg-white text-center p-14 rounded-xl shadow-2xl max-w-lg w-full sm:w-1/3 mx-auto">
            <h1 className="text-6xl font-extrabold text-red-900 mb-6 leading-tight tracking-tight">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Become a part of our vibrant community where learning and collaboration drive success.
            </p>
            <a
              href="#community"
              className="inline-block bg-gray-800 text-white py-3 px-10 rounded-full text-lg font-semibold shadow-md hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
