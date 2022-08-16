import React, { FC, ReactNode } from 'react'

import Head from 'next/head'

import { Box } from '@mui/material'

import { Breadcrumb, Nabvar, Sidebar } from '../ui';


interface Props {
    title?: string,
    children: ReactNode;
}

export const Layout: FC<Props> = ({ title = 'name', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Nabvar />
            <Breadcrumb />
            <Sidebar />
            <Box sx={{ padding: '10px, 20px' }}>
                {children}
            </Box>
        </Box>
    )
}
