import { Collapse, Divider, Grid } from "@mui/material";
import AlarmCollapseItem from "./AlarmCollapseItem";

export default function AlarmCollapse({
    todos = false,
    values = [],
    loaded = false,
    setLoaded,
}) {
    return (
        <Grid item xs={12}>
            <Collapse in={!todos}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        mt: "15px",
                        mb: "15px",
                    }}
                >
                    <Divider />
                </Grid>
                {[1, 2].map((e) => {
                    return (
                        <AlarmCollapseItem
                            key={e}
                            title={e}
                            loaded={loaded}
                            setLoaded={setLoaded}
                            sensorName={values[e - 1].idSensor}
                            max={values[e - 1].data.upperValue}
                            min={values[e - 1].data.lowerValue}
                        />
                    );
                })}
                <Grid item xs={12}>
                    <Divider />
                </Grid>
            </Collapse>
        </Grid>
    );
}
