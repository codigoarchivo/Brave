import { NextPage } from 'next'

import { Layout } from '../../components/layouts'

import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid'

import { CardItemSkills } from '../../components/skills';

import { ICategory, IEntry } from '../../interfaces';


const SkillsPage: NextPage = () => {


    const data: IEntry[] = [
        {
            image: '/img/perfil.png',
            name: 'JavaScript',
            type: 'lenguaje',
            id: '96946597645987495874',
        },
        {
            image: '/img/perfil.png',
            name: 'JavaScript',
            type: 'libreria',
            id: '96946597645987495874',
        },
        {
            image: '/img/perfil.png',
            name: 'JavaScript',
            type: 'frameword',
            id: '96946597645987495874',
        },
        {
            image: '/img/perfil.png',
            name: 'JavaScript',
            type: 'herramienta',
            id: '96946597645987495874',
        },
        {
            image: '/img/perfil.png',
            name: 'JavaScript',
            type: 'lenguaje',
            id: '96946597645987495874',
        },
    ]

    const categorias: ICategory[] = [
        {
            type: 'lenguaje',
            id: '96946597645243525987495874',
        },
        {
            type: 'libreria',
            id: '96946597645987sffefsf495874',
        },
        {
            type: 'frameword',
            id: '969465976459ffsfs2352587495874',
        },
        {
            type: 'herramienta',
            id: '969465976455345345987495874',
        },
        {
            type: 'lenguaje',
            id: '9694659764598vxvv5543534534537495874',
        },
    ]

    return (
        <Layout title={"Skills"}>
            <Container maxWidth="xl" sx={{ margin: { xs: '80px 0', sm: '100px 0', md: '150px 0' } }}>
                {
                    categorias.map((categoria: ICategory) => (
                        <div key={categoria.id}>
                            <h1>{categoria.type}</h1>

                            <Grid
                                container
                                spacing={{ xs: 2, md: 3 }}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                                justifyContent={'center'}
                                sx={{ height: 'min-content', backgroundColor: 'background.default' }}
                            >
                                <>
                                    {data.map((item, i) => (
                                        <CardItemSkills key={i} {...item} />
                                    ))}
                                </>
                            </Grid>
                        </div>

                    ))
                }

            </Container>
        </Layout>
    )
}

export default SkillsPage;