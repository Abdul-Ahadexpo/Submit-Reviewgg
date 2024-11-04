import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import "./Coin.css";

const Coin = () => {
  const [coins, setCoins] = useState(10000);
  const lolCoins = (amount) => {
    setCoins((prevCoins) => prevCoins + amount);
  };
  return (
    <div className="coin">
      <div>
        Coins: <span className="Coin">{coins}</span>
        <FontAwesomeIcon icon={faCoins} />
        <p>{lolCoins}</p>
      </div>
    </div>
  );
};

export default Coin;
