import { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { capitalize } from '@mui/material';
import { IEntry } from '../../interfaces';

export const CardItemSkills: FC<IEntry> = ({ image, name }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Card sx={{ minWidth: 180 }}>
        <CardContent>
          <Stack
            direction='row'
            alignItems={'center'}
            divider={<Divider orientation='vertical' flexItem />}
            spacing={0}
            justifyContent={'space-around'}
          >
            <Box
              position={'relative'}
              width={{ xs: '30%' }}
              height={{ xs: 40 }}
            >
              <Image
                className={'shadow-global'}
                src={`${image}`}
                alt={name}
                layout='fill'
                objectFit='fill'
              />
            </Box>
            <Typography
              fontSize={14}
              fontWeight={900}
              color='secondary'
              gutterBottom
            >
              {capitalize(`${name}`)}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};
