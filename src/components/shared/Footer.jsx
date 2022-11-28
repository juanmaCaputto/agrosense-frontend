import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export function Footer() {
    return (
        <>
            <div
                className="footer"
                style={{
                    backgroundColor: "#DFFFD8",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Grid
                    container
                    spacing={1}
                    sx={{ p: 0 }}
                    style={{
                        backgroundColor: "#DFFFD8",
                        flexDirection: "column",
                    }}
                >
                    <Grid
                        container
                        item
                        xs={12}
                        md={6}
                        direction="row"
                        alignItems="center"
                    >
                        <Grid item xs={1} sx={{ mb: 1 }}>
                            {" "}
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            md={6}
                            container
                            direction="column"
                            justifyContent="start"
                            alignItems="start"
                            sx={{ marginTop: 2, marginLeft: 2 }}
                        >
                            <Typography
                                variant="body2"
                                style={{ color: "black" }}
                            >
                                Agrosense Test
                            </Typography>
                            <Typography
                                variant="caption"
                                style={{ color: "black" }}
                            >
                                v0.1
                                <br />
                                <br />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

            <div className="footerBlue"></div>
        </>
    );
}
