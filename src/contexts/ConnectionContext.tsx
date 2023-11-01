import React, { createContext, useContext, useState } from "react";

interface ConnectionContextType {
  isMetamaskConnected: boolean;
  setIsMetamaskConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectionContext = createContext<ConnectionContextType | undefined>(
  undefined
);

export function ConnectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(
    !!window.ethereum && window.ethereum.selectedAddress
  );

  return (
    <ConnectionContext.Provider
      value={{ isMetamaskConnected, setIsMetamaskConnected }}
    >
      {children}
    </ConnectionContext.Provider>
  );
}

export function useConnection() {
  const context = useContext(ConnectionContext);
  if (context === undefined) {
    throw new Error("useConnection must be used within a ConnectionProvider");
  }
  return context;
}
