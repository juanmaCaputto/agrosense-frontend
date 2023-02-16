import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { InfoContextProvider } from "./context/InfoContext";
import { RealtimeContextProvider } from "./context/RealtimeContext";
import { AlarmsContextProvider } from "./context/AlarmsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AlarmsContextProvider>
            <RealtimeContextProvider>
                <InfoContextProvider>
                    <App />
                </InfoContextProvider>
            </RealtimeContextProvider>
        </AlarmsContextProvider>
    </React.StrictMode>
);
