import React from 'react'

import Breadcrumbs from '@mui/material/Breadcrumbs'

import { RutaLink, SomeButton } from './';

export const Breadcrumb = () => {
  // rutaLink
  const data = RutaLink()

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "5px 35px" }}>
      {
        data.map((item, key) =>
          <SomeButton {...item} color={'secondary'} startIcon={<item.startIcon />} key={key} size={"small"} />
        )
      }
    </Breadcrumbs>
  )
}
