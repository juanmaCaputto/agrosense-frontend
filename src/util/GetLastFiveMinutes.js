import moment from "moment";

export function getLastFiveMinutes() {
    const now = moment().format("YYYY-MM-DD%20HH:mm:ss");
    const fiveMinsBefore = parseInt(moment().format("mm")) - 5;
    let dateListAux = now.split(":");
    dateListAux[1] = fiveMinsBefore;
    let fiveBefore = dateListAux.toString();
    fiveBefore = fiveBefore.replaceAll(",", ":");

    return {
        now,
        fiveBefore,
    };
}
