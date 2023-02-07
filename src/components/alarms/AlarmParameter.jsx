import {
    Checkbox,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";

export default function AlarmParameter({ title = "" }) {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });

    return (
        <Grid
            container
            item
            xs={12}
            style={{
                marginTop: "30px",
            }}
        >
            <Grid item xs={12} sm={3}>
                <Typography
                    variant="body1"
                    style={
                        isSmall ? { textAlign: "left" } : { textAlign: "right" }
                    }
                    sx={{ p: 1 }}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sm={3}
                sx={isSmall ? { marginBottom: "10px" } : {}}
            >
                <TextField
                    size="small"
                    label="Mínimo"
                    variant="outlined"
                    sx={isSmall ? { width: "100%" } : {}}
                />
            </Grid>
            <Grid
                item
                xs={12}
                sm={3}
                sx={isSmall ? { marginBottom: "10px" } : {}}
            >
                <TextField
                    size="small"
                    label="Máximo"
                    variant="outlined"
                    sx={isSmall ? { width: "100%" } : {}}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <FormControlLabel control={<Checkbox />} label="Activar" />
            </Grid>
        </Grid>
    );
}
