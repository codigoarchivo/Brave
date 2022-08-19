import React from 'react'

import Breadcrumbs from '@mui/material/Breadcrumbs'

import { rutaLink, SomeButton } from './';

export const Breadcrumb = () => {
  // rutaLink
  const data = rutaLink()

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
