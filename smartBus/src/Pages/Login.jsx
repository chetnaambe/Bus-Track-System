
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setroles] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();

    console.log({
      email,
      password
    });

   
    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#F8FAFB]">

      <div className="w-[400px] h-[420px] bg-white rounded-xl p-6 flex flex-col items-center gap-2 shadow">

        <h1 className="font-semibold text-2xl">
          Welcome Back
        </h1>

        <p className="text-center opacity-45 text-[15px]">
          Sign in to access your dashboard
        </p>

        <form
          onSubmit={submitHandle}
          className="w-full flex flex-col gap-3 mt-6"
        >

              <select
                value={roles}
                onChange={(e) => setroles(e.target.value)}
                className="border border-[#918f8f3b] bg-[#f3f3f8f5] focus:outline-[#3179E4] p-2 rounded-[10px]"
                required
              >
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="driver">Driver</option>
                <option value="admin">Admin</option>
              </select>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border border-[#918f8f3b] bg-[#f3f3f8f5] focus:outline-[#3179E4] p-2 rounded-[10px]"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border border-[#918f8f3b] bg-[#f3f3f8f5] focus:outline-[#3179E4] p-2 rounded-[10px]"
            required
          />

          <button
            type="submit"
            className="bg-[#3179e4] text-white py-2 rounded-md mt-2 active:scale-95"
          >
            Login
          </button>

          <div className="flex justify-center gap-2 mt-2">

            <p className="opacity-50 text-[14px]">
              Don't have an account?
            </p>

            <p
              onClick={()=>navigate("/signup")}
              className="text-[14px] text-[#2B5FD2] cursor-pointer"
            >
              Sign up
            </p>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Login;

