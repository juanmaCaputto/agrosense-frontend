import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";

export function SelectOpcion({
    xmSize = 12,
    mdSize = 12,
    title = "",
    opciones = [],
    defaultValue = "",
    variant = "outlined",
    value = "",
    setEstado,
    disabled = false,
}) {
    const handleChangeEstado = (event) => {
        setEstado(event.target.value);
    };

    return (
        <Grid item xs={xmSize} sm={mdSize}>
            <FormControl
                fullWidth
                variant={variant}
                style={{ textAlign: "left" }}
                size="small"
                sx={{ mt: 2 }}
            >
                <InputLabel>{title}</InputLabel>
                <Select
                    defaultValue={defaultValue}
                    label={title}
                    onChange={handleChangeEstado}
                    value={value}
                    disabled={disabled}
                >
                    {opciones.map((i, index) => (
                        <MenuItem value={i.value} key={index}>
                            {i.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
}
