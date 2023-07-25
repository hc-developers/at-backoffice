import ControlledAccordions from "../Accordion"
import { Input } from "../Input"
import { Pager } from "../Pager"
import MiniDrawer from "../SideBar"
import { DivContainer } from "./style"

export const Container = () => {
    return (
        <>
            <DivContainer>

                <Input />
                <ControlledAccordions />
                <Pager />
                <MiniDrawer />
            </DivContainer>

        </>
    )
}