import { Suspense } from "react";
import { routes } from "./config/Routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { LoadingPage } from "./pages/loaders/LoadingPage";
import { PageDoesNotExist } from "./pages/errors/PageDoesNotExist";
import "./App.css";
import MainApp from "./pages/MainApp";
import { Footer } from "./components/shared/Footer";

function App() {
    return (
        <>
            <Container style={{ minHeight: "95vh" }}>
                <Suspense
                    fallback={<LoadingPage />}
                    style={{ height: "2000px" }}
                >
                    <BrowserRouter>
                        <Routes>
                            <Route path={"/*"} element={<MainApp />} />

                            <Route component={PageDoesNotExist} />
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </Container>
            <Footer />
        </>
    );
}

export default App;
