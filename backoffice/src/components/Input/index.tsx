import { Select } from "../Select";
import { CustomTextField, DivInput } from "./style"
import SearchIcon from '@mui/icons-material/Search';

export const Input = () => {
    return(
        <>
        <DivInput>
        <SearchIcon/>
        <CustomTextField id="outlined-basic" label="Pesquisar" variant="standard" InputProps={{disableUnderline: true,}} />
        <Select/>
        </DivInput>
        
        </>
    )
}