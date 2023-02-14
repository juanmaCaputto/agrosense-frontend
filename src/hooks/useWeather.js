import { useContext } from "react";
import RealtimeContext from "../context/RealtimeContext";
import {
    WiDaySunny,
    WiDayRain,
    WiCloud,
    WiRain,
    WiNightClear,
    WiNightAltRain,
} from "weather-icons-react";


export function useWeather(){
    const ctx = useContext(RealtimeContext);

    const weatherIcon = () => {
        console.log(ctx.promedios.luz)
        console.log(ctx.promedios.lluvia)
        if (
            ctx.promedios.luz <= 20 &&
            !ctx.promedios.lluvia
        ) {
            return <WiDaySunny style={{ width: "40%", height: "50%" }} />;
        }else if (
            ctx.promedios.luz <= 20 &&
            ctx.promedios.lluvia
        ) {
            return <WiDayRain sx={{ width: "40%", height: "50%" }} />;
        } else if (
            ctx.promedios.luz > 20 &&
            ctx.promedios.luz < 1000 &&
            !ctx.promedios.lluvia
        ) {
            return <WiCloud sx={{ width: "40%", height: "50%" }} />;
        } else if (
            ctx.promedios.luz > 20 &&
            ctx.promedios.luz < 1000 &&
            !ctx.promedios.lluvia
        ) {
            return <WiRain sx={{ width: "40%", height: "50%" }} />;
        } else if (
            ctx.promedios.luz >= 1000 &&
            !ctx.promedios.lluvia
        ) {
            return <WiNightClear sx={{ width: "40%", height: "50%" }} />;
        } else if (
            ctx.promedios.luz >= 1000 &&
            ctx.promedios.lluvia
        ) {
            return <WiNightAltRain sx={{ width: "40%", height: "50%" }} />;
        }
    };

    return { weatherIcon };
};