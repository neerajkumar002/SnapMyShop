import { Lock, Mail, User2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../store/slice/Auth-slice";
import { toast, ToastContainer } from "react-toastify";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { fullName: "", email: "", password: "" },
  });

  const onSubmit = async (data) => {
    dispatch(registerUser(data)).then((data) => {
      if (data?.payload?.success) {
        reset();
        toast.success(data?.payload?.message);
        navigate("/auth/login");
      }
    });
  };

  return (
    <div className="py-5">
      <h1 className="text-center font-semibold text-2xl">Create Account</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-3 flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="flex items-center gap-2 text-gray-500">
            <User2 /> Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName", { required: true })}
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
            {...register("email", { required: true })}
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
            {...register("password", { required: true })}
            className="px-2 py-2 border  rounded-md border-gray-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="cursor-pointer bg-green-500 text-white py-2 rounded-md font-semibold">
            Sign Up
          </button>
        </div>
      </form>
      <p className="px-2 py-5 text-gray-400">
        Already have a account?{" "}
        <Link to="/auth/login" className="text-red-400 ">
          Login
        </Link>
      </p>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Register;
