import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface RouteGuardProps {
  children: ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const navigate = useNavigate();

  const isMetamaskConnected =
    !!window.ethereum && window.ethereum.selectedAddress;

  if (!isMetamaskConnected) {
    navigate("/");
    return null;
  }

  return <>{children}</>;
};

export default RouteGuard;
