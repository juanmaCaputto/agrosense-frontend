import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { InfoContextProvider } from "./context/InfoContext";
import { RealtimeContextProvider } from "./context/RealtimeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RealtimeContextProvider>
            <InfoContextProvider>
                <App />
            </InfoContextProvider>
        </RealtimeContextProvider>
    </React.StrictMode>
);
