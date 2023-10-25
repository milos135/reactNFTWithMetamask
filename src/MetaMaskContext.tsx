import React, { createContext, useContext, useState, useEffect } from "react";

interface MetaMaskContextType {
  isMetamaskConnected: boolean;
  address: string | null;
  balance: string | null;
  connectToMetamask: () => Promise<void>;
  disconnectFromMetamask: () => void;
}

const MetaMaskContext = createContext<MetaMaskContextType | undefined>(
  undefined
);

export function MetaMaskProvider({ children }: { children: React.ReactNode }) {
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const connectToMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setIsMetamaskConnected(true);
          setAddress(accounts[0]);
          const provider = window.ethereum;
          const balance = await provider.request({
            method: "eth_getBalance",
            params: [accounts[0], "latest"],
          });
          setBalance(balance);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const disconnectFromMetamask = () => {
    if (window.ethereum) {
      window.ethereum.removeAllListeners();
    }
    setIsMetamaskConnected(false);
    setAddress(null);
    setBalance(null);
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setIsMetamaskConnected(true);
      setAddress(window.ethereum.selectedAddress);
    }
  }, []);

  return (
    <MetaMaskContext.Provider
      value={{
        isMetamaskConnected,
        address,
        balance,
        connectToMetamask,
        disconnectFromMetamask,
      }}
    >
      {children}
    </MetaMaskContext.Provider>
  );
}

export function useMetaMask() {
  const context = useContext(MetaMaskContext);
  if (!context) {
    throw new Error("useMetaMask must be used within a MetaMaskProvider");
  }
  return context;
}
export default MetaMaskContext;
