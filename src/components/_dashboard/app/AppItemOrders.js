import { Icon } from '@iconify/react';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
// utils
// import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(3, 0),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

// const TOTAL = 1723315;

export default function AppItemOrders() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon="carbon:weather-station" width={24} height={24} />
      </IconWrapperStyle>
      {/* <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography> */}
      <Typography variant="h5" sx={{ opacity: 0.72 }}>
        <Link style={{ color: '#B78103' }} to="/dashboard/station">
          Estação
        </Link>
      </Typography>
    </RootStyle>
  );
}
