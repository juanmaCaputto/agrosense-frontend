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

export const options = {
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
                display: true,
                text: "Tiempo"
            },
            type: "time",
            gridLines: {
                lineWidth: 2,
            },
            time: {
                unit: "day",
                unitStepSize: 1000,
                displayFormats: {
                    millisecond: "MMM DD",
                    second: "MMM DD",
                    minute: "MMM DD",
                    hour: "MMM DD",
                    day: "MMM DD",
                    week: "MMM DD",
                    month: "MMM DD",
                    quarter: "MMM DD",
                    year: "MMM DD",
                },
            },
        },
        y: {
            title: {
                display: true,
                text: "Humedad(%)"
            },
            type: "linear",
            display: true,
            position: "left",
        },
    },
};

const HistoricSensorGraph = ({
    title = "HISTORICO DE SENSORES",
    variantId = "",
    start = "",
    end = "",
}) => {
    const [selectedModel, setselectedModel] = useState(true);
    const [loadedData, setloadedData] = useState(true);
    const [loadingData, setLoadingData] = useState(false);
    const startLoading = () => {
        setselectedModel(true);
        setLoadingData(true);
    };
    const stopLoading = () => setLoadingData(false);
    const hasLoadedData = () => setloadedData(true);
    const noLoadedData = () => setloadedData(false);
    const [id, setId] = useState(variantId);

    useEffect(() => {
        if (variantId) {
            if (variantId.length !== 0) {
                setId(variantId);
            }
        }
    }, [variantId]);

    const { getValuesParameter } = useSensors();

    /*const sensorDataset = getValuesParameter({
        sensorId: id,
        start,
        end,
    });*/

    const sensorDataset = [
        { timeStamp: "2023-01-06 00:39", value: "70" },
        { timeStamp: "2023-02-07 07:39", value: "98" },
        { timeStamp: "2023-02-08 08:39", value: "67" },
        { timeStamp: "2023-02-09 09:39", value: "96" },
        { timeStamp: "2023-02-16 10:39", value: "67" },
        { timeStamp: "2023-02-17 11:39", value: "56" },
        { timeStamp: "2023-02-18 12:39", value: "58" },
        { timeStamp: "2023-02-19 13:39", value: "75" },
        { timeStamp: "2023-02-20 14:39", value: "86" },
    ];

    /*const devVarPriceEvol = useGetDeviceVariantPrices(
        id,
        start || new Date(),
        end || new Date(),
        startLoading,
        stopLoading,
        hasLoadedData,
        noLoadedData
    );*/
    let labels = [];
    Object.values(sensorDataset).forEach(function (value) {
        labels.push(value["timeStamp"].split(" ")[0]);
    });

    let dataset = {
        label: id,
        data: Object.values(sensorDataset)
            .map((value) => {
                return {
                    x: new Date(value["timeStamp"]),
                    y: value["value"],
                };
            })
            .sort((a, b) => {
                if (a && b) {
                    return a.x.getTime() - b.x.getTime();
                } else {
                    return 0;
                }
            }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
        pointRadius: 0,
    };
    /*labels = labels.sort((a, b) => {
        if (a && b) {
            return a.getTime() - b.getTime();
        } else {
            return 0;
        }
    });*/

    const data = {
        labels: labels,
        datasets: [dataset],
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
            <Card style={{ minHeight: "350px" }}>
                {!selectedModel ? (
                    <div>No se ha seleccionado un modelo.</div>
                ) : loadingData ? (
                    <div>Cargando datos...</div>
                ) : loadedData ? (
                    <Line options={options} data={data} />
                ) : (
                    <div>
                        No hay datos para mostrar del modelo seleccionado.
                    </div>
                )}
            </Card>
        </section>
    );
};

export default HistoricSensorGraph;
