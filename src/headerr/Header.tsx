import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useMetaMask } from "../contexts/MetaMaskContext";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  && {
    background: linear-gradient(
      109.6deg,
      rgb(9, 9, 121) 11.2%,
      rgb(144, 6, 161) 53.7%,
      rgb(0, 212, 255) 100.2%
    );
    height: 7vh;
    display: flex;
    justify-content: space-between;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  margin-right: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const { isMetamaskConnected, connectToMetamask, disconnectFromMetamask } =
    useMetaMask();

  return (
    <StyledAppBar position="static">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Box>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/profile">Profile</StyledLink>
        </Box>
        <ButtonContainer>
          {isMetamaskConnected ? (
            <Button color="inherit" onClick={disconnectFromMetamask}>
              Disconnect MetaMask
            </Button>
          ) : (
            <Button color="inherit" onClick={connectToMetamask}>
              Connect MetaMask
            </Button>
          )}
        </ButtonContainer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
