import { useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { useStudentInfo } from "../../../pagesForStudents/hooks/useStudentHook";
import { createStudentArticle } from "../../../pagesForStudents/api/studentAPI";

const CreateArticle = () => {
  const [area, setArea] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [iValue, setIValue] = useState<string>("");
  const navigate = useNavigate();

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],

    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ align: [] }],

    ["clean"],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  const { studentInfo } = useStudentInfo();

  const handleSubmit = () => {
    createStudentArticle(studentInfo?.schoolIDs, studentInfo?._id, {
      title: iValue,
      content: value,
      desc: area,
    }).then((res) => {
      navigate(`/articles/${res?.data?._id}`);
    });
  };

  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" w-[85%] min-h-[500px]">
        <div className=" w-full h-[40px] flex gap-5">
          <input
            type="text"
            placeholder="Title"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className=" capitalize bg-white border-b rounded-none outline-none w-full px-4 h-full text-blue-950"
          />
          <textarea
            placeholder="Description"
            value={iValue}
            maxLength={100}
            onChange={(e) => setIValue(e.target.value)}
            className=" capitalize bg-white border-b rounded-none outline-none w-full px-4 h-full text-blue-950"
          />
        </div>
        <div className=" mt-10 mb-20 h-[500px]">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="h-full text-blue-950"
            modules={modules}
            placeholder="Content"
          />
        </div>
        <div className=" w-full">
          <button
            className="mt-10 lg:mt-0 py-2 px-4 rounded-md bg-blue-950 text-white"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
