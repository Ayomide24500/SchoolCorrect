document.title = "View Staff";
// import moment from "moment";
import { useDispatch } from "react-redux";
import pix from "../../../assets/pix.jpg";
import Button from "../../../components/reUse/Button";
import LittleHeader from "../../../components/static/LittleHeader";
import { displayDelay, displayStaffComp } from "../../../global/reduxState";
import { Link } from "react-router-dom";
import { useSchoolTeacher } from "../../hook/useSchoolAuth";
import moment from "moment";

const ViewStaffScreen = () => {
  const dispatch = useDispatch();

  const handleDisplayStaff = () => {
    if (!document.startViewTransition) {
      dispatch(displayStaffComp(true));
      dispatch(displayDelay(true));
    } else {
      document.startViewTransition(() => {
        dispatch(displayDelay(true));
        dispatch(displayStaffComp(true));
      });
    }
  };

  const { schoolTeacher } = useSchoolTeacher();

  return (
    <div className="">
      {/* header */}
      <div className="mb-0" />
      <LittleHeader name={"viewing all Staffs"} />

      <div className="mt-10" />

      <div className="flex w-full justify-end">
        <Button
          name="Add a new Recruit"
          className="uppercase text-[12px] font-medium bg-blue-950 py-4 px-8 hover:bg-blue-900 cursor-pointer transition-all duration-300 "
          onClick={handleDisplayStaff}
        />
      </div>
      <div
        className="py-6 px-2 border rounded-md min-w-[300px] overflow-y-hidden "
        style={{ color: "var(--secondary)" }}
      >
        <div className="text-[gray] w-[2060px] flex  gap-2 text-[12px] font-medium uppercase mb-10 px-4">
          <div className="w-[130px] border-r">Reg. Date</div>
          <div className="w-[80px] border-r">Status</div>
          <div className="w-[100px] border-r">Attendance Ratio</div>
          <div className="w-[150px] border-r">Staff Image</div>
          <div className="w-[200px] border-r">Staff Name</div>

          <div className="w-[100px] border-r">Staff Role</div>

          <div className="w-[150px] border-r">Phone</div>
          <div className="w-[200px] border-r">Contact </div>
          <div className="w-[200px] border-r">Subjects Taking</div>
          <div className="w-[200px] border-r">Class Handle</div>
          <div className="w-[200px] border-r">Class Teaches</div>
          <div className="w-[80px] border-r">Rate</div>
          <div className="w-[180px] border-r">Action</div>
        </div>

        <div className=" w-[2060px] overflow-hidden">
          {schoolTeacher?.staff?.map((props: any, i: number) => (
            <div key={props}>
              <div>
                <div
                  className={`w-full flex items-center gap-2 text-[12px] font-medium  h-16 px-4 my-2  overflow-hidden ${
                    i % 2 === 0 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  {/* start */}

                  <div className="w-[130px] border-r">
                    {moment(props?.createdAt)?.format("ll")}
                  </div>

                  <div
                    className={`w-[80px] border-r ${
                      props?.activeStatus ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {props?.activeStatus ? "Active" : "Idle"}
                  </div>

                  <div className="w-[100px] border-r">2:10</div>
                  {/* name */}
                  <div className="w-[150px] flex justify-center border-r">
                    <img
                      className="w-14 h-14 rounded-md border object-cover"
                      src={props?.avatar ? props?.avatar : pix}
                    />
                  </div>
                  <div className="w-[200px] border-r">{props?.staffName}</div>

                  {/* check */}
                  <div className="w-[100px] border-r  ">{props?.staffRole}</div>
                  <div className="w-[150px] border-r  ">
                    {props?.phone
                      ? props?.phone
                      : "Phone Number Not Yet Assigned"}
                  </div>

                  <div className="w-[200px] border-r  ">
                    {props?.staffAddress
                      ? props?.staffAddress
                      : "Address Not Yet Assigned"}
                  </div>

                  {/* check II */}

                  <div className="w-[200px] border-r  ">
                    {props?.subjectAssigned?.length > 0 ? (
                      <div>
                        {props?.subjectAssigned?.map((props: any) => (
                          <div className="gap-2">
                            <p>
                              {props?.title}: {props?.classMeant}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      "Not Yet Assigned"
                    )}
                  </div>

                  {/*good  */}
                  <div className="w-[200px] border-r  ">
                    {props?.classesAssigned ? (
                      <div className="gap-2">
                        <p>{props?.classesAssigned}</p>
                      </div>
                    ) : (
                      "Not Yet Assigned"
                    )}
                  </div>
                  <div className="w-[200px] border-r  ">
                    {props?.classAssigned
                      ? props?.classAssigned
                      : "Not Yet Assigned"}
                  </div>

                  <div className="w-[80px] border-r">{props?.staffRating}</div>

                  <Link
                    to={`staff-details/${props?._id}`}
                    className="w-[180px] border-r"
                  >
                    <Button
                      name="View Detail"
                      className="py-3 w-[85%] bg-black text-white  hover:bg-neutral-800 transition-all duration-300"
                      onClick={() => {}}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewStaffScreen;
