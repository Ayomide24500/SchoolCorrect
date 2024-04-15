import pix from "../../../assets/pix.jpg";
import { Link, useParams } from "react-router-dom";
import { MdPlayCircle } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import LittleHeader from "../../../components/layout/LittleHeader";
import { useSujectQuiz } from "../../../pagesForTeachers/hooks/useTeacher";

const QuizSetupScreen = () => {
  const { subjectID } = useParams();
  const { subjectQuiz } = useSujectQuiz(subjectID!);

  return (
    <div className="text-blue-950 relative">
      <LittleHeader name={`Viewing ${subjectQuiz?.subjectTitle} Quiz`} />

      <div className="mt-10" />

      <div className="mb-16 flex justify-between items-center ">
        <p>View Quiz</p>
      </div>

      {subjectQuiz?.quiz?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
          {subjectQuiz?.quiz?.map((props: any, i: number) => (
            <div key={i}>
              <div className="border p-4 rounded-md h-[270px] flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[300px] opacity-5 font-bold">
                  {i + 1}
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-bold mt-0 text-[20px] ">
                    {subjectQuiz?.subjectTitle} Test {i + 1}
                  </p>
                  <Link to={`/quiz/details/${props._id}`}>
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
                      {props?.quiz[1]?.question?.length}
                    </span>
                  </div>
                  <div>
                    Mark/Question:{" "}
                    <span className="font-bold">
                      {props?.quiz[0]?.instruction?.mark}
                    </span>
                  </div>
                </div>
                <div className="text-[12px] mt-2 font-bold">
                  Instrunction:{" "}
                  <span className="font-normal">
                    {`${props?.quiz[0]?.instruction?.instruction}`.slice(
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
