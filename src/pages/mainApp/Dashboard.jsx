import { Grid, Typography } from "@mui/material";
import InfoCard from "../../components/shared/InfoCard";

export default function Dashboard() {
    return (
        <>
            <Grid container sx={{ marginTop: "100px" }}>
                <Grid item xs={6} sx={{ mb: 2 }}>
                    <InfoCard>
                        <Grid
                            item
                            xs={12}
                            sx={{ textAlign: "center", padding: "20px" }}
                        >
                            <Typography variant="h5">Temperatura</Typography>
                        </Grid>
                        <Grid item xs={12}
                            sx={{ textAlign: "center", padding: "40px" }}>
                            <Typography variant="h3">30°C</Typography>
                        </Grid>
                    </InfoCard>
                </Grid>
                <Grid item xs={6} sx={{ mb: 2 }}>
                    <InfoCard>
                        <Grid
                            item
                            xs={12}
                            sx={{ textAlign: "center", padding: "20px" }}
                        >
                            <Typography variant="h5">Humedad</Typography>
                        </Grid>
                        <Grid item xs={12}
                            sx={{ textAlign: "center", padding: "40px" }}>
                            <Typography variant="h3">90%</Typography>
                        </Grid>
                    </InfoCard>
                </Grid>
                <Grid item xs={6} sx={{ mb: 2 }}>
                    <InfoCard>
                        <Grid
                            item
                            xs={12}
                            sx={{ textAlign: "center", padding: "20px" }}
                        >
                            <Typography variant="h5">Lluvia</Typography>
                        </Grid>
                        <Grid item xs={12}
                            sx={{ textAlign: "center", padding: "40px" }}>
                            <Typography variant="h3">No</Typography>
                        </Grid>
                    </InfoCard>
                </Grid>
                <Grid item xs={6} sx={{ mb: 2 }}>
                    <InfoCard>
                        <Grid
                            item
                            xs={12}
                            sx={{ textAlign: "center", padding: "20px" }}
                        >
                            <Typography variant="h5">Sol</Typography>
                        </Grid>
                        <Grid item xs={12}
                            sx={{ textAlign: "center", padding: "40px" }}>
                            <Typography variant="h3">Si</Typography>
                        </Grid>
                    </InfoCard>
                </Grid>
            </Grid>{" "}
        </>
    );
}
