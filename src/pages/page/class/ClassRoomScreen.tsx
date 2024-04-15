document.title = "View Students";
// import moment from "moment"
import { useDispatch, useSelector } from "react-redux";
import pix from "../../../assets/pix.jpg";
import { Link } from "react-router-dom";
import { displayClass } from "../../../global/reduxState";
import LittleHeader from "../../../components/layout/LittleHeader";
import Button from "../../../components/reUse/Button";
import { FaStar } from "react-icons/fa6";
import { useSchoolClassRM } from "../../hook/useSchoolAuth";
import { FC } from "react";
import { useTeacherDetail } from "../../../pagesForTeachers/hooks/useTeacher";
import lodash from "lodash";

interface iProps {
  props?: any;
}

const TeacherDetails: FC<iProps> = ({ props }) => {
  const { teacherDetail } = useTeacherDetail(props);

  return (
    <div className="w-[220px] flex gap-2 border-r">
      <img
        className="w-16 shadow-md h-14 rounded-2xl border object-cover"
        src={teacherDetail?.avatar ? teacherDetail?.avatar : pix}
      />
      <div>
        <p className="leading-tight">{teacherDetail?.staffName}</p>
        <div className="mt-6" />
        <p className="flex items-center gap-1">
          <FaStar className="ml-1 mb-1" />
          <span>{teacherDetail?.staffRating}</span>
        </p>
      </div>
    </div>
  );
};

const ClassRoomScreen = () => {
  const dispatch = useDispatch();
  const data = Array.from({ length: 0 });
  const { schoolClassroom } = useSchoolClassRM();

  const classroom = useSelector((state: any) => state.classroomToggled);

  const handleDisplayClassroom = () => {
    if (!document.startViewTransition) {
      dispatch(displayClass(!classroom));
    } else {
      document.startViewTransition(() => {
        dispatch(displayClass(!classroom));
      });
    }
  };

  return (
    <div className="">
      {/* header */}
      <div className="mb-0" />
      <LittleHeader name={"View and Manage Class Rooms"} />

      <div className="mt-10" />

      <div className="flex w-full justify-end">
        <Button
          name="Add new ClassRoom"
          className="uppercase text-[12px] font-medium bg-blue-950 py-4 px-8 hover:bg-blue-900 cursor-pointer transition-all duration-300 "
          onClick={handleDisplayClassroom}
        />
      </div>
      <div
        className="py-6 px-2 border rounded-md min-w-[300px] overflow-y-hidden "
        style={{ color: "var(--secondary)" }}
      >
        <div className="text-[gray] w-[1480px] flex  gap-2 text-[12px] font-medium uppercase mb-10 px-4">
          <div className="w-[80px] border-r">Class</div>
          <div className="w-[100px] border-r">Number of Students</div>

          <div className="w-[100px] border-r">Number of Subjects Offered</div>

          <div className="w-[270px] border-r">Class School-Fee</div>
          <div className="w-[20px] border-r"></div>

          <div className="w-[270px] border-r">school fee paid Ratio</div>

          <div className="w-[220px] border-r">class teacher Info</div>

          <div className="w-[150px] border-r">Class Academic Performance</div>

          <div className="w-[180px] border-r">View Detail</div>
        </div>

        <div className=" w-[1480px] overflow-hidden">
          {lodash
            .sortBy(schoolClassroom?.classRooms, "className")
            .map((props: any, i: number) => (
              <div>
                <div>
                  <div
                    key={props}
                    className={`w-full flex items-center gap-2 text-[12px] font-medium  h-16 px-4 my-2  overflow-hidden ${
                      i % 2 === 0 ? "bg-slate-50" : "bg-white"
                    }`}
                  >
                    <div className="w-[80px] border-r">{props.className}</div>

                    <div className={`w-[100px] border-r`}>
                      {props?.students?.length}
                    </div>
                    <div className={`w-[100px] border-r`}>
                      {props?.classSubjects.length}
                    </div>

                    <div className="w-[270px] border-r flex justify-between pr-2 gap-4">
                      <div className="flex flex-col items-center">
                        <label className="text-[10px] font-medium">
                          1st Term
                        </label>
                        <p className="mt-3 font-bold">
                          ₦{parseInt(props.class1stFee).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <label className="text-[10px] font-medium">
                          2nd Term
                        </label>
                        <p className="mt-3 font-bold">
                          ₦{parseInt(props.class2ndFee).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <label className="text-[10px] font-medium">
                          3rd Term
                        </label>
                        <p className="mt-3 font-bold">
                          ₦{parseInt(props.class3rdFee).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="w-[20px] border-r">-</div>
                    <div className="w-[270px] border-r flex justify-between pr-2 gap-4">
                      <div className="flex flex-col items-center">
                        <label className="text-[10px] font-medium">
                          1st Term
                        </label>
                        <p className="mt-3 font-bold">90%</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <label className="text-[10px] font-medium">
                          2nd Term
                        </label>
                        <p className="mt-3 font-bold text-red-500">0%</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <label className="text-[10px] font-medium">
                          3rd Term
                        </label>
                        <p className="mt-3 font-bold text-red-500">0%</p>
                      </div>
                    </div>

                    {/* name */}
                    <div className="w-[220px]">
                      {props.classTeacherName ? (
                        <TeacherDetails props={props.teacherID} />
                      ) : (
                        <div>no teacher assigned yet</div>
                      )}
                    </div>

                    <div className="w-[150px] border-r  ">90%</div>

                    <Link
                      to={`class-details/${props?._id}`}
                      className="w-[180px] border-r"
                    >
                      <Button
                        name="View class"
                        className="py-3 w-[85%] bg-black text-white  hover:bg-neutral-800 transition-all duration-300"
                        onClick={() => {}}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClassRoomScreen;
