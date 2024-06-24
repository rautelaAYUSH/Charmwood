import Button from '@mui/material/Button';
import '../../theme/global-theme.css';

export const PrimaryButton = (props) => {
  return (
    <Button
      sx={{
        borderRadius    : '8px',
        padding         : '12px 24px',
        backgroundColor : 'var(--brand-primary)',
        color           : 'white',
        '&:hover'       : {
          backgroundColor: 'var(--brand-secondary)',
        },
      }}
      {...props}
    />
  );
}
