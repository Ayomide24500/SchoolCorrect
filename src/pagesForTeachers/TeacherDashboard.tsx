import { MdPlaylistAddCheck } from "react-icons/md";

import Personal from "./Chart/Personal";
import Calendar from "./Chart/Calendar";
import StudentPerformance from "./Chart/PerformingStudent";
import ClassModelAssignment from "./pages/quiz/AddAssignment";
import { useTeacherInfo } from "./hooks/useTeacher";
import StudentOfTheWeek from "./pages/quiz/StudentWeek";
import { useReadMyClassInfoData } from "../pagesForStudents/hooks/useStudentHook";

import pix from "./../assets/pix.jpg";
import MakeComplains from "./pages/quiz/MarkCOmplains";
const TeacherDashboard = () => {
  const { teacherInfo } = useTeacherInfo();
  document.title = `${teacherInfo?.staffName}'s Record and Stats`;

  const readData = Array.from({ length: 2 });
  const { state } = useReadMyClassInfoData(teacherInfo?.classesAssigned);

  return (
    <div className="text-blue-950 flex flex-col h-full">
      <div className=" grid grid-cols-1 lg:grid-cols-5 gap-3 mt-5">
        <div className="min-w-[250px] h-full flex flex-col rounded-md border p-4 col-span-3">
          <div className="mb-4 text-medium capitalize font-semibold flex gap-4">
            <div> My Class: </div>
            <div className="font-bold">{teacherInfo?.classesAssigned}</div>
          </div>
          <Personal />

          <div className="flex-1 mt-10" />
          <div className="text-[13px] font-medium mt-4">
            <div className="flex items-center gap-4">
              <div className="border-r pr-4 "></div>
            </div>
          </div>
        </div>

        <div className="min-w-[300px] overflow-hidden min-h-[300px] flex flex-col rounded-md border p-4 col-span-2">
          <div>
            <div>
              <div className=" flex gap-2  mb-10">
                <div className="flex gap-6 font-medium leading-tight cursor-pointer text-[12px] bg-blue-950 text-white px-6 py-2 rounded-sm  text-center">
                  <StudentOfTheWeek />
                </div>
                <div className="flex gap-6 font-medium cursor-pointer text-[12px] bg-orange-600 leading-tight text-white px-6 py-2 rounded-sm  text-center">
                  <MakeComplains />
                </div>
              </div>

              <div className="font-medium text-[12px] text-blue-950 px-6 py-2 rounded-sm  text-center w-full flex flex-col items-center overflow-hidden">
                <p className="font-bold text-left pb-3 text-[15px] ">
                  Student of the Week for class {teacherInfo?.classesAssigned}
                </p>

                <div className="w-[260px]  rounded-t-md min-h-[320px] border">
                  <img
                    className="w-full h-[300px] object-cover rounded-t-md"
                    src={
                      state?.weekStudent?.student?.avatar
                        ? state?.weekStudent?.student?.avatar
                        : pix
                    }
                  />
                  <p className="flex px-2 justify-start my-2 text-[15px]">
                    Name:{" "}
                    <span className="font-bold ml-2">
                      {state?.weekStudent?.student?.studentFirstName}{" "}
                      {state?.weekStudent?.student?.studentLastName}
                    </span>
                  </p>
                  <p className="text-left px-2 pb-2">
                    {state?.weekStudent?.remark}
                  </p>
                </div>
              </div>
            </div>
            {readData?.length > 0 ? (
              <div className="flex justify-center flex-col gap-3 w-full items-center ">
                {/* from complain */}
                <div className="w-full">
                  <p className="font-bold text-left pb-5 text-[15px] ">
                    Top 5 Performancing Students
                  </p>
                </div>

                <div className=" overflow-hidden">
                  <StudentPerformance />
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full items-center">
                <MdPlaylistAddCheck size={30} />
                <p className="font-medium text-[13px]">
                  No complains Record yet:{" "}
                </p>
              </div>
            )}
          </div>

          <div className="border-b my-5" />

          <div className="flex flex-col items-center w-full  justify-center">
            <div className=" flex justify-center gap-3 w-full items-center">
              <Calendar />
            </div>
          </div>
        </div>

        {/* <div className="border rounded-md flex gap-2 w-full p-2 col-span-1 lg:col-span-3  ">
          Appointment

          <div className=" rounded-md w-full  p-4">
            <div className="mb-4 text-medium capitalize">
              Top 5 Most Active studio
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TeacherDashboard;
