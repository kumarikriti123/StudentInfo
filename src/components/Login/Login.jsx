import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
      navigate('/');
    }, 1000);
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 pt-24 ">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm z-10"></div>

      <div className="bg-white p-8 rounded-lg sm:w-96 z-20 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 px-2 rounded-full"
        >
          x
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Login to Coding Age
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-red-800 to-red-600  hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
