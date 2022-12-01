import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export function PageDoesNotExist() {
    //#F7F7F7
    document.body.style = "background:#F7F7F7";
    return (
        <Container maxWidth="md">
            <Grid
                item
                xs={12}
                md={12}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ minHeight: "300px" }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    style={{ color: "#18265a" }}
                    align="center"
                >
                    Página no Disponible.
                </Typography>
            </Grid>
        </Container>
    );
}
