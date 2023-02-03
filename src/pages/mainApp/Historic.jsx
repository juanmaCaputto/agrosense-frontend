import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import PieChart from "../../components/PieChart";
import InfoCard from "../../components/shared/InfoCard";
import { Dataset } from "../../util/Data";

export default function Historic() {
    const [chartData, setChartData] = useState({
        labels: Dataset.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Dataset.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });

    return (
        <>
            <Grid container sx={{ marginTop: "100px" }}>
                <Grid item xs={12} sx={{ mb: 2 }}>
                    <InfoCard minWidth="100%">
                        <Grid
                            item
                            xs={4}
                            sx={{ textAlign: "center", padding: "20px" }}
                        >
                            <PieChart chartData={chartData} />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{ textAlign: "center", padding: "40px" }}
                        >
                            <Typography variant="h3">Frescura</Typography>
                        </Grid>
                    </InfoCard>
                </Grid>
            </Grid>
        </>
    );
}

