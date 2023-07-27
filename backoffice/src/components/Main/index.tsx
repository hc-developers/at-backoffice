import { Divider } from "@mui/material"
import ControlledAccordions from "../Accordion/AccordionBudget"
import AccordionRules from "../Accordion/AccordionRules"
import { AdjustRule } from "../AdjustRule"
import { Input } from "../Input"
import { Pager } from "../Pager"
import MiniDrawer from "../SideBar"
import { DivAdjustRule, MainDiv } from "./style"
import { SelectShow } from "../Select/SelectShow"

export const Main = () => {
    return(
        <>
        <MainDiv>
        <Input />
                <ControlledAccordions />
                <AccordionRules/>
                <Pager />
                <AdjustRule/>
                <SelectShow/>
                <MiniDrawer />
        </MainDiv>
  
        </>
    )
    } 