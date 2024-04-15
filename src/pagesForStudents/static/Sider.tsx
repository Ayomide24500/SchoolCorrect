import {
  MdAssignmentAdd,
  MdClass,
  MdOutlineArticle,
  MdQueryStats,
  MdQuiz,
  MdRadio,
  MdReport,
  MdReportOff,
  MdSettings,
  MdStadium,
  MdSubject,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMenuState,
  displayDelay,
  displayStaffComp,
} from "../../global/reduxState";
import pix from "../../assets/pix.jpg";
import Tooltip from "./Tooltip";
import Button from "../../components/reUse/Button";
import { CgProfile } from "react-icons/cg";
import { FaCertificate, FaPhotoFilm, FaTable } from "react-icons/fa6";
import { useStudentInfo } from "../hooks/useStudentHook";
import { useSchoolSessionData } from "../../pages/hook/useSchoolAuth";
import ClipLoader from "react-spinners/ClipLoader";

const Sider = () => {
  const dispatch = useDispatch();

  const toggleImage = useSelector((state: any) => state.imageToggle);
  const toggleText = useSelector((state: any) => state.toggleText);
  const showing = useSelector((state: any) => state.showStaffComp);
  const { studentInfo } = useStudentInfo();
  const { schoolInfo } = useSchoolSessionData(studentInfo?.schoolIDs);

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
    <div className="overflow-y-auto w-full border-r bg-white text-blue-900 flex flex-col ">
      <div className="w-full flex px-2 mt-6 ">
        <div className=" w-16 h-16 object-cover flex border rounded-full items-center justify-center ">
          {toggleImage ? (
            <div className="flex justify-center items-center w-full h-full object-cover rounded-full border">
              <ClipLoader size={20} color="#172554" />
            </div>
          ) : (
            <img
              className="w-full h-full object-cover rounded-full border"
              src={studentInfo?.avatar ? studentInfo?.avatar : pix}
            />
          )}
        </div>
        <div className="ml-2">
          {/* TODO: Add tooltip */}
          <p className="font-bold text-left flex justify-start w-full">
            {studentInfo?.schoolName.length > 14 ? (
              <Tooltip tip={studentInfo?.schoolName}>
                <p>{studentInfo?.schoolName.substring(0, 14)}...</p>
              </Tooltip>
            ) : (
              studentInfo?.schoolName
            )}
          </p>
          <p className="break-words font-medium text-slate-400 text-[14px] mt-2">
            ID: {studentInfo?.enrollmentID}
          </p>
          <p className="break-words font-medium text-slate-400  text-[14px] -mt-1">
            Session: <span>{schoolInfo && schoolInfo[0]?.year}</span>
          </p>
          <p className="break-words font-bold  text-slate-400  text-[12px] mt-1">
            Term: <span>{schoolInfo && schoolInfo[0]?.presentTerm}</span>
          </p>
          <div className="text-[12px] font-bold">
            {(
              studentInfo?.studentFirstName +
              " " +
              studentInfo?.studentLastName
            )?.length > 16
              ? `${(
                  studentInfo?.studentFirstName +
                  " " +
                  studentInfo?.studentLastName
                ).substring(0, 16)}...`
              : studentInfo?.studentFirstName +
                " " +
                studentInfo?.studentLastName}
          </div>
        </div>
      </div>

      {/* top box */}

      {/* top box */}
      <div className="mt-10 px-2  center flex flex-col border mx-2 rounded-md py-4">
        <div className="mb-4 text-[13px] font-medium ">
          Encourage Parents to Purchase Learning Materials for thier child by
          having more items in your Library Store{" "}
        </div>
        <div className="flex w-full justify-center">
          {/* <NavLink to="upgrade"> */}

          <Button
            name={
              <div>
                Pay Fees
                <br />
                <p className="text-[12px]">(coming soon)</p>
              </div>
            }
            className="bg-black hover:bg-neutral-800 transition-all duration-300 text-white border-none font-medium py-2 px-9 leading-tight"
            onClick={() => {
              // handleDisplayStaff();
            }}
          />

          {/* </NavLink> */}
        </div>
      </div>

      {/* Nav Links */}
      <div className="w-full flex justify-center">
        <div className="transition-all duration-300 text-center text-[12px] font-medium mt-3 w-[90%] ">
          {toggleText ? (
            <div>A new staff has been added to your staff list</div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      {/* Settings */}
      <div className="mt-8 px-2 flex text-[15px] flex-col h-[90%]">
        <NavLink
          to="/"
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
          to="/my-classroom"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          My ClassRoom
          <MdStadium />
        </NavLink>

        <NavLink
          to="/your-subjects"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          My Subjects
          <FaTable />
        </NavLink>

        {/* <NavLink
          to="/lesson"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Practice Quiz
          <MdQuiz />
        </NavLink> */}

        <NavLink
          to="/CBT"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          <span>
            CBT <span className="text-[11px] font-bold">For SSS 3 Only</span>
          </span>
          <MdQuiz />
        </NavLink>

        <NavLink
          to="/lesson"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Lessons
          <MdClass />
        </NavLink>

        <NavLink
          to="/your-profile"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Profile
          <CgProfile />
        </NavLink>

        <NavLink
          to="/articles"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Article
          <MdOutlineArticle />
        </NavLink>

        <NavLink
          to="/assignment"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Assignments
          <MdAssignmentAdd />
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
          to="/report"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Report
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
          Complain
          <MdRadio />
        </NavLink>

        <NavLink
          to="/result"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Result History
          <FaCertificate />
        </NavLink>

        <div className="flex-1" />

        <NavLink
          to="/your-settings"
          className={({ isActive }) =>
            isActive
              ? "mt-10 duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[4px] flex items-center justify-between "
              : "mt-10 duration-500 transition-all p-2 rounded-sm  flex items-center justify-between hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[4px]"
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
