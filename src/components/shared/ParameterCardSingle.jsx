import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";

export default function ParameterCardSingle({ title = "", value = "" }) {
    return (
        <Grid
            item
            xs={12}
            md={6}
        >
            <Paper
                elevation={1}
                sx={{ width: "94%", margin: "3%", borderRadius: "15px" }}
            >
                <Box
                    style={{
                        backgroundColor: "#D8ECFF",
                        borderRadius: "15px",
                        paddingTop: "15px",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        paddingBottom: "10px",
                        minHeight: "260px"
                    }}
                >
                    <Grid container direction="row" sx={{ }}>
                        {title !== "" && (
                            <>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h6"
                                        style={{
                                            textAlign: "center",
                                            color: "#1665B3",
                                            fontWeight: "600",
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
                        <Grid
                            item
                            xs={12}
                            sx={{
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                variant="h1"
                                style={{ color: "#002F5D" }}
                            >
                                {value}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    );
}
