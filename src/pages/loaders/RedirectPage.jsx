import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../config/Routes";
import { LoadingPage } from "./LoadingPage";

export default function RedirectPage() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(routes.REALTIME);
    });

    return <LoadingPage />;
}
