import React from "react";
import { Divider, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useMediaQuery } from "react-responsive";

export default function InfoCard({
    width = "sm",
    minWidth = "auto",
    minHeight = "300px",
    marginTop = "150px",
    title = "",
    children,
}) {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });
    document.body.style = "background:#F7F7F7";

    let styleSxPaper = {
        minHeight,
        minWidth,
        maxWidth: width,
    };

    if (isSmall) {
        styleSxPaper = {};
        marginTop = "48px";
    }

    return (
        <Grid container sx={{ marginTop }}>
            <Paper elevation={isSmall ? 0 : 3} sx={styleSxPaper}>
                <Box
                    style={
                        !isSmall
                            ? {
                                  backgroundColor: "#F7FBFF",
                                  borderRadius: "15px",
                                  paddingTop: "15px",
                                  paddingLeft: "40px",
                                  paddingRight: "40px",
                                  paddingBottom: "10px",
                              }
                            : {
                                  backgroundColor: "#F7FBFF",
                                  borderRadius: "15px",
                                  paddingTop: "15px",
                                  paddingLeft: "5px",
                                  paddingRight: "5px",
                                  paddingBottom: "10px",
                              }
                    }
                >
                    <Grid container direction="row" sx={{ mt: 1, mb: 3 }}>
                        {title !== "" && (
                            <>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h5"
                                        style={{
                                            textAlign: "center",
                                            color: "#1665B3",
                                            fontWeight: "500",
                                        }}
                                        gutterBottom
                                    >
                                        {title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider />
                                </Grid>
                            </>
                        )}
                        {children}
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    );
}
