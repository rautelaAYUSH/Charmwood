import Button from '@mui/material/Button';
import '../../theme/global-theme.css';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const PrimaryButton = (props) => {

  const { sx, click, ...otherProps } = props;
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Button
      // onClick={onClick}
      onClick={() => {
        if (click === "Scroll") {
          const event = new CustomEvent('scrollToForm');
          window.dispatchEvent(event);
          console.log('Event dispatched');
        }
        else {
          navigate("our-story");
          console.log('About clicked');
        }
      }}
      sx={{
        borderRadius: '8px',
        padding: '12px 24px',
        backgroundColor: theme.palette.brand.primary,
        color: 'white',
        '&:hover': {
          backgroundColor: theme.palette.brand.secondary,
        },
      }}
      style={{ ...sx }}
      {...otherProps}
    />
  );
}

PrimaryButton.propTypes = {
  sx: PropTypes.object,
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  sx: {},
};
