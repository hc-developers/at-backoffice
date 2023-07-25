import { Stack, Pagination } from "@mui/material"

export const Pager = () => {
    return(
        <>
    <Stack spacing={2}>
      <Pagination count={10} />
    </Stack>
        </>
    )
}