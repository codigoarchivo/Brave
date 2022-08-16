import React from 'react'

import Breadcrumbs from '@mui/material/Breadcrumbs'

import Paper from '@mui/material/Paper';

import { rutaLink, SomeButton } from './';

export const Breadcrumb = () => {
  return (
    <Paper elevation={3} >
      <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "5px 20px" }}>
        {
          rutaLink.map((item, key) =>
            <SomeButton {...item} startIcon={<item.startIcon />} key={key} size={"small"} />
          )
        }
      </Breadcrumbs>
    </Paper>
  )
}
