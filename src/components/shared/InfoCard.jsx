import React from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useMediaQuery } from "react-responsive";

export default function InfoCard({
    width = "sm",
    minWidth = "auto",
    children,
}) {
    const isSmall = useMediaQuery({ query: "(max-width: 576px)" });
    document.body.style = "background:#F7F7F7";

    let styleSxPaper = {
        minHeight: "300px",
        minWidth: minWidth,
        maxWidth: width,
        marginTop: "9px",
        marginRight: "15px",
        marginLeft: "15px",
    };

    if (isSmall) {
        styleSxPaper = {};
    }

    return (
        <Paper elevation={isSmall ? 0 : 3} sx={styleSxPaper}>
            <Box
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "15px",
                    paddingTop: "15px",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    paddingBottom: "10px",
                }}
            >
                <Grid container direction="row" sx={{ mt: 1, mb: 3 }}>
                    {children}
                </Grid>
            </Box>
        </Paper>
    );
}
