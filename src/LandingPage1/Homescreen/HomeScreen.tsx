import ABetter from "./ABetter";
import Everything from "./Everything";
import StartUsing from "./StartUsing";
import TrustedBy from "./TrustedBy";
import WorkWithUs from "./WorkWithUs";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroScreen from "../Hero";
import UnlockScreen from "./UnlockScreen";
import PeopleScreen from "./PeopleScreen";

const LandingScreen = () => {
  return (
    <div>
      <ABetter />
      <TrustedBy />
      <div className="my-5" />
      <UnlockScreen />
      <div className="my-14" />
      <PeopleScreen />
      <div className="my-24" />
      <Everything />
      <StartUsing />
    </div>
  );
};

export default LandingScreen;
