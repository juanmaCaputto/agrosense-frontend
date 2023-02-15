import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useMediaQuery } from "react-responsive";

export default function ParameterCard({ title = "", value = "", children }) {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Grid
            item
            xs={12}
            md={6}
            style={{
                cursor: "pointer"
            }}
        >
            <ReactCardFlip isFlipped={isFlipped}>
                <Paper
                    key="front"
                    onClick={() => setIsFlipped(!isFlipped)}
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
                        <Grid container direction="row" sx={{ mt: 1, mb: 3 }}>
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
                                    padding: "5%",
                                    height: "150px",
                                }}
                            >
                                <Typography
                                    variant={isSmall ? "h3" : "h1"}
                                    style={{ color: "#002F5D" }}
                                >
                                    {value}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
                <Paper
                    key="back"
                    onClick={() => setIsFlipped(!isFlipped)}
                    elevation={1}
                    sx={{ width: "94%", margin: "3%", borderRadius: "15px" }}
                >
                    <Box
                        style={{
                            backgroundColor: "#D8ECFF",
                            borderRadius: "15px",
                            padding: "15px",
                            minHeight: "260px"
                        }}
                    >
                        <Grid container direction="row">
                            {children}
                        </Grid>
                    </Box>
                </Paper>
            </ReactCardFlip>
        </Grid>
    );
}
