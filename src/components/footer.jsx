import { Grid, Typography, Box, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CommonTextfield from "./reusableComponents/commonTextfield";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor : "#000",
        color           : "#fff",
        padding         : "2rem",
        height          : "70vh",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
            We are here to address your inquiries and provide the help you need.
          </Typography>
          <Typography variant="body2">
            <Box
              component="span"
              sx={{
                display      : "flex",
                alignItems   : "center",
                marginBottom : "1rem",
              }}
            >
              <LocationOnIcon sx={{ marginRight: "0.5rem" }} />
              Second Floor, abc A, Place
            </Box>
            <Box
              component="span"
              sx={{
                display      : "flex",
                alignItems   : "center",
                marginBottom : "1rem",
              }}
            >
              <PhoneIcon sx={{ marginRight: "0.5rem" }} />
              1800 0000 000
            </Box>
            <Box
              component="span"
              sx={{
                display      : "flex",
                alignItems   : "center",
                marginBottom : "1rem",
              }}
            >
              <EmailIcon sx={{ marginRight: "0.5rem" }} />
              youremail@office.com
            </Box>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor : "#d8d8d8",
              padding         : "1rem",
              borderRadius    : "8px",
              color           : "black"
            }}
          >
            <CommonTextfield label={"Full Name"} />
            <CommonTextfield label={"Email"} />
            <CommonTextfield
              label={"Message"}
              margin="normal"
              multiline
              rows={4}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor : "#000",
                color           : "#fff",
                marginTop       : "1rem",
                "&:hover"       : {
                  backgroundColor: "#333",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
