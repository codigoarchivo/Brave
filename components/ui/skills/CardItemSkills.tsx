import React, { FC } from 'react'

import Image from 'next/image';

import Box from '@mui/material/Box';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Divider from '@mui/material/Divider'

import Grid from '@mui/material/Grid'

import Stack from '@mui/material/Stack'

import Typography from '@mui/material/Typography';

interface ProspData {
    image: string;
    name: string;
}

export const CardItemSkills: FC<ProspData> = ({ image, name }) => {
    return (
        <Grid item xs={12} sm={3} md={3} lg={2} xl={1} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
            <Card sx={{ minWidth: 200 }}>
                <CardContent>
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                        <Box sx={{ position: 'relative', width: { xs: '30%' }, height: { xs: 40 } }}>
                            <Image
                                src={image}
                                alt={name}
                                layout="fill"
                                objectFit="fill"
                            />
                        </Box>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {name}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    )
}
