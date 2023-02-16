import { Container, Divider, Grid, Typography } from "@mui/material";

export default function DeviceAndSensors({ device = "", sensors = [] }) {
    return (
        <Grid container item xs={12} sm={6}>
            <Grid item xs={12}>
                <Typography
                    variant="body1"
                    style={{ fontWeight: "600", color: "#1665B3" }}
                    sx={{ p: 1 }}
                >
                    Nombre:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ p: 1 }}>
                    {device}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="body1"
                    style={{ fontWeight: "600", color: "#1665B3" }}
                    sx={{ p: 1 }}
                >
                    Sensores:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ p: 1, mb: 2 }}>
                    {sensors.map((s) => (
                        <li key={s}>
                            {s}
                            <br />
                        </li>
                    ))}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
        </Grid>
    );
}
