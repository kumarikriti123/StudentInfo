import logo from '../../assets/codingAge.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [headerName, setHeaderName] = useState("HOME");
  const navigate = useNavigate();

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      navigate('/login');
    }
  };

  const handleMenuItemClick = (name) => {
    setHeaderName(name);
    if (name === "HOME") {
      navigate('/');
    } else if (name === "BATCHES") {
      navigate('/batch_list');
    } else if (name === "STUDENTS") {
      navigate('/students');
    } else if (name === "ABOUT") {
      navigate('/about');
    } else if (name === "CONTACT US") {
      navigate('/contact');
    }
  };

  return (
    <>
      <div className='flex mx-10 my-5 fixed z-10 bg-white w-full -mt-5 pt-10 pb-5 z-100'>
        <img src={logo} alt="" className="lg:w-10 lg:h-10 md:w-8 md:h-8" />
        <div className='font-Merriweather font-bold lg:text-2xl md:text-xl ml-2 mt-2 text-red-900'>CodingAge</div>
        <div className='flex md:h-10 xl:h-11 xl:mx-40 md:mx-5 lg:mx-16 bg-gradient-to-r from-red-800 to-red-600 xl:py-2 xl:px-8 lg:py-1 lg:px-4 md:px-2 rounded-2xl font-bold font-Rubik text-white '>
          <button className={`${headerName === "HOME" ? 'bg-white text-black ' : ''}mr-3 xl:px-4 lg:px-2 py-1 hover:bg-white rounded-2xl box hover:text-black`} onClick={() => handleMenuItemClick("HOME")}>HOME</button>
          <button className={`${headerName === "BATCHES" ? 'bg-white text-black ' : ''}mr-3 xl:px-4 lg:px-2 py-1 hover:bg-white rounded-2xl box hover:text-black`} onClick={() => handleMenuItemClick("BATCHES")}>BATCHES</button>
          <button className={`${headerName === "STUDENTS" ? 'bg-white text-black ' : ''}mr-3 xl:px-4 lg:px-2 py-1 hover:bg-white rounded-2xl box hover:text-black`} onClick={() => handleMenuItemClick("STUDENTS")}>STUDENTS</button>
          <button className={`${headerName === "ABOUT" ? 'bg-white text-black ' : ''}mr-3 xl:px-4 lg:px-2 py-1 hover:bg-white rounded-2xl box hover:text-black`} onClick={() => handleMenuItemClick("ABOUT")}>ABOUT</button>
          <button className={`${headerName === "CONTACT US" ? 'bg-white text-black ' : ''}mr-3 xl:px-4 lg:px-2 py-1 hover:bg-white rounded-2xl box hover:text-black`} onClick={() => handleMenuItemClick("CONTACT US")}>CONTACT US</button>
        </div>
        <button
          onClick={handleLoginLogout}
          className={`py-2 px-8 relative -right-40 rounded-2xl font-bold font-Rubik text-white ${isLoggedIn ? 'bg-gray-800' : 'bg-gray-800'}`}>
          {isLoggedIn ? 'LOG OUT' : 'LOG IN'}
        </button>
      </div>
    </>
  );
}

export default Header;