import { Link } from "react-router-dom";
import { AppBar, Button, Box } from "@mui/material";
import styled from "styled-components";
import { useMetaMask } from "../contexts/MetaMaskContext";

const StyledAppBar = styled(AppBar)`
  && {
    background: linear-gradient(
      109.6deg,
      rgb(9, 9, 121) 11.2%,
      rgb(144, 6, 161) 53.7%,
      rgb(0, 212, 255) 100.2%
    );

    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  margin: 0 16px;
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
      <Box>
        <StyledLink to="/">Home</StyledLink>
        {/* Show the link to the profile page only if MetaMask is connected */}
        {isMetamaskConnected && <StyledLink to="/profile">Profile</StyledLink>}
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
    </StyledAppBar>
  );
};

export default Header;
