export function orderRealtimeData(data) {
    let dataAux = {
        dispositivo1: {
            humedadAmbiente: 0,
            tempAmbiente: 0,
            humedadSueloH: 0,
            humedadSueloM: 0,
            humedadSueloL: 0,
            lluvia: false,
            luz: 0,
        },
        dispositivo2: {
            humedadAmbiente: 0,
            tempAmbiente: 0,
            humedadSueloH: 0,
            humedadSueloM: 0,
            humedadSueloL: 0,
            lluvia: false,
            luz: 0,
        },
    };
    data.forEach((e) => {
        if (e.idSensor.includes("01")) {
            if (e.idSensor.includes("HUM_AMBIENTE")) {
                dataAux.dispositivo1.humedadAmbiente = e.value;
            } else if (e.idSensor.includes("TEMP_AMBIENTE")) {
                dataAux.dispositivo1.tempAmbiente = e.value;
            } else if (e.idSensor.includes("HUM_SUELO_01_H")) {
                dataAux.dispositivo1.humedadSueloH = Math.round(e.value);
            } else if (e.idSensor.includes("HUM_SUELO_01_M")) {
                dataAux.dispositivo1.humedadSueloM = Math.round(e.value);
            } else if (e.idSensor.includes("HUM_SUELO_01_L")) {
                dataAux.dispositivo1.humedadSueloL = Math.round(e.value);
            } else if (e.idSensor.includes("LLUVIA")) {
                if (e.value === 0) {
                    dataAux.dispositivo1.lluvia = false;
                } else {
                    dataAux.dispositivo1.lluvia = true;
                }
            } else if (e.idSensor.includes("LUZ")) {
                dataAux.dispositivo1.luz = e.value;
            }
        } else {
            if (e.idSensor.includes("HUM_AMBIENTE")) {
                dataAux.dispositivo2.humedadAmbiente = e.value;
            } else if (e.idSensor.includes("TEMP_AMBIENTE")) {
                dataAux.dispositivo2.tempAmbiente = e.value;
            } else if (e.idSensor.includes("HUM_SUELO_02_H")) {
                dataAux.dispositivo2.humedadSueloH = Math.round(e.value);
            } else if (e.idSensor.includes("HUM_SUELO_02_M")) {
                dataAux.dispositivo2.humedadSueloM = Math.round(e.value);
            } else if (e.idSensor.includes("HUM_SUELO_02_L")) {
                dataAux.dispositivo2.humedadSueloL = Math.round(e.value);
            } else if (e.idSensor.includes("LLUVIA")) {
                if (e.value === 0) {
                    dataAux.dispositivo2.lluvia = false;
                } else {
                    dataAux.dispositivo2.lluvia = true;
                }
            } else if (e.idSensor.includes("LUZ")) {
                dataAux.dispositivo2.luz = e.value;
            }
        }
    });
    return dataAux;
}
