import {
    Checkbox,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import InfoCard from "../../components/shared/InfoCard";

export default function Alarms() {
    return (
        <InfoCard minWidth="100%" title="Seteo de Alarmas">
            <Grid
                container
                item
                xs={12}
                style={{
                    marginTop: "30px",
                }}
            >
                <Grid item xs={3}>
                    <Typography
                        variant="body1"
                        style={{ textAlign: "right" }}
                        sx={{ p: 1 }}
                    >
                        Humedad de Suelo Alto
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" label="Mínimo" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" label="Máximo" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox />} label="Activar" />
                </Grid>
            </Grid>
            <Grid
                container
                item
                xs={12}
                style={{
                    marginTop: "30px",
                }}
            >
                <Grid item xs={3}>
                    <Typography
                        variant="body1"
                        style={{ textAlign: "right" }}
                        sx={{ p: 1 }}
                    >
                        Humedad de Suelo Medio
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" label="Mínimo" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" label="Máximo" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox />} label="Activar" />
                </Grid>
            </Grid>
            <Grid
                container
                item
                xs={12}
                style={{
                    marginTop: "30px",
                }}
            >
                <Grid item xs={3}>
                    <Typography
                        variant="body1"
                        style={{ textAlign: "right" }}
                        sx={{ p: 1 }}
                    >
                        Humedad de Suelo Bajo
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" label="Mínimo" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" label="Máximo" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox />} label="Activar" />
                </Grid>
            </Grid>
            <Grid
                container
                item
                xs={12}
                style={{
                    marginTop: "30px",
                }}
            >
                <Grid item xs={3}>
                    <Typography
                        variant="body1"
                        style={{ textAlign: "right" }}
                        sx={{ p: 1 }}
                    >
                        Humedad Ambiente
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" label="Mínimo" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" label="Máximo" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox />} label="Activar" />
                </Grid>
            </Grid>
            <Grid
                container
                item
                xs={12}
                style={{
                    marginTop: "30px",
                }}
            >
                <Grid item xs={3}>
                    <Typography
                        variant="body1"
                        style={{ textAlign: "right" }}
                        sx={{ p: 1 }}
                    >
                        Temperatura Ambiente
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" label="Mínimo" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <TextField size="small" label="Máximo" variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <FormControlLabel control={<Checkbox />} label="Activar" />
                </Grid>
            </Grid>
        </InfoCard>
    );
}
