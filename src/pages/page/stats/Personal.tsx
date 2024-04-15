import { FC } from "react";

// import _ from "lodash";
import { useSchoolData } from "../../hook/useSchoolAuth";
import MaleFemaleTeacherScreen from "./MaleFemaleTeacherScreen";
import { FaCheckDouble } from "react-icons/fa6";

const Personal: FC = () => {
  const { data } = useSchoolData();

  // let costMonth = _.groupBy(studioBookings, (item) =>
  //   new Date(item?.createdAt).getMonth()
  // );

  // const sumByMonth: any = {};

  // _.forEach(costMonth, (data, month) => {
  //   sumByMonth[month!] = _.sumBy(data, "cost");
  // });

  // let values: any = Object.values(sumByMonth);

  // let studioCreated = _.groupBy(studio, (item) =>
  //   new Date(item?.createdAt).getMonth()
  // );
  // let clientsCreated = _.groupBy(data, (item) =>
  //   new Date(item?.createdAt).getMonth()
  // );

  // const data = Array.from({ length: 3 });

  return (
    <div>
      <div className="mb-2 text-blue-950">
        <span className="font-bold text-[12px] ">Population Counts</span>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-medium leading-tight">
              Total Students Registered:
            </p>

            <h1 className="text-[40px] font-medium">
              {data?.students?.length}
            </h1>
          </div>

          <div className="border rounded-md min-h-[60px] p-4">
            <p className="font-medium leading-tight">Total Teachers Hired:</p>

            <h1 className="text-[40px] font-medium">{data?.staff?.length}</h1>
          </div>
          <div className="border rounded-md min-h-[60px] p-4">
            <p className="font-medium leading-tight">Total Subjects</p>

            <h1
              className="text-[25px] mt-5 font-bold"
              style={{ color: "var(--primary)" }}
            >
              {data?.subjects?.length}
              <span className="text-[12px]"></span>
            </h1>
          </div>
          <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-medium leading-tight">Total Classrooms</p>

            <h1 className="text-[25px] mt-5  font-bold break-words leading-tight">
              {data?.classRooms?.length}
            </h1>
          </div>

          <div className="border rounded-md min-h-[100px] p-4 col-span-2">
            <p className="font-bold mb-3">Revenue Report:</p>

            <h1 className="text-[12px] font-medium">
              {!null ? (
                <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3 justify-center gap-[0.30rem]">
                  <div className="border min-w-[90px]  min-h-[100px] rounded-md p-2 break-words flex flex-col items-center justify-center ">
                    <p>First Term Reevnue </p>
                    <p className="font-medium mt-2 text-[14px] ">₦0</p>
                    <p className="leading-tight mt-2 text-center">
                      Total Term's Revenue
                    </p>
                  </div>

                  <div className="border min-w-[90px]  min-h-[100px] rounded-md p-2 break-words flex flex-col items-center justify-center ">
                    <p>Second Term Revenue</p>
                    <p className="font-medium mt-2 text-[14px] ">₦0</p>
                    <p className="leading-tight mt-2 text-center">
                      Total Term's Revenue
                    </p>
                  </div>

                  <div className="sm:col-span-2 xl:col-span-1 border min-w-[90px]  min-h-[100px] rounded-md p-2 break-words flex flex-col items-center justify-center ">
                    <p>Third Term Revenue</p>
                    <p className="font-medium mt-2 text-[14px] ">₦0</p>
                    <p className="leading-tight mt-2 text-center">
                      Total Term's Revenue
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-4">
                  <FaCheckDouble size={20} />
                  <p className="mt-3 text-[12px] font-medium">
                    No Complain Entery Recorded yet
                  </p>
                </div>
              )}
            </h1>
          </div>
        </div>
      </div>
      <div className="border-t my-5" />
      <div className="w-full">
        <p>Chart</p>

        <MaleFemaleTeacherScreen />

        <p className="text-[12px]">Male vs Female</p>
      </div>
    </div>
  );
};

export default Personal;
