import PropTypes from 'prop-types';
import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";

export const CommonContainer = (props) => {
  const theme = useTheme();
  const { sx, ...otherProps } = props;

  return (
    <Container
      sx={{
        backgroundColor : theme.palette.background.white,
        margin          : 0,
        height          : '100vh',

      }}
      style={{ maxWidth: "none", padding: "0px", ...sx }}
      {...otherProps}
    />
  );
};

CommonContainer.propTypes = {
  sx: PropTypes.object,
};

CommonContainer.defaultProps = {
  sx: {},
};

export default CommonContainer;
