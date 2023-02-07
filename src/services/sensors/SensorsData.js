import { request } from "../GeneralApi";

export function currentSensorData({
    start = "2022-01-01%2012:00:00",
    end = "2023-02-02%2000:00:00",
    sensorId = "",
}) {
    return request({
        params: `/getDatos?fechaInicio=${start}&fechaFin=${end}&idSensor=${sensorId}`,
        method: "GET",
    });
}

export function sensorId() {
    return request({
        params: `/getSensores`,
        method: "GET",
    });
}
