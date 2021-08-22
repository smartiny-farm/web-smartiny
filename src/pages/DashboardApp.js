// material
import { Box, Grid, Container, Typography, Card } from '@material-ui/core';
// components
import mapImg from '../images/mapImage.png';
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  Station01,
  AppOrderTimeline
  // AppNewsUpdate,
  // AppWebsiteVisits,
  // AppTrafficBySite,
  // AppCurrentVisits,
  // AppCurrentSubject,
  // AppConversionRates
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Smartiny | Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Olá, bem-vindo(a) de volta</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={10} sm={4} md={2}>
            <Station01 />
          </Grid>
          <Grid item xs={10} sm={4} md={2}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={10} sm={4} md={2}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={10} sm={4} md={2}>
            <AppBugReports />
          </Grid>
          <Grid item xs={10} sm={4} md={2}>
            <Station01 />
          </Grid>
          <Grid item xs={10} sm={4} md={2}>
            <AppNewUsers />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid> */}

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <Card sx={{ px: 5, py: 5 }}>
              <Typography variant="h5">Pontos de Estação no Mapa</Typography>
              <img src={mapImg} alt="Mapa" style={{ width: 500, margin: 'auto' }} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
