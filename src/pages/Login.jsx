import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-center font-bold text-2xl py-5">Sign In</h1>
      <div className="flex flex-1 flex-col sm:flex-row justify-center gap-5 items-center py-6">
        <div>
          <img className="w-[500px] rounded-md" src="keys.jpg" alt="keys" />
        </div>
        <form className="flex flex-col flex-1 gap-6">
          <div className="w-full bg-white">
            <input
              name="email"
              type="text"
              className="p-3 rounded w-full outline-none"
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center justify-between  bg-white">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              className="p-3 rounded w-full outline-none"
              placeholder="Password"
            />
            {showPassword ? (
              <IoEye
                className="mx-4 cursor-pointer"
                onClick={() => {
                  setShowPassword(false);
                }}
              />
            ) : (
              <IoEyeOff
                className="mx-4 cursor-pointer"
                onClick={() => {
                  setShowPassword(true);
                }}
              />
            )}
          </div>

          <div className="text-sm flex justify-between pt-2">
            <p>
              Dont have an Account?{" "}
              <Link className="text-red-600" to={"/sign-up"}>
                Register
              </Link>
            </p>
            <p className="text-blue-500">Forgot Password?</p>
          </div>
          <button className="bg-blue-700 text-white py-2 rounded hover:bg-blue-800 active:bg-blue-950">
            SIGN IN
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
