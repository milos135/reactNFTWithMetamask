import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const ConnectWallet: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const navigate = useNavigate();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        if (connected) {
          setConnected(false);
          setCurrentAccount(null);
          setBalance(null);
        } else {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            setConnected(true);
            setCurrentAccount(accounts[0]);
            const provider = window.ethereum;
            const balance = await provider.request({
              method: "eth_getBalance",
              params: [accounts[0], "latest"],
            });
            setBalance(balance);

            navigate("/profile");
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      {connected ? (
        <div>
          <p>Connected with address: {currentAccount}</p>
          {balance && <p>Balance: {balance}</p>}
          <button className="top-right-button" onClick={connectWallet}>
            Disconnect
          </button>
        </div>
      ) : (
        <button onClick={connectWallet}>
          {currentAccount ? "Disconnect" : "Connect Wallet"}
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
