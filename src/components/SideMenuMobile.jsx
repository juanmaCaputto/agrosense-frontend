import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import InfoIcon from "@mui/icons-material/Info";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { routes } from "../config/Routes";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Drawer, SwipeableDrawer } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function SideMenuMobile({ setOpen, open }) {
    const theme = useTheme();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                },
            }}
            variant={"persistent"}
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={() => setOpen(!open)}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List sx={{ textDecoration: "none" }}>
                {["Tiempo Real", "Histórico", "Alarmas", "Información"].map(
                    (text, index) => (
                        <ListItem
                            key={text}
                            onClick={() => setOpen(false)}
                            to={
                                index === 0
                                    ? routes.REALTIME
                                    : index === 1
                                    ? routes.HISTORIC
                                    : index === 2
                                    ? routes.ALARMS
                                    : routes.INFO
                            }
                            disablePadding
                            sx={{
                                display: "block",
                                color: "black",
                            }}
                            component={NavLink}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 && <PlayCircleOutlineIcon />}
                                    {index === 1 && <EqualizerIcon />}
                                    {index === 2 && <AccessAlarmIcon />}
                                    {index === 3 && <InfoIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
        </Drawer>
    );
}
