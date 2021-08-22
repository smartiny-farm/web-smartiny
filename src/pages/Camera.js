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
            <CardHeader title="Galpão de máquinas" />
            <iframe
              title="cam01"
              width="560"
              height="415"
              src="http://192.168.1.115"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Card>
        </Grid>
        <Grid item xs={16} md={10} lg={6}>
          <Card>
            <CardHeader title="Câmera 02" />
            <iframe
              title="cam02"
              width="560"
              height="415"
              src="http://192.168.1.116"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} marginTop={3}>
        <Grid item xs={16} md={10} lg={6}>
          <Card>
            <CardHeader title="Câmera 03" />
            <iframe
              title="cam03"
              width="560"
              height="415"
              src="http://192.168.1.117"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Card>
        </Grid>
        <Grid item xs={16} md={10} lg={6}>
          <Card>
            <CardHeader title="Câmera 04" />
            <iframe
              title="cam04"
              width="560"
              height="415"
              src="http://192.168.1.118"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
}
