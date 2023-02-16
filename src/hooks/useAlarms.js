import { useContext } from "react";
import AlarmsContext from "../context/AlarmsContext";
import { getAlarm, setAlarm } from "../services/sensors/SensorsData";
import { sensorsNamesList } from "../util/constants/SensorsName";

export function useAlarms() {
    const ctx = useContext(AlarmsContext);

    const getAlarms = async () => {
        const alarms = await Promise.all(
            sensorsNamesList.map((idSensor) =>
                getAlarm({ idSensor }).then((res) => {
                    return { idSensor, data: res.data };
                })
            )
        );
        console.log(alarms);
        ctx.setLoading(false);
        ctx.setAlarms([...alarms]);
    };

    const setAlarms = async (newAlarms) => {
        await Promise.all(
            newAlarms.map((newAlarm) =>
                setAlarm({
                    idSensor: newAlarm.idSensor,
                    lowerValue: newAlarm.data.lowerValue,
                    upperValue: newAlarm.data.upperValue,
                    enabled: newAlarm.data.enabled,
                })
            )
        );
    };

    return { getAlarms, setAlarms };
}
