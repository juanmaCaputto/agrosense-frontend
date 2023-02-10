export function formatDatePicker(newDate) {
    const month = newDate.$M + 1;
    return newDate.$y + "-" + month + "-" + newDate.$D + "%2000:00:00";
}
