import { useState } from "react";
import { currentSensorData } from "../services/sensors/SensorsData";

export function useSensors() {
    const [humedadAmbiente, setHumedadAmbiente] = useState([]);
    const [humedadSueloH, setHumedadSueloH] = useState([]);
    const [humedadSueloM, setHumedadSueloM] = useState([]);
    const [humedadSueloL, setHumedadSueloL] = useState([]);
    const [lluvia, setLluvia] = useState([]);
    const [luz, setLuz] = useState([]);
    const [temperatura, setTemperatura] = useState([]);

    const setCurrentValues = async () => {
        const allData = await currentSensorData();
        allData.forEach((e) => {
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
        });
    };

    const getValuesParameter = async ({
        sensorId = "",
        start = "",
        end = "",
    }) => {
        const allData = await currentSensorData({ start, end, sensorId });
        return allData;
    };

    return { setCurrentValues, getValuesParameter, humedadSueloH };
}
