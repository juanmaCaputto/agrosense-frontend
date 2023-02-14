import { createContext, useState } from "react";

const InfoContext = createContext({
    devices: [],
    setDevices: () => {},
    loading: true,
    setLoading: () => {},
    alreadyChecked: false,
    setAlreadyChecked: () => {},
});

export function InfoContextProvider({ children }) {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alreadyChecked, setAlreadyChecked] = useState(false);

    return (
        <InfoContext.Provider
            value={{
                devices,
                setDevices,
                loading,
                setLoading,
                alreadyChecked,
                setAlreadyChecked,
            }}
        >
            {children}
        </InfoContext.Provider>
    );
}

export default InfoContext;
