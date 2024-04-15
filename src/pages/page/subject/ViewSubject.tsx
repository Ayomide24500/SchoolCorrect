document.title = "view subjects";

import LittleHeader from "../../../components/static/LittleHeader";
import pix from "../../../assets/pix.jpg";
import {
  useSchoolCookie,
  useSchoolSubject,
  useSchoolTeacher,
  useSchoolTeacherDetail,
} from "../../hook/useSchoolAuth";
import Button from "../../../components/reUse/Button";
import { useState, FC } from "react";
import { MdCheck, MdClose } from "react-icons/md";

import toast, { Toaster } from "react-hot-toast";
import { updateSchoolSubjectTeacher } from "../../api/schoolAPIs";
import { mutate } from "swr";

interface iProps {
  props?: any;
}

const TeacherInfo: FC<iProps> = ({ props }) => {
  const { schoolSubjectTeacherDetail } = useSchoolTeacherDetail(props);

  return (
    <div className="flex items-center gap-3">
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img
            src={
              schoolSubjectTeacherDetail?.avatar
                ? schoolSubjectTeacherDetail?.avatar
                : pix
            }
            alt="Avatar"
          />
        </div>
      </div>
      <div>
        <div className="font-bold">{schoolSubjectTeacherDetail?.staffName}</div>
        <div className="text-[12px] opacity-50 ">
          {schoolSubjectTeacherDetail?.classesAssigned} Teacher
        </div>
      </div>
    </div>
  );
};

const ViewSubjects = () => {
  const { schoolSubject } = useSchoolSubject();
  const [subjectTeacher, setSubjectTeacher] = useState("");
  const { dataID } = useSchoolCookie();

  const { schoolTeacher } = useSchoolTeacher();

  const onTeacherSubject = (subjectID: string) => {
    updateSchoolSubjectTeacher(dataID, subjectID, subjectTeacher).then(
      (res) => {
        if (res.status === 201) {
          mutate(`api/view-school-subject/${dataID}`);
          toast.success("Teacher Assigned Successfully");
        } else {
          toast.error(`${res.response.data.message}`);
        }
      }
    );
  };

  const [state, setState] = useState("");

  //   console.log(schoolSubject?.subjects);
  //   console.log(schoolSubject);

  return (
    <div>
      <LittleHeader name={"View Subject"} />
      <Toaster position="top-center" reverseOrder={true} />
      <div className="mb-28" />

      <div className="mb-28" />

      <div className="py-6 px-2  border rounded-md min-w-[300px] overflow-y-hidden ">
        <div className="text-[gray] w-[700px] flex  gap-2 text-[12px] font-medium uppercase mb-10 px-4">
          <div className="w-[200px] border-r">Subject Name</div>

          <div className="w-[200px] border-r">Teacher Info</div>
          <div className="w-[100px] border-r">Class</div>
          <div className="w-[200px] border-r">Assign Teacher</div>
        </div>

        <div className=" w-[700px] overflow-hidden ">
          {schoolSubject?.subjects?.map((props: any, i: number) => (
            <div>
              <div>
                <div
                  key={props}
                  className={`w-full flex items-center gap-2 text-[12px] font-medium  min-h-16 px-4 my-2  overflow-hidden ${
                    i % 2 === 0 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <div className="w-[200px] border-r">
                    {props?.subjectTitle}
                  </div>

                  <div className={`w-[200px] border-r `}>
                    {props?.subjectTeacherName ? (
                      <div>
                        <TeacherInfo props={props?.teacherID} />
                      </div>
                    ) : (
                      "Not assigned yet"
                    )}
                  </div>

                  <div className="w-[100px] border-r">{props?.designated}</div>

                  <div className="w-[200px] border-r">
                    <div className="mt-5 text-[13px] font-medium">
                      <label
                        htmlFor="assign_class_subject"
                        className=" my-3 bg-blue-950 text-white py-2 px-4 rounded-md text-[12px] transition-all duration-300 hover:text-white cursor-pointer "
                        onClick={() => {
                          console.log("props: ", props._id);
                          setState(props._id);

                          console.log(state);
                        }}
                      >
                        + Assign Teacher
                      </label>
                      <div className="mt-5" />
                      {/* Put this part before </body> tag */}
                      <input
                        type="checkbox"
                        id="assign_class_subject"
                        className="modal-toggle"
                      />
                      <div className="modal  rounded-md" role="dialog">
                        <div className="modal-box bg-white rounded-md">
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
                            Please note that by assigning this subject to this
                            class, it automtically becomes one of the class must
                            take suject.
                            <br />
                            <br />
                            <div className="flex gap-2  items-center">
                              <p> Subject: {subjectTeacher}</p>
                              {subjectTeacher && (
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
                                Subject Teacher{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <select
                                className="select bg-gray-100 select-info mt-1 text-[12px] py-0 px-2 w-full max-w-xs mb-3"
                                value={subjectTeacher}
                                onChange={(
                                  e: React.ChangeEvent<HTMLSelectElement>
                                ) => {
                                  setSubjectTeacher(e.target.value);
                                }}
                              >
                                <option disabled selected>
                                  Select the subject Teacher
                                </option>
                                {schoolTeacher?.staff.map(
                                  (props: any, i: number) => (
                                    <option value={props?.staffName} key={i}>
                                      {props.staffName}
                                      {/* Peter */}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          </div>

                          <div className="w-full flex justify-end transition-all duration-300">
                            {subjectTeacher !== "" ? (
                              <label
                                htmlFor="assign_class_subject"
                                className="
                                bg-blue-950 text-white px-6 py-2 rounded-md cursor-pointer
                                "
                                onClick={() => {
                                  onTeacherSubject(state);
                                }}
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

                        <label
                          className="modal-backdrop"
                          htmlFor="assign_class_subject"
                        >
                          Close
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* name */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewSubjects;
