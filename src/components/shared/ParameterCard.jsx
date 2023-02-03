import { Grid, Typography } from "@mui/material";
import InfoCard from "./InfoCard";

export default function ParameterCard({ title = "", value = "" }) {
    return (
        <Grid item xs={12} sx={{ mb: 2 }}>
            <InfoCard>
                <Grid
                    item
                    xs={12}
                    sx={{ textAlign: "center", padding: "20px" }}
                >
                    <Typography variant="h4">{title}</Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{ textAlign: "center", padding: "5%", height: "200px" }}
                >
                    <Typography variant="h1">{value}</Typography>
                </Grid>
            </InfoCard>
        </Grid>
    );
}
