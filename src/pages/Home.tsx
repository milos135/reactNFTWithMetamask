import React from "react";
import { Link } from "react-router-dom";
import { useMetaMask } from "../MetaMaskContext";
import NFTCard from "../components/NFTCard";
import "./pages.styles.css";

function Home() {
  const { isMetamaskConnected, connectToMetamask, disconnectFromMetamask } =
    useMetaMask();

  const handleConnectAndFetchData = async () => {
    if (!isMetamaskConnected) {
      await connectToMetamask();
    }
  };

  return (
    <div>
      <h2>Home Page</h2>

      {isMetamaskConnected ? (
        <div>
          <Link to="/profile">Go to Profile</Link>
          <button onClick={disconnectFromMetamask} className="connect-button">
            Disconnect
          </button>{" "}
        </div>
      ) : (
        <button onClick={handleConnectAndFetchData} className="connect-button">
          Connect to MetaMask
        </button>
      )}
      <NFTCard />
    </div>
  );
}

export default Home;

// import React from "react";
// import ConnectWallet from "../components/ConnectWallet";
// import "../styles.css";

// const Home = () => {
//   return (
//     <div>
//       <h2 className="title">Home Page</h2>
//       <ConnectWallet />
//     </div>
//   );
// };

// export default Home;
