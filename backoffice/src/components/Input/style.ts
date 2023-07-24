import { Box, TextField, styled } from "@mui/material";

export const CustomTextField = styled(TextField)`
border-radius: 3px;
max-width: 1449px;
width: 100%;
&.MuiOutlinedInput-root {
    border: none;
  }
`;

export const DivInput = styled(Box)`
display: flex;
flex-direction: row;
align-items: center;
`