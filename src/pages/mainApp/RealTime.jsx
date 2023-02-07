import { useState, useEffect, useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";
import ParameterCard from "../../components/shared/ParameterCard";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CachedIcon from "@mui/icons-material/Cached";
import { useSensors } from "../../hooks/useSensors";
import SensorsContext from "../../context/sensorsContext";
import InfoCard from "../../components/shared/InfoCard";
import { getCurrentDate } from "../../util/GetCurrentDate";
import SubParameterCard from "../../components/shared/SubParameterCard";
import BackCard from "../../components/shared/BackCard";

export default function RealTime() {
    const { setCurrentValues, humedadSueloH } = useSensors();
    const [fechaActualizacion, setFechaActualizacion] = useState(
        getCurrentDate()
    );
    const ctx = useContext(SensorsContext);

    useEffect(() => {
        setCurrentValues();
    });

    const weatherIcon = () => {
        if (ctx.currentAvgValues.luz && !ctx.currentAvgValues.lluvia) {
            return <WbSunnyIcon sx={{ width: "40%", height: "50%" }} />;
        } else if (!ctx.currentAvgValues.luz && !ctx.currentAvgValues.lluvia) {
            return <CloudIcon sx={{ width: "40%", height: "50%" }} />;
        } else if (!ctx.currentAvgValues.luz && ctx.currentAvgValues.lluvia) {
            return <ThunderstormIcon sx={{ width: "40%", height: "50%" }} />;
        } else {
            return <WbSunnyIcon sx={{ width: "40%", height: "50%" }} />;
        }
    };

    return (
        <InfoCard
            minWidth="100%"
            marginTop="100px"
            title="Información en Tiempo Real"
        >
            <Grid container>
                <ParameterCard
                    title="Humedad de suelo"
                    value={`${ctx.currentAvgValues.humedadSueloTotal}%`}
                >
                    <BackCard />
                </ParameterCard>
                <ParameterCard
                    title="Humedad Ambiente"
                    value={`${ctx.currentAvgValues.humedadAmbiente}%`}
                >
                    <BackCard />
                </ParameterCard>
                <ParameterCard title="Clima" value={weatherIcon()}>
                    <BackCard />
                </ParameterCard>
                <ParameterCard
                    title="Temperatura"
                    value={`${ctx.currentAvgValues.tempAmbiente}°C`}
                >
                    <BackCard />
                </ParameterCard>
                <Grid container item xs={12} sm={6} sx={{ pl: 2 }}>
                    <Typography variant="subtitle2">
                        Última actualización: {fechaActualizacion}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} />
                <Grid
                    container
                    item
                    xs={12}
                    sm={2}
                    sx={{ pr: 2, justifyContent: "flex-end" }}
                >
                    <Button
                        size="small"
                        variant="contained"
                        startIcon={<CachedIcon />}
                    >
                        Actualizar
                    </Button>
                </Grid>
            </Grid>
        </InfoCard>
    );
}
