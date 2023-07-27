import { ListItemText, styled } from "@mui/material"
import ControlledAccordions from "../Accordion/AccordionBudget"
import { Input } from "../Input"
import { MainDiv } from "../Main/style"
import { Pager } from "../Pager"
import MiniDrawer from "../SideBar"
import { DivContainer, DivHeaderContainer } from "./style"
import AccordionRules from "../Accordion/AccordionRules"
import { Main } from "../Main"
import { AdjustRule } from "../AdjustRule"

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    color: '#364D7F',
  }));

export const Container = () => {
    return (
        <>
            <DivContainer>
                <DivHeaderContainer>
                <StyledListItemText>Regras de orçamento</StyledListItemText>
                <StyledListItemText>Olá, Felipe</StyledListItemText>
                </DivHeaderContainer>

                <Main>
                <Input />
                <ControlledAccordions />
                <AccordionRules/>
                <Pager />
                
                <MiniDrawer />
                </Main>

            </DivContainer>

        </>
    )
}