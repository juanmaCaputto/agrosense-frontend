import {
    Checkbox,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AlarmsContext from "../../context/AlarmsContext";
import { sensorsNames } from "../../util/constants/SensorsName";
import { sensorTypes } from "../../util/constants/sensorTypes";
import AlarmCollapse from "./AlarmCollapse";

export default function AlarmParameter({ title = "", type = "" }) {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });
    const ctx = useContext(AlarmsContext);

    const [sensorsValues, setSensorsValues] = useState([]);
    const [minimo, setMinimo] = useState(0);
    const [maximo, setMaximo] = useState(0);
    const [activar, setActivar] = useState(true);
    const [todos, setTodos] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [loadedCol, setLoadedCol] = useState(false);

    const loadValues = () => {
        if (!loaded) {
            let sensors = [];
            switch (type) {
                case sensorTypes.HUM_SUELO_H:
                    sensors.push(sensorsNames.HUM_SUELO_H_1);
                    sensors.push(sensorsNames.HUM_SUELO_H_2);
                    break;
                case sensorTypes.HUM_SUELO_M:
                    sensors.push(sensorsNames.HUM_SUELO_M_1);
                    sensors.push(sensorsNames.HUM_SUELO_M_2);
                    break;
                case sensorTypes.HUM_SUELO_L:
                    sensors.push(sensorsNames.HUM_SUELO_L_1);
                    sensors.push(sensorsNames.HUM_SUELO_L_2);
                    break;
                case sensorTypes.HUM_AMBIENTE:
                    sensors.push(sensorsNames.HUM_AMBIENTE_1);
                    sensors.push(sensorsNames.HUM_AMBIENTE_2);
                    break;
                case sensorTypes.TEMP_AMBIENTE:
                    sensors.push(sensorsNames.TEMP_AMBIENTE_1);
                    sensors.push(sensorsNames.TEMP_AMBIENTE_2);
                    break;
                case sensorTypes.LLUVIA:
                    sensors.push(sensorsNames.LLUVIA_1);
                    sensors.push(sensorsNames.LLUVIA_2);
                    break;
                default: //
            }
            sensors = sensors.map((s) => {
                let newSensor = {};
                ctx.alarms.forEach((a) => {
                    if (a.idSensor === s) {
                        newSensor = a;
                    }
                });
                return newSensor;
            });
            setSensorsValues(sensors);
            if (
                sensors[0].data.upperValue === sensors[1].data.upperValue &&
                sensors[0].data.lowerValue === sensors[1].data.lowerValue
            ) {
                setMaximo(sensors[0].data.upperValue);
                setMinimo(sensors[0].data.lowerValue);
                setTodos(true);
            }
            if (
                sensors[0].data.enabled === 1 ||
                sensors[1].data.enabled === 1
            ) {
                setActivar(true);
            } else {
                setActivar(false);
            }
            setLoading(false);
            setLoaded(true);
        }
    };

    useEffect(() => {
        loadValues();
    });

    const onChangeTodos = (v) => {
        setTodos(v);
        setSensorsValues(
            sensorsValues.map((e) => {
                e.data.upperValue = maximo;
                e.data.lowerValue = minimo;
                return e;
            })
        );
        setLoadedCol(false);
    };

    const handleSetMinimo = (e) => {
        setMinimo(e.target.value);
        setLoadedCol(false);
        setSensorsValues(
            sensorsValues.map((s) => {
                s.data.lowerValue = e.target.value;
                return s;
            })
        );
    };

    const handleMinimoBlur = () => {
        if (minimo === "") {
            setMinimo(0);
            setSensorsValues(
                sensorsValues.map((s) => {
                    s.data.lowerValue = 0;
                    return s;
                })
            );
        }
    };

    const handleMinimoFocus = (e) => {
        if (e.target.value === "0") {
            setMinimo("");
        }
    };

    const handleSetMaximo = (e) => {
        setMaximo(e.target.value);
        setLoadedCol(false);
        setSensorsValues(
            sensorsValues.map((s) => {
                s.data.upperValue = e.target.value;
                return s;
            })
        );
    };

    const handleMaximoBlur = () => {
        if (maximo === "") {
            setMaximo(0);
            setSensorsValues(
                sensorsValues.map((s) => {
                    s.data.upperValue = 0;
                    return s;
                })
            );
        }
    };

    const handleMaximoFocus = (e) => {
        if (e.target.value === "0") {
            setMaximo("");
        }
    };

    const handleSetActivar = (event) => {
        setActivar(event);
        setSensorsValues(
            sensorsValues.map((e) => {
                let enabledTemp = 0;
                if (event) {
                    enabledTemp = 1;
                }
                e.data.enabled = enabledTemp;
                return e;
            })
        );
    };

    return (
        <Grid
            container
            item
            xs={12}
            style={{
                marginTop: "30px",
            }}
        >
            <Grid item xs={12} sm={3}>
                <Typography
                    variant="body1"
                    style={
                        isSmall ? { textAlign: "left" } : { textAlign: "right" }
                    }
                    sx={{ p: 1 }}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sm={3}
                sx={isSmall ? { marginBottom: "10px" } : {}}
            >
                <TextField
                    size="small"
                    type="number"
                    label="Mínimo"
                    variant="outlined"
                    value={minimo}
                    onChange={handleSetMinimo}
                    onBlur={handleMinimoBlur}
                    onFocus={handleMinimoFocus}
                    sx={
                        isSmall
                            ? { width: "100%" }
                            : { width: "90%", ml: "5%", mr: "5%" }
                    }
                />
            </Grid>
            <Grid
                item
                xs={12}
                sm={3}
                sx={isSmall ? { marginBottom: "10px" } : {}}
            >
                <TextField
                    size="small"
                    type="number"
                    label="Máximo"
                    variant="outlined"
                    value={maximo}
                    onChange={handleSetMaximo}
                    onBlur={handleMaximoBlur}
                    onFocus={handleMaximoFocus}
                    sx={
                        isSmall
                            ? { width: "100%" }
                            : { width: "90%", ml: "5%", mr: "5%" }
                    }
                />
            </Grid>
            <Grid item xs={4} sm={1.5}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={todos}
                            onChange={() => onChangeTodos(!todos)}
                        />
                    }
                    label="Todos"
                />
            </Grid>
            <Grid item xs={4} sm={1.5}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={activar}
                            onChange={() => handleSetActivar(!activar)}
                        />
                    }
                    label="Activar"
                />
            </Grid>
            {!loading && (
                <AlarmCollapse
                    todos={todos}
                    values={sensorsValues}
                    loaded={loadedCol}
                    setLoaded={setLoadedCol}
                />
            )}
        </Grid>
    );
}
