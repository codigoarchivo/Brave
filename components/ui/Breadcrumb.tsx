import Breadcrumbs from '@mui/material/Breadcrumbs';
import { SomeButton } from './';
import { RutaLink } from '../routes';

export const Breadcrumb = () => {
  // rutaLink
  const data = RutaLink();
  return (
    <>
      {
        data.map((item, key) =>
          <SomeButton
            {...item}
            color={'secondary'}
            startIcon={<item.startIcon />}
            key={key}
            size={"large"}
          />
        )
      }
    </>
  )
}
