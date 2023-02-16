import { useContext, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import AlarmParameter from "../../components/alarms/AlarmParameter";
import InfoCard from "../../components/shared/InfoCard";
import AlarmsContext from "../../context/AlarmsContext";
import Loading from "react-fullscreen-loading";
import { sensorTypes } from "../../util/constants/sensorTypes";
import { useAlarms } from "../../hooks/useAlarms";

export default function Alarms() {
    const { getAlarms, setAlarms } = useAlarms();
    const ctx = useContext(AlarmsContext);

    const handleGetAlarms = async () => {
        if (!ctx.alreadyChecked) {
            await getAlarms();
        }
        ctx.setAlreadyChecked(true);
    };

    useEffect(() => {
        handleGetAlarms();
    });

    const handleActualizar = async () => {
        ctx.setLoading(true);
        console.log(ctx.alarms);
        await setAlarms(ctx.alarms);
        await getAlarms();
    };

    return (
        <InfoCard minWidth="100%" title="Seteo de Alarmas">
            {ctx.loading ? (
                <Loading loading background="#FFFFFF" loaderColor="#3498db" />
            ) : (
                <>
                    <AlarmParameter
                        title="Humedad de Suelo Alto"
                        type={sensorTypes.HUM_SUELO_H}
                    />
                    <AlarmParameter
                        title="Humedad de Suelo Medio"
                        type={sensorTypes.HUM_SUELO_M}
                    />
                    <AlarmParameter
                        title="Humedad de Suelo Bajo"
                        type={sensorTypes.HUM_SUELO_L}
                    />
                    <AlarmParameter
                        title="Humedad Ambiente"
                        type={sensorTypes.HUM_AMBIENTE}
                    />
                    <AlarmParameter
                        title="Temperatura Ambiente"
                        type={sensorTypes.TEMP_AMBIENTE}
                    />
                    <AlarmParameter title="Lluvia" type={sensorTypes.LLUVIA} />
                    <Grid item xs={12} sm={5} />
                    <Grid
                        item
                        xs={12}
                        sm={2}
                        sx={{ pt: 4, justifyContent: "flex-end" }}
                    >
                        <Button
                            size="medium"
                            variant="contained"
                            onClick={handleActualizar}
                            fullWidth
                        >
                            Actualizar
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={5} />
                </>
            )}
        </InfoCard>
    );
}
