import { useContext } from "react";
import InfoContext from "../context/InfoContext";
import RealtimeContext from "../context/RealtimeContext";
import {
    getHistoricSensorData,
    getLatestValues,
    getSensorsId,
} from "../services/sensors/SensorsData";
import { orderRealtimeData } from "../util/OrderRealtimeData";

export function useSensors() {
    const ctxInfo = useContext(InfoContext);
    const ctxRealtime = useContext(RealtimeContext);

    const getSensorNames = async () => {
        await getSensorsId().then((res) => {
            let devices = [];
            res.forEach((e, i) => {
                if (i === 0) {
                    devices.push({
                        device: res[i].idDispositivo,
                        sensors: [res[i].idSensor],
                    });
                } else {
                    let deviceExist = false;
                    devices.forEach((e) => {
                        if (e.device === res[i].idDispositivo) {
                            e.sensors.push(res[i].idSensor);
                            deviceExist = true;
                        }
                    });
                    if (!deviceExist) {
                        devices.push({
                            device: res[i].idDispositivo,
                            sensors: [res[i].idSensor],
                        });
                    }
                }
            });
            console.log(devices);
            ctxInfo.setLoading(false);
            ctxInfo.setDevices([...devices]);
        });
    };

    const getValuesRealTime = async () => {
        let humedadAmbiente = 0;
        let tempAmbiente = 0;
        let humedadSueloTotal1 = 0;
        let humedadSueloTotal2 = 0;
        let lluvia = false;
        let luz = 0;

        await getLatestValues().then((res) => {
            ctxRealtime.setDatos(orderRealtimeData(res.data));
            res.data.forEach((e) => {
                if (e.idSensor.includes("HUM_AMBIENTE")) {
                    humedadAmbiente = humedadAmbiente + e.value;
                } else if (e.idSensor.includes("TEMP_AMBIENTE")) {
                    tempAmbiente = tempAmbiente + e.value;
                } else if (e.idSensor.includes("HUM_SUELO_01")) {
                    humedadSueloTotal1 = humedadSueloTotal1 + e.value;
                } else if (e.idSensor.includes("HUM_SUELO_02")) {
                    humedadSueloTotal2 = humedadSueloTotal2 + e.value;
                } else if (e.idSensor.includes("LLUVIA") && e.value === 1) {
                    lluvia = true;
                } else if (e.idSensor.includes("LUZ")) {
                    luz = luz + e.value;
                }
            });
            humedadAmbiente = humedadAmbiente / 2;
            tempAmbiente = tempAmbiente / 2;
            humedadSueloTotal1 = Math.round(humedadSueloTotal1 / 3);
            humedadSueloTotal2 = Math.round(humedadSueloTotal2 / 3);
            luz = luz / 2;
            ctxRealtime.setPromedios({
                humedadAmbiente,
                tempAmbiente,
                humedadSueloTotal1,
                humedadSueloTotal2,
                lluvia,
                luz,
            });
        });
        ctxRealtime.setLoading(false);
    };

    const getValuesParameter = async ({
        sensorsId = [],
        start = "",
        end = "",
    }) => {
        const sensorData = await Promise.all(
            sensorsId.map((sensorId) =>
                getHistoricSensorData({ start, end, sensorId }).then((res) => {
                    return { id: sensorId, data: res.data };
                })
            )
        );
        console.log(sensorData);
        return [...sensorData];
    };

    return { getSensorNames, getValuesRealTime, getValuesParameter };
}
