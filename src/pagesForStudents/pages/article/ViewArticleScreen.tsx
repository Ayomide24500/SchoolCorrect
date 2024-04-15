import dummy from "../../../assets/dummy.jpg";
import { useParams } from "react-router-dom";
import moment from "moment";
import LittleHeader from "../../../components/layout/LittleHeader";
import { useOneArticle } from "../../hooks/useStudentHook";
document.title = "Viewing Article";

const ViewArticleScreen = () => {
  const { view } = useParams();

  const { oneArticle } = useOneArticle(view!);

  return (
    <div>
      <LittleHeader name={document.title} />

      <div className="w-full flex justify-center">
        <div className="space-y-4 md:w-[70%]">
          <div className="text-[28px] text-black font-bold">
            <strong>{oneArticle?.title}</strong>
          </div>

          <div className="flex items-center gap-4 text-black font-semibold">
            <div className="">
              <img
                src={dummy}
                alt=""
                className="avatar rounded-full w-[50px]"
              />
            </div>
            <div>
              <div>{oneArticle?.student ? oneArticle?.student : "s"}</div>
              <div className="">
                <span className="text-zinc-500 text-[14px]">Published:</span>{" "}
                {moment(oneArticle?.createdAt).fromNow()}
              </div>
            </div>
          </div>

          <div
            className="w-full text-black  mt-20"
            dangerouslySetInnerHTML={{ __html: oneArticle?.content }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ViewArticleScreen;
