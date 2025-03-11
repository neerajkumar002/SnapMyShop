import { Lock, Mail, User2 } from "lucide-react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="py-5">
      <h1 className="text-center font-semibold text-2xl">Create Account</h1>
      <form className="px-3 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="flex items-center gap-2 text-gray-500">
            <User2 /> Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="px-2 py-2 border  rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="flex items-center gap-2 text-gray-500">
            <Mail /> Email
          </label>
          <input
            type="text"
            placeholder="Email"
            className="px-2 py-2 border  rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="flex items-center gap-2 text-gray-500">
            <Lock /> Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="px-2 py-2 border  rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-green-500 text-white py-2 rounded-md font-semibold">
            {" "}
            Sign Up
          </button>
        </div>
      </form>
      <p className="px-2 py-5 text-gray-400">
        Already have a account?{" "}
        <Link to="/auth/login" className="text-red-400">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
