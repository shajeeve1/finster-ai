import { styled, Box } from '@mui/material';

export const StatsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),
  '@media (max-width: 600px)': {
    gap: theme.spacing(2),
  },
}));

interface StatBoxProps {
  color?: string;
  bgcolor?: string;
}

export const StatBox = styled(Box)<StatBoxProps>(
  ({ theme, color, bgcolor }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: bgcolor,
    color: color,
    flex: 1,
    minWidth: 200,
  })
);

export const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
