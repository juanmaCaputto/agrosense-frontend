import { createContext, useState } from "react";

const RealtimeContext = createContext({
    promedios: [],
    setPromedios: () => {},
    datos: {
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
    },
    setDatos: () => {},
    loading: true,
    setLoading: () => {},
    alreadyChecked: false,
    setAlreadyChecked: () => {},
});

export function RealtimeContextProvider({ children }) {
    const [promedios, setPromedios] = useState([]);
    const [datos, setDatos] = useState({
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
    });
    const [alreadyChecked, setAlreadyChecked] = useState(false);
    const [loading, setLoading] = useState(true);

    return (
        <RealtimeContext.Provider
            value={{
                promedios,
                setPromedios,
                datos,
                setDatos,
                loading,
                setLoading,
                alreadyChecked,
                setAlreadyChecked,
            }}
        >
            {children}
        </RealtimeContext.Provider>
    );
}

export default RealtimeContext;
