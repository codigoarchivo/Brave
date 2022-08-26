import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'

import Head from 'next/head'

import { FloatingButton, Nabvar, Spinner } from '../ui';
import { Box } from '@mui/material';

interface Props {
    title?: string,
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children, title = 'name' }) => {
    const [query, setQuery] = useState('progress');

    const timerRef = useRef<number>();

    useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        [],
    );

    useEffect(() => {
        const handleClickQuery = () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            if (query !== 'progress') {
                setQuery('progress');
                return;
            }

            setQuery('progress');

            timerRef.current = window.setTimeout(() => {
                setQuery('success');
            }, 2000);
        };

        handleClickQuery();
    }, [])

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            {query === 'success' ? (
                <>
                    <Nabvar />
                    <main>


                        {children}

                        <FloatingButton />



                    </main>
                </>
            ) : (
                <Spinner />
            )}
        </>
    )
}
