import {
  MdPeople,
  MdQueryStats,
  MdReport,
  MdSchool,
  MdSettings,
  MdSignalCellularAlt,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  FaBarsProgress,
  FaNoteSticky,
  FaSchool,
  FaStore,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { changeMenuState } from "../../global/reduxState";
import {
  useSchoolCookie,
  useSchoolData,
  useSchoolSessionData,
  useSchoolTeacherDetail,
} from "../../pages/hook/useSchoolAuth";
import pix from "../../assets/pix.jpg";
import Tooltip from "./Tooltip";
import StoreScreen from "./StoreScreen";
import { FaPhotoVideo } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect } from "react";
import {
  viewSchoolSession,
  viewSchoolSessionTerm,
} from "../../pages/api/schoolAPIs";

const Sider = () => {
  const dispatch = useDispatch();
  const toggleText = useSelector((state: any) => state.toggleText);
  const toggleImage = useSelector((state: any) => state.imageToggle);

  const { data } = useSchoolData();
  const { dataID } = useSchoolCookie();

  const { schoolInfo, loading }: any = useSchoolSessionData(dataID);

  const handleToggleMenuFalse = () => {
    if (!document.startViewTransition) {
      dispatch(changeMenuState(false));
    } else {
      document.startViewTransition(() => {
        dispatch(changeMenuState(false));
      });
    }
  };

  return (
    <div className="overflow-y-auto min-h-[100vh] w-full border-r bg-white text-blue-900 flex flex-col ">
      <div className="w-full flex px-2 mt-6 ">
        <div className=" w-16 h-16 object-cover flex border rounded-full items-center justify-center ">
          {toggleImage ? (
            <div className="flex justify-center items-center w-full h-full object-cover rounded-full border">
              <ClipLoader size={20} color="#172554" />
            </div>
          ) : (
            <img
              className="w-full h-full object-cover rounded-full border"
              src={data?.avatar ? data?.avatar : pix}
            />
          )}
        </div>
        <div className="ml-2">
          {/* TODO: Add tooltip */}
          <div className="break-words font-bold text-[16px]">
            {data?.schoolName.length > 15 ? (
              <Tooltip side={true} tip={data?.schoolName}>
                <p>{data?.schoolName.substring(0, 15)}...</p>
              </Tooltip>
            ) : (
              data?.schoolName
            )}
          </div>
          <p className="break-words font-medium text-slate-400 text-[14px] mt-2">
            ID: {data?.enrollmentID}
          </p>
          <p className="break-words font-medium text-slate-400  text-[14px] -mt-1">
            Session: {loading ? "" : schoolInfo[0]?.year}
          </p>
          <p className="text-[12px] font-bold">
            Term:{" "}
            {loading ? (
              ""
            ) : schoolInfo[0]?.presentTerm ? (
              schoolInfo[0]?.presentTerm
            ) : (
              <span className="text-red-400 ml-1">Please create TERM</span>
            )}
          </p>
        </div>
      </div>

      {/* top box */}

      {/* top box */}
      <div className="mt-20 px-2 text-center flex flex-col border mx-2 rounded-md py-4">
        <div className="mb-4 text-[13px] font-medium ">
          Encourage Parents to Purchase Learning Materials for thier child by
          having more items in your Library Store{" "}
        </div>
        <div className="flex w-full justify-center">
          {/* <NavLink to="upgrade"> */}

          {/* <Button
            name="Add to Store"
            className="bg-black text-white border-none font-medium py-4 px-9 leading-tight"
            onClick={() => {
              handleDisplayStaff();
            }}
          /> */}

          <StoreScreen />

          {/* </NavLink> */}
        </div>
      </div>

      {/* Nav Links */}

      {/* Settings */}
      <div className="mt-10 px-2 flex flex-col h-[90%]">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Dashboard
          <MdQueryStats />
        </NavLink>
        <NavLink
          to="/view-staff"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          View Staffs
          <MdPeople />
        </NavLink>
        <NavLink
          to="/view-students"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          View Students
          <FaBarsProgress />
        </NavLink>
        <NavLink
          to="/class-room"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          View Classrooms
          <FaSchool />
        </NavLink>

        <NavLink
          to="/subjects"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          View Subjects
          <MdSchool />
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Complains
          <MdReport />
        </NavLink>
        <NavLink
          to="/lesson-note"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Lesson Note
          <FaNoteSticky />
        </NavLink>

        <NavLink
          to="/result-history"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Result History
          <MdSignalCellularAlt />
        </NavLink>

        <NavLink
          to="/view-gallery"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Galleries
          <FaPhotoVideo />
        </NavLink>

        <NavLink
          to="/store"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Store
          <FaStore />
        </NavLink>

        <div className="flex-1" />

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[4px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm  flex items-center justify-between hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[4px]"
          }
          onClick={handleToggleMenuFalse}
        >
          Settings
          <MdSettings />
        </NavLink>
      </div>
    </div>
  );
};

export default Sider;
