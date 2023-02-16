import { Grid, TextField, Typography } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import AlarmsContext from "../../context/AlarmsContext";

export default function AlarmCollapseItem({
    title = 0,
    sensorName = "",
    min = 0,
    max = 0,
}) {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });
    const ctx = useContext(AlarmsContext);

    const [minimo, setMinimo] = useState(0);
    const [maximo, setMaximo] = useState(0);

    const setInitialValues = () => {
        setMinimo(min);
        setMaximo(max);
    };

    useEffect(() => {
        setInitialValues();
    });

    const handleMinimo = (e) => {
        ctx.setAlarms(
            ctx.alarms.map((a) => {
                if (a.idSensor === sensorName) {
                    a.data.lowerValue = minimo;
                }
                return a;
            })
        );
        setMinimo(e.target.value);
    };

    const handleMaximo = (e) => {
        ctx.setAlarms(
            ctx.alarms.map((a) => {
                if (a.idSensor === sensorName) {
                    a.data.upperValue = maximo;
                }
                return a;
            })
        );
        setMaximo(e.target.value);
    };

    return (
        <Grid
            container
            item
            xs={12}
            sx={{
                mt: "15px",
                mb: "15px",
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
                    label="Mínimo"
                    variant="outlined"
                    value={minimo}
                    onChange={handleMinimo}
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
                    label="Máximo"
                    variant="outlined"
                    value={maximo}
                    onChange={handleMaximo}
                    sx={
                        isSmall
                            ? { width: "100%" }
                            : { width: "90%", ml: "5%", mr: "5%" }
                    }
                />
            </Grid>
        </Grid>
    );
}
