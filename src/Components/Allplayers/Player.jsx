import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faHand, faUser } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Player = ({
  id,
  img,
  player,
  country,
  skill,
  batting_style,
  bowling_style,
  price,
  coin,
}) => {
  const [isBought, setIsBought] = useState(false);

  const handleBuy = () => {
    setIsBought(true);
    if (coin >= price || isBought) {
      toast.success(`${player} is in your team`);
      setIsBought(true);
    } else {
      toast.error(`your account balance is low. You need ${price}`);
      setIsBought(false);
    }
  };

  return (
    <div className="player-card">
      <span className="hidden">{id}</span>

      <img src={img} alt="" />

      <h3>
        <FontAwesomeIcon icon={faUser} />_{player}
      </h3>

      <p>
        <FontAwesomeIcon icon={faFlag} /> {country}
      </p>

      <p>
        <span>Skill:</span> {skill}
      </p>

      <p>
        <span>
          <FontAwesomeIcon icon={faHand} />:
        </span>
        {batting_style}
      </p>

      <p>
        <span>Bowling Style:</span> {bowling_style}
      </p>
      <p>Price: {price}</p>
      <div className="buy-btn-txt">
        <button onClick={handleBuy} className={isBought ? "done" : "jut-buy"}>
          {isBought ? "Player Added to Team" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default Player;
