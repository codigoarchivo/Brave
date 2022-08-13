import React, { FC } from 'react'

import Head from 'next/head'

import { Box } from '@mui/material'

interface Props {
    title?: string,
    children: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = 'name', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
                <Box sx={{ padding: '10px, 20px' }}>
                    {children}
                </Box>
            </Head>
        </Box>
    )
}
