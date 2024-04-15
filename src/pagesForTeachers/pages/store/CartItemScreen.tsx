import { useDispatch, useSelector } from "react-redux";
import { displayCart } from "../../../global/reduxState";
import { MdClose, MdExpandLess } from "react-icons/md";
import Button from "../../../components/reUse/Button";

const CartItemScreen = () => {
  const dispatch = useDispatch();
  const cartToggle = useSelector((state: any) => state.cartToggle);

  const changeView = () => {
    if (!document.startViewTransition) {
      dispatch(displayCart(!cartToggle));
    } else {
      document.startViewTransition(() => {
        dispatch(displayCart(!cartToggle));
      });
    }
  };

  return (
    <div className="flex w-full h-full flex-col items-center ">
      <div className="flex w-full  justify-end  ">
        <div>
          <MdClose
            size={30}
            className="mr-10 my-5 cursor-pointer hover:text-red-600 hover:rotate-180 transition-all duration-300
          flex justify-center items-center rounded-full hover:bg-neutral-300
          "
            onClick={changeView}
          />
        </div>
      </div>

      <div
        className="flex  transition-all duration-300 2xl:w-[70%] justify-end py-10 rounded-md mx-2 w-[98%]"
        style={{
          background: "rgba(255,255,255,0.3)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(73, 154, 255, 0.3)",
        }}
      >
        <div className="px-5 w-full grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="pr-2">
            <p className="font-bold">Cart Total </p>
            <p className="font-medium my-5 flex justify-between items-center">
              <p>SubTotal</p>
              <p className="font-bold">₦100,000</p>
            </p>
            <p className="font-medium my-5 flex justify-between items-center">
              <p>Extra Charges</p>
              <p className="font-bold">₦0</p>
            </p>
            <div className="mt-10 border-t border-neutral" />

            <p className="font-medium my-1 flex justify-between items-center">
              <p>Total</p>
              <p className="font-bold">₦100,000</p>
            </p>

            <div className="w-full flex justify-center mt-10">
              <Button
                name="Process to Pay"
                className="bg-blue-950 w-full mx-0 py-5"
              />
            </div>
          </div>

          <div className="col-span-2 h-[300px] pl-2 md:border-l border-neutral-500 w-full flex flex-col items-center ">
            <div className="flex items-center w-full gap-2 border-b border-neutral py-5 ">
              <MdClose />
              <div className="w-[120px] h-[120px] border rounded-sm bg-red-500 ml-2" />

              <div className="w-[45%] ">
                <p className="font-bold text-[18px]">Title</p>
                <p className="leading-tight text-neutral-900">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </p>
              </div>
              <div className="w-[15%] flex flex-col justify-center h-full items-center gap-3">
                <p className="bg-blue-950 text-white rounded-md h-10 w-10 flex items-center justify-center font-bold cursor-pointer">
                  <MdExpandLess />
                </p>
                <p className="font-bold">4</p>
                <p className="bg-orange-600 text-white rounded-md h-10 w-10 flex items-center justify-center font-bold cursor-pointer rotate-180">
                  <MdExpandLess />
                </p>
              </div>
              <div className="w-[13%] flex justify-end font-bold text-[20px]">
                ₦200
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemScreen;
// 73, 154, 255, 0.2;
