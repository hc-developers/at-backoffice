import { FormControl, InputLabel, MenuItem } from '@mui/material';
import { CustomSelect } from './style';


export const Select = () => {
    return(
        <>
 <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filtrar por</InputLabel>
        <CustomSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filtrar por"
          variant="outlined"
        >
          <MenuItem value={10}>Trancrição</MenuItem>
          <MenuItem value={20}>Lengendagem</MenuItem>
          <MenuItem value={30}>Trad. simples</MenuItem>
        </CustomSelect>
      </FormControl>
        
        </>
    )
}