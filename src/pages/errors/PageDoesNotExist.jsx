import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export function PageDoesNotExist() {
    //#F7F7F7
    document.body.style = "background:#F7F7F7";
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#18265a" }}>
                <Toolbar>
                    <img
                        src={"/imgs/logo-minube.png"}
                        style={{ maxWidth: 130, cursor: "pointer" }}
                        alt="mi nube"
                    />
                </Toolbar>
            </AppBar>

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
                        En estos momentos estamos realizando tareas de
                        mantenimiento para mejorar el servicio.
                    </Typography>
                </Grid>
            </Container>

            <AppBar
                position="static"
                style={{
                    backgroundColor: "#E4E9F8",
                    position: "absolute",
                    bottom: 0,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar>
                        <img
                            src={
                                import.meta.env.PUBLIC_URL +
                                "/imgs/logotipo-footer.svg"
                            }
                            style={{ cursor: "pointer", marginRight: 40 }}
                            alt="mi nube"
                        />
                        <Grid
                            item
                            xs={12}
                            md={12}
                            container
                            direction="column"
                            justifyContent="start"
                            alignItems="start"
                            sx={{ marginTop: 2 }}
                        >
                            <Typography
                                variant="body2"
                                style={{ color: "#18265A" }}
                            >
                                Antel
                            </Typography>
                            <Typography
                                variant="caption"
                                style={{ color: "#7f8c8d" }}
                            >
                                Guatemala 1075 - Torre de las Telecomunicaciones
                                <br />
                                Montevideo, Uruguay.
                            </Typography>
                        </Grid>
                    </Toolbar>
                </Container>
                <div style={{ backgroundColor: "#18265a", marginTop: 20 }}>
                    <br />
                </div>
            </AppBar>
        </>
    );
}
