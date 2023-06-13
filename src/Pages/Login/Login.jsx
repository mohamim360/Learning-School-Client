import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { AuthContext } from '../../providers/Authprovider';

const Login = () => {
  const { register, handleSubmit, watch } = useForm();
  const password = watch('password');
  const email = watch('email');
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
   const {signIn} = useContext(AuthContext)
  const onSubmit = (data) => {
    console.log(data); 
    console.log(email); 
    console.log(password);
    signIn(email,password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              {...register('password', { required: true })}
            />
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        <div className="mb-6">
          <a className="text-blue-500 hover:underline" href="/signup">
            Register
          </a>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Login;
