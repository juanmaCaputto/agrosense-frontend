import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import InfoCard from "../../components/shared/InfoCard";
import { useSensors } from "../../hooks/useSensors";
import DeviceAndSensors from "../../components/info/deviceAndSensors";
import { useContext } from "react";
import InfoContext from "../../context/InfoContext";

export default function Info() {
    const { getSensorNames } = useSensors();
    const ctx = useContext(InfoContext);

    const handleGetSensorsnames = async () => {
        if (!ctx.alreadyChecked) {
            await getSensorNames();
        }
        ctx.setAlreadyChecked(true);
    };

    useEffect(() => {
        handleGetSensorsnames();
    });

    return (
        <InfoCard minWidth="100%" title="Información">
            <Grid item xs={12}>
                <Typography
                    variant="h6"
                    style={{ fontWeight: "600", color: "#1665B3" }}
                    sx={{ p: 1, mt: 2 }}
                >
                    Dispositivos Disponibles
                </Typography>
            </Grid>
            {!ctx.loading ? (
                ctx.devices.map((e) => {
                    return (
                        <DeviceAndSensors
                            key={e.device}
                            device={e.device}
                            sensors={e.sensors}
                        />
                    );
                })
            ) : (
                <></>
            )}
        </InfoCard>
    );
}
