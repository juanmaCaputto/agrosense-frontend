import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";
import Dashboard from "./mainApp/Dashboard";
import Historic from "./mainApp/Historic";

export default function MainApp() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="realtime" element={<Dashboard />} />
                <Route path="historic" element={<Historic />} />
            </Routes>
        </>
    );
}
