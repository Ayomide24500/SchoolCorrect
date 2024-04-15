import { useState } from "react";
import Button from "../../../components/reUse/Button";
import Input from "../../../components/reUse/Input";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import toast, { Toaster } from "react-hot-toast";
import { displayUserStatus, loginState } from "../../../global/reduxState";
import { loginStudent } from "../../../pagesForStudents/api/studentAPI";
import logo from "../../../assets/mainLogo.png";

const StudentLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    // e.preventDefault();
    setLoading(true);
    const val = { email: state, password };

    loginStudent(val)
      .then((res) => {
        if (res.status === 201) {
          console.log(res);
          dispatch(loginState(res));
          dispatch(displayUserStatus(res.user));
          toast.success("login successful");
          setLoading(false);

          setTimeout(() => {
            {
              !loading && navigate("/dashboard");
              window.location.reload();
            }
          }, 2000);
        } else {
          setLoading(false);
          toast.error(`${res?.response?.data?.message}`);
        }
      })
      .then(() => {});
  };

  return (
    <div className=" w-full min-h-[94vh] flex flex-col justify-center items-center ">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="mb-10 text-center flex items-center w-full flex-col">
        <Link to="/">
          <img className="mb-5 w-56 h-28 object-contain" src={logo} />{" "}
        </Link>
        <div className="text-[26px] font-bold mb-3 text-blue-900">
          Welcome Back
        </div>
        <div className="text-[14px] -mt-3 w-[70%] leading-tight">
          {" "}
          Sign in as Teacher, Student or Parent to continue your Experience.
        </div>
      </div>

      <div
        className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4"
        // onSubmit={handleSubmit}
      >
        <Input
          placeholder="Email"
          className="w-[97%]"
          type="email"
          required
          value={state}
          onChange={(e: any) => {
            setState(e.target.value);
          }}
        />
        <Input
          placeholder="Your Password"
          className="w-[97%]"
          show
          //   errorText="Password has to be passed"
          errorText={password && "Ensure your Password correct"}
          required
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />

        <div>
          <Button
            name={loading ? "Loading..." : "Login"}
            className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300"
            type="submit"
            onClick={handleSubmit}
            icon={loading && <ClipLoader color="white" size={18} />}
          />

          <div className="text-[12px] ml-2 font-bold cursor-pointer">
            {/* Teacher and Student, Switch Login */}
          </div>
        </div>
        <div className="mt-10 mb-0 mx-2 text-[13px] font-medium flex  justify-between ">
          <div>Sign in with social network</div>
        </div>
        <div className="flex flex-col">
          <Button
            name="Continue with Google (coming soon)"
            className="h-14 bg-red-900 hover:bg-red-600 opacity-50 hover:text-white  transition-all duration-300 font-medium text-[#ababab] leading-tight w-[97%]text-center text-[12px] sm:text-base "
            icon={<FaGoogle />}
          />
        </div>
      </div>
      <div className="mt-5 text-[13px]">
        Don’t have an account yet?{" "}
        <span className="font-bold text-blue-900">
          <Link to="/auth">Register here</Link>
        </span>
      </div>
    </div>
  );
};

export default StudentLogin;
