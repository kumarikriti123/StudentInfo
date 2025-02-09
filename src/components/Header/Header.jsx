import logo from "../../assets/codingAge.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [headerName, setHeaderName] = useState("HOME");
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      navigate("/login");
    }
  };

  const handleMenuItemClick = (name) => {
    setHeaderName(name);
    setIsSidebarOpen(false);
    switch (name) {
      case "HOME":
        navigate("/");
        break;
      case "BATCHES":
        navigate("/batch");
        break;
      case "STUDENTS":
        navigate("/students");
        break;
      case "ABOUT":
        navigate("/about");
        break;
      case "DASHBOARD":
        navigate("/dashboard");
        break;
      case "CONTACT":
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-5 fixed top-0 left-0 z-50 bg-white w-full pt-5 pb-5 shadow-md">
        <div className="flex items-center">
          <img src={logo} alt="CodingAge Logo" className="w-10 h-10" />
          <div className="font-Merriweather font-bold text-xl ml-2 text-red-900 block md:hidden lg:block">
            CodingAge
          </div>
        </div>

        <div className="lg:hidden md:hidden sm:block">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-red-900 focus:outline-none"
          >
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden md:flex md:h-10 xl:h-11 xl:mx-40 md:mx-5 lg:mx-16 bg-gradient-to-r from-red-800 to-red-600 xl:py-2 xl:px-8 lg:py-1 lg:px-4 md:px-2 rounded-2xl font-bold font-Rubik text-white">
          {["HOME", "BATCHES", "STUDENTS", "DASHBOARD", "ABOUT", "CONTACT"].map(
            (name) => (
              <button
                key={name}
                className={`${
                  headerName === name ? "bg-white text-black " : ""
                }mr-3 xl:px-4 lg:px-2 py-1 hover:bg-white rounded-2xl hover:text-black`}
                onClick={() => handleMenuItemClick(name)}
              >
                {name}
              </button>
            )
          )}
        </div>

        <button
          onClick={handleLoginLogout}
          className="py-2 px-4 rounded-xl font-bold font-Rubik text-white bg-gray-800 hidden md:block"
        >
          {isLoggedIn ? "LOG OUT" : "LOG IN"}
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed top-20 left-0 w-64 h-full bg-white z-20 shadow-lg md:hidden sm:w-80">
          <div className="flex flex-col p-5">
            {[
              "HOME",
              "BATCHES",
              "STUDENTS",
              "DASHBOARD",
              "ABOUT",
              "CONTACT",
            ].map((name) => (
              <button
                key={name}
                className={`${
                  headerName === name ? "bg-red-600 text-white " : ""
                }mb-3 py-2 px-4 rounded-2xl font-bold font-Rubik text-red-900 hover:bg-red-600 hover:text-white`}
                onClick={() => handleMenuItemClick(name)}
              >
                {name}
              </button>
            ))}
            <button
              onClick={handleLoginLogout}
              className="py-2 px-4 rounded-2xl font-bold font-Rubik text-white bg-gray-800 mt-3"
            >
              {isLoggedIn ? "LOG OUT" : "LOG IN"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
