import { request } from "../GeneralApi";

export function getHistoricSensorData({
    start = "2022-01-01%2012:00:00",
    end = "2025-01-01%2000:00:00",
    sensorId = "",
}) {
    return request({
        params: `/getDatos?fechaInicio=${start}&fechaFin=${end}&idSensor=${sensorId}`,
        method: "GET",
    });
}

export function getLatestValues() {
    return request({
        params: `/GetDatosLatest`,
        method: "GET",
    });
}

export function setAlarm({
    idSensor = "",
    lowerValue = "",
    upperValue = "",
    enabled = "",
}) {
    return request({
        params: `/AlarmasSaveState?idSensor=${idSensor}&lowerValue=${lowerValue}&upperValue=${upperValue}&enabled=${enabled}`,
        method: "´POST",
    });
}

export function getSensorsId() {
    return request({
        params: `/getSensores`,
        method: "GET",
    });
}
