import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@mui/material/Grid";

export function LoadingPage() {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: "100vh" }}
        >
            <CircularProgress /> {"  "}
            &nbsp; Cargando...
        </Grid>
    );
}
