import { createContext, useState } from "react";

const AlarmsContext = createContext({
    alarms: [],
    setAlarms: () => {},
    loading: true,
    setLoading: () => {},
    alreadyChecked: false,
    setAlreadyChecked: () => {},
});

export function AlarmsContextProvider({ children }) {
    const [alarms, setAlarms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [alreadyChecked, setAlreadyChecked] = useState(false);

    return (
        <AlarmsContext.Provider
            value={{
                alarms,
                setAlarms,
                loading,
                setLoading,
                alreadyChecked,
                setAlreadyChecked,
            }}
        >
            {children}
        </AlarmsContext.Provider>
    );
}

export default AlarmsContext;
