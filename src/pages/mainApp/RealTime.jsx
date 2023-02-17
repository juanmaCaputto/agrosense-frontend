import { useState, useEffect, useContext } from "react";
import { Button, Grid, Typography } from "@mui/material";
import ParameterCard from "../../components/shared/ParameterCard";
import CachedIcon from "@mui/icons-material/Cached";
import { useSensors } from "../../hooks/useSensors";
import InfoCard from "../../components/shared/InfoCard";
import { getCurrentDate } from "../../util/GetCurrentDate";
import BackCard from "../../components/shared/BackCard";
import RealtimeContext from "../../context/RealtimeContext";
import ParameterCardDouble from "../../components/shared/ParameterCardDouble";
import ParameterCardSingle from "../../components/shared/ParameterCardSingle";
import { useWeather } from "../../hooks/useWeather";
import Loading from "react-fullscreen-loading";

export default function RealTime() {
    const [fechaActualizacion, setFechaActualizacion] = useState(
        getCurrentDate()
    );
    const { getValuesRealTime } = useSensors();
    const { weatherIcon } = useWeather();
    const ctx = useContext(RealtimeContext);

    const handleGetValuesRealtime = async () => {
        if (!ctx.alreadyChecked) {
            await getValuesRealTime();
        }
        ctx.setAlreadyChecked(true);
    };

    useEffect(() => {
        handleGetValuesRealtime();
    });

    const refreshPage = async () => {
        ctx.setLoading(true);
        await getValuesRealTime();
        setFechaActualizacion(getCurrentDate());
    };

    return (
        <InfoCard
            minWidth="100%"
            marginTop="100px"
            title="Información en Tiempo Real"
        >
            {ctx.loading ? (
                <Loading loading background="#FFFFFF" loaderColor="#3498db" />
            ) : (
                <Grid container>
                    <ParameterCardSingle title="Clima" value={weatherIcon()} />
                    <ParameterCardDouble
                        title="Humedad de suelo"
                        value1={`${ctx.promedios.humedadSueloTotal1}%`}
                        value2={`${ctx.promedios.humedadSueloTotal2}%`}
                    >
                        <BackCard
                            info1={
                                <>
                                    <b>H:</b>{" "}
                                    {ctx.datos.dispositivo1.humedadSueloH}
                                    %
                                    <br />
                                    <b>M:</b>{" "}
                                    {ctx.datos.dispositivo1.humedadSueloM}
                                    %
                                    <br />
                                    <b>L:</b>{" "}
                                    {ctx.datos.dispositivo1.humedadSueloL}%
                                </>
                            }
                            info2={
                                <>
                                    <b>H:</b>{" "}
                                    {ctx.datos.dispositivo2.humedadSueloH}
                                    %
                                    <br />
                                    <b>M:</b>{" "}
                                    {ctx.datos.dispositivo2.humedadSueloM}
                                    %
                                    <br />
                                    <b>L:</b>{" "}
                                    {ctx.datos.dispositivo2.humedadSueloL}%
                                </>
                            }
                        />
                    </ParameterCardDouble>
                    <ParameterCard
                        title="Humedad Ambiente"
                        value={`${ctx.promedios.humedadAmbiente}%`}
                    >
                        <BackCard
                            info1={
                                <>
                                    <b>Humedad:</b>{" "}
                                    {ctx.datos.dispositivo1.humedadAmbiente}%
                                </>
                            }
                            info2={
                                <>
                                    <b>Humedad:</b>{" "}
                                    {ctx.datos.dispositivo2.humedadAmbiente}%
                                </>
                            }
                        />
                    </ParameterCard>
                    <ParameterCard
                        title="Temperatura Ambiente"
                        value={`${ctx.promedios.tempAmbiente}°C`}
                    >
                        <BackCard
                            info1={
                                <>
                                    <b>Temperatura:</b>{" "}
                                    {ctx.datos.dispositivo1.tempAmbiente}°C
                                </>
                            }
                            info2={
                                <>
                                    <b>Temperatura:</b>{" "}
                                    {ctx.datos.dispositivo2.tempAmbiente}°C
                                </>
                            }
                        />
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
                            onClick={refreshPage}
                        >
                            Actualizar
                        </Button>
                    </Grid>
                </Grid>
            )}
        </InfoCard>
    );
}
