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
        categories: [0, 5, 10, 15, 20, 25, 30, 35, 40]
      }
    },
    series: [
      {
        name: 'series-1',
        data: [30, 10, 15, 25, 35, 5, 20, 40, 10]
      }
    ]
  });

  return (
    <Page title="Smartiny | Dashboard">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Estação</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item md={10} lg={6}>
          <Card>
            <CardHeader title="Temperatura do Ar" />
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
            <CardHeader title="Umidade do Ar" />
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

      <Grid container spacing={3} style={{ marginTop: 8 }}>
        <Grid item md={10} lg={6}>
          <Card>
            <CardHeader title="Temperatura do Solo" />
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
            <CardHeader title="Umidade do Solo" />
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

      <Grid container spacing={3} style={{ marginTop: 8 }}>
        <Grid item md={10} lg={12}>
          <Card>
            <CardHeader title="Índice de Luminosidade" />
            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
              <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type="line"
                width="1150"
                height="300"
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
}
