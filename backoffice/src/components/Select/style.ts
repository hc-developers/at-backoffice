import {  Select, styled } from "@mui/material";


export const CustomSelect = styled(Select)(({ theme }) => ({
    borderRadius: '12px',
    maxWidth: '140px',
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    borderColor: theme.palette.primary.main,
  
    // Remove a animação ao clicar no select
    '&.MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  
    // Estilo para a borda roxa
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.purple[400]
    },
  }));