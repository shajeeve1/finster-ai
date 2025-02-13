import { styled, Container, Box, Typography, Button } from '@mui/material';

export const MainContainer = styled(Container)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ContentBox = styled(Box)({
  textAlign: 'center',
  maxWidth: '600px',
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 500,
  marginBottom: theme.spacing(2),
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
}));

export const Description = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  lineHeight: 1.6,
}));

export const StartButton = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  textTransform: 'none',
  fontSize: '1rem',
}));
