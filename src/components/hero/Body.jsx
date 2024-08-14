import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { PrimaryButton } from "../reusableComponents/primaryButton";
import { CommonContainer } from "../reusableComponents/commonContainer";

export const Body = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <CommonContainer sx={{height: '87vh'}}>
      <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
        <Grid container height="100%">
          {/* Image and Text layout based on screen size */}
          {isSm ? (
            <>
              {/* Image on top, Text below for small screens */}
              <Grid item xs={12} sx={{ height: "50vh", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image="hero-bg-img.png"
                  alt="green iguana"
                  sx={{
                    objectFit : "cover",
                    width     : "100%",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display        : "flex",
                  flexDirection  : "column",
                  justifyContent : "center",
                  alignItems     : "center",
                  textAlign      : "center",
                  padding        : 2,
                }}
              >
                <CardContent>
                  <Typography
                    color="black"
                    sx={{
                      fontSize     : "1.7rem",
                      fontFamily   : "Piazzolla, serif",
                      fontWeight   : 700,
                      marginBottom : 2,
                    }}
                  >
                    Escape the ordinary,
                  </Typography>
                  <Typography
                    color="black"
                    sx={{
                      fontSize     : "1.7rem",
                      fontFamily   : "Piazzolla, serif",
                      fontWeight   : 700,
                      marginBottom : 2,
                    }}
                  >
                    ride extraordinary.
                  </Typography>
                  <PrimaryButton style={{ marginTop: 8 }}>
                    Register Now
                  </PrimaryButton>
                </CardContent>
              </Grid>
            </>
          ) : (
            <>
              {/* Text on left, Image on right for larger screens */}
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
                      marginBottom : 2,
                      fontFamily   : "Piazzolla, serif",
                      fontWeight   : 700,
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
                      marginBottom : 2,
                      fontFamily   : "Piazzolla, serif",
                      fontWeight   : 700,
                    }}
                  >
                    ride extraordinary.
                  </Typography>
                  <PrimaryButton style={{ marginTop: 8 }}>
                    Register Now
                  </PrimaryButton>
                </CardContent>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ height: "100%", paddingTop: '4rem' }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image="hero-bg-img.png"
                  alt="green iguana"
                  sx={{
                    objectFit : "contain",
                    width     : "100%",
                    height    : '100%'
                  }}
                />
              </Grid>
            </>
          )}
        </Grid>
      </Card>
    </CommonContainer>
  );
};

export default Body;
