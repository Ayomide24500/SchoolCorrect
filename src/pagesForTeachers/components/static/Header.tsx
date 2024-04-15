import {
  FaAngleDown,
  FaArrowDown,
  FaBarsProgress,
  FaCalendar,
  FaPhotoFilm,
  FaStore,
} from "react-icons/fa6";
import pic from "../../../assets/pix.jpg";
import { useDispatch, useSelector } from "react-redux";

import SmallPiece from "./SmallPiece";
import {
  MdAccountCircle,
  MdArticle,
  MdBadge,
  MdClose,
  MdMenu,
  MdPeople,
  MdQueryStats,
  MdReport,
  MdSchool,
  MdSdCard,
  MdSettings,
} from "react-icons/md";
import {
  changeMenuState,
  changeToggleMenuState,
  displaySessioned,
} from "../../../global/reduxState";
import { useState } from "react";
import Session from "./Session";
import { useSchoolSessionData } from "../../../pages/hook/useSchoolAuth";
import { useTeacherInfo } from "../../hooks/useTeacher";
import ClipLoader from "react-spinners/ClipLoader";

const Header = () => {
  const dispatch = useDispatch();
  const toggleImage = useSelector((state: any) => state.imageToggle);
  const toggle = useSelector((state: any) => state.toggle);
  const toggleMenu = useSelector((state: any) => state.toggleMenu);
  const toggleSession = useSelector((state: any) => state.sessionToggled);

  const [sess, setSess] = useState<boolean>(false);

  const handleMenu = () => {
    if (!document.startViewTransition) {
      dispatch(changeToggleMenuState(!toggleMenu));
      dispatch(changeMenuState(false));
    } else {
      document.startViewTransition(() => {
        dispatch(changeToggleMenuState(!toggleMenu));
        dispatch(changeMenuState(false));
      });
    }
  };
  const { teacherInfo } = useTeacherInfo();
  const { schoolInfo } = useSchoolSessionData(teacherInfo?.schoolIDs);
  return (
    <div
      className="h-[50px] bg-blue-50 border-b w-full flex justify-center items-center  z-10 fixed top-0 left-0 text-blue-950"
      onClick={() => {}}
    >
      <div className="flex items-center justify-end w-[90%]">
        <div className="hidden sm:flex">
          <div className="flex mr-5 font-medium cursor-pointer items-center bg-slate-200 px-4 py-2 rounded-sm z-30">
            <FaCalendar />
            <span className="text-[12px] mx-1">
              Session: <span>{schoolInfo && schoolInfo[0]?.year}</span>
            </span>
            <div className="transition-all duration-300 ">
              {toggleSession ? (
                <FaAngleDown className="-rotate-180 duration-300 transition-all" />
              ) : (
                <FaAngleDown className="-rotate-0 duration-300 transition-all" />
              )}
            </div>
          </div>
        </div>

        <div
          className="flex items-center px-2 py-1 border rounded-full gap-3 duration-300 transition-all cursor-pointer z-10 bg-white shadow-sm"
          onClick={() => {
            setSess(false);

            dispatch(changeMenuState(!toggle));
            dispatch(changeToggleMenuState(false));
          }}
        >
          <div className="w-8 h-8 rounded-full border flex justify-center items-center">
            {toggleImage ? (
              <ClipLoader color="#172554" size={13} />
            ) : (
              <img
                className="w-full h-full rounded-full border object-cover"
                src={teacherInfo?.avatar ? teacherInfo?.avatar : pic}
              />
            )}
          </div>

          {toggle ? (
            <FaArrowDown className="rotate-180 duration-300 transition-all" />
          ) : (
            <FaArrowDown className="rotate-0 duration-300 transition-all" />
          )}
        </div>

        <div className="md:hidden text-[30px] cursor-pointer ml-3  duration-300 transition-all">
          {toggleMenu ? (
            <MdClose
              className="duration-500 transition-all"
              onClick={handleMenu}
            />
          ) : (
            <MdMenu
              className="duration-500 transition-all"
              onClick={handleMenu}
            />
          )}
        </div>
      </div>

      {/* </div> */}

      <div
        className={`absolute duration-300 transition-all ${
          toggle ? "right-6 top-14  " : "right-6 -top-56  "
        }`}
      >
        <SmallPiece
          name={[
            { title: "Account", icon: <MdAccountCircle />, to: "settings" },
          ]}
          log
        />
      </div>

      <div
        className={`absolute duration-300 transition-all ${
          toggleSession ? "right-24 top-14  " : "right-24 -top-56  "
        }`}
      >
        <Session />
      </div>

      {toggleMenu && (
        <div
          className={`absolute md:hidden duration-300 transition-all ${
            toggleMenu ? "right-6 top-14  " : "right-6 -top-24  "
          }`}
        >
          <SmallPiece
            name={[
              {
                title: "Dashboard",
                icon: <MdQueryStats />,
                to: "/",
              },
              {
                title: "My Schedule",
                icon: <MdPeople />,
                to: "my-schedule",
              },
              {
                title: "My Class",
                icon: <FaBarsProgress />,
                to: "my-class",
              },
              {
                title: "My Subjects",
                icon: <MdSchool />,
                to: "subjects",
              },
              {
                title: "Student's Articles",
                icon: <MdArticle />,
                to: "view-articles",
              },
              {
                title: "Lesson Note",
                icon: <MdReport />,
                to: "lesson-note",
              },
              {
                title: "Reports",
                icon: <MdReport />,
                to: "report",
              },
              {
                title: "Store",
                icon: <FaStore />,
                to: "store",
              },
              {
                title: "Gallaries",
                icon: <FaPhotoFilm />,
                to: "gallary",
              },
              {
                title: "Reports",
                icon: <MdReport />,
                to: "report-card",
              },
              {
                title: "Report Card",
                icon: <MdSdCard />,
                to: "report-card",
              },
              {
                title: "Reports",
                icon: <MdReport />,
                to: "week-report",
              },
              {
                title: "Complain",
                icon: <MdBadge />,
                to: "complain",
              },
              {
                title: "Settings",
                icon: <MdSettings />,
                to: "settings",
              },
            ]}
            but
          />
        </div>
      )}
    </div>
  );
};

export default Header;
