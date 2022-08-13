import React, { FC } from 'react'

import Head from 'next/head'

import { Box } from '@mui/material'

import { Nabvar } from '../ui';

interface Props {
    title?: string,
    children: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = 'name', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>
            <Nabvar />
            <Box sx={{ padding: '10px, 20px' }}>
                {children}
            </Box>
        </Box>
    )
}
