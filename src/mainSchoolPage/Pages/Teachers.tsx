import pix from "../../assets/pix.jpg";

import { capitalizeWords } from "./WelcomePage";
import {
  useSchoolDataByName,
  useSchoolTeacherDetail,
} from "../../pages/hook/useSchoolAuth";
import { useParams } from "react-router-dom";
import { FC } from "react";
import lodash from "lodash";

interface iProps {
  props?: any;
}

const Teacher: FC<iProps> = ({ props }) => {
  const { schoolSubjectTeacherDetail } = useSchoolTeacherDetail(props);

  return (
    <div className="rounded-[10px] h-[70vh] overflow-hidden relative">
      {/* <Teacher props={props} /> */}
      <div className="h-[80%] w-[90%] bg-slate-200 rounded-md overflow-hidden">
        <img
          src={
            schoolSubjectTeacherDetail?.avatar
              ? schoolSubjectTeacherDetail?.avatar
              : pix
          }
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h1 className="text-start mt-7 font-medium text-[20px]">
          {schoolSubjectTeacherDetail?.staffName}
        </h1>
        <div className="text-start text-[12px] mb-3">
          Class Teacher:{" "}
          <span className="font-medium">
            {schoolSubjectTeacherDetail?.classesAssigned}
          </span>
        </div>
        <h1 className="text-start font-[300] text-blue-950 capitalize flex items-center">
          Performance:{" "}
          {schoolSubjectTeacherDetail?.staffRating ? (
            <p className="text-[20px] text-blue-900 ml-2">
              {`\u2605`.repeat(schoolSubjectTeacherDetail?.staffRating)}
            </p>
          ) : (
            <p className="text-[12px] ml-2">No Rating Yet</p>
          )}
        </h1>
      </div>
    </div>
  );
};

const Teachers = () => {
  const { schoolName } = useParams();
  const { schoolInfo } = useSchoolDataByName(capitalizeWords(schoolName));

  const data = lodash.shuffle(schoolInfo?.staff);

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      <div className="h-full w-[95%]">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="text-[23px] mt-20 font-[600] uppercase xl:text-[35px]">
            Our Awesome Teachers
          </div>
          <p className="text-center  md:w-[50%] mb-20">
            Nunc consectetur ex nunc, id porttitor leo semper eget. Vivamus
            interdum, mauris quis cursus sodales, urn
          </p>
        </div>
        <div>
          {data?.length > 0 ? (
            <div className="text-center grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {data?.map((props: any, i: number) => (
                <div key={props?._id}>{i < 4 && <Teacher props={props} />}</div>
              ))}
            </div>
          ) : (
            <div>no Teachers</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
