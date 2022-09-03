import { useRouter } from 'next/router';

import CallIcon from '@mui/icons-material/Call';

import Divider from '@mui/material/Divider';

import EmailIcon from '@mui/icons-material/Email';

import LocationOnIcon from '@mui/icons-material/LocationOn';

import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import { en, es } from '../../../translations';

export const InformationScreen = () => {

    const { locale } = useRouter()

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Stack spacing={{ xs: 1, sm: 2, md: 4 }} sx={{ width: '100%' }}>
            <Item>
                <Typography variant={'h3'} fontWeight={600} textTransform={'uppercase'}>
                    {locale === 'en' ? en.pageContact.a : es.pageContact.a}
                </Typography>
                <Stack sx={{ marginBottom: 3 }} justifyContent={'center'} direction="row">
                    <Typography variant={'h3'} fontWeight={600} textTransform={'uppercase'}>
                        {locale === 'en' ? en.pageContact.b : es.pageContact.b}
                    </Typography>
                    <Typography sx={{ marginLeft: locale === 'en' ? '25px' : 0 }} variant={'h3'} color='primary.main' fontWeight={600} textTransform={'uppercase'}>{locale === 'en' ? en.pageContact.c : es.pageContact.c}</Typography>
                </Stack>
            </Item>
            <div>
                <Divider textAlign="left" sx={{
                    fontSize: { xs: 18, md: 25 },
                    "&::before, &::after": {
                        borderColor: "secondary.light",
                    }
                }}>{locale === 'en' ? en.pageContact.d : es.pageContact.d}</Divider>
            </div>
            <Item>
                <Stack sx={{ marginBottom: 3 }} justifyContent={'space-between'} direction="row"><EmailIcon color='primary' /> <Typography variant='body1'>codigoarchivo@gmail.com</Typography></Stack>
                <Stack sx={{ marginBottom: 3 }} justifyContent={'space-between'} direction="row"><CallIcon color='primary' /> <Typography variant='body1'>+584126804788</Typography></Stack>
                <Stack justifyContent={'space-between'} direction="row"><LocationOnIcon color='primary' /> <Typography variant='body1'>Caracas Venezuela</Typography></Stack>
            </Item>
        </Stack>
    )
}
