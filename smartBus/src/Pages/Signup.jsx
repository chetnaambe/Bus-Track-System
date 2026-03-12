
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {CheckLine} from "lucide-react"

const Signup = () => {

  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const [allinputs, setallinputs] = useState([]);
  const [role, setRole] = useState("");
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();

    const oldData = [...allinputs];
    oldData.push({
      role,
      userName,
      userEmail,
      userPhone,
      password,
      confirmPassword,
    });

    setallinputs(oldData);

   
    setSubmitted(true);

   
    setRole("");
    setuserName("");
    setuserEmail("");
    setuserPhone("");
    setpassword("");
    setconfirmPassword("");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#F8FAFB]">

      <div className="w-[400px] h-[560px] bg-white rounded-xl p-6 flex flex-col items-center shadow">

        {submitted ? (

          <div className="flex w-[300px] flex-col items-center text-center gap-4 mt-10">

            <div className="text-green-500 text-4xl"><CheckLine  size={40}/></div>

            <h2 className="text-xl font-semibold">
              Registration Submitted!
            </h2>

            <p className="text-gray-500 text-sm">
              Your account has been created and is pending approval from an administrator. You'all receive an email notification once your account is activated.
            </p>

            <button
              onClick={() => navigate("/login")}
              className="w-full bg-[#3179e4] text-white py-2 rounded-md mt-3"
            >
              Go to Login
            </button>

            <button
              onClick={() => navigate("/")}
              className="text-gray-500 text-sm"
            >
              Back to Home
            </button>

          </div>

        ) : (

          <>
            <h1 className="font-semibold text-2xl">Create Account</h1>

            <p className="text-center opacity-45 text-[15px]">
              Sign up as a Student or Driver (Admin approval required)
            </p>

            <form
              onSubmit={submitHandle}
              className="w-full flex flex-col gap-3 mt-4"
            >

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border border-[#918f8f3b] bg-[#f3f3f8f5] focus:outline-[#3179E4] p-2 rounded-[10px]"
                required
              >
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="driver">Driver</option>
                <option value="admin">Admin</option>
              </select>

              <input
                type="text"
                placeholder="Full Name"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                className="border border-[#918f8f3b] bg-[#f3f3f8f5] focus:outline-[#3179E4] p-2 rounded-[10px]"
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setuserEmail(e.target.value)}
                className="border border-[#918f8f3b] bg-[#f3f3f8f5] focus:outline-[#3179E4] p-2 rounded-[10px]"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={userPhone}
                onChange={(e) => setuserPhone(e.target.value)}
                className="border border-[#918f8f3b] bg-[#f3f3f8f5] focus:outline-[#3179E4] p-2 rounded-[10px]"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="border border-[#918f8f3b] bg-[#f3f3f8f5] focus:outline-[#3179E4] p-2 rounded-[10px]"
                required
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
                className="border border-[#918f8f3b] bg-[#f3f3f8f5] focus:outline-[#3179E4] p-2 rounded-[10px]"
                required
              />

              <button
                type="submit"
                className="bg-[#3179e4] text-white py-2 rounded-md mt-2 active:scale-95"
              >
                Sign Up
              </button>

              <div className="flex justify-center gap-2 mt-2">
                <p className="opacity-50 text-[14px]">
                  Already have an account?
                </p>

                <p
                  onClick={() => navigate("/login")}
                  className="text-[14px] text-[#2B5FD2] cursor-pointer"
                >
                  Sign in
                </p>
              </div>

            </form>
          </>
        )}

      </div>

    </div>
  );
};

export default Signup;

