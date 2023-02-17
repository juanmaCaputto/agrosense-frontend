import { Divider, Grid, Typography } from "@mui/material";
import { sensorTypes } from "../../util/constants/sensorTypes";

export default function DeviceAndSensors({ device = "", sensors = [] }) {
    return (
        <Grid container item xs={12} sm={6}>
            <Grid item xs={12}>
                <Typography
                    variant="body1"
                    style={{ fontWeight: "600", color: "#1665B3" }}
                    sx={{ p: 1 }}
                >
                    Nombre:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ p: 1 }}>
                    {device}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="body1"
                    style={{ fontWeight: "600", color: "#1665B3" }}
                    sx={{ p: 1 }}
                >
                    Sensores:
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" sx={{ p: 1, mb: 2 }}>
                    {sensors.map((s) => {
                        let type = "";
                        if (s.includes(sensorTypes.LUZ)) {
                            type = "Sensor de Luz";
                        } else if (s.includes(sensorTypes.LLUVIA)) {
                            type = "Sensor de Lluvia";
                        } else if (s.includes(sensorTypes.TEMP_AMBIENTE)) {
                            type = "Sensor de temperatura";
                        } else if (s.includes(sensorTypes.HUM_AMBIENTE)) {
                            type = "Sensor de Humedad";
                        } else if (
                            s.includes(sensorTypes.HUM_SUELO) &&
                            s.includes("_H")
                        ) {
                            type = "Sensor de Humedad de suelo alto";
                        } else if (
                            s.includes(sensorTypes.HUM_SUELO) &&
                            s.includes("_M")
                        ) {
                            type = "Sensor de Humedad de suelo medio";
                        } else if (
                            s.includes(sensorTypes.HUM_SUELO) &&
                            s.includes("_L")
                        ) {
                            type = "Sensor de Humedad de suelo bajo";
                        }
                        return (
                            <li key={s}>
                                <b>
                                    {type}
                                    {": "}
                                </b>
                                {s}
                                <br />
                            </li>
                        );
                    })}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
        </Grid>
    );
}
