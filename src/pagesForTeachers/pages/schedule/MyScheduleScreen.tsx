import LittleHeader from "../../components/layout/LittleHeader";
import { useTeacherInfo, useTeacherSchedule } from "../../hooks/useTeacher";
import lodash from "lodash";

const daysData = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const MyScheduleScreen = () => {
  const { teacherInfo } = useTeacherInfo();
  const { teacherSchedule: dataData } = useTeacherSchedule(teacherInfo?._id);

  const data = Object.values(lodash.groupBy(dataData?.schedule, "day"));
  const data2 = lodash.groupBy(dataData?.schedule, "day");

  document.title = "My Schedule";
  return (
    <div className="text-blue-950">
      <LittleHeader name="My Schedule " />
      <div className="w-full">
        <div className="">
          <div className=" w-full bg-slate-50 min-h-[calc(100vh-240px)] border rounded-md p-2 overflow-x-auto gap-4 ">
            {/* Header */}

            <div className="flex w-[2600px] gap-4 px-1 py-3 mt-2 ">
              <div className="w-[200px] h-6 border-r">
                {daysData?.map((props: any, i: number) => (
                  <div
                    key={i}
                    className={`py-2 border rounded-lg bg-white h-[170px] my-2 flex justify-center items-center `}
                  >
                    {props}
                  </div>
                ))}
              </div>

              <div className="flex flex-col py-2 ">
                {data?.map((props: any, i: number) => (
                  <div
                    key={i}
                    className={`
                flex flex-col my-0 
                `}
                  >
                    <div className="flex gap-4 ">
                      {props?.map((props: any, e: number) => (
                        <div className="flex">
                          <div
                            key={e}
                            className=" h-[170px] flex justify-center items-center rounded-lg flex-col w-[200px] bg-white border mb-2"
                          >
                            <p className="font-medium">{props?.subject}</p>
                            <p className="font-extralight text-[13px]">
                              {props?.CR}
                              {props?.day}
                            </p>
                            <p className="font-extralight text-[13px]">
                              {props?.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyScheduleScreen;
