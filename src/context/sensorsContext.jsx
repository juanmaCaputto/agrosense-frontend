import { createContext, useState } from "react";

const SensorsContext = createContext({
    currentValues: {
        dispositivo1: {
            humedadAmbiente1: 0,
            humedadSueloTotal1: 0,
            humedadSueloH1: 0,
            humedadSueloM1: 0,
            humedadSueloL1: 0,
            lluvia1: false,
            luz1: true,
            tempAmbiente1: 0,
        },
    },
    setCurrentValues: () => {},
    currentAvgValues: {
        humedadAmbiente: 0,
        humedadSueloTotal: 0,
        humedadSueloH: 0,
        humedadSueloM: 0,
        humedadSueloL: 0,
        lluvia: false,
        luz: true,
        tempAmbiente: 0,
    },
    setCurrentAvgValues: () => {},
});

export function SensorsContextProvider({ children }) {
    const [currentValues, setCurrentValues] = useState({
        dispositivo1: {
            humedadAmbiente1: 0,
            humedadSueloTotal1: 0,
            humedadSueloH1: 0,
            humedadSueloM1: 0,
            humedadSueloL1: 0,
            lluvia1: false,
            luz1: true,
            tempAmbiente1: 0,
        },
    });
    const [currentAvgValues, setCurrentAvgValues] = useState({
        humedadAmbiente: 0,
        humedadSueloTotal: 0,
        humedadSueloH: 0,
        humedadSueloM: 0,
        humedadSueloL: 0,
        lluvia: false,
        luz: true,
        tempAmbiente: 0,
    });

    return (
        <SensorsContext.Provider
            value={{
                currentValues,
                setCurrentValues,
                currentAvgValues,
                setCurrentAvgValues,
            }}
        >
            {children}
        </SensorsContext.Provider>
    );
}

export default SensorsContext;
