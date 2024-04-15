document.title = "class room Detail's Page";
import LittleHeader from "../../../components/layout/LittleHeader";
import Button from "../../../components/reUse/Button";
import { FaCheckDouble, FaStar } from "react-icons/fa6";
import pix from "../../../assets/pix.jpg";
import { MdCheck, MdClose, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { displaySession } from "../../../global/reduxState";
import { FC, useState } from "react";
import Input from "../../../components/reUse/Input";
import { useParams } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import {
  useClassAttendance,
  useClassSubjects,
  useSchoolClassRMDetail,
  useSchoolCookie,
  useSchoolTeacher,
} from "../../hook/useSchoolAuth";
import {
  createSchoolSubject,
  updateClassroomTeacher,
} from "../../api/schoolAPIs";
import { useTeacherDetail } from "../../../pagesForTeachers/hooks/useTeacher";
import ClassModel from "./ClassModel";
import ViewClassStudent from "./ViewClassStudent";
import { mutate } from "swr";
import TimeTableScreen from "../../../pagesForTeachers/pages/class/TimeTableScreen";

interface iProps {
  props?: string;
}

const ClassSubjectScreen: FC = () => {
  // useClassAttendance;
  const { classID } = useParams();
  const { readSubject } = useClassSubjects(classID!);

  return (
    <div>
      {readSubject?.length > 0 ? (
        <div className="mt-1 w-full gap-2 grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3">
          {readSubject?.map((props: any) => (
            <div
              key={props._id}
              className="bg-white border flex flex-col rounded-2xl pb-2 min-h-[200px] px-4 pt-4"
            >
              <div className="mt-3 flex justify-between items-center font-bold">
                <p>{props?.subjectTitle}</p>
                <div className="w-8 h-8 transition-all duration-300 rounded-full hover:bg-slate-50 cursor-pointer flex justify-center items-center">
                  <MdDelete className="hover:text-blue-900" />
                </div>
              </div>
              <div className="flex">
                <p className="text-[12px] bg-slate-100 rounded-sm py-2 pl-1 shadow-sm pr-4 mb-5">
                  compulsory
                </p>
              </div>
              <div className="flex-1" />
              <p className="text-[13px] font-medium">
                Subject Teacher Name: <span></span>
              </p>
              <div className="flex mb-4 gap-2 flex-wrap">
                <div className="text-blue-950  rounded-mlg mt-1 px-0 border-t font-medium py-2 text-[17px] ">
                  {props?.subjectTeacherName}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center justify-center px-4 py-1 mt-3">
            <FaCheckDouble size={13} />
            <p className="mt-3 text-[12px] font-medium">No Subject added yet</p>
          </div>
        </div>
      )}
    </div>
  );
};

const StaffDetail: FC<iProps> = ({ props }) => {
  const { teacherDetail } = useTeacherDetail(props!);

  return (
    <div className="flex gap-2 mt-1 items-start  ">
      <img
        className="w-10 h-10 object-cover rounded-full"
        src={teacherDetail?.avatar ? teacherDetail?.avatar : pix}
      />
      <p>
        <p className="m-0 leading-tight text-[14px] font-bold">
          {teacherDetail?.staffName
            ? teacherDetail?.staffName
            : "Hasn't been assigned"}
        </p>
        <p className="text-[12px] mt-2 flex items-center gap-1">
          <span className="font-bold text-[15px]">
            {teacherDetail?.staffRating}
          </span>{" "}
          <FaStar />
        </p>
      </p>
    </div>
  );
};

const ClassDetailScreen = () => {
  const { classID } = useParams();
  const { dataID } = useSchoolCookie();
  const { classroom } = useSchoolClassRMDetail(classID!);
  const dispatch = useDispatch();
  const [subject, setSubject] = useState<string>("");

  const { schoolTeacher } = useSchoolTeacher();

  const [teacher, setTeacher] = useState<string>("");

  const handleToggleMenuFalse = () => {
    if (!document.startViewTransition) {
      dispatch(displaySession(false));
    } else {
      document.startViewTransition(() => {
        dispatch(displaySession(false));
      });
    }
  };

  const addClassSubject = () => {
    createSchoolSubject(dataID!, {
      subjectTeacherName: teacher,
      subjectTitle: subject,
      designated: classroom?.className,
    }).then((res) => {
      if (res.status === 201) {
        mutate(`api/view-class-info/${classID}`);
        toast.success("class teacher updated");
        handleToggleMenuFalse();
      } else {
        toast.error(`${res?.response?.data?.messgae}`);
        handleToggleMenuFalse();
      }
    });
  };

  const updateTeacher = () => {
    updateClassroomTeacher(dataID!, classID!, {
      classTeacherName: teacher,
    }).then((res) => {
      if (res.status === 201) {
        mutate(`api/view-classrooms/${classID}`);

        toast.success("class teacher updated");
        handleToggleMenuFalse();
      } else {
        toast.error(`${res?.response?.data?.messgae}`);
        handleToggleMenuFalse();
      }
    });
  };

  const { mainAttendance } = useClassAttendance(classID!);

  return (
    <div className="text-blue-950">
      <LittleHeader name="Class room Details" back />
      <Toaster position="top-center" reverseOrder={true} />
      <div>Class: {classroom?.className}</div>
      <div className="w-full text-blue-950 h-[90px] rounded-lg border flex justify-between overflow-hidden ">
        <div className="bg-blue-950 text-white w-[160px] md:w-[300px] px-4 py-2 rounded-lg ">
          <div>Total Number of Students</div>
          <div className="text-[35px] font-medium">
            {classroom?.students?.length}{" "}
            <span className="text-[20px]">Students</span>
          </div>
        </div>
        <div className=" px-4 py-1 rounded-lg text-center flex items-end flex-col">
          <div className="flex-1" />
          <div className="mr-0 ">Next Recommended action</div>
          <p className="font-medium"></p>
        </div>
      </div>
      <div className="my-6 border-t" />
      <div className="mt-6 w-full min-h-[80px] pb-4 bg-slate-50 rounded-lg border pt-2 px-4 ">
        <div className=" px-3  opacity-100 rounded-md bg-orange-400 text-white mb-2 py-2 flex justify-between items-center ">
          <div className="flex gap-2 font-normal">
            <p className="text-[12px]">
              <p className="font-normal">First Term</p>
              <p className="font-bold">
                ₦{classroom?.class1stFee?.toLocaleString()}
              </p>
            </p>
            <p className="text-[12px]">
              <p className="font-normal">Second Term</p>
              <p className="font-bold">
                ₦{classroom?.class2ndFee?.toLocaleString()}
              </p>
            </p>
            <p className="text-[12px]">
              <p className="font-normal">Third Term</p>
              <p className="font-bold">
                ₦{classroom?.class3rdFee?.toLocaleString()}
              </p>
            </p>
          </div>
          {/* <Button name="" className="text-blue-950 bg-white" /> */}
          <button className="btn text-blue-950 bg-white hover:bg-blue-900 transition-all duration-300 px-8 uppercase ">
            update Class Fee
          </button>
        </div>
        <p>Manage Class Teacher: </p>
        <p className="text-[13px] flex items-center font-bold">
          Class teacher is responsible for day to day activities of the class{" "}
          <span className="font-bold flex items-center gap-1"></span>
        </p>
        {/* + Assign class Teacher{ */}
        <div className="mt-5 text-[13px] font-medium">
          <div className="mt-5 text-[13px] font-medium">
            <label
              htmlFor="assign_teacher"
              className=" my-3 text-blue-500 transition-all duration-300 hover:text-blue-600 cursor-pointer "
            >
              + Assign class Teacher
            </label>
            <div className="mt-3" />
            {/* Put this part before </body> tag */}
            <input
              type="checkbox"
              id="assign_teacher"
              className="modal-toggle"
            />
            <div className="modal rounded-md" role="dialog">
              <div className="modal-box  rounded-md bg-white">
                <p className="flex items-center justify-between my-4 ">
                  <p className="font-bold">Assigning Teacher to this class</p>

                  <label
                    htmlFor="assign_teacher"
                    className="hover:bg-blue-50 transition-all duration-300  cursor-pointer rounded-full flex items-center justify-center w-6 h-6 font-bold "
                  >
                    <MdClose />
                  </label>
                </p>
                <hr />

                <p className="mt-2 leading-tight text-[13px] font-medium">
                  Please note that this teacher you're about to assign to this
                  class will exhibit all feature, roles and previlage to
                  supervise this class.
                  <br />
                  <br />
                  <div className="flex gap-2  items-center">
                    <p> Teacher: {teacher}</p>
                    {teacher && (
                      <div className="flex items-center font-bold">
                        <span>selected</span>
                        <MdCheck className="text-green-500 text-[25px] mb-1 " />
                      </div>
                    )}
                  </div>
                </p>

                <div className="mt-10 w-full gap-2 flex flex-col items-center">
                  <div className="w-full flex flex-col">
                    <label className="font-medium text-[12px]">
                      Subject Teacher <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="select border border-slate-200 text-[12px] py-0 px-2 w-full max-w-xs mb-3 bg-white"
                      value={teacher}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setTeacher(e.target.value);
                      }}
                    >
                      <option disabled defaultValue={"Select a Teacher"}>
                        Select a Teacher
                      </option>
                      {schoolTeacher?.staff?.map((props: any, i: number) => (
                        <option key={i} value={props?.staffName}>
                          {props?.staffName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="w-full flex justify-end transition-all duration-300">
                  {teacher !== "" ? (
                    <label
                      htmlFor="assign_teacher"
                      className="bg-blue-950 text-white px-8 py-3 rounded-md cursor-pointer"
                      onClick={updateTeacher}
                    >
                      Proceed
                    </label>
                  ) : (
                    <Button
                      name="Can't Proceed"
                      className="bg-[lightgray] text-blue-950 mx-0 cursor-not-allowed"
                    />
                  )}
                </div>
              </div>

              <label className="modal-backdrop" htmlFor="assign_teacher">
                Close
              </label>
            </div>
          </div>
        </div>
        <div className="text-[12px]"> class Teacher Assigned</div>
        <StaffDetail props={classroom?.teacherID} />
      </div>
      <div className="my-6 border-t" />
      {/* SUbjects */}
      <div className="w-full min-h-[180px] pb-10 bg-slate-50 rounded-lg border py-2 px-4 ">
        <p>Manage Class Subject for JSS 1A </p>
        <p className="text-[13px] font-bold">
          Add/Remove Subjects for this class
        </p>

        <div className="mt-5 text-[13px] font-medium">
          <label
            htmlFor="assign_class_subject"
            className=" my-3 text-blue-500 transition-all duration-300 hover:text-blue-600 cursor-pointer "
          >
            + Add Subject
          </label>
          <div className="mt-5" />
          {/* Put this part before </body> tag */}
          <input
            type="checkbox"
            id="assign_class_subject"
            className="modal-toggle"
          />
          <div className="modal rounded-md" role="dialog">
            <div className="modal-box  rounded-md">
              <p className="flex items-center justify-between my-4 ">
                <p className="font-bold">Add New Subject</p>

                <label
                  htmlFor="assign_class_subject"
                  className="hover:bg-blue-50 transition-all duration-300  cursor-pointer rounded-full flex items-center justify-center w-6 h-6 font-bold "
                >
                  <MdClose />
                </label>
              </p>
              <hr />
              <p className="mt-2 leading-tight text-[13px] font-medium">
                Please note that by assigning this subject to this class, it
                automtically becomes one of the class must take suject.
                <br />
                <br />
                You are about to add this subject:{" "}
                {subject ? subject : "********"} to this class:{" "}
                {classroom?.className} and assigning it to: {teacher}
              </p>
              <div className="mt-10 w-full gap-2 flex flex-col items-center">
                <div className="w-full">
                  <label className="font-medium text-[12px]">
                    Subject Title <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter the here: English"
                      className="mx-0 h-12 w-[100%]"
                      value={subject}
                      onChange={(e: any) => {
                        setSubject(e.target.value);
                      }}
                    />
                    <div className="-mt-4 w-full gap-2 flex flex-col items-center">
                      <div className="w-full flex flex-col">
                        <label className="font-medium text-[12px] mb-2">
                          Subject Teacher{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          className="select border border-slate-200 text-[12px] py-0 px-2 w-full max-w-xs mb-3"
                          value={teacher}
                          onChange={(
                            e: React.ChangeEvent<HTMLSelectElement>
                          ) => {
                            setTeacher(e.target.value);
                          }}
                        >
                          <option disabled selected>
                            Select a Teacher
                          </option>
                          {schoolTeacher?.staff?.map(
                            (props: any, i: number) => (
                              <option key={i} value={props?.staffName}>
                                {props?.staffName}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-end transition-all duration-300">
                {subject !== "" && teacher !== "" ? (
                  <label
                    htmlFor="assign_class_subject"
                    className="bg-blue-950 text-white py-4 px-8 rounded-md cursor-pointer "
                    onClick={addClassSubject}
                  >
                    Proceed
                  </label>
                ) : (
                  <Button
                    name="Can't Proceed"
                    className="bg-[lightgray] text-blue-950 mx-0 cursor-not-allowed"
                  />
                )}
              </div>
            </div>

            <label className="modal-backdrop" htmlFor="assign_class_subject">
              Close
            </label>
          </div>
        </div>

        {/* Populate Class St */}
        <ClassSubjectScreen />
      </div>
      {/* Performance */}
      <div className="m>t-6 w-full min-h-[100px] pb-10 bg-slate-50 rounded-lg border py-2 px-4 ">
        <p>Top Performing student </p>
        <p className="text-[13px]  flex items-center font-bold">
          Here is the list of the top 5 performing student:{" "}
        </p>
        <div className="flex gap-4 mt-5">
          <div className="w-full justify-center flex">
            <div className="flex flex-col items-center justify-center px-4 py-1 mt-3">
              <FaCheckDouble size={13} />
              <p className="mt-3 text-[12px] font-medium">
                No Student rated yet
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* All Students */}
      <div className="mt-6 w-full min-h-[100px] pb-10 bg-slate-50 rounded-lg border py-2 px-4 ">
        <p>Viewing Students</p>
        <p className="text-[13px]  flex items-center font-bold">
          Here are all the students in this class:{" "}
        </p>
        <div className="flex gap-4 mt-5 overflow-x-auto">
          <ViewClassStudent />
        </div>
      </div>
      {/* timetable */}
      <div className="mt-6 w-full min-h-[100px] pb-10 bg-slate-50 rounded-lg border py-2 px-4 ">
        <div className="flex items-center w-full justify-between">
          <div>
            <p>Viewing Class TimeTable</p>
            <p className="text-[13px]  flex items-center font-bold">
              Here are all the students in this class:{" "}
            </p>
          </div>

          <ClassModel />
        </div>
        <div className="flex gap-4 mt-5 h-[450px]">
          {/* <TimeTableScreen /> */}
          <TimeTableScreen props={classID!} />
        </div>

        <div className="mt-6 w-full min-h-[60px] py-5 bg-slate-50 rounded-lg border  px-4 ">
          <p className="mb-2">
            Attendance Record:{" "}
            <span className="font-medium">
              {(
                (mainAttendance?.attendance?.filter(
                  (el: any) => el?.present === true
                ).length /
                  mainAttendance?.attendance?.length) *
                100
              ).toFixed(2)}
              %
            </span>
          </p>
          <div className="w-full flex gap-1">
            <div className="flex flex-wrap gap-1 w-full">
              {mainAttendance?.attendance?.map((props: any) => (
                <div
                  className="tooltip"
                  datatype={`${props.present ? "Present" : "Absent"}`}
                >
                  <div
                    className={`w-4 h-4 rounded-[3px] border ${
                      props?.present ? "bg-green-500" : "bg-white"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetailScreen;
