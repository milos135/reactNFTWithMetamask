import { useMetaMask } from "../contexts/MetaMaskContext";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Profile() {
  const { isMetamaskConnected, address, balance } = useMetaMask();

  return (
    <Box textAlign="center">
      <h2>Profile Page</h2>
      {isMetamaskConnected ? (
        <Typography
          variant="body1"
          align="center"
          style={{ fontWeight: "bold", color: "black" }}
        >
          <p>Connected with address: {address}</p>
          {balance && <p>Balance: {balance} ETH</p>}
        </Typography>
      ) : (
        <Typography
          variant="body1"
          align="center"
          style={{ fontWeight: "bold", color: "black" }}
        >
          <p>Please connect to MetaMask to view your profile.</p>
        </Typography>
      )}

      <Typography
        variant="body1"
        align="center"
        style={{ fontWeight: "bold", color: "black" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Box>
  );
}

export default Profile;
