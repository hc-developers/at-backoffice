import { Accordion, AccordionSummary, Box,  Button,  styled } from "@mui/material";

export const BoxRow = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;

`

export const DivHeaderContainer = styled(Box)`
    width: 600px;
    display: flex;
    gap: 50px;
    margin-left: 30px;
`
export const AccordionRulesStyle = styled(Accordion)`
    width: 100%;
    max-width: 1600px;
    display: flex;
    flex-direction: row;
    
    
`
export const SumaryAccordion = styled(AccordionSummary)`
        width: 100%;
        max-width: 1449px;
        display: flex;
        flex-direction: row;
        gap: 150px;
`

export const BtnRules = styled(Button)`
        background: transparent;
`