import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledPageWrapper = styled(Box)`
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template-rows: 5% 95%;
`;

export const StyledProfile = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #cfe7fa;
  color: black;
  border-radius: 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
  height: auto;
  margin: 0;
  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    font-weight: bold;
  }
`;
