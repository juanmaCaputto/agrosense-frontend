import { Grid, Typography } from "@mui/material";
import InfoCard from "../../components/shared/InfoCard";

export default function Historic() {
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
                            <Typography variant="h5">Pepe</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{ textAlign: "center", padding: "40px" }}
                        >
                            <Typography variant="h3">Frescura</Typography>
                        </Grid>
                    </InfoCard>
                </Grid>
            </Grid>
        </>
    );
}
