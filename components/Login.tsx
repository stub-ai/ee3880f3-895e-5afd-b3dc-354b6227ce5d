import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/3">
        <h2 className="mb-5 text-center text-2xl">Login</h2>
        <input className="mb-4 w-full p-2" type="text" placeholder="Username" />
        <input className="mb-4 w-full p-2" type="password" placeholder="Password" />
        <button className="w-full p-2 bg-blue-500 text-white" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;