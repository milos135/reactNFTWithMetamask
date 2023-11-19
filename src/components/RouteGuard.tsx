import { useMetaMask } from "../contexts/MetaMaskContext";
import { Navigate } from "react-router-dom";

function RouteGuard() {
  const { isMetamaskConnected } = useMetaMask();

  if (!isMetamaskConnected) {
    // If not connected, redirect to the home page
    return <Navigate to="/" replace />;
  }

  return null;
}

export default RouteGuard;
