import { Suspense } from "react";
import { routes } from "./config/Routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { LoadingPage } from "./pages/loaders/LoadingPage";
import { PageDoesNotExist } from "./pages/errors/PageDoesNotExist";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";

function App() {
    return (
        <>
            <Header />
            <Container style={{ minHeight: "90vh" }}>
                <Suspense
                    fallback={<LoadingPage />}
                    style={{ height: "2000px" }}
                >
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path={routes.DASHBOARD}
                                element={<Dashboard />}
                            />

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
