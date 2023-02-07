import { useState, useEffect, useContext } from "react";
import { Grid } from "@mui/material";
import ParameterCard from "../../components/shared/ParameterCard";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { useSensors } from "../../hooks/useSensors";
import SensorsContext from "../../context/sensorsContext";
import InfoCard from "../../components/shared/InfoCard";

export default function RealTime() {
    const { setCurrentValues, humedadSueloH } = useSensors();
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
        <InfoCard minWidth="100%" marginTop="100px" title="Información en Tiempo Real">
            <Grid container>
                <ParameterCard
                    title="Humedad de suelo"
                    value={`${ctx.currentAvgValues.humedadSueloTotal}%`}
                />
                <ParameterCard
                    title="Humedad Ambiente"
                    value={`${ctx.currentAvgValues.humedadAmbiente}%`}
                />
                <ParameterCard title="Clima" value={weatherIcon()} />
                <ParameterCard
                    title="Temperatura"
                    value={`${ctx.currentAvgValues.tempAmbiente}°C`}
                />
            </Grid>
        </InfoCard>
    );
}
