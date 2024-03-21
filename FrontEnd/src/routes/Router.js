import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Minter = Loadable(lazy(() => import('../views/dashboard/Minter')))
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
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
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Tables = Loadable(lazy(() => import('../views/Tables/Tables'))); // Agregar importación para Tables


const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/minter', exact: true, element: <Minter /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
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
      { path: '/ui/tables', exact: true, element: <Tables /> }, // Agregar ruta para Tables
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
