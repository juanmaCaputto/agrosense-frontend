import { Grid } from "@mui/material";
import ParameterCard from "../../components/shared/ParameterCard";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function RealTime() {
    return (
        <>
            <Grid container sx={{ marginTop: "100px" }}>
                <ParameterCard title="Humedad de suelo" value="30%" />
                <ParameterCard title="Humedad Ambiente" value="70%" />
                <ParameterCard
                    title="Clima"
                    value={<WbSunnyIcon sx={{ width: "40%", height: "50%" }} />}
                />
                <ParameterCard title="Temperatura" value="30°C" />
            </Grid>
        </>
    );
}
