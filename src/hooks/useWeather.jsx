import { useContext } from "react";
import RealtimeContext from "../context/RealtimeContext";
import {
    WiDaySunny,
    WiDayRain,
    WiCloud,
    WiRain,
    WiNightAltRain,
} from "weather-icons-react";
import BedtimeIcon from "@mui/icons-material/Bedtime";

export function useWeather() {
    const ctx = useContext(RealtimeContext);

    const weatherIcon = () => {
        console.log(ctx.promedios.luz);
        console.log(ctx.promedios.lluvia);
        if (ctx.promedios.luz <= 11 && !ctx.promedios.lluvia) {
            return (
                <WiDaySunny
                    style={{ display: "block", width: "100%", height: "190px" }}
                />
            );
        } else if (ctx.promedios.luz <= 11 && ctx.promedios.lluvia) {
            return (
                <WiDayRain
                    style={{ display: "block", width: "100%", height: "190px" }}
                />
            );
        } else if (
            ctx.promedios.luz > 11 &&
            ctx.promedios.luz < 1000 &&
            !ctx.promedios.lluvia
        ) {
            return (
                <WiCloud
                    style={{ display: "block", width: "100%", height: "190px" }}
                />
            );
        } else if (
            ctx.promedios.luz > 11 &&
            ctx.promedios.luz < 1000 &&
            !ctx.promedios.lluvia
        ) {
            return (
                <WiRain
                    style={{ display: "block", width: "100%", height: "190px" }}
                />
            );
        } else if (ctx.promedios.luz >= 1000 && !ctx.promedios.lluvia) {
            return (
                <BedtimeIcon
                    style={{ display: "block", width: "100%", height: "190px" }}
                />
            );
        } else if (ctx.promedios.luz >= 1000 && ctx.promedios.lluvia) {
            return (
                <WiNightAltRain
                    style={{ display: "block", width: "100%", height: "190px" }}
                />
            );
        }
    };

    return { weatherIcon };
}
