import moment from "moment";

export function getCurrentDate() {
    return moment().format("DD/MM/YYYY hh:mm");
}
