import { NextPage } from 'next'

import { Layout } from '../../components/layouts'

import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid'

import { CardItemSkills } from '../../components/ui/skills';


interface dataEntry {
    image: string,
    name: string,
}

const SkillsPage: NextPage = () => {


    const data: dataEntry[] = [
        {
            image: '/img/perfil.png',
            name: 'JavaScript',
        },
        {
            image: '/img/perfil.png',
            name: 'JavaScript',
        },
        {
            image: '/img/perfil.png',
            name: 'JavaScript',
        },
        {
            image: '/img/perfil.png',
            name: 'JavaScript',
        },
        {
            image: '/img/perfil.png',
            name: 'JavaScript',
        },
    ]

    return (
        <Layout title={"Services"}>
            <Container maxWidth="xl" sx={{ margin: { xs: '55px 0', sm: '60px 0', md: '150px 0' } }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={'center'} sx={{ height: 'calc(100vh - 250px)', backgroundColor: 'background.default' }}>
                    {data.map((item, i) => (
                        <CardItemSkills key={i} {...item} />
                    ))}
                </Grid>
            </Container>
        </Layout>
    )
}

export default SkillsPage