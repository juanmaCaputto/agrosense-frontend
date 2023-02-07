import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import RealTime from "./mainApp/RealTime";
import Historic from "./mainApp/Historic";
import RedirectPage from "./loaders/RedirectPage";
import Alarms from "./mainApp/Alarms";
import Info from "./mainApp/Info";

export default function MainApp() {
    return (
        <>
            <Header />
                <Container style={{ minHeight: "95vh" }}>
                    <Routes>
                        <Route path="/realtime" element={<RealTime />} />
                        <Route path="/historic" element={<Historic />} />
                        <Route path="/alarms" element={<Alarms />} />
                        <Route path="/info" element={<Info />} />
                        <Route path={"/*"} element={<RedirectPage />} />
                    </Routes>
                </Container>
            <Footer />
        </>
    );
}
