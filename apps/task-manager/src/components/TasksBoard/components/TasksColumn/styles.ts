import { styled, Box, Typography } from '@mui/material';

export const StyledColumn = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

export const ColumnTitle = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const DroppableArea = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  minHeight: 400,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));
