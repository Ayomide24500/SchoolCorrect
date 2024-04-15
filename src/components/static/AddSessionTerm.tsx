import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displaySession, displaySessionTerm } from "../../global/reduxState";
import { MdClose } from "react-icons/md";
import Input from "../reUse/Input";
import Button from "../reUse/Button";
import {
  createNewSession,
  createNewSessionTerm,
} from "../../pages/api/schoolAPIs";
import {
  useSchoolCookie,
  useSchoolData,
  useViewSingleSession,
} from "../../pages/hook/useSchoolAuth";
import toast, { Toaster } from "react-hot-toast";
import { mutate } from "swr";

const AddSessionTerm = () => {
  const termID = useSelector((state: any) => state.termID);
  const dispatch = useDispatch();
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const { dataID } = useSchoolCookie();
  const { data } = useSchoolData();

  const handleToggleMenuFalse = () => {
    if (!document.startViewTransition) {
      dispatch(displaySessionTerm(false));
    } else {
      document.startViewTransition(() => {
        dispatch(displaySessionTerm(false));
      });
    }
  };

  const { sessionData } = useViewSingleSession(termID);

  const handleSubmit = () => {
    createNewSessionTerm(termID, { term: end }).then((res) => {
      if (res.status === 201) {
        console.log(res);
        mutate(`api/view-school-session/${data?._id}`);
        if (!document.startViewTransition) {
          dispatch(displaySessionTerm(false));
          toast.success("Term Session created");
        } else {
          document.startViewTransition(() => {
            toast.error("Something went wrong");
            dispatch(displaySessionTerm(false));
          });
        }
      } else {
        if (!document.startViewTransition) {
          dispatch(displaySessionTerm(false));
          mutate(`api/view-school-session/${data?._id}`);
          toast.error(`${res?.response?.data?.message}`);
        } else {
          document.startViewTransition(() => {
            mutate(`api/view-school-session/${data?._id}`);

            toast.success("Term Created Successfully");
            // `${
            //   res?.status === 201
            //     ? res?.message
            //     : res?.response?.data?.message
            // }`
            dispatch(displaySessionTerm(false));
          });
        }
      }
    });
  };
  return (
    <div className="flex justify-center bg-blue-50   ">
      <Toaster position="top-center" reverseOrder={true} />
      <div className="w-[500px] min-h-[300px] border rounded-md bg-white shadow-lg p-4">
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
          Please note that each Term you create, holds records of that
          particular Term.
        </p>

        <div className="mt-10 w-full gap-2 flex items-center">
          <div className="w-full">
            <label className="font-medium text-[12px]">
              Session Year <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="Session Year: 2023/2024"
              className="mx-0 h-10 w-full"
              defaultValue={sessionData?.year}
              value={sessionData?.year}
            />
          </div>

          <div className="w-full">
            <label className="font-medium text-[12px]">
              Session Term <span className="text-red-500">*</span>
            </label>
            <Input
              placeholder="1st Term"
              className="mx-0 h-10  w-full"
              value={end}
              onChange={(e: any) => {
                setEnd(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-full flex justify-end transition-all duration-300">
          {end !== "" ? (
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

export default AddSessionTerm;
