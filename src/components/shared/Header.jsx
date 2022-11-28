import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: "#B7FFA8" }}>
                <Toolbar>
                    <Box
                        sx={{
                            textAlign: "left",
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "black" }}>
                            Agrosense
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    );
}
