import PropTypes from "prop-types";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const groupIntoChunks = (array, chunkSize) => {
  let chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const CommonCarousel = ({ title, images }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("lg"));
  const removePadding = useMediaQuery(theme.breakpoints.down("lg"));

  let imagesPerView = 4;
  let containerHeight = "70vh";
  let gridPadding = "10px"; // Default padding

  if (isXs) {
    imagesPerView = 1;
    containerHeight = "30vh";
  } else if (isSm) {
    imagesPerView = 1;
    containerHeight = "50vh";
  } else if (isMd) {
    imagesPerView = 2;
    containerHeight = "60vh";
  } else if (isLg) {
    imagesPerView = 2;
    containerHeight = "60vh";
  } else if (isXl) {
    imagesPerView = 4;
    containerHeight = "70vh";
  }

  return (
    <Box
      textAlign="center"
      padding={removePadding ? "0" : "4rem 4rem 2rem 4rem"}
    >
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
      <Carousel sx={{ height: "100%" }}>
        {groupIntoChunks(images, imagesPerView).map((group, groupIndex) => (
          <Grid
            container
            key={groupIndex}
            sx={{
              justifyContent : "center",
              alignItems     : "center",
              py             : gridPadding,
              height         : containerHeight,
            }}
          >
            {group.map((img, imgIndex) => (
              <Grid
                item
                key={imgIndex}
                xl 
                lg={3}
                md={6}
                sm={12} 
                xs={12}
                sx={{
                  height         : isXs ? "70%" : "100%", // Adjusted image height for small devices
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
  );
};

CommonCarousel.propTypes = {
  title  : PropTypes.string.isRequired,
  images : PropTypes.arrayOf(
    PropTypes.shape({
      src : PropTypes.string.isRequired,
      alt : PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CommonCarousel;
