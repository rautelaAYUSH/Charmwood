import Button from '@mui/material/Button';
import '../../theme/global-theme.css';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

export const PrimaryButton = (props) => {

  const { sx, ...otherProps } = props;
  const theme = useTheme();

  return (
    <Button
      sx={{
        borderRadius    : '8px',
        padding         : '12px 24px',
        backgroundColor : theme.palette.brand.primary,
        color           : 'white',
        '&:hover'       : {
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
};

PrimaryButton.defaultProps = {
  sx: {},
};
