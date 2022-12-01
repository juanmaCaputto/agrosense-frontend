import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const RouteContext = createContext({
    navigate: () => {},
});

export function RouteContextProvider(props) {
    const navigate = useNavigate();
    return (
        <RouteContext.Provider
            value={{
                navigate: navigate,
            }}
        >
            {props.children}
        </RouteContext.Provider>
    );
}

export default RouteContext;
