import { Box, styled } from '@mui/material';

export const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
}));
