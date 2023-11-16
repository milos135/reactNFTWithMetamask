import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledProfileWrapper = styled(Box)`
  max-width: 1440px;
  margin: 0 auto;
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
  height: 88vh;
  margin: 10px 10px 10px 10px;
  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    margin: 10px 0;
    font-weight: bold;
  }
`;
