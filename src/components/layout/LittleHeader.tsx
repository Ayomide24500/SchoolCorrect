import { FC } from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

interface iProps {
  name?: string;
  back?: boolean;
}

const LittleHeader: FC<iProps> = ({ name, back }) => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="flex items-center text-blue-950 ">
        Account <LiaGreaterThanSolid size={13} className="mx-4 " />{" "}
        <div className="capitalize">{name}</div>
        {back && (
          <div className="flex items-center">
            <LiaGreaterThanSolid size={13} className="mx-4 " />
            <div
              className="underline font-bold cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
              Go Back
            </div>
          </div>
        )}
      </div>
      <div className="text-blue-800 mt-5 font-[500] text-[30px] mb-10 capitalize">
        {name}
      </div>
    </div>
  );
};

export default LittleHeader;
