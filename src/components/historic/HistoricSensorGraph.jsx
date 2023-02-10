import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    TimeSeriesScale,
} from "chart.js";
import "chartjs-adapter-moment";
import { Line } from "react-chartjs-2";
import { useSensors } from "../../hooks/useSensors";
import { useMediaQuery } from "react-responsive";
import { formatDatePicker } from "../../util/FormatDatePicker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    TimeSeriesScale
);

const colors = [
    {
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
        borderColor: "rgb(170, 70, 132)",
        backgroundColor: "rgba(170, 70, 132, 0.5)",
    },
    {
        borderColor: "rgb(255, 20, 20)",
        backgroundColor: "rgba(255, 20, 20, 0.5)",
    },
    {
        borderColor: "rgb(120, 99, 132)",
        backgroundColor: "rgba(120, 99, 132, 0.5)",
    },
    {
        borderColor: "rgb(120, 200, 132)",
        backgroundColor: "rgba(120, 200, 132, 0.5)",
    },
    {
        borderColor: "rgb(255, 99, 20)",
        backgroundColor: "rgba(255, 99, 20, 0.5)",
    },
    {
        borderColor: "rgb(20, 120, 132)",
        backgroundColor: "rgba(20, 120, 132, 0.5)",
    },
    {
        borderColor: "rgb(40, 150, 80)",
        backgroundColor: "rgba(40, 150, 80, 0.5)",
    },
    {
        borderColor: "rgb(80, 99, 190)",
        backgroundColor: "rgba(80, 99, 190, 0.5)",
    },
];

const HistoricSensorGraph = ({
    title = "HISTORICO DE SENSORES",
    variantsId = [],
    start = "",
    end = "",
    sensorDataset = [],
    scale = "day",
}) => {
    const isSmall = useMediaQuery({ query: "(max-width: 600px)" });

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: "HISTORICO DE SENSORES",
            },
        },
        scales: {
            x: {
                title: {
                    display: !isSmall,
                    text: "Tiempo",
                },
                type: "time",
                gridLines: {
                    lineWidth: 2,
                },
                time: {
                    unit: scale,
                    unitStepSize: 10000,
                    displayFormats: {
                        millisecond: "MMM DD",
                        second: "MMM DD",
                        minute: "MMM DD",
                        hour: "HH:mm",
                        day: "MMM DD",
                        week: "MMM DD",
                        month: "MMM DD",
                        quarter: "MMM DD",
                        year: "MMM DD",
                    },
                },
            },
            y: {
                /*title: {
                    display: !isSmall,
                    text: "Humedad(%)",
                },*/
                type: "linear",
                display: true,
                position: "left",
            },
        },
    };

    /*const [selectedModel, setselectedModel] = useState(true);
    const [loadedData, setloadedData] = useState(true);
    const [loadingData, setLoadingData] = useState(false);
    const startLoading = () => {
        setselectedModel(true);
        setLoadingData(true);
    };
    const stopLoading = () => setLoadingData(false);
    const hasLoadedData = () => setloadedData(true);
    const noLoadedData = () => setloadedData(false);*/

    const { getValuesParameter } = useSensors();

    /*let sensorDataset = [];
    if (variantsId.length > 0 && start !== "" && end !== "") {
        sensorDataset = getValuesParameter({
            sensorsId: variantsId,
            start: formatDatePicker(start),
            end: formatDatePicker(end),
        });
    }*/

    let labels = [];
    sensorDataset.forEach(function (dataset) {
        dataset.data.forEach(function (value) {
            labels.push(value["timestamp"].split(" ")[0]);
        });
    });
    let datasets = sensorDataset.map((value, i) => {
        return {
            label: value["id"],
            data: value["data"]
                .map(function (vvalue) {
                    return {
                        x: new Date(vvalue["timestamp"]),
                        y: vvalue["value"],
                    };
                })
                .sort((a, b) => {
                    if (a && b) {
                        return a.x.getTime() - b.x.getTime();
                    } else {
                        return 0;
                    }
                }),
            borderColor: colors[i].borderColor,
            backgroundColor: colors[i].backgroundColor,
            yAxisID: "y",
            pointRadius: 0,
        };
    });
    /*labels = labels.sort((a, b) => {
        if (a && b) {
            return a.getTime() - b.getTime();
        } else {
            return 0;
        }
    });*/

    const data = {
        labels: labels,
        datasets: datasets,
    };
    /*let filter = !selectedModel
        ? null
        : loadingData
        ? ""
        : loadedData
        ? id
            ? `${id} desde ${start.toLocaleDateString()} hasta ${end.toLocaleDateString()}`
            : null
        : null;
    const clearFilter = () => {
        setId("");
        setselectedModel(false);
    };*/

    return (
        <section>
            {/*<Card title={title} filters={filter} filtersClear={clearFilter}>*/}
            <Card
                style={
                    isSmall ? { minHeight: "250px" } : { minHeight: "350px" }
                }
            >
                {/*{!selectedModel ? (
                    <div>No se ha seleccionado un modelo.</div>
                ) : loadingData ? (
                    <div>Cargando datos...</div>
                ) : loadedData ? (
                    <Line options={options} data={data} />
                ) : (
                    <div>
                        No hay datos para mostrar del modelo seleccionado.
                    </div>
                )}*/}
                <Line options={options} data={data} />
            </Card>
        </section>
    );
};

export default HistoricSensorGraph;
