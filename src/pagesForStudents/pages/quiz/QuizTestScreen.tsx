import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdPlayCircle } from "react-icons/md";
import Button from "../../../components/reUse/Button";
import LittleHeader from "../../../components/layout/LittleHeader";
import { useQuiz } from "../../../pagesForTeachers/hooks/useTeacher";
import { performanceTest } from "../../api/studentAPI";
import { useStudentInfo } from "../../hooks/useStudentHook";
import toast, { Toaster } from "react-hot-toast";

const QuizTestScreen = () => {
  const navigate = useNavigate();
  const { quizID } = useParams();
  const [state, setState] = useState<any>({});
  const { quizData } = useQuiz(quizID!);
  const [start, setStart] = useState<boolean>(false);
  const { studentInfo } = useStudentInfo();

  // console.log(quizData?.quiz[1].question);

  const handleStateChange = (questionValue: any, optionValue: any) => {
    setState((el: any) => ({
      ...el,
      [questionValue]: optionValue,
    }));
  };

  const handleSubmit = () => {
    let correctAnswer: Array<string> = [];
    let score: number = 0;
    let percentage: number = 0;
    let remark: string = "";
    let grade: string = "";

    for (let i = 0; i < quizData?.quiz[1]?.question?.length; i++) {
      correctAnswer.push(quizData?.quiz[1]?.question[i].answer);
      if (correctAnswer[i] === Object.values(state)[i]) {
        score++;
      }
    }
    percentage = Math.ceil((score / quizData?.quiz[1]?.question.length) * 100);
    if (percentage >= 0 && percentage <= 45) {
      remark = "Very very poor Performance!";
    } else if (percentage >= 46 && percentage <= 55) {
      remark = "A Poor Performance!";
    } else if (percentage >= 56 && percentage <= 65) {
      remark = "A Good Performance, can still do Better!";
    } else if (percentage >= 66 && percentage <= 75) {
      remark = "Congratulation.... A Good Performance, Keep it Up!";
    } else if (percentage >= 76 && percentage <= 85) {
      remark = "Congratulation.... An Very Good Performance, Keep it Up!";
    } else if (percentage >= 86 && percentage <= 100) {
      remark = "Congratulation.... An Excellent Performance, Keep it Up!";
    }

    if (percentage >= 0 && percentage <= 45) {
      grade = "F";
    } else if (percentage >= 46 && percentage <= 55) {
      grade = "E";
    } else if (percentage >= 56 && percentage <= 65) {
      grade = "D";
    } else if (percentage >= 66 && percentage <= 75) {
      grade = "C";
    } else if (percentage >= 76 && percentage <= 85) {
      grade = "B";
    } else if (percentage >= 86 && percentage <= 100) {
      grade = "A";
    }

    performanceTest(studentInfo?._id, quizID!, {
      studentScore: score,
      studentGrade: grade,
      remark,
    }).then((res) => {
      if (res.status === 201) {
        toast.success("Quiz summitted successfully");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={true} />
      <LittleHeader name={`${quizData?.subjectTitle} Test Screen`} />
      <div className="relative">
        {!start && (
          <div className="absolute top-20 left-1/3 z-10 ">
            <MdPlayCircle
              size={200}
              className="cursor-pointer text-red-500 hover:text-red-600 transition-all duration-300"
              onClick={() => {
                if (!document.startViewTransition) {
                  setStart(true);
                } else {
                  document.startViewTransition(() => {
                    setStart(true);
                  });
                }
              }}
            />
            <p className="font-bold">Push Play to start your Test</p>
          </div>
        )}

        <div className="bg-slate-50 justify-center flex min-h-[100vh]">
          {start ? (
            <div className=" bg-white w-full px-5">
              {quizData?.quiz[1]?.question?.map((props: any, index: number) => (
                <div>
                  <p className="text-[14px] font-bold mt-10">
                    Question {index + 1}.
                  </p>
                  <div className="ml-4 ">
                    <p className="text-[18px]">{props.question}</p>

                    <div className="ml-8">
                      <p className="text-[12px] mt-5">
                        Choose your Options carefully
                      </p>
                      {props.options.map((props: any, i: number) => {
                        const choice: any = Object.keys(props)[0];

                        let val: string = "";

                        if (typeof props === "string") {
                          val = props.split(",")[choice];
                        }

                        return (
                          <div key={i} className="flex items-center gap-2 ml-4">
                            <input
                              className="radio radio-sm"
                              type="radio"
                              onChange={() => {
                                handleStateChange(index, val);
                              }}
                              id={`${index} - ${choice}`}
                              value={`${val}`}
                              checked={state[index] === val}
                            />
                            <label htmlFor={`${index} - ${choice}`}>
                              {val}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}

              <div>
                <Button
                  className="bg-blue-950 px-12 mt-14 py-4 "
                  name={"Submit"}
                  onClick={handleSubmit}
                />
              </div>
            </div>
          ) : (
            <div className="relative blur-sm bg-white w-full px-5">
              {quizData?.quiz[1]?.question?.map((props: any, index: number) => (
                <div>
                  <p className="text-[14px] font-bold mt-10">
                    Question {index + 1}.
                  </p>
                  <div className="ml-4 ">
                    <p className="text-[18px]">{props.question}</p>

                    <div className="ml-8">
                      <p className="text-[12px] mt-5">
                        Choose your Options carefully
                      </p>
                      {props.options.map((props: any, i: number) => {
                        const choice: any = Object.keys(props)[0];

                        let val: string = "";

                        if (typeof props === "string") {
                          val = props.split(",")[choice];
                        }

                        return (
                          <div key={i} className="flex items-center gap-2 ml-4">
                            <input
                              className="radio radio-sm"
                              type="radio"
                              onChange={() => {
                                handleStateChange(index, val);
                              }}
                              id={`${index} - ${choice}`}
                              value={`${val}`}
                              checked={state[index] === val}
                            />
                            <label htmlFor={`${index} - ${choice}`}>
                              {val}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}

              <div>
                <Button
                  className="bg-blue-950 px-12 mt-14 py-4 "
                  name={"Submit"}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizTestScreen;
