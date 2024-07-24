import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import { CommonContainer } from "./reusableComponents/commonContainer";
import { homeCarousel } from "../consts";
import { useTheme } from "@emotion/react";
import CommonCarousel from "./reusableComponents/commonCarousel";

const Services = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <CommonContainer
        sx={{
          padding : "2.5rem",
          height  : isLargeScreen ? "100vh" : "100%",
        }}
      >
        <Box textAlign="center">
          <Typography variant="h1" gutterBottom>
            Our Key Services
          </Typography>

          <Grid container spacing={3} justifyContent="center" mt={2}>
            {[
              {
                title       : "Sale Of Horses",
                description : "Lease, Sale And Purchase Of Trained Horses",
              },
              {
                title       : "Riding Lessons",
                description : "15-24 Classes According To Your Needs",
              },
              {
                title: "Exploration Trails",
                description:
                  "Picturesque Rides Along Scenic Trails, Meandering Through Rivers And Forests",
              },
              {
                title       : "Customizations",
                description : "Speak To Us Lets Create Something For You",
              },
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  textAlign="center"
                  sx={{
                    padding         : "2rem",
                    height          : "100%",
                    position        : "relative",
                    transition      : "transform 0.5s ease-in-out",
                    backgroundColor : "#d8d8d8bf",
                    display         : "flex",
                    flexDirection   : "column",
                    justifyContent  : "space-between",
                    "&:hover"       : {
                      transform       : "scale(1.05)",
                      backgroundImage : `linear-gradient(to right, ${theme.palette.brand.primary} 0%, ${theme.palette.brand.secondary} 100%)`,
                    },
                  }}
                >
                  <div
                    style={{
                      backgroundColor : "#fff",
                      transition      : "border 0.3s ease-in-out",
                      padding         : "1rem",
                      display         : "flex",
                      flexDirection   : "column",
                      justifyContent  : "space-between",
                      height          : "100%",
                    }}
                  >
                    <Typography variant="h1" sx={{ fontSize: "50px" }}>
                      {"0" + `${index + 1}`}
                    </Typography>
                    <Typography
                      variant="h1"
                      sx={{ fontSize: "30px", marginTop: "2rem" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginTop : "2rem",
                        color     : "#757576",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CommonContainer>

      <CommonContainer
        sx={{
          backgroundColor : "#FCFAEE",
          height          : "100vh",
        }}
      >
        <CommonCarousel title="Glimpses of Academy" images={homeCarousel} />
      </CommonContainer>
    </>
  );
};

export default Services;
