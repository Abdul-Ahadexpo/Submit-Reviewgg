import "./App.css";

import Players from "./Components/Allplayers/Players";
import Banner from "./Components/Banner/Banner";
import Coin from "./Components/Coin/Coin";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/navbar/Navbar";
import { useState } from "react";

function App() {
  const [coins, setCoins] = useState(10000);

  const claimCoins = (amount) => {
    setCoins((prevCoins) => prevCoins + amount);
  };
  return (
    <>
      <Navbar />
      <Banner>
        <Coin coins={coins} claimCoins={claimCoins} />
      </Banner>
      <Players />
      <Footer />
    </>
  );
}

export default App;
