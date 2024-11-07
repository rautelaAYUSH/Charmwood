import { Grid, Typography, Box, useMediaQuery, CardMedia } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CommonTextfield from "./reusableComponents/commonTextfield";
import { useTheme } from "@emotion/react";
import { useEffect, useState, useRef } from "react";
//import axios from "axios";

const Footer = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [isXs, setIsXs] = useState(window.innerWidth <= 400);

/*   const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      fullName : event.target.fullName.value,
      email    : event.target.email.value,
      message  : event.target.message.value
    };
    // console.log(formData);
    axios.post('http://127.0.0.1:5000/submit', formData)
      .then(response => {
        console.log('Response:', response.data);
        // Handle success or error messages from the API
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }; */

  useEffect(() => {
    const handleResize = () => {
      setIsXs(window.innerWidth <= 400);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const formRef = useRef(null);

  useEffect(() => {
    const handleScrollToForm = () => {
      console.log("Scroll")
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('scrollToForm', handleScrollToForm);

    return () => {
      window.removeEventListener('scrollToForm', handleScrollToForm);
    };
  }, [formRef]);

  return (
    <Box
      sx={{
        backgroundColor : "#000",
        color           : "#fff",
        padding         : "2rem",
        height          : "100%",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: "2rem", fontFamily: "Playfair Display, serif" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom : "1rem",
              fontSize     : "1.1rem",
              fontFamily   : "Inter, sans-serif",
            }}
          >
            We are here to address your inquiries and provide the help you need.
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "1rem", fontFamily: "Inter, sans-serif" }}
          >
            <a href="https://www.google.com/maps/place/Charmwood+Horse+Riding+Academy+%26+Equestrian/@30.2991878,78.0894638,17z/data=!3m1!4b1!4m6!3m5!1s0x390929b1df679171:0x7836d917c76d697f!8m2!3d30.2991832!4d78.0920387!16s%2Fg%2F11cnn7s2lh?entry=ttu" target="_blank" referrerPolicy="no-referrer">
              <Box
                component="span"
                sx={{
                  display      : "flex",
                  alignItems   : "center",
                  marginBottom : "1rem",
                  fontSize     : "1rem",
                }}
              >
                <LocationOnIcon sx={{ marginRight: "0.5rem" }} />
                Behind Indian oil petrol pump, Kidduwala, Dehradun, Uttarakhand
                248008
              </Box>
            </a>
            <a href="tel:8755051014" target="_blank" referrerPolicy="no-referrer">
              <Box
                component="span"
                sx={{
                  display      : "flex",
                  alignItems   : "center",
                  marginBottom : "1rem",
                  fontSize     : "1rem",
                }}
              >
                <PhoneIcon sx={{ marginRight: "0.5rem" }} />
                8755051014
              </Box>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=charmwoodhorseriding@gmail.com" target="_blank" referrerPolicy="no-referrer">
              <Box
                component="span"
                sx={{
                  display      : "flex",
                  alignItems   : "center",
                  marginBottom : "1rem",
                  fontSize     : "1rem",
                  fontFamily   : "Inter, sans-serif",
                }}
              >
                <EmailIcon sx={{ marginRight: "0.5rem" }} />
                {isXs ? (
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=charmwoodhorseriding@gmail.com"
                    target="_blank"
                    style={{
                      textDecoration : "none",
                      color          : "inherit",
                    }}
                  >
                    click to mail
                  </a>
                ) : (
                  "charmwoodhorseriding@gmail.com"
                )}
              </Box>
            </a>
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CardMedia
                  component="img"
                  height="100%"
                  image="oakshade.png"
                  alt="green iguana"
                  sx={{height: isLargeScreen ? '50%' : '80%', with: isLargeScreen ? '50%' : '80%'}}
                />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
