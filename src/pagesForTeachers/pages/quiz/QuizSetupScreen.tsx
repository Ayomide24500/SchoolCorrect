import LittleHeader from "../../components/layout/LittleHeader";
import pix from "../../../assets/pix.jpg";
import { Link, useParams } from "react-router-dom";
import { useSubjectAssignment, useSujectQuiz } from "../../hooks/useTeacher";
import { MdPlayCircle } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import ClassModelAssignment from "./AddAssignment";
import { useEffect, useState } from "react";
import { readClassInfo } from "../../api/teachersAPI";

const QuizSetupScreen = () => {
  const { subjectID } = useParams();
  const { subjectQuiz } = useSujectQuiz(subjectID!);

  const [state, setState] = useState<any>({});

  useEffect(() => {
    readClassInfo(subjectQuiz?.designated).then((res: any) => {
      setState(res.data);
    });
  }, []);

  const { subjectAssignment } = useSubjectAssignment(state?._id!);

  const quiz: [] = subjectQuiz?.quiz;
  const assign: [] = subjectAssignment?.assignment;

  const combine: Array<any> = quiz?.concat(assign);

  console.log(subjectAssignment);
  return (
    <div className="text-blue-950 relative">
      <LittleHeader name={`Viewing ${subjectQuiz?.subjectTitle} Quiz`} />

      <div className="mt-10" />

      <div>
        <div className="mb-16 flex-col-reverse flex  lg:flex-row justify-between items-center ">
          <p className="mt-10 lg:mt-0">View Assignment/Test/Quiz</p>

          <div className=" flex gap-2 ">
            <Link to={`/create-quiz/${subjectID}`}>
              <p className="font-medium cursor-pointer bg-blue-950 text-white px-6 py-4 rounded-md text-[12px] text-center">
                + Create Quiz
              </p>
            </Link>
            <Link to={`/test-exam-grade/${subjectID}`}>
              <p className="font-medium cursor-pointer text-[12px] bg-orange-500 text-white px-6 py-4 rounded-md text-center">
                + Enter Test Records
              </p>
            </Link>
          </div>
        </div>
      </div>

      {combine?.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
            {quiz?.map((props: any, i: number) => (
              <div key={i}>
                <div className="border p-4 rounded-md h-[270px] flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[300px] opacity-5 font-bold">
                    {i + 1}
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-bold mt-0 text-[20px] ">
                      {props?.subjectTitle}{" "}
                      {props?.quiz ? "Quiz" : "Assignment"}
                    </p>
                    <Link to={`/quiz/details/${props?._id}`}>
                      <MdPlayCircle
                        size={90}
                        className="rotate-0 opacity-60 text-red-600 hover:text-red-400 transition-all duration-300 absolute right-0 top-2"
                      />
                    </Link>
                  </div>

                  <div className="flex">
                    <p className="px-4 py-1 rounded-md text-[12px] border bg-blue-50 ">
                      Quiz
                    </p>
                  </div>

                  <div className="flex-1" />

                  <div className="text-[12px] my-4">
                    <p className="font-medium mb-2">Top Performing Student</p>
                    <div className="flex gap-2">
                      <img
                        src={pix}
                        className="w-[50px] h-[50px] border rounded-xl object-cover"
                      />
                      <div>
                        <p className="font-bold capitalize ">name</p>
                        <p>point</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <div>
                      Questions:{" "}
                      <span className="font-bold">
                        {props?.quiz[1]?.question &&
                          props?.quiz[1]?.question?.length}
                      </span>
                    </div>
                    <div>
                      Mark/Question:{" "}
                      <span className="font-bold">
                        {props?.quiz[0]?.instruction &&
                          props?.quiz[0]?.instruction?.mark}
                      </span>
                    </div>
                  </div>
                  <div className="text-[12px] mt-2 font-bold">
                    Instrunction:{" "}
                    <span className="font-normal">
                      {/* {props?.quiz[0]?.instruction?.instruction &&
                      `${props?.quiz[0]?.instruction?.instruction}`.slice(
                        0,
                        Math.ceil(Math.random() * (100 - 70)) + 70
                      )} */}
                      ...
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="my-8 border-t" />

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
            {assign?.map((props: any, i: number) => (
              <div key={i}>
                <div className="border p-4 rounded-md h-[270px] flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[300px] opacity-5 font-bold">
                    {i + 1}
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-bold mt-0 text-[20px] ">
                      {props?.subjectTitle}{" "}
                      {props?.quiz ? "Quiz" : "Assignment"}
                    </p>
                  </div>

                  <div className="flex">
                    <p className="px-4 py-1 rounded-md text-[12px] border bg-blue-50 ">
                      Assignment
                    </p>
                  </div>

                  <div className="flex-1" />

                  <div className="text-[12px] my-4">
                    <p className="font-medium mb-2">Top Performing Student</p>
                    <div className="flex gap-2">
                      <img
                        src={pix}
                        className="w-[50px] h-[50px] border rounded-xl object-cover"
                      />
                      <div>
                        <p className="font-bold capitalize ">name</p>
                        <p>point</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <div>
                      Questions Topic:{" "}
                      <span className="font-bold">
                        {props?.assignmentTopic}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between text-[13px]">
                    <div>
                      Submission Deadline:{" "}
                      <span className="font-bold">
                        {props?.assignmentDeadline}
                      </span>
                    </div>
                  </div>

                  <div className="text-[12px] mt-2 font-bold">
                    Question Detail:{" "}
                    <span className="font-normal">
                      {`${props?.assignmentDetails}`.slice(
                        0,
                        Math.ceil(Math.random() * (100 - 70)) + 70
                      )}
                      ...
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-4 py-1 mt-3">
          <FaCheckDouble size={13} />
          <p className="mt-3 text-[12px] font-medium">No QUIZ set yet</p>
        </div>
      )}

      <div className="absolute top-0"></div>
    </div>
  );
};

export default QuizSetupScreen;
