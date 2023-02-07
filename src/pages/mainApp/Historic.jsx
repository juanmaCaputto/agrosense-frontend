import { Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import HistoricSensorGraph from "../../components/historic/HistoricSensorGraph";
import InfoCard from "../../components/shared/InfoCard";
import SelectDate from "../../components/shared/SelectDate";
import { SelectOpcion } from "../../components/shared/SelectOpcion";

const sensorValues = [
    { label: "Temperatura Ambiente", value: "SENS_TEMP_AMBIENTE" },
    { label: "Humedad Ambiente", value: "SENS_HUM_AMBIENTE" },
    { label: "Humedad Suelo Alto", value: "SENS_HUM_SUELO_H" },
    { label: "Humedad Suelo Medio", value: "SENS_HUM_SUELO_M" },
    { label: "Humedad Suelo Bajo", value: "SENS_HUM_SUELO_L" },
];

export default function Historic() {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });
    const [parameter, setParameter] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");

    return (
        <InfoCard minWidth="100%" title="Histórico de Sensores">
            <Grid item xs={12} sm={4}>
                <SelectOpcion
                    opciones={sensorValues}
                    title={"Parámetro"}
                    value={parameter}
                    setEstado={setParameter}
                />
                <SelectDate
                    date={dateStart}
                    setDate={setDateStart}
                    title={"Start Date"}
                />
                <SelectDate
                    date={dateEnd}
                    setDate={setDateEnd}
                    title={"End Date"}
                />
            </Grid>
            {isSmall && <Grid item xs={1} />}
            <Grid
                item
                xs={10}
                sm={8}
                sx={
                    !isSmall
                        ? {
                              textAlign: "center",
                              padding: "20px",
                          }
                        : {
                              textAlign: "center",
                              paddingTop: "20px",
                          }
                }
            >
                <HistoricSensorGraph
                    title="HISTORICO DE SENSORES"
                    variantId={parameter}
                    start={dateStart}
                    end={dateEnd}
                />
            </Grid>
            {isSmall && <Grid item xs={1} />}
        </InfoCard>
    );
}
