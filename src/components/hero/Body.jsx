import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Container, Box } from "@mui/material";
import { PrimaryButton } from "../buttons/primaryButton";

export const Body = () => {
  return (
    <Container
      sx={{
        backgroundColor : "white",
        margin          : 0,
        height          : "100%",
      }}
      style={{ maxWidth: "none", height: "100%" }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Card sx={{ boxShadow: "none", height: "100%", width: '100%' }}>
          <Grid container height="100%">
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              sx={{ height: "100%", padding: 2 }}
            >
              <CardContent>
                <Typography
                  color="black"
                  sx={{
                    fontSize: {
                      xs : "1.7rem",
                      sm : "2.5rem",
                      md : "3rem",
                      lg : "4rem",
                    },
                    marginBottom: 2, // Add margin bottom to Typography
                  }}
                >
                  Escape the ordinary,
                </Typography>
                <Typography
                  color="black"
                  sx={{
                    fontSize: {
                      xs : "1.7rem",
                      sm : "2.5rem",
                      md : "3rem",
                      lg : "4rem",
                    },
                    marginBottom: 2,
                  }}
                >
                  ride extraordinary.
                </Typography>
                <PrimaryButton style={{ marginTop: 8 }}>
                  Register Now
                </PrimaryButton>
              </CardContent>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="img"
                height="100%"
                image="rider_op.png"
                alt="green iguana"
                sx={{ objectFit: "fill", height: "100%", width: '90%', float: 'right' }}
              />
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default Body;
