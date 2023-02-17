import {
    Alert,
    Checkbox,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    ListSubheader,
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
    { label: "DISP_TEST01", value: "" },
    { label: "Temperatura Ambiente 1", value: "SENS_TEMP_AMBIENTE_01" },
    { label: "Humedad Ambiente 1", value: "SENS_HUM_AMBIENTE_01" },
    { label: "Humedad Suelo Alto 1", value: "SENS_HUM_SUELO_01_H" },
    { label: "Humedad Suelo Medio 1", value: "SENS_HUM_SUELO_01_M" },
    { label: "Humedad Suelo Bajo 1", value: "SENS_HUM_SUELO_01_L" },
    { label: "Lluvia 1", value: "SENS_LLUVIA_01" },
    { label: "DISP_TEST02", value: "" },
    { label: "Temperatura Ambiente 2", value: "SENS_TEMP_AMBIENTE_02" },
    { label: "Humedad Ambiente 2", value: "SENS_HUM_AMBIENTE_02" },
    { label: "Humedad Suelo Alto 2", value: "SENS_HUM_SUELO_02_H" },
    { label: "Humedad Suelo Medio 2", value: "SENS_HUM_SUELO_02_M" },
    { label: "Humedad Suelo Bajo 2", value: "SENS_HUM_SUELO_02_L" },
    { label: "Lluvia 2", value: "SENS_LLUVIA_02" },
];

export default function Historic() {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });
    const [parameters, setParameters] = useState([]);
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [scale, setScale] = useState("day");
    const [datasets, setDatasets] = useState([]);
    const [error, setError] = useState("");

    const { getValuesParameter } = useSensors();

    const transformToBackend = (list) => {
        return list.map((s) => {
            let newSensor = s;
            sensorValues.forEach((e) => {
                if (s === e.label) {
                    newSensor = e.value;
                }
            });
            return newSensor;
        });
    };

    const handleChangeParameters = async (event) => {
        setError("");
        setParameters(event.target.value);

        if (
            event.target.value.length > 0 &&
            dateStart !== "" &&
            dateEnd !== ""
        ) {
            await getValuesParameter({
                sensorsId: transformToBackend(event.target.value),
                start: formatDatePicker(dateStart),
                end: formatDatePicker(dateEnd),
            })
                .then((res) => {
                    setDatasets(res);
                })
                .catch((e) => {
                    setError(e.message);
                });
        }
    };

    const handleChangeDateStart = async (value) => {
        setError("");
        setDateStart(value);
        if (parameters.length > 0 && value !== "" && dateEnd !== "") {
            await getValuesParameter({
                sensorsId: transformToBackend(parameters),
                start: formatDatePicker(value),
                end: formatDatePicker(dateEnd),
            })
                .then((res) => {
                    setDatasets(res);
                })
                .catch((e) => {
                    setError(e.message);
                });
        }
    };

    const handleChangeDateEnd = async (value) => {
        setError("");
        setDateEnd(value);
        if (parameters.length > 0 && dateStart !== "" && value !== "") {
            await getValuesParameter({
                sensorsId: transformToBackend(parameters),
                start: formatDatePicker(dateStart),
                end: formatDatePicker(value),
            })
                .then((res) => {
                    setDatasets(res);
                })
                .catch((e) => {
                    setError(e.message);
                });
        }
    };

    return (
        <InfoCard minWidth="100%" title="Histórico de Sensores">
            <Grid item xs={12} sm={4}>
                <FormControl
                    variant="outlined"
                    style={{
                        textAlign: "left",
                        width: "100%",
                    }}
                    sx={{ mt: 2 }}
                    size="small"
                >
                    <InputLabel>Parámetro</InputLabel>
                    <Select
                        defaultValue=""
                        multiple
                        input={<OutlinedInput />}
                        renderValue={(selected) => selected.join(", ")}
                        onChange={handleChangeParameters}
                        value={parameters}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 300,
                                },
                            },
                        }}
                        style={{
                            minWidth: "100%",
                            maxWidth: "200px",
                        }}
                    >
                        {sensorValues.map((i, index) => {
                            if (i.value !== "") {
                                return (
                                    <MenuItem value={i.label} key={index}>
                                        <Checkbox
                                            checked={
                                                parameters.indexOf(i.label) > -1
                                            }
                                        />
                                        {i.label}
                                    </MenuItem>
                                );
                            } else {
                                return (
                                    <ListSubheader key={index}>
                                        {i.label}
                                    </ListSubheader>
                                );
                            }
                        })}
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
                {error !== "" && (
                    <Alert size="small" severity="error" sx={{ mt: 1 }}>
                        {error}
                    </Alert>
                )}
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
