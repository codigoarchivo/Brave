import { FC, ReactNode } from 'react'

import Box from '@mui/material/Box';

import Head from 'next/head'

import { FloatingButton, Nabvar } from '../ui';

interface Props {
    title?: string,
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children, title = 'name' }) => {


    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>


            <>
                <Nabvar />
                <main>


                    <Box className="fadeIn">
                        {children}
                    </Box>

                    <FloatingButton />



                </main>
            </>

        </>
    )
}
