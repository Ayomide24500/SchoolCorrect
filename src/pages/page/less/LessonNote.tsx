document.title = "Teacher's Lession Notes";
import { NavLink } from "react-router-dom";
import { FaBook, FaReply } from "react-icons/fa6";
import { MdAutoAwesome, MdCheck, MdClose } from "react-icons/md";
import LittleHeader from "../../../components/layout/LittleHeader";
import { useNotes, useSchoolData } from "../../hook/useSchoolAuth";
import { FiLoader } from "react-icons/fi";
import Button from "../../../pagesForTeachers/components/reUse/Button";
import { useState } from "react";
import { adminlessonNoteReply } from "../../../pagesForTeachers/api/teachersAPI";
import { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const AdminLessonNote = () => {
  const { data } = useSchoolData();
  const { notes } = useNotes(data?._id);

  const [response, setResponse] = useState("");
  const [day, setDay] = useState("");

  console.log("data", data);
  const handleSubmit = (el: any) => {
    adminlessonNoteReply(data?._id, el, {
      responseDetail: response,
      deadline: day,
    }).then((res) => {
      console.log("yes", res);
      Swal.fire({
        title: "Success!",
        text: "Response sent successfully.",
        icon: "success",
      });
    });
  };

  return (
    <div>
      <LittleHeader name="Teacher's Lesson Notes" />
      <div className="min-h-[82vh] text-blue-950">
        <div>
          <div className="flex float-end"></div>
          <div className="py-9 w-full mt-24 p-3 border-b-2">
            <p className="font-bold mb-7">Lesson Note</p>
            <div className="">
              <div>
                {notes?.data?.lessonNotes?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 sm:grid-cols-2 xl:grid-cols-3 ">
                    {/* {notes?.data?.lessonNotes?.map((props: any) => (
                      <NavLink
                        key={props?._id}
                        to={`/lesson-note/${props?._id}`}
                      >
                        <div
                          className={`min-h-[200px] shadow-sm border flex justify-center items-center flex-col rounded-md `}
                        >
                          <div className="card-body text-gray-500 px-2 ">
                            <div className="h-14 w-full flex justify-center items text-[30px]">
                              <FaBook />
                            </div>
                            <div className="flex flex-col text-center">
                              <h2 className="font-medium">
                                {props?.topic ? (
                                  props?.topic
                                ) : (
                                  <div className="opacity-50">No Topic</div>
                                )}
                              </h2>
                              <p className="pt-5 text-left text-[12px] ">
                                {props?.summary ? (
                                  props?.summary
                                ) : (
                                  <div className="opacity-50">No summary</div>
                                )}
                              </p>

                              <div className="text-[12px] w-full flex justify-start  mt-10 font-medium">
                                <p>{props?.classes}</p>
                                <p>{props?.subject}</p>
                                <p
                                  className={`${
                                    props?.adminSignation
                                      ? "text-green-500 font-bold"
                                      : "text-red-500 font-bold"
                                  }`}
                                >
                                  {props?.adminSignation
                                    ? "Approved"
                                    : "Not-Approved"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    ))} */}
                    {notes?.data?.lessonNotes?.map((props: any) => (
                      <div
                        className={`min-h-[200px] bxs border flex justify-between items-center flex-col rounded-lg `}
                      >
                        <NavLink
                          key={props?._id}
                          to={`/lesson-note/${props?._id}`}
                          className="w-[85%]"
                        >
                          <div className="w-full h-full py-[20px] flex justify-center items-start flex-col ">
                            <div className="w-full  py-[10px] flex items-center justify-between">
                              <div className="flex items-center text-[21px] gap-1">
                                <FaBook />
                                <div className="font-semibold">
                                  {props?.subject}
                                </div>
                              </div>
                              <div className="text-[20px] font-semibold">
                                {props?.classes}
                              </div>
                            </div>
                            <div className="py-[20px]">
                              <div className="flex items-center gap-5">
                                <h1 className="font-medium">Topic:</h1>
                                <h1 className="font-bold text-[18px]">
                                  {props?.topic ? (
                                    props?.topic
                                  ) : (
                                    <div className="opacity-50">No Topic</div>
                                  )}
                                </h1>
                              </div>
                              <div className="flex items-center gap-5">
                                <h1 className="font-medium">Notes:</h1>
                                <p className="pt-5 text-[15px] flex justify-start items-center ">
                                  {props?.summary ? (
                                    props?.summary.substring(0, 500)
                                  ) : (
                                    <div className="opacity-50">No summary</div>
                                  )}
                                  ...
                                </p>
                              </div>
                              <div className="w-full my-[10px] flex items-center gap-5">
                                <h1 className="font-medium">Status:</h1>
                                <p
                                  className={`${
                                    props?.adminSignation
                                      ? "text-green-500 font-bold"
                                      : "text-red-500 font-bold"
                                  }`}
                                >
                                  {props?.adminSignation
                                    ? "Approved ✅"
                                    : "Not-Approved ❌"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </NavLink>

                        <div className="w-full mb-[25px] flex justify-center items-center">
                          <label
                            htmlFor="send_response"
                            className="py-3 px-3 bg-blue-950 text-white rounded-md flex justify-center items-center gap-2 transition-all duration-300 cursor-pointer "
                          >
                            Send Response to Teacher
                            <FaReply />
                          </label>
                        </div>

                        {/* Administrator Response Toggle */}
                        <input
                          type="checkbox"
                          id="send_response"
                          className="modal-toggle"
                        />
                        <div
                          className="modal rounded-md text-blue-950 text-left"
                          role="dialog"
                        >
                          <div className="modal-box bg-white  rounded-md">
                            <div className="flex items-center justify-between my-4 ">
                              <p className="font-bold">
                                Give a Lesson Note Feedback to your Teacher
                              </p>

                              <label
                                htmlFor="send_response"
                                className="hover:bg-blue-50 transition-all duration-300  cursor-pointer rounded-full flex items-center justify-center w-6 h-6 font-bold "
                              >
                                <MdClose />
                              </label>
                            </div>
                            <hr />
                            <div className="mt-2 leading-tight text-[13px] font-medium">
                              Send your thoughts, reviews on the lesson note
                              back to your teacher so that updates will be made,
                              hereby ensuring a top class lesson note
                              <br />
                            </div>
                            <div className="mt-10 w-full gap-2 flex flex-col items-center">
                              <div className="w-full">
                                <label className="font-medium text-[12px]">
                                  Response Detail{" "}
                                  <span className="text-red-500">*</span>
                                </label>

                                {/* // readSubject */}
                                <textarea
                                  className="border w-full resize-none h-[200px] mb-5 rounded-md mt-2 p-2 bg-gray-100 outline-none"
                                  value={response}
                                  onChange={(e) => setResponse(e.target.value)}
                                  // value={period}
                                  // onChange={(e) => {
                                  //   setPeriod(e.target.value);
                                  // }}
                                  placeholder="Response Detail"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2  items-start">
                              <label htmlFor="">
                                What is the deadline for the lesson note update
                                to be done?
                              </label>
                              <select
                                name="days"
                                id="days"
                                className="border p-2 rounded-md bg-gray-100 text-blue-950 w-[40%]"
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                              >
                                <option value="1 day">1 day</option>
                                <option value="2 days">2 days</option>
                                <option value="3 days">3 days</option>
                                <option value="4 days">4 days</option>
                                <option value="5 days">5 days</option>
                                <option value="6 days">6 days</option>
                                <option value="7 days">1 week</option>
                              </select>
                            </div>
                            <div className="mt-[10px] flex justify-end items-center">
                              {response.length > 1 ? (
                                <Button
                                  name="Send"
                                  onClick={() => handleSubmit(props?._id)}
                                  className="bg-blue-950"
                                />
                              ) : (
                                <button className="btn bg-blue-950 text-white hover:bg-blue-950 cursor-not-allowed">
                                  Send
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className=" mt-32 w-full h-full flex flex-col items-center justify-center ">
                    <MdAutoAwesome />
                    <div className="opacity-50 mt-5">
                      No Lesson note Published yet
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLessonNote;
