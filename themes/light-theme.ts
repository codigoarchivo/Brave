import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: grey[300]
        },
        primary: {
            main: '#fec80b'
        },
        secondary: {
            main: '#000000'
        },
        error: {
            main: red.A400
        },
    },
    components: {
        MuiAppBar: {
            defaultProps: {},
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#00000',
                }
            }
        },
        MuiBreadcrumbs: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent'
                }
            }
        }
    }
})