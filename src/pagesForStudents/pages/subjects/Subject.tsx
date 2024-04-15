import { Link } from "react-router-dom";

import { FC, useEffect, useState } from "react";
import pix from "../../../assets/pix.jpg";

import LittleHeader from "../../../components/layout/LittleHeader";
import Button from "../../../components/reUse/Button";
import { useStudentInfo } from "../../hooks/useStudentHook";
import { useSujectInfo } from "../../../pagesForTeachers/hooks/useTeacher";
import { readClassInfo } from "../../api/studentAPI";

document.title = "view teacher subject";

interface iProp {
  props?: any;
  quiz?: boolean;
  test?: boolean;
  ass?: boolean;
  teach?: boolean;
}

const SubjectRecord: FC<iProp> = ({ ass, props, quiz, teach, test }) => {
  const { subjectInfo } = useSujectInfo(props);

  return (
    <div>
      {test && <div>{subjectInfo?.test ? subjectInfo?.test?.length : 0}</div>}
      {quiz && <div>{subjectInfo?.quiz ? subjectInfo?.quiz?.length : 0}</div>}
      {ass && (
        <div>{subjectInfo?.quiz ? subjectInfo?.assignment?.length : 0}</div>
      )}
      {teach && <div>{subjectInfo?.subjectTeacherName}</div>}
    </div>
  );
};

const MyClassroom: FC = () => {
  const { studentInfo } = useStudentInfo();
  const [state, setState] = useState<any>([]);
  useEffect(() => {
    readClassInfo(studentInfo?.classAssigned).then((res: any) => {
      setState(res?.data);
    });
  }, []);

  //   console.log(state);

  return (
    <div className="w-full">
      <LittleHeader name="Class Teacher Subject" />
      <div className="flex gap-2">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img
              src={pix}
              {...(studentInfo?.avatar ? studentInfo?.avatar : pix)}
              alt="Avatar"
            />
          </div>
        </div>
        <div className="text-[12px] gap-2">
          <p>
            {studentInfo?.studentFirstName} {studentInfo?.studentLastName}
          </p>
          <p>{studentInfo?.classAssigned}</p>
        </div>
      </div>
      <div>
        <div className="font-bold">Student class Subjects</div>
        <div className="text-[12px] opacity-50">Subject teacher taking</div>
      </div>

      <div className=" w-[95%] overflow-x-auto">
        <div className="py-6 px-2 border rounded-md min-w-[600px] overflow-y-hidden mt-9">
          <div className="w-[1400px] text-[gray] flex gap-9 text-[12px] font-medium uppercase mb-10 px-4">
            <div className="w-[150px] border-r">Class Subject</div>
            <div className="w-[150px] border-r">Subject Teacher</div>
            <div className="w-[100px] border-r">No of Assignment</div>
            <div className="w-[100px] border-r">No of Quiz</div>

            <div className="w-[100px] border-r">No Of Test</div>
            <div className="w-[250px] border-r">Description</div>
            <div className="w-[200px] border-r">View Details</div>
          </div>

          {state?.classSubjects?.map((props: any, i: number) => {
            return (
              <div
                key={props.id}
                className="w-[1400px] flex items-center gap-9 text-[12px] font-medium  h-16 px-4 my-2 overflow-hidden"
              >
                <div className="w-[150px] border-r text-black">
                  {props.subjectTitle}
                </div>
                <div className="w-[150px] border-r text-black font-bold">
                  <SubjectRecord props={props._id} teach />
                </div>
                <div className="w-[100px] border-r text-black font-bold">
                  <SubjectRecord props={props._id} ass />
                </div>
                <div className="w-[100px] border-r text-black font-bold">
                  <SubjectRecord props={props._id} quiz />
                </div>
                <div className="w-[100px] border-r text-black font-bold">
                  <SubjectRecord props={props._id} test />
                </div>
                <div className="w-[250px] border-r text-black">
                  no caption yet
                </div>
                <Link to={`/subjects/${props._id}`}>
                  <Button
                    name="view all subject"
                    className="py-4 px-0 bg-black text-white hover:bg-neutral-800 transition-all duration-300 w-[200px]"
                  />
                </Link>
              </div>
            );
          })}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyClassroom;
