import { Grid, Typography } from "@mui/material";

export default function SubParameterCard({ deviceName = "", info = "" }) {
    return (
        <Grid container item xs={6}>
            <Grid item xs={12}>
                <Typography
                    variant="subtitle1"
                    style={{
                        textAlign: "center",
                        color: "#1665B3",
                        fontWeight: "600",
                    }}
                    gutterBottom
                >
                    {deviceName}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="subtitle2"
                    style={{
                        textAlign: "center",
                    }}
                    gutterBottom
                >
                    {info}
                </Typography>
            </Grid>
        </Grid>
    );
}
