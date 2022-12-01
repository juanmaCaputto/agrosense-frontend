import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingPage } from "./pages/loaders/LoadingPage";
import { PageDoesNotExist } from "./pages/errors/PageDoesNotExist";
import "./App.css";
import MainApp from "./pages/MainApp";

function App() {
    return (
        <>
            <Suspense fallback={<LoadingPage />} style={{ height: "2000px" }}>
                <BrowserRouter>
                    <Routes>
                        <Route path={"dashboard/*"} element={<MainApp />} />

                        <Route path={"/*"} element={<PageDoesNotExist/>} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default App;
