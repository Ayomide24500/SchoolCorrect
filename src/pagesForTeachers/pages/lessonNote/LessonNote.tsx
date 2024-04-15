import { NavLink } from "react-router-dom";
import { FaBook, FaDisplay, FaEye, FaReply } from "react-icons/fa6";
import { MdAutoAwesome, MdCheck, MdClose } from "react-icons/md";
import { useLessonNote } from "../../../pagesForStudents/hooks/useStudentHook";
import LittleHeader from "../../../components/layout/LittleHeader";
import { useTeacherInfo } from "../../hooks/useTeacher";
import Button from "../../components/reUse/Button";
import { FiLoader } from "react-icons/fi";

const LessonNote = () => {
  const { teacherInfo } = useTeacherInfo();
  const { lessonNote } = useLessonNote(
    teacherInfo?.schoolIDs,
    teacherInfo?._id
  );

  document.title = "Teacher's Lession Notes";

  return (
    <div>
      <LittleHeader name="Teacher's Lesson Notes" />
      <div className="min-h-[82vh] text-blue-950">
        <div>
          <div className="flex float-end">
            <NavLink to="/create-notes">
              <Button
                name="Add Note"
                className="py-4 px-4 bg-black text-white"
              />
            </NavLink>
          </div>
          <div className="py-9 w-full mt-24 p-3 border-b-2">
            <p className="font-bold mb-7">Lesson Note</p>

            <div className="">
              <div>
                {lessonNote?.lessonNotes?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 sm:grid-cols-2  xl:grid-cols-3 ">
                    {lessonNote?.lessonNotes?.map((props: any) => (
                      <div
                        className={`min-h-[200px] bxs border flex justify-between items-center flex-col rounded-lg `}
                      >
                        <NavLink
                          key={props?._id}
                          to={`/lesson-note/${props?._id}`}
                          className="w-[85%]"
                        >
                          <div className="w-full h-full py-[20px] flex justify-center items-start flex-col ">
                            <div className="w-full py-[10px] flex items-center justify-between">
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

                        <div className="w-[90%] mb-[25px] flex justify-center items-center">
                          {props?.messageSent ? (
                            <div className="w-full flex justify-center items-center">
                              <label
                                htmlFor="view_response"
                                className="py-3 px-3 h-[50px] bg-blue-950 text-white rounded-md flex justify-center items-center gap-2 transition-all duration-300 cursor-pointer "
                              >
                                View Administrator's Response
                                <FaEye />
                              </label>
                            </div>
                          ) : (
                            <div className="py-4 px-3 h-[50px] bg-blue-950 text-white rounded-md flex justify-center items-center gap-2 cursor-pointer opacity-30">
                              <div>Awaiting Administrator's Response</div>
                              <FiLoader />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className=" mt-32 w-full h-full flex flex-col items-center justify-center ">
                    <MdAutoAwesome />
                    <div className="opacity-50 mt-5">
                      No Lesson Published yet
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="view_response" className="modal-toggle" />
      <div className="modal rounded-md text-blue-950 text-left" role="dialog">
        {lessonNote?.lessonNotes?.map((props: any) => (
          <div className="modal-box bg-white  rounded-md">
            <div className="flex items-center justify-between my-4 ">
              <p className="font-bold">Response From The Administrator</p>

              <label
                htmlFor="view_response"
                className="hover:bg-blue-50 transition-all duration-300  cursor-pointer rounded-full flex items-center justify-center w-6 h-6 font-bold "
              >
                <MdClose />
              </label>
            </div>
            <hr />

            <div className="mt-10 w-full gap-2 flex flex-col items-center">
              <div className="w-full">
                <label className="font-medium text-[12px]">
                  Response Message Detail{" "}
                  <span className="text-red-500">*</span>
                </label>

                {/* // readSubject */}
                <h1>{props?.responseDetail}</h1>
              </div>
              <div className="w-full">
                <label className="font-medium text-[12px]">
                  Deadline to update and submit Lesson Note Message Detail{" "}
                  <span className="text-red-500">*</span>
                </label>

                <h1>{props?.deadline}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonNote;
