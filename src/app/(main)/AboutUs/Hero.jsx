import Box from '@mui/material/Box'
import Typography  from '@mui/material/Typography';
import Grid  from '@mui/material/Grid';
import Card  from '@mui/material/Card';
import CardContent  from '@mui/material/CardContent';
import GradientButton from '@/app/components/GradientButton';

const CardItem =({icon,title,img}) => {
  return(
    <Box variant='outlined' sx={{bgcolor:'transparent', border:'2px solid white',width:'150px' ,height:'200px' ,color:'white',padding:2}}>
      <Box sx={{display:'flex', flexDirection:'column',gap:2.5}}>
          <Box component='img' src={`${icon}`} width='50px' height='50px'></Box>
          <Typography>{`${title}`}</Typography>
          <Box component='img' src={`${img}`} width='50px'></Box>
      </Box>
    </Box>
  )
}

const Hero = () => {
  return (
    <Box component='section' display='flex' flexDirection='column' minWidth='100vw' minHeight='90vh' bgcolor='#18141E' mt={8}>
      <Box  sx={{backgroundImage:`url(/aboutbg.jpg)`, textAlign:'center',display:'flex', flexDirection:'column',gap:4, color:'white', width: '100%',height: '60vh', backgroundSize: 'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat',justifyContent:'center',alignItems:'center'}}>
        <Typography variant='h3' fontWeight='900' maxWidth='900px'>We are expert professionals. We can turn your business idea into a real software solution.</Typography>
        <Typography variant='body2' maxWidth='884px'>XsavLab specializes in custom software development, creating and evolving solutions and products<br/>
                                                    to fuel business growth. With decades of development experience, a deep understanding of global markets,<br/>
                                                    and unmatched technical expertise, our team has everything you need to create great<br/>
                                                    web service platforms, mobile applications, SaaS, and AI.</Typography>
        <GradientButton/>
      </Box>
      <Box   sx={{bgcolor:'#18141E', minWidth:'100%', minHeight:'30vh',display:'flex',justifyContent:'center', px:7, py:7 }}>
        <Grid container spacing={10} display='flex'    justifyContent="center" alignItems='center'>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
          <Grid item xs={3}>
            <CardItem icon='/icon-success-grey.png' title={'2023 Global Clutch Winner'} img={'https://diffco.us/wp-content/themes/diffconew/static-template/build/images/top-developers/clutch-logo.png'}/>
          </Grid>
        </Grid>
        
      </Box>
    </Box>
  )
}

export default Hero;
