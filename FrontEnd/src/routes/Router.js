import React, { lazy } from 'react';
import { Navigate, useParams } from 'react-router-dom'; // Importa useParams desde react-router-dom
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayoutConsulta = Loadable(lazy(() => import('../layouts/full/FullLayoutConsulta')));
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
/* ****Pages***** */

/* ****Pages***** */
const Minter = Loadable(lazy(() => import('../views/dashboard/Minter')))
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const DashboardConsulta = Loadable(lazy(() => import('../views/authentication/dashboardConsulta')))
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const RegistroAbonoSembrado = Loadable(lazy(() => import('../views/utilities/RegistroAbonoSembrado')))
const RegistroControlHierbas = Loadable(lazy(() => import('../views/utilities/RegistroControlHierbas')))
const RegistroCosecha = Loadable(lazy(() => import('../views/utilities/RegistroCosecha')))
const RegistroCultivador = Loadable(lazy(() => import('../views/utilities/RegistroCultivador')))
const RegistroDescope = Loadable(lazy(() => import('../views/utilities/RegistroDescope')))
const RegistroEnvasado = Loadable(lazy(() => import('../views/utilities/RegistroEnvasado')))
const RegistroFungicida = Loadable(lazy(() => import('../views/utilities/RegistroFungicida')))
const RegistroFungicidaSembrado = Loadable(lazy(() => import('../views/utilities/RegistroFungicidaSembrado')))
const RegistroLavado = Loadable(lazy(() => import('../views/utilities/RegistroLavado')))
const RegistroPesoDiario = Loadable(lazy(() => import('../views/utilities/RegistroPesoDiario')))
const RegistroSecado = Loadable(lazy(() => import('../views/utilities/RegistroSecado')))
const RegistroSemilla = Loadable(lazy(() => import('../views/utilities/RegistroSemilla')))
const RegistroTostado = Loadable(lazy(() => import('../views/utilities/RegistroTostado')))
const RegistroGerminacion = Loadable(lazy(() => import('../views/utilities/RegistroGerminacion')))
const RegistroCrecimiento = Loadable(lazy(() => import('../views/utilities/RegistroCrecimiento')))
const ConsultaSemilla = Loadable(lazy(() => import('../views/Tables/ConsultaSemilla')))
const ConsultaAbono = Loadable(lazy(() => import('../views/Tables/ConsultaAbono')))
const ConsultaTostado = Loadable(lazy(() => import('../views/Tables/ConsultaTostado')))
const ConsultaSecado = Loadable(lazy(() => import('../views/Tables/ConsultaSecado')))
const ConsultaFungicida = Loadable(lazy(() => import('../views/Tables/ConsultaFungicida')))
const Prueba = Loadable(lazy(() => import('../views/utilities/Prueba')))
const ConsultaLavado = Loadable(lazy(() => import('../views/Tables/ConsultaLavado')))
const ConsultaGerminacion = Loadable(lazy(() => import('../views/Tables/ConsultaGerminacion')))
const ConsultaLotes = Loadable(lazy(() => import('../views/Tables/ConsultaLotes')))
const ConsultaControlHierbas = Loadable(lazy(() => import('../views/Tables/ConsultaControlHierbas')))

const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const RegisterCultivadorInicial = Loadable(lazy(() => import('../views/authentication/RegisterCultivadorInicial')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Tables = Loadable(lazy(() => import('../views/Tables/Tables'))); // Agregar importación para Tables
const ConsultaNFT = Loadable(lazy(() => import('../views/Tables/ConsultaNFT'))); // Agregar importación para Tables


const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/minter', exact: true, element: <Minter /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/dashboardConsulta', exact: true, element: <DashboardConsulta /> },

      { path: '/sample-page', exact: true, element: <SamplePage /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/registroSemilla', exact: true, element: <RegistroSemilla /> },
      { path: '/ui/registroAbonoSembrado', exact: true, element: <RegistroAbonoSembrado /> },
      { path: '/ui/registroControlHierbas', exact: true, element: <RegistroControlHierbas /> },
      { path: '/ui/registroCosecha', exact: true, element: <RegistroCosecha /> },
      { path: '/ui/registroCultivador', exact: true, element: <RegistroCultivador /> },
      { path: '/ui/registroDescope', exact: true, element: <RegistroDescope /> },
      { path: '/ui/registroEnvasado', exact: true, element: <RegistroEnvasado /> },
      { path: '/ui/registroFungicida', exact: true, element: <RegistroFungicida /> },
      { path: '/ui/registroFungicidaSembrado', exact: true, element: <RegistroFungicidaSembrado /> },
      { path: '/ui/registroLavado', exact: true, element: <RegistroLavado /> },
      { path: '/ui/registroPesoDiario', exact: true, element: <RegistroPesoDiario /> },
      { path: '/ui/registroSecado', exact: true, element: <RegistroSecado /> },
      { path: '/ui/registroTostado', exact: true, element: <RegistroTostado /> },
      { path: '/ui/registroGerminacion', exact: true, element: <RegistroGerminacion /> },
      { path: '/ui/registroCrecimiento', exact: true, element: <RegistroCrecimiento /> },
      { path: '/ui/Prueba', exact: true, element: <Prueba /> },

      { path: '/ui/tables', exact: true, element: <Tables /> }, // Agregar ruta para Tables
      { path: '/ui/consultaNFT', exact: true, element: <ConsultaNFT /> }, // Agregar ruta para Tables

      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '/auth/ConsultaLotes/:username', element: <ConsultaLotes /> },
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/registerCultivadorInicial', exact: true, element: <RegisterCultivadorInicial /> }, // Agregar ruta para Tables
      { path: "/auth/registerCultivadorInicial/:nameParam/:identification", element: <RegisterCultivadorInicial />},
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
    
  },
  {
    path: '/form',
    element: <FullLayoutConsulta />,
    children: [
      { path: '/form/dashboardConsulta/:idLote/:idCosecha', element: <DashboardConsulta /> },
      { path: '/form/ConsultaSemilla', exact: true, element: <ConsultaSemilla /> },
      { path: '/form/ConsultaAbono', exact: true, element: <ConsultaAbono /> },
      { path: '/form/ConsultaTostado', exact: true, element: <ConsultaTostado /> },
      { path: '/form/ConsultaSecado', exact: true, element: <ConsultaSecado /> },
      { path: '/form/ConsultaFungicida', exact: true, element: <ConsultaFungicida /> },
      { path: '/form/ConsultaLavado', exact: true, element: <ConsultaLavado /> },
      { path: '/form/ConsultaGerminacion', exact: true, element: <ConsultaGerminacion /> },
      { path: '/form/ConsultaControlHierbas', exact: true, element: <ConsultaGerminacion /> },

    ],
    
  },
];

export default Router;
