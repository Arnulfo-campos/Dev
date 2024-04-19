import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import { useParams } from 'react-router-dom';

// components
import SalesOverview from '../dashboard/components/SalesOverview';
import YearlyBreakup from '../dashboard/components/YearlyBreakup';
import RecentTransactions from '../dashboard/components/RecentTransactions';
import ProductPerformance from '../dashboard/components/ProductPerformance';
import Blog from '../dashboard/components/Blog';
import MonthlyEarnings from '../dashboard/components/MonthlyEarnings';


const DashboardConsulta = () => {
  const { idLote, idCosecha } = useParams();

  useEffect(() => {
    // Guardar idLote y idCosecha en localStorage
    localStorage.setItem('idLote', idLote);
    localStorage.setItem('idCosecha', idCosecha);
  }, [idLote, idCosecha]);
 
  return (
    <PageContainer title="DashboardConsulta" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default DashboardConsulta;
