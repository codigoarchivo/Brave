import { FC } from 'react';

import Image from 'next/image';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import CardActions from '@mui/material/CardActions';

import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';

import { capitalize } from '@mui/material';

interface Props {
    name: string;
    description: string;
    status: string;
    image: string;
}

export const WorkScreen: FC<Props> = ({ name, description, status, image }) => {
    return (
        <Card>
            <CardContent >
                <Box sx={{ margin: '0 auto', position: 'relative', width: { xs: '40%' }, height: { xs: 300 } }}>
                    <Image
                        src={image}
                        alt={name}
                        layout="fill"
                        objectFit="fill"
                    />
                </Box>
                <Stack sx={{ padding: '1rem' }}>
                    <Typography variant='h2' color="text.secondary" gutterBottom>
                        {capitalize(name)}
                    </Typography>
                    <Typography variant='body1' color="text.secondary" gutterBottom>
                        {description}
                    </Typography>
                    <Typography variant='body2' color="text.secondary" gutterBottom>
                        {status}
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions sx={{ margin: '0 0 1rem 1rem' }}>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

    )
}
