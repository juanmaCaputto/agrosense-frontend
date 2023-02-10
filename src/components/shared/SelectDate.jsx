import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { formatDatePicker } from "../../util/FormatDatePicker";

export default function SelectDate({ date = "", setDate, title = "Date" }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={title}
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        size="small"
                        style={{ width: "100%" }}
                        error={false}
                        sx={{ mt: 2 }}
                    />
                )}
            />
        </LocalizationProvider>
    );
}
