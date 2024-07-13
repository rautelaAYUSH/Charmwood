import { Grid, Typography, Box } from "@mui/material";
import { CommonContainer } from "./reusableComponents/commonContainer";
import Carousel from "react-material-ui-carousel";
import { groupIntoChunks } from "../utils";
import { galleryImages } from "../consts";
import { useTheme } from "@emotion/react";

const Services = () => {
  const theme = useTheme();
  return (
    <>
      <CommonContainer sx={{ padding: "2.5rem" }}>
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
                    backgroundColor : "#FCFAEE",
                    "&:hover"       : {
                      transform       : "scale(1.05)",
                      backgroundImage : `linear-gradient(to right, ${theme.palette.brand.primary} 0%, ${theme.palette.brand.secondary} 100%)`,
                    },
                  }}
                >
                  <div
                    style={{
                      height          : "100%",
                      backgroundColor : "#fff",
                      transition      : "border 0.3s ease-in-out",
                    }}
                  >
                    <Typography variant="h1"> {index + 1} </Typography>
                    <Typography variant="h1">{service.title} </Typography>
                    <Typography
                      variant="h5"
                      sx={{ marginTop: "2rem", color: "#757576" }}
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

      <CommonContainer sx={{ backgroundColor: "#FCFAEE" }}>
        <Box textAlign="center" padding="4rem 4rem 2rem 4rem">
          <Typography variant="h1" gutterBottom>
            Glimpses of Academy
          </Typography>

          <Carousel sx={{ height: "100%" }}>
            {groupIntoChunks(galleryImages, 4).map((group, groupIndex) => (
              <Grid
                container
                key={groupIndex}
                sx={{
                  gap            : "20px",
                  justifyContent : "center",
                  alignItems     : "center",
                  py             : "20px",
                  height         : "70vh",
                }}
              >
                {group.map((img, imgIndex) => (
                  <Grid
                    item
                    key={imgIndex}
                    xl
                    lg
                    md
                    sm
                    xs
                    sx={{
                      height         : "100%",
                      borderRadius   : "8px",
                      display        : "flex",
                      justifyContent : "center",
                      alignItems     : "center",
                      cursor         : "grab",
                      overflow       : "hidden",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        height    : "80%",
                        width     : "80%",
                        objectFit : "cover",
                        boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
          </Carousel>
        </Box>
      </CommonContainer>
    </>
  );
};

export default Services;
