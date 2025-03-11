import { Lock, Mail, User2 } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-5">
      <h1 className="text-center font-semibold text-2xl">Welcome</h1>
      <form className="px-3 flex flex-col gap-5">
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
            Login
          </button>
        </div>
      </form>
      <p className="px-2 py-5 text-gray-400">
        Don't have account?{" "}
        <Link to="/auth/register" className="text-red-400">Create a new account</Link>
      </p>
    </div>
  );
};

export default Login;
