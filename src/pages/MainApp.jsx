import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";
import Dashboard from "./mainApp/Dashboard";
import Historic from "./mainApp/Historic";

export default function MainApp() {
    return (
        <>
            <Header />
            <dashboard>
                <Container style={{ minHeight: "95vh" }}>
                    <Routes>
                        <Route path="realtime" element={<Dashboard />} />
                        <Route path="historic" element={<Historic />} />
                    </Routes>
                </Container>
            </dashboard>
            <Footer />
        </>
    );
}
