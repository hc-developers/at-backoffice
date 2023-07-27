import { FormControl, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { BodyAdjustRule } from "./style";
import fontSizes from "../../Theme/fontSize";
import { theme } from "../../Theme/Colors";

export const AdjustRule = () => {
  return (
    <>
      <BodyAdjustRule>
        <Typography variant="h5" sx={{color: theme.palette.purple[400] }}>I N S T A N T</Typography>
        <Typography sx={{ color: "#000000" }}>Preço</Typography>
        <FormControl>
        <OutlinedInput
          id="component-outlined"
        />
        </FormControl>
        <Typography sx={{ color: "#000000", fontSize: fontSizes.backOffice.h3.md }}>
          Prazo
        </Typography>

        <FormControl>
        <OutlinedInput
          id="component-outlined"
        />
        </FormControl>
      </BodyAdjustRule>
    </>
  );
};
