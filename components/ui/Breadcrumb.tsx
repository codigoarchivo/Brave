import React from 'react'

import Breadcrumbs from '@mui/material/Breadcrumbs'

import {  SomeButton } from './';

import { RutaLink } from '../routes';

import { useTheme } from '@mui/material';

export const Breadcrumb = () => {
  // rutaLink
  const data = RutaLink();

  const theme = useTheme();
  
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "5px 35px" }}>
      {
        data.map((item, key) =>
          <SomeButton {...item} color={theme.palette.text.secondary} variant={'primary'} startIcon={<item.startIcon />} key={key} size={"small"} />
        )
      }
    </Breadcrumbs>
  )
}
