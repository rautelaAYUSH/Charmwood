import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqData } from "../consts";
import { useState } from "react";
import './underline.css'

const Faq = () => {
  const [expanded, setExpanded] = useState(false);
  const margin_bottom = "16px";
  const font_family = "Inter, sans-serif";

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box padding="4rem 4rem 4rem 4rem">
      <Typography variant="h1" gutterBottom component='div' className='heading-text' sx={{marginBottom: '23px'}}>
        <div className="line"></div>
        Frequently Asked Questions
      </Typography>

      {faqData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            marginBottom : margin_bottom,
            fontFamily   : font_family,
            fontWeight   : "500",
            background   : expanded === index ? "linear-gradient(to bottom, #bb181857,#fdd5be57)" : 'inherit'
          }}
        >
          <AccordionSummary
            id={`panel-header-${index}`}
            aria-controls={`panel-content-${index}`}
            expandIcon={<ExpandMoreIcon />}
            style={{fontWeight: "700 !important"}}
          >
            { ` ${item.header}`}
          </AccordionSummary>
          <AccordionDetails
          >
           { `~ ${item.content}`}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faq;
