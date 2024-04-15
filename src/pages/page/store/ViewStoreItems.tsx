document.title = "School's Store";
import { useState } from "react";
import LittleHeader from "../../../components/layout/LittleHeader";
import Button from "../../../components/reUse/Button";
import StoreView from "./StoreView";
import StoreItems from "./StoreItems";
import { useDispatch, useSelector } from "react-redux";
import CartItemScreen from "./CartItemScreen";
import { displayCart } from "../../../global/reduxState";

const ViewStoreItems = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);
  const cartToggle = useSelector((state: any) => state.cartToggle);

  console.log(cartToggle);

  const changeView = () => {
    if (!document.startViewTransition) {
      setToggle(!toggle);
      dispatch(displayCart(false));
    } else {
      document.startViewTransition(() => {
        setToggle(!toggle);
        dispatch(displayCart(false));
      });
    }
  };
  return (
    <div className="text-blue-950 relative">
      <LittleHeader name={toggle ? "School's Store" : "School's items"} />

      <div className="my-20" />

      <div className="flex items-center mb-10">
        <Button
          name="Store View"
          className="ml-0 bg-orange-500  "
          onClick={changeView}
        />

        <Button
          name="Store Items"
          className="ml-0 bg-blue-950 "
          onClick={changeView}
        />
      </div>

      <div className="border rounded-md w-full relative">
        <div className="p-2">{toggle ? <StoreView /> : <StoreItems />}</div>

        {cartToggle && (
          <div
            className="absolute top-0 p-0 w-full min-h-[300px] pb-10
             rounded-md"
            style={{
              background: "rgba(73, 154, 255, 0.2)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(73, 154, 255, 0.3)",
            }}
          >
            <CartItemScreen />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewStoreItems;
