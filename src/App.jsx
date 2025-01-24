import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import BatchList from './components/Batches/BatchList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import ContactUsPage from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import BatchDetails from './components/Batches/BatchDetails';
import { Question } from './components/Question/Question';
import TopicList from './components/Question/SubjectDetails';
import Subjects from './components/Question/Subjects';
import SubjectDetails from './components/Question/SubjectDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/batch_list" element={<BatchList />} />
          <Route path="/batchdetails" element={<BatchDetails />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/topics" element={<SubjectDetails />} />
          <Route path="/students" element={<div>Students Page</div>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        <Footer isLoggedIn={isLoggedIn} />
      </BrowserRouter>
    </>
  );
}

export default App;
