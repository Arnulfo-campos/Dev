import { useParams } from 'react-router-dom';
import {
    IconAperture,
    IconCopy,
    IconLayoutDashboard,
    IconLogin,
    IconMoodHappy,
    IconTypography,
    IconUserPlus
  } from '@tabler/icons';
  
  import { uniqueId } from 'lodash';
  
  
  const MenuItemsConsulta =[

    {
      navlabel: true,
      subheader: 'Home',
    },
  
    {
      id: uniqueId(),
      title: 'Dashboard',
      icon: IconLayoutDashboard,
      href: '/form/dashboardConsulta',
    },
    {
      navlabel: true,
      subheader: 'Formularios',
    },
    {
      id: uniqueId(),
      title: 'Consultar Germinacion',
      icon: IconCopy,
      href: '/form/ConsultaGerminacion',
    },
    {
      id: uniqueId(),
      title: 'Consultar Abonos',
      icon: IconCopy,
      href: '/form/ConsultaAbono',
    },
    {
      id: uniqueId(),
      title: 'Consultar Control Hierbas',
      icon: IconCopy,
      href: '/form/ConsultaControlHierbas',
    },
 //   {
   //   id: uniqueId(),
     // title: 'Consultar Cosecha',
     // icon: IconCopy,
     // href: '/form/consultarcosecha',
    //},
    {
      id: uniqueId(),
      title: 'Consultar Cultivador',
      icon: IconCopy,
      href: '/form/consultarcultivador',
    },
    {
      id: uniqueId(),
      title: 'Consultar Fungicida',
      icon: IconCopy,
      href: '/form/ConsultaFungicida',
    },
    {
      id: uniqueId(),
      title: 'Consultar Lavado',
      icon: IconCopy,
      href: '/form/ConsultaLavado',
    },
    {
      id: uniqueId(),
      title: 'Consultar Secado',
      icon: IconCopy,
      href: `/form/ConsultaSecado`,
    },
  
    {
      id: uniqueId(),
      title: 'Consultar Semilla',
      icon: IconCopy,
      href: '/form/ConsultaSemilla',
    },
   // {
     // id: uniqueId(),
      //title: 'Consultar Tostado',
      //icon: IconTypography,
      //href: '/form/ConsultaTostado',
    //},
    {
      navlabel: true,
      subheader: 'Auth',
    },
    {
      id: uniqueId(),
      title: 'Login',
      icon: IconLogin,
      href: '/auth/login',
    },
    {
      id: uniqueId(),
      title: 'Register',
      icon: IconUserPlus,
      href: '/auth/register',
    },
    {
      navlabel: true,
      subheader: 'Extra',
    },
    {
      id: uniqueId(),
      title: 'Icons',
      icon: IconMoodHappy,
      href: '/icons',
    },
    {
      id: uniqueId(),
      title: 'Sample Page',
      icon: IconAperture,
      href: '/sample-page',
    },
  ];
  
  export default MenuItemsConsulta;
