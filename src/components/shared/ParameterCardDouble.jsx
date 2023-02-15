import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useMediaQuery } from "react-responsive";

export default function ParameterCardDouble({
    title = "",
    value1 = "",
    value2 = "",
    children,
}) {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Grid
            item
            xs={12}
            md={6}
            style={{
                cursor: "pointer",
            }}
        >
            <ReactCardFlip isFlipped={isFlipped}>
                <Paper
                    key="front"
                    onClick={() => setIsFlipped(!isFlipped)}
                    elevation={1}
                    sx={{
                        width: "94%",
                        margin: "3%",
                        borderRadius: "15px",
                        minHeight: "260px"
                    }}
                >
                    <Box
                        style={{
                            backgroundColor: "#D8ECFF",
                            borderRadius: "15px",
                            paddingTop: "15px",
                            paddingLeft: "40px",
                            paddingRight: "40px",
                            paddingBottom: "10px",
                            minHeight: "260px",
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
                            <Grid container item xs={12} sm={6} sx={{ pt: 2 }}>
                                <Grid item xs={12}>
                                    <Typography
                                        variant={
                                            !isSmall ? "subtitle1" : "subtitle2"
                                        }
                                        style={{
                                            textAlign: "center",
                                            color: "#1665B3",
                                            fontWeight: "600",
                                        }}
                                        gutterBottom
                                    >
                                        DISPOSITIVO 1
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        textAlign: "center",
                                        padding: "5%",
                                        height: "93px",
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        style={{ color: "#002F5D" }}
                                    >
                                        {value1}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} sm={6} sx={{ pt: 2 }}>
                                <Grid item xs={12}>
                                    <Typography
                                        variant={
                                            !isSmall ? "subtitle1" : "subtitle2"
                                        }
                                        style={{
                                            textAlign: "center",
                                            color: "#1665B3",
                                            fontWeight: "600",
                                        }}
                                        gutterBottom
                                    >
                                        DISPOSITIVO 2
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        textAlign: "center",
                                        padding: "5%",
                                        height: "93px",
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        style={{ color: "#002F5D" }}
                                    >
                                        {value2}
                                    </Typography>
                                </Grid>
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
