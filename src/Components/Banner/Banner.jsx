import banner from "../../assets/banner-main.png";
import "./Banner.css";
import ClaimBtn from "../Coin/Claim button";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div>
          <img src={banner} alt="A guy with a bat" />
        </div>
        <div className="banner-txt">
          <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>

          <p>Beyond Boundaries Beyond Limits</p>

          <ClaimBtn />
        </div>
      </div>
    </>
  );
};

export default Banner;
