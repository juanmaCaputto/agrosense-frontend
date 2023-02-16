import { sensorsNames } from "./constants/SensorsName";

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
        switch (e.idSensor) {
            case sensorsNames.HUM_AMBIENTE_1:
                dataAux.dispositivo1.humedadAmbiente = e.value;
                break;
            case sensorsNames.TEMP_AMBIENTE_1:
                dataAux.dispositivo1.tempAmbiente = e.value;
                break;
            case sensorsNames.HUM_SUELO_H_1:
                dataAux.dispositivo1.humedadSueloH = Math.round(e.value);
                break;
            case sensorsNames.HUM_SUELO_M_1:
                dataAux.dispositivo1.humedadSueloM = Math.round(e.value);
                break;
            case sensorsNames.HUM_SUELO_L_1:
                dataAux.dispositivo1.humedadSueloL = Math.round(e.value);
                break;
            case sensorsNames.LLUVIA_1:
                if (e.value === 0) {
                    dataAux.dispositivo1.lluvia = false;
                } else {
                    dataAux.dispositivo1.lluvia = true;
                }
                break;
            case sensorsNames.LUZ_1:
                dataAux.dispositivo1.luz = e.value;
                break;
            case sensorsNames.HUM_AMBIENTE_2:
                dataAux.dispositivo2.humedadAmbiente = e.value;
                break;
            case sensorsNames.TEMP_AMBIENTE_2:
                dataAux.dispositivo2.tempAmbiente = e.value;
                break;
            case sensorsNames.HUM_SUELO_H_2:
                dataAux.dispositivo2.humedadSueloH = Math.round(e.value);
                break;
            case sensorsNames.HUM_SUELO_M_2:
                dataAux.dispositivo2.humedadSueloM = Math.round(e.value);
                break;
            case sensorsNames.HUM_SUELO_L_2:
                dataAux.dispositivo2.humedadSueloL = Math.round(e.value);
                break;
            case sensorsNames.LLUVIA_2:
                if (e.value === 0) {
                    dataAux.dispositivo2.lluvia = false;
                } else {
                    dataAux.dispositivo2.lluvia = true;
                }
                break;
            case sensorsNames.LUZ_2:
                dataAux.dispositivo2.luz = e.value;
                break;
            default:
            //
        }
    });
    return dataAux;
}
