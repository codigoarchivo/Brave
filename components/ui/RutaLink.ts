import { useRouter } from 'next/router';

import ContactPageIcon from '@mui/icons-material/ContactPage';

import DesignServicesIcon from '@mui/icons-material/DesignServices';

import HomeIcon from '@mui/icons-material/Home';

import PersonIcon from '@mui/icons-material/Person';

import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

import { en } from '../../translations/en';
import { es } from '../../translations/es';

export const rutaLink = () => {

  const { locale } = useRouter()

  const data = [
    {
      href: "/",
      name: locale === "en" ? en.pageLayout.a : es.pageLayout.a,
      startIcon: HomeIcon
    },
    {
      href: "/about",
      name: locale === "en" ? en.pageLayout.b : es.pageLayout.b,
      startIcon: PersonIcon
    },
    {
      href: "/services",
      name: locale === "en" ? en.pageLayout.c : es.pageLayout.c,
      startIcon: DesignServicesIcon
    },
    {
      href: "/work",
      name: locale === "en" ? en.pageLayout.d : es.pageLayout.d,
      startIcon: WorkHistoryIcon
    },
    {
      href: "/contact",
      name: locale === "en" ? en.pageLayout.e : es.pageLayout.e,
      startIcon: ContactPageIcon
    }
  ]

  return data
}


