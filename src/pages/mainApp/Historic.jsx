import {
    Checkbox,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import HistoricSensorGraph from "../../components/historic/HistoricSensorGraph";
import InfoCard from "../../components/shared/InfoCard";
import SelectDate from "../../components/shared/SelectDate";
import { SelectOpcion } from "../../components/shared/SelectOpcion";
import { useSensors } from "../../hooks/useSensors";
import { formatDatePicker } from "../../util/FormatDatePicker";

const sensorValues = [
    { label: "Temperatura Ambiente 1", value: "SENS_TEMP_AMBIENTE_01" },
    { label: "Humedad Ambiente 1", value: "SENS_HUM_AMBIENTE_01" },
    { label: "Humedad Suelo Alto 1", value: "SENS_HUM_SUELO_01_H" },
    { label: "Humedad Suelo Medio 1", value: "SENS_HUM_SUELO_01_M" },
    { label: "Humedad Suelo Bajo 1", value: "SENS_HUM_SUELO_01_L" },
];

export default function Historic() {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });
    const [parameters, setParameters] = useState([]);
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [scale, setScale] = useState("day");
    const [datasets, setDatasets] = useState([]);

    const { getValuesParameter } = useSensors();

    const handleChangeParameters = async (event) => {
        setParameters(event.target.value);
        if (
            event.target.value.length > 0 &&
            dateStart !== "" &&
            dateEnd !== ""
        ) {
            setDatasets(
                await getValuesParameter({
                    sensorsId: event.target.value,
                    start: formatDatePicker(dateStart),
                    end: formatDatePicker(dateEnd),
                })
            );
        }
    };

    const handleChangeDateStart = async (value) => {
        setDateStart(value);
        if (parameters.length > 0 && value !== "" && dateEnd !== "") {
            setDatasets(
                await getValuesParameter({
                    sensorsId: parameters,
                    start: formatDatePicker(value),
                    end: formatDatePicker(dateEnd),
                })
            );
        }
    };

    const handleChangeDateEnd = async (value) => {
        setDateEnd(value);
        if (parameters.length > 0 && dateStart !== "" && value !== "") {
            setDatasets(
                await getValuesParameter({
                    sensorsId: parameters,
                    start: formatDatePicker(dateStart),
                    end: formatDatePicker(value),
                })
            );
        }
    };

    return (
        <InfoCard minWidth="100%" title="Histórico de Sensores">
            <Grid item xs={12} sm={4}>
                <FormControl
                    fullWidth
                    variant="outlined"
                    style={{
                        backgroundColor: "white",
                        textAlign: "left",
                    }}
                    sx={{ mt: 2 }}
                    size="small"
                >
                    <InputLabel>Parámetro</InputLabel>
                    <Select
                        defaultValue=""
                        label="Estado"
                        multiple
                        input={<OutlinedInput label="Estado" />}
                        renderValue={(selected) => selected.join(", ")}
                        onChange={handleChangeParameters}
                        value={parameters}
                    >
                        {sensorValues.map((i, index) => (
                            <MenuItem value={i.value} key={index}>
                                {i.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <SelectDate
                    date={dateStart}
                    setDate={handleChangeDateStart}
                    title={"Comienzo"}
                />
                <SelectDate
                    date={dateEnd}
                    setDate={handleChangeDateEnd}
                    title={"Fin"}
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
                    variantsId={parameters}
                    start={dateStart}
                    end={dateEnd}
                    sensorDataset={datasets}
                    scale={scale}
                />
            </Grid>
            {isSmall && <Grid item xs={1} />}
            <Grid container sx={{ pt: 2, pr: 2, justifyContent: "flex-end" }}>
                <Grid item xs={12} sm={2}>
                    <FormControl fullWidth>
                        <InputLabel>Escala</InputLabel>
                        <Select
                            size="small"
                            value={scale}
                            label="Escala"
                            onChange={(e) => setScale(e.target.value)}
                        >
                            <MenuItem value={"day"}>Días</MenuItem>
                            <MenuItem value={"hour"}>Horas</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </InfoCard>
    );
}
