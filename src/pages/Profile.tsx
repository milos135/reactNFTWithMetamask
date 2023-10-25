import { useMetaMask } from "../MetaMaskContext";
import ConnectWallet from "../components/ConnectWallet";

function Profile() {
  const {
    isMetamaskConnected,
    address,
    balance,
    connectToMetamask,
    disconnectFromMetamask,
  } = useMetaMask();

  return (
    <div>
      <h2>Profile Page</h2>
      {isMetamaskConnected ? (
        <div>
          <p>Connected with address: {address}</p>
          {balance && <p>Balance: {balance} ETH</p>}
          <button onClick={disconnectFromMetamask}>Disconnect</button>{" "}
        </div>
      ) : (
        <div>
          <p>Please connect to MetaMask to view your profile.</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
