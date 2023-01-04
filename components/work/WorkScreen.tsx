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
  idx: number;
}

export const WorkScreen: FC<Props> = ({ description, status, image, idx }) => {
  return (
    <>
      <Card sx={{ height: { xs: 440 } }}>
        <CardContent>
          <Box
            sx={{
              margin: '0 auto',
              position: 'relative',
              width: { xs: '100%' },
              height: { xs: 180 },
            }}
          >
            <Image
              src={image}
              alt={`Proyecto #${idx}`}
              layout='fill'
              objectFit='fill'
            />
          </Box>
          <Stack spacing={2}>
            <Typography variant='h5' color='text.secondary' gutterBottom>
              {capitalize(`Proyecto #${idx}`)}
            </Typography>
            <Typography variant='body1' color='text.secondary' gutterBottom>
              Tecnologías:{' '}
              <span style={{ fontWeight: 100 }}>{description}</span>
            </Typography>
            <Typography variant='body2' color='text.secondary' gutterBottom>
              Status: <span style={{ fontWeight: 100 }}>{status}</span>
            </Typography>
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'flex-end',
            marginRight: '20px',
          }}
        >
          <Button
            color={'secondary'}
            variant='outlined'
            size='small'
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
