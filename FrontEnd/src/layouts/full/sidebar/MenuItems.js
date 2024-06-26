import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const idLote = localStorage.getItem('idLote');
const idCosecha = localStorage.getItem('idCosecha');
const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: `/form/dashboardConsulta/${idLote}/${idCosecha}`,
  },
  {
    navlabel: true,
    subheader: 'Formularios',
  },
  {
    id: uniqueId(),
    title: 'Registrar Abono',
    icon: IconCopy,
    href: '/ui/registroabonosembrado',
  },
  {
    id: uniqueId(),
    title: 'Registrar Control Hierbas',
    icon: IconCopy,
    href: '/ui/registrocontrolhierbas',
  },
  {
    id: uniqueId(),
    title: 'Registrar Cosecha',
    icon: IconCopy,
    href: '/ui/registrocosecha',
  },
  {
    id: uniqueId(),
    title: 'Registrar Germinacion',
    icon: IconCopy,
    href: '/ui/registroGerminacion',
  },
  {
    id: uniqueId(),
    title: 'Registrar Fungicida',
    icon: IconCopy,
    href: '/ui/registrofungicida',
  },
  {
    id: uniqueId(),
    title: 'Registrar Lavado',
    icon: IconCopy,
    href: '/ui/registrolavado',
  },
  {
    id: uniqueId(),
    title: 'Registrar Secado',
    icon: IconCopy,
    href: '/ui/registrosecado',
  },

  {
    id: uniqueId(),
    title: 'Registrar Semilla',
    icon: IconCopy,
    href: '/ui/registrosemilla',
  },
  {
    id: uniqueId(),
    title: 'Registrar Tostado',
    icon: IconTypography,
    href: '/ui/registrotostado',
  },
 
  {
    id: uniqueId(),
    title: 'Registrar Envasado',
    icon: IconCopy,
    href: '/ui/registroEnvasado',
  },
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

export default Menuitems;
