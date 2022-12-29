import { Paper, styled } from "@mui/material";

export const paper = (dark: string, ligtht: string, shadow: string) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? dark : ligtht,
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: shadow
    }));
    return Item
}
