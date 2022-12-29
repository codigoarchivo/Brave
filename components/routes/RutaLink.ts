import { useRouter } from 'next/router';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { en, es } from '../../translations';

export const RutaLink = () => {
  const { locale } = useRouter();

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
      href: "/skills",
      name: locale === "en" ? en.pageLayout.c : es.pageLayout.c,
      startIcon: WorkspacePremiumIcon
    },
    {
      href: "/work",
      name: locale === "en" ? en.pageLayout.d : es.pageLayout.d,
      startIcon: BusinessCenterIcon
    },
    {
      href: "/contact",
      name: locale === "en" ? en.pageLayout.e : es.pageLayout.e,
      startIcon: ContactPageIcon
    }
  ];

  return data
}


