import { UnLazyImage } from "@unlazy/react";
import pix from "../../../assets/pix.jpg";
import { useSchoolTeacher } from "../../hook/useSchoolAuth";
import lodash from "lodash";
const TopRatedTeacher = () => {
  const { schoolTeacher } = useSchoolTeacher();

  let rate = lodash.orderBy(schoolTeacher?.staff, "staffRating");

  return (
    <div className="carousel carousel-end rounded-box w-96 gap-2 *:bg-slate-100">
      {rate?.map((props: any, i: number) => (
        <div key={props?._id} className="carousel-item w-1/2">
          {i < 3 && (
            <div className="w-full h-[300px]">
              {/* <img src={pix}/> */}

              <UnLazyImage
                alt={props?.title}
                thumbhash="1QcSHQRnh493V4dIh4eXh1h4kJUI"
                src={props?.avatar ? props?.avatar : pix}
                autoSizes
                className="w-full h-[70%] object-cover"
              />
              <div className="p-2 text-[12px]">
                <p>
                  Name:{" "}
                  <span className="capitalize font-bold">
                    {props.staffName}
                  </span>
                </p>
                <p>
                  Class:{" "}
                  <span className="capitalize font-bold">
                    {props?.classesAssigned}
                  </span>
                </p>
                <div className="flex items-center text-[10px] gap-3 mt-4 leading-tight">
                  {/* <p>
                    Grade Ratio:{" "}
                    <span className="capitalize font-bold">name</span>
                  </p> */}

                  <p>
                    Att. Ratio:{" "}
                    <span className="ml-1 capitalize font-bold">
                      {props?.staffRating}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopRatedTeacher;
