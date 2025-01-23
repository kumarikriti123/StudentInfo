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