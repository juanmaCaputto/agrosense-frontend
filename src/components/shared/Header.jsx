import { CssBaseline, IconButton, Typography } from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { styled } from '@mui/material/styles';

export function Header() {
    const [counter, setCounter] = useState(0);
    const [open, setOpen] = useState(false);

    const setOpenSorpresa = (e) => {
        setOpen(e);
        if (e && counter < 5) {
            console.log("me abriste! :D");
            setCounter(counter + 1);
        } else if (!e && counter < 5) {
            console.log("me cerraste... :(");
        } else if (counter === 5) {
            setCounter(counter + 1);
            console.log("Ta basta, comportate.");
        }
    };

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: 240,
            width: `calc(100% - ${240}px)`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={setOpenSorpresa}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Agrosense
                    </Typography>
                </Toolbar>
            </AppBar>
            <SideMenu setOpen={setOpenSorpresa} open={open} />
        </Box>
    );
}
