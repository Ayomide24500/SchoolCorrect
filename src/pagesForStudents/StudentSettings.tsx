import { FaPen } from "react-icons/fa";
import dummy from "../assets/dummy.jpg";
import StudentsPersonal from "./StudentsPersonal";
import StudentSchoolDetail from "./StudentSchoolDetail";
import { useState } from "react";
import LittleHeader from "../components/layout/LittleHeader";
const StudentSettings = () => {
  const [change, setChange] = useState(false);

  return (
    <div className="text-blue-950">
      <LittleHeader name={"My Profile Detail"} />
      <div className="w-full h-[150px] flex rounded-md justify-center items-center bg-blue-950 gap-4">
        <div className="h-[100%] w-[80%] relative flex ">
          <div className="w-[155px] col-span-3 h-[155px] rounded-full border-4 bg-blue-950 border-white absolute top-[70px] ">
            <img
              src={dummy}
              style={{ objectFit: "cover", borderRadius: "100%" }}
            />
            <div className="w-[40px] h-[40px] bg-black bottom-4 rounded-full cursor-pointer absolute flex justify-center items-center right-0">
              <FaPen style={{ color: "white" }} />
            </div>
          </div>
          <div className="w-[100%] h-[80%] flex justify-end items-end"></div>
        </div>
      </div>

      <div className="ml-[40px] grid w-[89%] text-[16px] md:w-[80%] grid-cols-2 sm:w-[80%] mb-20 mt-32 border rounded-md overflow-hidden">
        <div
          className={`font-medium flex justify-center items-center cursor-pointer text-[16px]  ${
            change ? "bg-blue-950 text-white p-4" : ""
          }`}
          onClick={() => {
            if (!document.startViewTransition) {
              document.startViewTransition(() => {
                setChange(true);
              });
            } else {
              document.startViewTransition(() => {
                setChange(true);
              });
            }
          }}
        >
          My personal details
        </div>
        <div
          className={`font-medium cursor-pointer text-[16px] flex justify-center items-center  ${
            change ? "" : "bg-blue-950 text-white p-4"
          }`}
          onClick={() => {
            if (!document.startViewTransition) {
              document.startViewTransition(() => {
                setChange(false);
              });
            } else {
              document.startViewTransition(() => {
                setChange(false);
              });
            }
          }}
        >
          My school details
        </div>
      </div>
      {change ? <StudentsPersonal change={change} /> : <StudentSchoolDetail />}
    </div>
  );
};

export default StudentSettings;
