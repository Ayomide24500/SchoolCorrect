import {
  FaAngleDown,
  FaArrowDown,
  FaBarsProgress,
  FaCalendar,
  FaNoteSticky,
  FaSchool,
  FaStore,
} from "react-icons/fa6";
import pic from "../../assets/pix.jpg";
import { useDispatch, useSelector } from "react-redux";

import SmallPiece from "./SmallPiece";
import {
  MdAccountCircle,
  MdClose,
  MdMenu,
  MdPeople,
  MdQueryStats,
  MdReport,
  MdSchool,
  MdSettings,
} from "react-icons/md";
import {
  changeMenuState,
  changeToggleMenuState,
  displaySessioned,
} from "../../global/reduxState";
import { useState } from "react";
import Session from "./Session";
import AddSession from "./AddSession";
import {
  useSchoolData,
  useSchoolSessionData,
} from "../../pages/hook/useSchoolAuth";
import ClipLoader from "react-spinners/ClipLoader";
import { FaPhotoVideo } from "react-icons/fa";
import AddSessionTerm from "./AddSessionTerm";

const Header = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state: any) => state.toggle);
  const toggleMenu = useSelector((state: any) => state.toggleMenu);
  const toggleImage = useSelector((state: any) => state.imageToggle);
  const toggleSession = useSelector((state: any) => state.sessionToggled);

  const session = useSelector((state: any) => state?.sessionToggle);
  const sessionTerm = useSelector((state: any) => state?.sessionTermToggle);

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

  const { data } = useSchoolData();
  const { schoolInfo } = useSchoolSessionData(data?._id);

  return (
    <div
      className="h-[50px] bg-blue-50 border-b w-full flex justify-center items-center  z-10 fixed top-0 left-0 text-blue-950"
      onClick={() => {}}
    >
      {/* <div>  */}
      <div className="flex items-center  justify-end w-[90%]">
        <div
          className="mr-5 font-medium cursor-pointer flex items-center bg-slate-200 px-4 py-2 rounded-sm z-30"
          onClick={() => {
            setSess(!sess);
            dispatch(displaySessioned(!toggleSession));
          }}
        >
          {" "}
          <FaCalendar />
          <span className="text-[12px] mx-1">
            Session: <span>{schoolInfo && schoolInfo[0]?.year} </span>
          </span>
          <div className="transition-all duration-300 ">
            {toggleSession ? (
              <FaAngleDown className="-rotate-180 duration-300 transition-all" />
            ) : (
              <FaAngleDown className="-rotate-0 duration-300 transition-all" />
            )}
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
                src={data?.avatar ? data?.avatar : pic}
              />
            )}
          </div>

          {toggle ? (
            <FaArrowDown className="rotate-180 duration-300 transition-all" />
          ) : (
            <FaArrowDown className="rotate-0 duration-300 transition-all" />
          )}
        </div>

        <div className=" md:hidden text-[30px] cursor-pointer ml-3  duration-300 transition-all">
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

      {session && (
        <div className=" absolute top-0 right-0 w-full md:w-[calc(100%-250px)] backdrop-blur-md  flex items-center justify-center h-screen">
          <AddSession />
        </div>
      )}

      {sessionTerm && (
        <div className=" absolute top-0 right-0 w-full md:w-[calc(100%-250px)] backdrop-blur-md  flex items-center justify-center h-screen">
          <AddSessionTerm />
        </div>
      )}

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
                title: "View Staffs",
                icon: <MdPeople />,
                to: "view-staff",
              },
              {
                title: "View Students",
                icon: <FaBarsProgress />,
                to: "view-students",
              },
              {
                title: "View Classrooms",
                icon: <FaSchool />,
                to: "class-room",
              },
              {
                title: "View Subjects",
                icon: <MdSchool />,
                to: "subjects",
              },
              {
                title: "Complains",
                icon: <MdReport />,
                to: "report",
              },
              {
                title: "Lesson Notes",
                icon: <FaNoteSticky />,
                to: "lesson-note",
              },
              {
                title: "Gallaries",
                icon: <FaPhotoVideo />,
                to: "view-gallery",
              },
              {
                title: "Store",
                icon: <FaStore />,
                to: "store",
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
