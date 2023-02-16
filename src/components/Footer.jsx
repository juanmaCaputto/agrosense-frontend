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
                        backgroundColor: "#95CAFF",
                        flexDirection: "column",
                    }}
                >
                    <Grid
                        container
                        item
                        xs={12}
                        sm={6}
                        direction="row"
                        alignItems="center"
                    >
                        <Grid item xs={1} sx={{ mb: 1 }}>
                            {" "}
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sm={6}
                            container
                            direction="column"
                            justifyContent="start"
                            alignItems="start"
                            sx={{ marginTop: 2, marginLeft: 2 }}
                        >
                            <Typography
                                variant="body2"
                                style={{ color: "white" }}
                            >
                                Agrosense
                            </Typography>
                            <Typography
                                variant="caption"
                                style={{ color: "white" }}
                            >
                                v1.0
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
