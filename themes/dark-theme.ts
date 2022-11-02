import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        // palette values for dark mode
        background: {
            default: '#006487',
        },
        primary: {
            main: '#2f92b7'
        },
        secondary: {
            main: '#E1E2E1'
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
        MuiCardContent: {
            styleOverrides: {
                root: {
                    paddingBottom: '14px !important'
                }
            }
        }
    }
})