import { merge } from 'lodash';
// import ReactApexChart from 'react-apexcharts';
import { Card, CardHeader, Box, Grid, Typography } from '@material-ui/core';
import Chart from 'react-apexcharts';
import { BaseOptionChart } from '../components/charts';
import Page from '../components/Page';

export default function Camera() {
  return (
    <Page title="Smartiny | Dashboard">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Câmeras</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={16} md={10} lg={6}>
          <Card>
            <CardHeader title="Câmera 01" />
          </Card>
        </Grid>
        <Grid item xs={16} md={10} lg={6}>
          <Card>
            <CardHeader title="Câmera 02" />
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
}
