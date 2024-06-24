import { Container, Grid,Typography } from "@mui/material";
import { PrimaryButton } from "./buttons/primaryButton";

const AboutUs = () => {
  return (
    <Container
      sx={{
        margin         : 0,
        height         : "100vh", // Set to full viewport height
        maxWidth       : "none",
        padding        : (theme) => theme.spacing(2),
        display        : "flex",
        justifyContent : "center",
        alignItems     : "center",
      }}
      style={{ maxWidth: "none" }}
    >
      <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
        <Grid item xs={12} md={6} container style={{ height: "100%" }}>
          <Grid
            item
            xs={6}
            style={{
              display        : "flex",
              justifyContent : "center",
              alignItems     : "center",
            }}
          >
            <img
              src="rider_op.png"
              alt="Team Photo 1"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Grid>

          <Grid
            item
            xs={4.5}
            container
            direction="column"
            style={{
              display        : "flex",
              justifyContent : "center",
              alignItems     : "center",
            }}
          >
            <Grid item>
              <img
                src="horse2.webp"
                alt="Team Photo 2"
              />
            </Grid>
            <Grid item>
              <img
                src="horse1.jpeg"
                alt="Team Photo 3"
                style={{
                  borderRadius: "10px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display        : "flex",
            flexDirection  : "column",
            justifyContent : "center",
            alignItems     : "center",
            padding        : (theme) => theme.spacing(2),
          }}
        >
          <Typography
            variant="h4"
            color="primary"
            gutterBottom
            sx={{
              fontSize: {
                xs : "1.7rem",
                sm : "2.5rem",
                md : "3rem",
                lg : "3.5rem",
              },
              textAlign: "center",
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: {
                xs : "1rem",
                sm : "1.2rem",
                md : "1.4rem",
                lg : "1.6rem",
              },
              textAlign: "center",
            }}
          >
            We are a dedicated team of professionals committed to delivering the
            best service to our clients. Our mission is to provide innovative
            solutions and exceptional customer service. With years of experience
            in the industry, we pride ourselves on our expertise and passion for
            excellence.
          </Typography>
          <PrimaryButton style={{ marginTop: 8 }}>View More</PrimaryButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
