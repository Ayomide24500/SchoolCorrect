import { FC, useState } from "react";
import { MdCheck, MdClose } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

import "react-datepicker/dist/react-datepicker.css";
import { mutate } from "swr";
import { useReadMyClassInfoData, useStudentInfo } from "./hooks/useStudentHook";
import { useClassSubject } from "../pagesForTeachers/hooks/useTeacher";
import { updateStudentParentEmail } from "./api/studentAPI";
import Input from "../components/reUse/Input";
import Button from "../components/reUse/Button";
import ClipLoader from "react-spinners/ClipLoader";

interface iProps {
  props?: any;
}

const UpdateEmail: FC<iProps> = ({ props }) => {
  const [stated, setStated] = useState<boolean>(false);
  const [parentEmail, setParentEmail] = useState<string>("");

  const { studentInfo } = useStudentInfo();

  const { state } = useReadMyClassInfoData(studentInfo?.classAssigned);
  const { subjectData } = useClassSubject(state?._id);

  const onCreateAssignment = () => {
    setStated(true);

    updateStudentParentEmail(studentInfo?.schoolIDs, studentInfo?._id, {
      parentEmail,
    }).then((res: any) => {
      if (res?.status === 200) {
        toast.success("Parent's email added/updated successfully");

        setTimeout(() => {
          setStated(false);
        }, 3000);
      } else if (res?.status === 404 || !res?.status) {
        toast.error("Couldn't update parent's email");
      }
    });
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={true} />
      <div className=" text-[13px] font-medium">
        <div className="" />
        <input
          type="checkbox"
          checked={studentInfo?.parentEmail ? false : true}
          id="update_email"
          className="modal-toggle"
        />
        <div className="modal bgw text-blue-950 text-left">
          <div className="modal-box bg-gray-100 rounded-md">
            <div className="flex items-center justify-between my-4 ">
              <p className="font-bold">Input Parent's Email</p>

              <label
                htmlFor="update_email"
                className="hover:bg-blue-50 transition-all duration-300  cursor-pointer rounded-full flex items-center justify-center w-6 h-6 font-bold "
              >
                <MdClose />
              </label>
            </div>
            <hr />
            <div className="mt-2 leading-tight text-[13px] font-medium">
              Provide the email address of the parent or guardian associated
              with this student.
              <br />
              <br />
              <div className="flex gap-2  items-center">
                <p>
                  Parent's Email:{" "}
                  <span className="font-medium">{parentEmail}</span>
                </p>
                {parentEmail.length > 0 && (
                  <div className="flex items-center font-bold">
                    <span>Email provided</span>
                    <MdCheck className="text-green-500 text-[25px] mb-1 " />
                  </div>
                )}
              </div>
            </div>
            <div className="mt-10 w-full gap-2 flex flex-col items-center">
              <div className="w-full">
                <div className="flex w-full gap-2 mb-10">
                  <div className="w-full">
                    <label className="font-medium text-[12px]">
                      Parent's Email Address{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <Input
                      className="w-[95%]"
                      value={parentEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setParentEmail(e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end transition-all duration-300">
              {parentEmail !== "" ? (
                <label
                  htmlFor="update_email"
                  className="bg-blue-950 text-white py-4 px-8 rounded-md flex items-center gap-2 cursor-pointer "
                  onClick={onCreateAssignment}
                >
                  <div>Proceed</div>
                  {stated && <ClipLoader size={20} color="white" />}
                </label>
              ) : (
                <Button
                  name="Can't Proceed"
                  className="bg-[lightgray] text-blue-950 mx-0 cursor-not-allowed"
                />
              )}
            </div>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor="update_email">
          Close
        </label>
      </div>
    </div>
  );
};

export default UpdateEmail;
