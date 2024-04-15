import {
  MdArticle,
  MdBadge,
  MdPeople,
  MdQueryStats,
  MdReport,
  MdSchool,
  MdSettings,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Button from "../reUse/Button";
import { FaBarsProgress, FaPhotoFilm, FaStore } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMenuState,
  displayDelay,
  displayStaffComp,
} from "../../../global/reduxState";
import pix from "../../../assets/pix.jpg";
import Tooltip from "./Tooltip";
import { useTeacherInfo } from "../../hooks/useTeacher";
import { useSchoolSessionData } from "../../../pages/hook/useSchoolAuth";
import ClipLoader from "react-spinners/ClipLoader";

const Sider = () => {
  const dispatch = useDispatch();
  const toggleImage = useSelector((state: any) => state.imageToggle);
  const showing = useSelector((state: any) => state.showStaffComp);
  const { teacherInfo } = useTeacherInfo();
  const { schoolInfo } = useSchoolSessionData(teacherInfo?.schoolIDs);

  const handleToggleMenuFalse = () => {
    if (!document.startViewTransition) {
      dispatch(changeMenuState(false));
    } else {
      document.startViewTransition(() => {
        dispatch(changeMenuState(false));
      });
    }
  };

  const handleDisplayStaff = () => {
    if (!document.startViewTransition) {
      dispatch(displayStaffComp(!showing));
      dispatch(displayDelay(showing));
    } else {
      document.startViewTransition(() => {
        dispatch(displayDelay(!showing));

        if (showing === true) {
          const timer = setTimeout(() => {
            clearTimeout(timer);
            dispatch(displayStaffComp(!showing));
          }, 500);
        } else {
          dispatch(displayStaffComp(!showing));
        }
      });
    }
  };

  return (
    <div className="overflow-y-auto w-full border-r bg-white text-blue-900 flex flex-col text-[15px]">
      <div className="w-full flex px-2 mt-6 ">
        <div className=" w-16 h-16 object-cover flex border rounded-full items-center justify-center ">
          <div className=" w-16 h-16 object-cover flex border rounded-full items-center justify-center ">
            {toggleImage ? (
              <div className="flex justify-center items-center w-full h-full object-cover rounded-full border">
                <ClipLoader size={20} color="#172554" />
              </div>
            ) : (
              <img
                className="w-full h-full object-cover rounded-full border"
                src={teacherInfo?.avatar ? teacherInfo?.avatar : pix}
              />
            )}
          </div>
        </div>
        <div className="ml-2">
          {/* TODO: Add tooltip */}
          <p className="break-words font-bold">
            {teacherInfo?.schoolName.length > 16 ? (
              <Tooltip tip={teacherInfo?.schoolName}>
                <p>{teacherInfo?.schoolName.substring(0, 16)}...</p>
              </Tooltip>
            ) : (
              teacherInfo?.schoolName
            )}
          </p>
          <p className="break-words font-medium text-slate-400 text-[14px] mt-2">
            ID: {teacherInfo?.enrollmentID}
          </p>
          <p className="break-words font-medium text-slate-400  text-[14px] -mt-1">
            Session: <span>{schoolInfo && schoolInfo[0]?.year}</span>
          </p>
          <p className="break-words font-medium text-[12px] my-2 -mt-1">
            Term:{" "}
            <span className="text-[12px]">
              {schoolInfo && schoolInfo[0]?.presentTerm}
            </span>
          </p>
          <div className="text-[12px] font-bold">
            {teacherInfo?.staffName?.length > 16
              ? `${teacherInfo?.staffName.substring(0, 16)}...`
              : teacherInfo?.staffName}
          </div>
        </div>
      </div>

      {/* top box */}

      <div className="mt-10 px-2 text- center flex flex-col border mx-2 rounded-md py-4">
        <div className="mb-4 text-[13px] font-medium ">
          Mark students Attendance with the Button below{" "}
        </div>
        <div className="flex w-full justify-center">
          {/* <NavLink to="upgrade"> */}
          <Link to="/attendance">
            <Button
              name="Attendance"
              className="bg-black text-white border-none font-medium py-4 px-9 leading-tight"
              onClick={() => {
                // handleDisplayStaff();
              }}
            />
          </Link>

          {/* </NavLink> */}
        </div>
      </div>

      {/* top box */}

      {/* Settings */}
      <div className="mt-16 px-2 flex flex-col h-[90%]">
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
          to="/my-schedule"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          My Schedule
          <MdPeople />
        </NavLink>

        <NavLink
          to="/my-class"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          My Class
          <FaBarsProgress />
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
          My Subjects
          <MdSchool />
        </NavLink>

        <NavLink
          to="/view-articles"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Student's Articles
          <MdArticle />
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
          <MdReport />
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

        <NavLink
          to="/gallary"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Gallery
          <FaPhotoFilm />
        </NavLink>

        <NavLink
          to="/report-card"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Report Card
          <FaPhotoFilm />
        </NavLink>

        <NavLink
          to="/week-report"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Weekly Report
          <MdReport />
        </NavLink>

        <NavLink
          to="/complain"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Complains
          <MdBadge />
        </NavLink>

        <div className="flex-1" />

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "mt-10 duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[4px] flex items-center justify-between "
              : "mt-10 duration-500 transition-all p-2 rounded-sm  flex items-center justify-between hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[4px]"
          }
          onClick={handleToggleMenuFalse}
        >
          settings
          <MdSettings />
        </NavLink>
      </div>
    </div>
  );
};

export default Sider;
