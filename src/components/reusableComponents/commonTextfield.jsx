import PropTypes from "prop-types";

import { TextField, Typography } from "@mui/material";

export const CommonTextfield = (props) => {

  const { sx, label, ...otherProps } = props;
  console.log(label);
  return (
    <div>
      <Typography h="h4" sx={{fontFamily: "Inter, sans-serif"}}>{label}</Typography>
      <TextField fullWidth variant="outlined" margin="normal" size="small"  style={{ ...sx }} {...otherProps}/>
    </div>
  );
};

CommonTextfield.propTypes = {
  sx    : PropTypes.object,
  label : PropTypes.string,
};

CommonTextfield.defaultProps = {
  sx    : {},
  label : ''
};

export default CommonTextfield;
