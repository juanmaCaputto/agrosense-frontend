import { useState } from "react";
import { HistoricSensorData, sensorId } from "../services/sensors/SensorsData";

export function useSensors() {
    const [humedadAmbiente, setHumedadAmbiente] = useState([]);
    const [humedadSueloH, setHumedadSueloH] = useState([]);
    const [humedadSueloM, setHumedadSueloM] = useState([]);
    const [humedadSueloL, setHumedadSueloL] = useState([]);
    const [lluvia, setLluvia] = useState([]);
    const [luz, setLuz] = useState([]);
    const [temperatura, setTemperatura] = useState([]);

    const setCurrentValues = async () => {
        //const sensors = await sensorId();
        /*const allData = await currentSensorData({
            start: "2023-01-01%2012:00:00",
            end: "2023-02-02%2000:00:00",
            sensorId: "SENS_HUM_SUELO_01_M",
        });*/
        /*allData.forEach((e) => {
            if (e.sensorId.search("HUM_AMBIENTE") !== -1) {
                setHumedadAmbiente([...humedadAmbiente, e.value]);
            } else if (e.sensorId.search("HUM_SUELO_H") !== -1) {
                setHumedadSueloH([...humedadSueloH, e.value]);
            } else if (e.sensorId.search("HUM_SUELO_M") !== -1) {
                setHumedadSueloM([...humedadSueloM, e.value]);
            } else if (e.sensorId.search("HUM_SUELO_L") !== -1) {
                setHumedadSueloL([...humedadSueloL, e.value]);
            } else if (e.sensorId.search("LLUVIA") !== -1) {
                setLluvia([...lluvia, e.value]);
            } else if (e.sensorId.search("LUZ") !== -1) {
                setLuz([...luz, e.value]);
            } else if (e.sensorId.search("TEMP_AMBIENTE") !== -1) {
                setTemperatura([...temperatura, e.value]);
            }
        });*/
    };

    const getValuesParameter = async ({
        sensorsId = [],
        start = "",
        end = "",
    }) => {
        const sensorData = await Promise.all(
            sensorsId.map((sensorId) =>
            HistoricSensorData({ start, end, sensorId }).then((res) => {
                return { id: sensorId, data: res.data };
            })
        )
        );
        console.log(sensorData);
        return [...sensorData];
    };

    return { setCurrentValues, getValuesParameter, humedadSueloH };
}
