import { Grid, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

export default function SubParameterCard({ deviceName = "", info = "" }) {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });

    return (
        <Grid container item xs={6}>
            <Grid item xs={12}>
                <Typography
                    variant={!isSmall ? "subtitle1" : "subtitle2"}
                    style={{
                        textAlign: "center",
                        color: "#1665B3",
                        fontWeight: "600",
                    }}
                    gutterBottom
                >
                    {deviceName}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="subtitle2"
                    style={{
                        textAlign: "center",
                    }}
                    gutterBottom
                >
                    {info}
                </Typography>
            </Grid>
        </Grid>
    );
}
