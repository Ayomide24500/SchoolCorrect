import { Link } from "react-router-dom";
import Button from "../../components/reUse/Button";

import { FC } from "react";
import pix from "../../../assets/pix.jpg";
import { useSujectInfo, useTeacherInfo } from "../../hooks/useTeacher";
import LittleHeader from "../../components/layout/LittleHeader";

document.title = "view teacher subject";

interface iProp {
  props?: any;
  quiz?: boolean;
  test?: boolean;
  ass?: boolean;
}

const SubjectRecord: FC<iProp> = ({ props, quiz, test, ass }) => {
  const { subjectInfo } = useSujectInfo(props);

  return (
    <div>
      {test && <div>{subjectInfo?.test ? subjectInfo?.test?.length : 0}</div>}
      {quiz && <div>{subjectInfo?.quiz ? subjectInfo?.quiz?.length : 0}</div>}
      {ass && (
        <div>
          {subjectInfo?.assignment ? subjectInfo?.assignment?.length : 0}
        </div>
      )}
    </div>
  );
};

const TeacherSubject: FC = () => {
  const { teacherInfo } = useTeacherInfo();

  return (
    <div className="">
      <LittleHeader name="Class Teacher Subject" />
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img
            src={pix}
            {...(teacherInfo?.avatar ? teacherInfo?.avatar : pix)}
            alt="Avatar"
          />
        </div>
      </div>
      <div>
        <div className="font-bold">Teacher subjects</div>
        <div className="text-[12px] opacity-50 ">Subject teacher taking</div>
      </div>

      <div className=" w-full overflow-x-auto">
        <div className="py-6 px-2 border rounded-md min-w-[600px] overflow-y-hidden mt-9">
          <div className="w-[1200px] text-[gray] flex gap-9 text-[12px] font-medium uppercase mb-10 px-4">
            <div className="w-[150px] border-r">Teacher Subject</div>
            <div className="w-[100px] border-r">No of Quiz</div>
            <div className="w-[100px] border-r">No Of Test</div>
            <div className="w-[100px] border-r">No Of Assignment</div>
            <div className="w-[250px] border-r">Description</div>
            <div className="w-[200px] border-r">View Details</div>
          </div>

          <div>
            {teacherInfo?.subjectAssigned?.map((props: any) => {
              return (
                <div
                  key={props.id}
                  className="w-[1200px] flex items-center gap-9 text-[12px] font-medium  h-16 px-4 my-2 overflow-hidden"
                >
                  <div className="w-[150px] border-r text-black">
                    {props.title}
                  </div>
                  <div className="w-[100px] border-r text-black font-bold">
                    <SubjectRecord props={props.id} quiz />
                  </div>
                  <div className="w-[100px] border-r text-black font-bold">
                    <SubjectRecord props={props.id} test />
                  </div>
                  <div className="w-[100px] border-r text-black font-bold">
                    <SubjectRecord props={props.id} ass />
                  </div>
                  <div className="w-[250px] border-r text-black">
                    no caption yet
                  </div>
                  <Link to={`/subjects/${props.id}`}>
                    <Button
                      name="view all subject"
                      className="py-4 px-0 bg-black text-white hover:bg-neutral-800 transition-all duration-300 w-[200px]"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSubject;
