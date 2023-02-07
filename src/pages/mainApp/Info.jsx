import { Divider, Grid, Typography } from "@mui/material";
import InfoCard from "../../components/shared/InfoCard";

export default function Info() {
    return (
        <InfoCard minWidth="100%" title="Información">
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ p: 1, mt: 2 }}>
                    Dispositivos Disponibles
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ p: 1 }}>
                    Nombre:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ p: 1 }}>
                    DISP_TEST01
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ p: 1 }}>
                    Sensores:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ p: 1 }}>
                    SENS_HUM_AMBIENTE_01, SENS_HUM_SUELO_01_H,
                    SENS_HUM_SUELO_01_L, SENS_HUM_SUELO_01_M, SENS_LLUVIA_01,
                    SENS_LUZ_01, SENS_TEMP_AMBIENTE_01
                </Typography>
            </Grid>
        </InfoCard>
    );
}
