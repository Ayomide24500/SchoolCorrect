import moment from "moment";
import pix from "../assets/Child2.jpg";
import LittleHeader from "../components/layout/LittleHeader";
import { useStudentInfo } from "./hooks/useStudentHook";
import { Link } from "react-router-dom";

const StudentProfile = () => {
  const { studentInfo } = useStudentInfo();

  return (
    <div>
      <LittleHeader name={`My Profile`} />
      <div className="grid lg:grid-cols-1 grid-cols-1 w-full h-full gap-6">
        <div className="col-span-1 rounded-lg border-slate-300 border pb-4 min-h-[100px] flex  justify-between">
          <div className="flex">
            <div className="w-[100px] rounded-[50%] bg-slate-500 h-[100px] m-4">
              <img
                src={pix}
                alt="My picture"
                className=" object-cover rounded-[50%] w-full h-full"
              />
            </div>
            <div className="">
              <h1 className="text-[20px] font-semibold pt-5">
                {studentInfo?.studentFirstName} {studentInfo?.studentLastName}
              </h1>
              <p className="pt-2 text-slate-500">
                {studentInfo?.classAssigned}
              </p>
              <p className="pt-2 text-slate-500">Lagos, Nigeria</p>
            </div>
          </div>
          <Link
            className="w-[100px] h-[45px] flex justify-center text-[20px] font-semibold text-blue-950 cursor-pointer items-end underline"
            to={"/your-settings"}
          >
            Edit
          </Link>
        </div>
        <div className="col-span-1 rounded-lg border-slate-300 border pb-4 min-h-[100px] ">
          <div className=" flex  justify-between pb-4">
            <p className="m-4 text-blue-950 font-semibold text-[20px]">
              Personal Information
            </p>
            <Link
              className="w-[80px] h-[40px] border-slate-300 border flex justify-center text-[20px] font-semibold text-blue-950 cursor-pointer items-center mr-8 mt-2"
              to={"/your-settings"}
            >
              Edit
            </Link>
          </div>
          <div className="py-4 px-4 min-h-[100px] flex p-4 -mt-10 max-lg:flex-col">
            <div className="p-3 ">
              <h1 className=" font-semibold pt-2  text-slate-400">
                First Name
              </h1>
              <p className="pt-2">{studentInfo?.studentFirstName}</p>
              <h1 className="font-semibold pt-5 text-slate-400">
                E-mail Address
              </h1>
              <p className="pt-2">danieleromonsele01@gmail.com</p>
              <h1 className=" font-semibold pt-5 text-slate-400">Bio</h1>
              <p className="pt-2">Student</p>
            </div>
            <div className="p-3 ">
              <h1 className=" font-semibold text-slate-400">Last Name</h1>
              <p className="pt-2">{studentInfo?.studentLastName}</p>
              <h1 className=" font-semibold pt-5 text-slate-400">Phone</h1>
              <p className="pt-2">08033776651</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 rounded-lg border-slate-300 border pb-4 min-h-[100px]">
          <p className="m-4 text-blue-950 font-semibold text-[20px]">Address</p>
          <div className="py-4 px-4 min-h-[100px] flex gap-5 p-4 -mt-10 ">
            <div className="p-4">
              <h1 className=" font-semibold pt-5  text-slate-400">Country</h1>
              <p className="pt-2">Nigeria</p>
              <h1 className=" font-semibold pt-5 text-slate-400">
                Local Government
              </h1>
              <p className="pt-2">Ajeromi Ifelodun</p>
            </div>
            <div className=" p-4 ">
              <h1 className=" font-semibold pt-5 text-slate-400">City/State</h1>
              <p className="pt-2">Lagos</p>
              <h1 className=" font-semibold pt-5 text-slate-400">
                House Address
              </h1>
              <p className="pt-2">{studentInfo?.studentAddress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
