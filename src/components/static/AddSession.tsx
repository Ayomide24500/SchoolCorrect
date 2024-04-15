import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displaySession } from "../../global/reduxState";
import { MdClose } from "react-icons/md";
import Input from "../reUse/Input";
import Button from "../reUse/Button";
import { createNewSession } from "../../pages/api/schoolAPIs";
import { useSchoolCookie, useSchoolData } from "../../pages/hook/useSchoolAuth";
import toast, { Toaster } from "react-hot-toast";
import { mutate } from "swr";

const AddSession = () => {
  const dispatch = useDispatch();
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const { dataID } = useSchoolCookie();
  const { data } = useSchoolData();

  const handleToggleMenuFalse = () => {
    if (!document.startViewTransition) {
      dispatch(displaySession(false));
    } else {
      document.startViewTransition(() => {
        dispatch(displaySession(false));
      });
    }
  };

  const handleSubmit = () => {
    createNewSession(dataID, { year: start }).then((res) => {
      console.log(res);
      if (res.status === 201) {
        console.log(res);
        mutate(`api/view-school-session/${data?._id}`);
        if (!document.startViewTransition) {
          dispatch(displaySession(false));

          toast.success("Session created");
        } else {
          document.startViewTransition(() => {
            toast.error("Something went wrong");
            dispatch(displaySession(false));
          });
        }
      } else {
        if (!document.startViewTransition) {
          dispatch(displaySession(false));
          mutate(`api/view-school-session/${data?._id}`);
          toast.success("Session created");
        } else {
          document.startViewTransition(() => {
            mutate(`api/view-school-session/${data?._id}`);
            toast.success("Session created");
            dispatch(displaySession(false));
          });
        }
      }
    });
  };
  //   onClick = { handleToggleMenuFalse };
  return (
    <div className="flex justify-center bg-blue-50   ">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="w-[300px] sm:w[400px] md:w-[500px] min-h-[300px] border rounded-md bg-white shadow-lg p-4">
        <p className="flex items-center justify-between my-4 ">
          <p className="font-bold">Add New Session</p>

          <p
            className="hover:bg-blue-50 transition-all duration-300  cursor-pointer rounded-full flex items-center justify-center w-6 h-6 font-bold "
            onClick={handleToggleMenuFalse}
          >
            <MdClose />
          </p>
        </p>
        <hr />

        <p className="mt-2 leading-tight text-[13px] font-medium">
          Please note that each session you create, holds records of that
          particular session.
        </p>

        <div className="mt-10 w-full gap-2 flex items-center">
          <div className="w-full">
            <label className="font-medium text-[12px]">
              Session Year <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Session Year: 2023/2024"
              className="mx-0 h-10 w-full"
              value={start}
              onChange={(e: any) => {
                setStart(e.target.value);
              }}
            />
          </div>

          {/* <div className="w-full">
            <label className="font-medium text-[12px]">
              Session Term <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="1st Term"
              className="mx-0 h-10  w-full"
              value={"1st Term"}
              // onChange={(e: any) => {
              //   setEnd();
              // }}
              defaultValue={"1st Term"}
            />
          </div> */}
        </div>

        <div className="w-full flex justify-end transition-all duration-300">
          {start !== "" ? (
            <Button
              name="Proceed"
              className="bg-blue-950  mx-0"
              onClick={handleSubmit}
            />
          ) : (
            <Button
              name="Can't Proceed"
              className="bg-[lightgray] text-blue-950 mx-0 cursor-not-allowed"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddSession;
