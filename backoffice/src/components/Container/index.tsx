import { ListItemText, styled } from "@mui/material"
import ControlledAccordions from "../Accordion"
import { Input } from "../Input"
import { MainDiv } from "../Main/style"
import { Pager } from "../Pager"
import MiniDrawer from "../SideBar"
import { DivContainer, DivHeaderContainer } from "./style"

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

                <MainDiv>
                <Input />
                <ControlledAccordions />
                <Pager />
                <MiniDrawer />
                </MainDiv>

            </DivContainer>

        </>
    )
}