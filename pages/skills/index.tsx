import { useEffect, useState } from 'react';
import { NextPage } from 'next'
import { Typography, capitalize } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Layout } from '../../components/layouts'
import { CardItemSkills } from '../../components/skills';
import { IEntry } from '../../interfaces';
import { dataSkills } from '../../database';
import { listDinamic } from '../../helpers';


interface INdata {
    type: string;
    fil: IEntry[];
}

const SkillsPage: NextPage = () => {

    const [select, setSelect] = useState<INdata[]>([]);

    useEffect(() => {
        const united = listDinamic(dataSkills.categorias, dataSkills.servicios);
        if (united.length > 0) setSelect(united as INdata[]);
    }, [])

    return (
        <Layout title={"Skills"}>
            <Container maxWidth="xl" sx={{ margin: { xs: '80px 0', sm: '100px 0', md: '150px 0' } }}>
                {select.map((list: INdata, i) => (
                    <Box px={{ xs: 0, md: 10 }} py={3} key={i}>
                        <Typography
                            fontSize={{ xs: 24, md: 40, lg: 40, xl: 50 }}
                            component={'h1'}
                            mb={4}
                            color="text.secondary"
                        > {capitalize(`${list.type}`)}</Typography>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            px={{ xs: 0, md: 3 }}
                            pb={{ xs: 2, md: 3 }}
                            pt={0}
                            bgcolor={'primary.main'}
                            height={'min-content'}
                            justifyContent={'start'}
                            className='box_color box_s'
                            boxShadow={24}
                        >

                            {list.fil.map((item: IEntry, i) => (
                                <CardItemSkills key={i} {...item} />
                            ))}

                        </Grid>
                    </Box>
                ))}
            </Container>
        </Layout>
    )
}

export default SkillsPage;