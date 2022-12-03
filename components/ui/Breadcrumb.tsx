import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useTheme } from '@mui/material';
import { SomeButton } from './';
import { RutaLink } from '../routes';

export const Breadcrumb = () => {
  // rutaLink
  const data = RutaLink();
  const theme = useTheme();

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "5px 35px" }}>
      {
        data.map((item, key) =>
          <SomeButton
            {...item}
            color={theme.palette.text.secondary}
            variant={'primary'}
            startIcon={<item.startIcon />}
            key={key}
            size={"small"}
          />
        )
      }
    </Breadcrumbs>
  )
}
