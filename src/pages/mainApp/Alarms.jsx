import { Button, Grid } from "@mui/material";
import AlarmParameter from "../../components/alarms/AlarmParameter";
import InfoCard from "../../components/shared/InfoCard";

export default function Alarms() {
    return (
        <InfoCard minWidth="100%" title="Seteo de Alarmas">
            <AlarmParameter title="Humedad de Suelo Alto" />
            <AlarmParameter title="Humedad de Suelo Medio" />
            <AlarmParameter title="Humedad de Suelo Bajo" />
            <AlarmParameter title="Humedad Ambiente" />
            <AlarmParameter title="Temperatura Ambiente" />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={2} sx={{ pt: 4, justifyContent: "flex-end" }}>
                <Button size="medium" variant="contained" fullWidth>
                    Actualizar
                </Button>
            </Grid>
            <Grid item xs={12} sm={5} />
        </InfoCard>
    );
}
