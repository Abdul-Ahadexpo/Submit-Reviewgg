import { useEffect, useState } from "react";
import Player from "./Player";

const Players = () => {
  const [Players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("../../../public/player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      <h2 className="avp">Available Players</h2>
      <div className="players-container">
        {Players.map((playerData, index) => (
          <Player
            key={index}
            img={playerData.img}
            player={playerData.player}
            country={playerData.country}
            skill={playerData.skill}
            batting_style={playerData.batting_style}
            bowling_style={playerData.bowling_style}
            price={playerData.price}
            coin={playerData.coin}
          />
        ))}
      </div>
    </div>
  );
};

export default Players;
