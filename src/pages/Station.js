import { merge } from 'lodash';
import { Card, CardHeader, Box, Grid, Typography } from '@material-ui/core';
import Chart from 'react-apexcharts';
import { useEffect } from 'react';
import { BaseOptionChart } from '../components/charts';
import Page from '../components/Page';
import { api } from '../services/api';

export default function Station() {
  useEffect(async () => {
    await api.post(
      'signin',
      {},
      {
        auth: {
          username: 'malagurti',
          password: 'Daniel160192'
        }
      }
    );
  }, []);

  const chartOptions = merge(BaseOptionChart(), {
    options: {
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <Page title="Smartiny | Dashboard">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Estação 01</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item md={10} lg={6}>
          <Card>
            <CardHeader title="Temperatura" />
            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
              <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type="line"
                width="500"
              />
            </Box>
          </Card>
        </Grid>
        <Grid item md={10} lg={6}>
          <Card>
            <CardHeader title="Umidade" />
            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
              <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type="bar"
                width="500"
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
}
