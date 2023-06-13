
import { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Email:', email);
    console.log('Password:', password);
    
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <form className="w-72" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="relative">
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <RiEyeLine className="h-5 w-5" />
            ) : (
              <RiEyeOffLine className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="mt-4">
          <Link to="/registration" className="text-blue-500">
            Register
          </Link>
        </div>
        <div className="mt-4">
          {/* Include your social login buttons here */}
        </div>
        <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
