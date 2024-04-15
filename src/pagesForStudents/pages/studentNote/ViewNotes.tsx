import { useParams } from "react-router-dom";
import LittleHeader from "../../../components/layout/LittleHeader";
import { useLessonNote } from "../../../pagesForTeachers/hooks/useTeacher";
import Button from "../../../components/reUse/Button";
import { useState } from "react";
import { rateNote } from "../../api/studentAPI";
import { useStudentInfo } from "../../hooks/useStudentHook";

const ViewClassNoteDetail = () => {
  const { noteID } = useParams();
  const { studentInfo } = useStudentInfo();
  const { lessonNoteData } = useLessonNote(noteID!);
  const [state, setState] = useState<number>(0);

  const check = lessonNoteData?.rateData?.some((el: any) => {
    return el.id === studentInfo?._id;
  });

  return (
    <div>
      <LittleHeader name={`${""} Lesson Note Details`} />

      <div className="mt-10">
        <div className="text-[12px] font-medium mb-5">Lesson Details</div>
        <p className="text-[25px] font-bold">{lessonNoteData?.topic}</p>
        <div className="flex gap-2 text-[12px] font-medium mb-10">
          <p>{lessonNoteData?.classes}</p> &middot;
          <p>{lessonNoteData?.subject}</p>&middot;
          <p
            className={`${
              lessonNoteData?.adminSignation ? "text-green-500" : "text-red-500"
            }`}
          >
            {lessonNoteData?.rate ? lessonNoteData?.rate.toFixed(2) : "0"}
          </p>
        </div>

        <div>
          Sub Topic:
          <span className="uppercase font-bold">
            {" "}
            {lessonNoteData?.subTopic}
          </span>
        </div>
        <div className="flex gap-2 text-[12px] font-medium mb-10">
          <p>Duration: {lessonNoteData?.duration}</p> &middot;
          <p>Week: {lessonNoteData?.week}</p>
        </div>
        <p className="mb-1 text-[12px] font-bold">Lesson Note Content:</p>
        <div
          className="border rounded-md px-2 py-5 text-[14px]"
          dangerouslySetInnerHTML={{ __html: `${lessonNoteData?.content}` }}
        />
        <div className="mt-5" />
        <div className="text-[12px]">
          <p className="font-bold mb-2">Lesson Note Evaluation</p>
          <p>{lessonNoteData?.evaluation}</p>
        </div>
        <div className="mt-5" />
        <div className="text-[12px]">
          <p className="font-bold mb-2">Lesson Note Summary</p>
          <p>{lessonNoteData?.summary}</p>
        </div>
        <div className="my-5 border-t" />
        <div className="mt-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <p className="mb-1 text-[12px] font-bold">
              Lesson Note Presentation:
            </p>
            <div className="text-[12px]">{lessonNoteData?.presentation}</div>
          </div>
          <div>
            <p className="mb-1 text-[12px] font-bold">
              Lesson Note Previous Knowledge :
            </p>
            <div className="text-[12px]">
              {lessonNoteData?.previousKnowledge}
            </div>
          </div>
        </div>

        <div className="mt-10" />
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-2">
          <div className="text-[12px]">
            <p className="font-medium">Peroid</p>
            <p>{lessonNoteData?.period}</p>
          </div>

          <div className="text-[12px]">
            <p className="font-medium">Reference Material</p>
            <p>{lessonNoteData?.referenceMaterial}</p>
          </div>

          <div className="text-[12px]">
            <p className="font-medium">Instructional Material</p>
            <p>{lessonNoteData?.instructionalMaterial}</p>
          </div>

          <div className="text-[12px]">
            <p className="font-medium">Instructional Material</p>
            <p>{lessonNoteData?.instructionalMaterial}</p>
          </div>
        </div>

        <div className="mt-10" />
        <div className="flex items-center gap-2">
          <select
            className="select select-bordered w-full max-w-xs"
            value={state}
            onChange={(e: any) => {
              setState(e.target.value);
            }}
          >
            <option disabled selected defaultValue={"Rate this Lesson"}>
              Rate this Lesson
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          {check ? (
            <Button name={"You've Rated"} className="bg-[gray] text-white" />
          ) : (
            <Button
              name={"Rate Now"}
              className="bg-blue-950 text-white"
              onClick={() => {
                rateNote(studentInfo?._id, noteID!, state).then((res) => {});
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewClassNoteDetail;
