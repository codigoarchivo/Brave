import React from 'react'

import Breadcrumbs from '@mui/material/Breadcrumbs'

import { rutaLink, SomeButton } from './';

export const Breadcrumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "5px 35px" }}>
      {
        rutaLink.map((item, key) =>
          <SomeButton {...item} startIcon={<item.startIcon />} key={key} size={"small"} />
        )
      }
    </Breadcrumbs>
  )
}
