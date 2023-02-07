import { CssBaseline, Grid, IconButton, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { styled } from "@mui/material/styles";
import SideMenuMobile from "./SideMenuMobile";
import { useMediaQuery } from "react-responsive";

export function Header() {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });
    const [counter, setCounter] = useState(0);
    const [open, setOpen] = useState(false);

    const setOpenSorpresa = (openNew) => {
        setOpen(openNew);
        if (openNew && counter < 5) {
            console.log("me abriste! :D");
            setCounter(counter + 1);
        } else if (!openNew && counter < 5) {
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
                        onClick={() => setOpenSorpresa(!open)}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                            color: "#F7FBFF",
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container>
                        <Grid item xs={8} sm={2}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                style={{
                                    color: "#F7FBFF",
                                }}
                            >
                                {!isSmall || (isSmall && !open) ? (
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/logo-full-agrosense.png"
                                        }
                                        style={{
                                            paddingTop: "15px",
                                            width: "60%",
                                        }}
                                        alt="Logo"
                                    />
                                ) : (
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/logo-agrosense.png"
                                        }
                                        style={{
                                            paddingTop: "10px",
                                            width: "30%",
                                        }}
                                        alt="Logo"
                                    />
                                )}
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {isSmall ? (
                <SideMenuMobile setOpen={setOpenSorpresa} open={open} />
            ) : (
                <SideMenu setOpen={setOpenSorpresa} open={open} />
            )}
        </Box>
    );
}
