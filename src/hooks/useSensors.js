import { useContext } from "react";
import InfoContext from "../context/InfoContext";
import {
    getHistoricSensorData,
    getSensorsId,
} from "../services/sensors/SensorsData";

export function useSensors() {
    const ctx = useContext(InfoContext);

    const getSensorNames = async () => {
        const sensorsId = await getSensorsId();
        let devices = [];
        sensorsId.forEach((e, i) => {
            if (i === 0) {
                devices.push({
                    device: sensorsId[i].idDispositivo,
                    sensors: [sensorsId[i].idSensor],
                });
            } else {
                let deviceExist = false;
                devices.forEach((e) => {
                    if (e.device === sensorsId[i].idDispositivo) {
                        e.sensors.push(sensorsId[i].idSensor);
                        deviceExist = true;
                    }
                });
                if (!deviceExist) {
                    devices.push({
                        device: sensorsId[i].idDispositivo,
                        sensors: [sensorsId[i].idSensor],
                    });
                }
            }
        });
        console.log(devices)
        ctx.setLoading(false);
        ctx.setDevices([...devices]);
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

    return { getSensorNames, getValuesParameter };
}
