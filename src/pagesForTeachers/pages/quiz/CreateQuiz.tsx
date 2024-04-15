import { useState } from "react";
import LittleHeader from "../../components/layout/LittleHeader";
import Button from "../../components/reUse/Button";
import Input from "../../components/reUse/Input";
import JustQuestionScreen from "./JustQuestionScreen";
import PreviewTest from "./PreviewTest";
import { useDispatch, useSelector } from "react-redux";
import { addTestInstruction } from "../../../global/reduxState";

const CreateQuiz = () => {
  const dispatch = useDispatch();
  const testQuestion = useSelector((state: any) => state.test);
  const [toggle, setToggle] = useState<boolean>(false);

  const [instruction, setInstruction] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [mark, setMark] = useState<string>("");

  return (
    <div>
      <LittleHeader name="Create Quiz Screen" />

      <div className="mt-10" />

      <div
        className="grid grid-cols-1  lg:grid-cols-5 relative
      
      "
      >
        <div className=" col-span-3 min-h-[60vh]">
          <PreviewTest />
        </div>

        <div className="order-first mb-10 lg:sticky lg:order-last border col-span-2 h-[790px] top-20 p-4 rounded-lg flex flex-col">
          <div className="flex">
            <Button
              name={"Set Instruction"}
              className="text-white bg-blue-950 py-3"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <Button
              name={"Set Questions"}
              className="text-white bg-blue-950 p-3"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </div>

          <div className="mt-10" />

          {toggle ? (
            <JustQuestionScreen />
          ) : (
            <div className="h-full flex flex-col">
              <p className="my-2 font-medium capitalize border-b">
                set Question Instruction
              </p>
              <div>
                <div className="mt-5">
                  <label className="text-[12px]">Enter Instruction</label>
                  <textarea
                    placeholder="Enter Instructions"
                    className="ml-0 w-full border bg-gray-100 text-[12px] h-[200px] rounded-md resize-none outline-none p-2"
                    value={instruction}
                    onChange={(e) => {
                      setInstruction(e.target.value);
                    }}
                  />
                </div>
                <div className="mt-1 w-full flex gap-2">
                  <div>
                    <label className="text-[12px]">Enter Time</label>
                    <Input
                      placeholder="Enter Time"
                      className="ml-0 w-full"
                      value={duration}
                      onChange={(e) => {
                        setDuration(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-[12px]">Enter Mark/Question</label>
                    <Input
                      placeholder="Enter Marks"
                      className="ml-0 w-full"
                      value={mark}
                      onChange={(e) => {
                        setMark(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1" />
              {testQuestion[0]?.instruction?.instruction ? (
                <Button
                  name={"add to Preview"}
                  className="text-white bg-blue-950 uppercase text-[12px]px-8 py-4"
                  onClick={() => {
                    setToggle(true);
                    let data: any = { duration, instruction, mark };
                    dispatch(addTestInstruction(data!));
                  }}
                />
              ) : (
                <Button
                  name={"add Instructions first"}
                  className="text-white bg-red-500 uppercase text-[12px]px-8 py-4"
                  onClick={() => {
                    setToggle(true);
                    let data: any = { duration, instruction, mark };
                    dispatch(addTestInstruction(data!));
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
