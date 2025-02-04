import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BatchList from './components/Batches/BatchList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import BatchDetails from './components/Batches/BatchDetails';
import Subjects from './components/Question/Subjects';
import Attendance from './components/Attendance/Attendance';
import TopicList from './components/Result/TopicList';
import ContactUsPage from './components/ContactUs/ContactUs'
import StudentList from './components/Students/StudentList';
import StudentProfile from './components/Students/StudentProfile';
import DailySessionReport from './components/DailySessionReport';
import Test from './components/Test';
import { Student } from './components/ab/batchDetail/Student';
import { Dashboard } from './components/ab/dashboard/Dashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = sessionStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    sessionStorage.setItem('isLoggedIn', status);
  };

  const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    return isLoggedIn ? (
      children
    ) : (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center bg-gray-50">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <p className="text-xl font-semibold text-gray-800 mb-4">Access Restricted</p>
          <p className="text-md text-gray-600 mb-6">Please log in to access this page.</p>
          <a
            href="/login"
            className="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-900"
            state={{ from: location }}
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={handleLogin} />
        <Routes className="min-h-[80vh]">
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={handleLogin} />} />
          <Route path="/batch"
            element={
              <ProtectedRoute>
                <BatchList />
              </ProtectedRoute>
            }/>
          <Route path="/batchdetails"
            element={
              <ProtectedRoute>
                <BatchDetails />
              </ProtectedRoute>
            }/>
          <Route path="/batch/question"
            element={
              <ProtectedRoute>
                <Subjects />
              </ProtectedRoute>
            }/>
          <Route path="/students"
            element={
              <ProtectedRoute>
                <StudentList />
              </ProtectedRoute>
            }/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/marks" element={<TopicList />} />
          <Route path="/profile/:name" element={<StudentProfile />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/dailySessionReport' element={<DailySessionReport />} />
          <Route path='/test' element={<Test />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/batchDetail/:batchId' element={<Student />} />
          {/* <Route path='/batchDetail/student' element={<Student />} /> */}
        </Routes>
        <Footer isLoggedIn={isLoggedIn} />
      </BrowserRouter>
    </>
  );
}

export default App;
