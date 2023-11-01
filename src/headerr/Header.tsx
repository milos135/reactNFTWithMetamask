import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useMetaMask } from "../contexts/MetaMaskContext";

const Header = () => {
  const { isMetamaskConnected, connectToMetamask, disconnectFromMetamask } =
    useMetaMask();

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    marginRight: "16px",
  };

  const toolbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "green",
  };

  const linksContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <AppBar position="static">
      <Toolbar style={toolbarStyle}>
        <div style={linksContainerStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/profile" style={linkStyle}>
            Profile
          </Link>
        </div>
        <Box>
          {isMetamaskConnected ? (
            <Button color="inherit" onClick={disconnectFromMetamask}>
              Disconnect MetaMask
            </Button>
          ) : (
            <Button color="inherit" onClick={connectToMetamask}>
              Connect MetaMask
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
