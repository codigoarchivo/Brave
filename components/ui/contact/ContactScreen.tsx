import { useRouter } from 'next/router'

import Button from '@mui/material/Button'

import Card from '@mui/material/Card'

import CardContent from '@mui/material/CardContent'

import Grid from '@mui/material/Grid'

import TextField from '@mui/material/TextField'

import Typography from '@mui/material/Typography'

import { en, es } from '../../../translations'

export const ContactScreen = () => {
    const { locale } = useRouter()

    return (
        <>
            <Grid>
                <Card sx={{ padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            {locale === 'en' ? en.pageContact.e : es.pageContact.e}
                        </Typography>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder={locale === 'en' ? en.pageContact.g : es.pageContact.g} label={locale === 'en' ? en.pageContact.f : es.pageContact.f} variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField placeholder={locale === 'en' ? en.pageContact.i : es.pageContact.i} label={locale === 'en' ? en.pageContact.h : es.pageContact.h} variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" placeholder={locale === 'en' ? en.pageContact.k : es.pageContact.k} label={locale === 'en' ? en.pageContact.j : es.pageContact.j} variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="number" placeholder={locale === 'en' ? en.pageContact.ll : es.pageContact.ll} label={locale === 'en' ? en.pageContact.l : es.pageContact.l} variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label={locale === 'en' ? en.pageContact.m : es.pageContact.m} multiline rows={4} placeholder={locale === 'en' ? en.pageContact.n : es.pageContact.n} variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>{locale === 'en' ? en.pageContact.o : es.pageContact.o}</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}
