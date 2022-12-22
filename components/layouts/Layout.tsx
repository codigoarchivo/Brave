import { FC, ReactNode } from 'react'
import Head from 'next/head'
import Container from '@mui/material/Container';
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
            <header>
                <Nabvar />
            </header>
            <main>
                <Container>
                    <div className="fadeIn">
                        {children}
                    </div>
                    <FloatingButton />
                </Container>
            </main>
        </>
    )
}
