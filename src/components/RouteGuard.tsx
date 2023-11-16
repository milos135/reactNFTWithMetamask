import { useMetaMask } from "../contexts/MetaMaskContext";
import { Navigate } from "react-router-dom";

function RouteGuard() {
  const { isMetamaskConnected } = useMetaMask();

  if (!isMetamaskConnected) {
    // Ako niste povezani, onemogućite pristup stranici "Profile" i preusmerite korisnika na početnu stranicu
    return <Navigate to="/" replace />;
  }

  return null;
}

export default RouteGuard;
