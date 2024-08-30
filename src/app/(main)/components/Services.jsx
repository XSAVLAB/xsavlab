import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import EastIcon from '@mui/icons-material/East';


const Services = () => {
  return (
    <Box component={'section'} minwidth={'100vw'} minheight={'100vh'} px={{xs:1, lg:20}} bgcolor={'common.white'} display={'flex'} flexDirection={'column'} alignItems={'center'} >
        <Typography variant='h3' alignContent={'center'} fontSize={{xs:'20px',lg:'50px'}} fontWeight={'900'} mt={10} mb={5} >Services We Provide </Typography>
        <Grid padding={'20px'} container spacing={2}>
            <Grid item md={12} xl={6} >
                <Box display='flex' bgcolor={'yellow'} height={'fit-content'} flexDirection={{xs:'column-reverse', md:'row'}} width={'fit-content'} borderRadius={'10px'}>
                    <Box padding={4} display={'flex'} gap={1.5} flexDirection={'column'} width={{xs:'100%',md:'80%'}}>
                        <Typography variant='h6' lineHeight={1} fontFamily={'ExtraBold'} fontSize={{xs:'15px', md:'20px',xl:'25px'}}>Front End Development</Typography>
                        <Typography variant='body2' pr={20}   fontFamily={'ExtraLight'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur quod eos nobis odit ipsum incidunt, optio iure provident accusantium?</Typography>
                        <Box display={'flex'} gap={1}>
                            <Typography variant='section2' fontSize={10} bgcolor={'white'} padding={'5px 20px'} borderRadius={'20px'}>Nextjs</Typography>
                            <Typography variant='section2' fontSize={10} bgcolor={'white'} padding={'5px 20px'} borderRadius={'20px'}>Nextjs</Typography>
                            <Typography variant='section2' fontSize={10} bgcolor={'white'} padding={'5px 20px'} borderRadius={'20px'}>React</Typography>
                            <Typography variant='section2' fontSize={10} bgcolor={'white'} padding={'5px 20px'} borderRadius={'20px'}>Anjular</Typography>
                            <Typography variant='section2' fontSize={10} bgcolor={'white'} padding={'5px 20px'} borderRadius={'20px'}>vite</Typography>
                            
                        </Box>
                        <Button sx={{bgcolor:'black',maxWidth:'fit-content', fontFamily:{xs:"10px",md:'15px'}, color:'common.white'}} endIcon={<EastIcon/>}>Lets Talk</Button>
                        
                    </Box>
                    <Box display={'flex'} height={'30%'} bgcolor={'black'} borderRadius={'10px'} width={'20%'} ><img  width={'100px'} height={'100px'} src={'/images/computer.webp'} alt='computer'></img></Box>
                </Box>
            </Grid>
            <Grid item md={12} xl={6} >
                <Box display='flex' bgcolor={'yellow'} height={'fit-content'} flexDirection={{xs:'column-reverse', md:'row'}} width={'fit-content'} borderRadius={'10px'}>
                    <Box padding={2} display={'flex'} gap={1.5} flexDirection={'column'} width={{xs:'100%',md:'80%'}}>
                        <Typography variant='h6' lineHeight={1}fontFamily={'ExtraBold'} fontSize={{xs:'15px', md:'20px',xl:'25px'}}>Front End Development</Typography>
                        <Typography variant='body2'  fontFamily={'ExtraLight'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur quod eos nobis odit ipsum incidunt, optio iure provident accusantium?</Typography>
                        <Box display={'flex'} gap={1}>
                            <Typography variant='section2' fontSize={10} bgcolor={'white'} padding={'5px 20px'} borderRadius={'20px'}>Nextjs</Typography>
                            <Typography variant='section2' fontSize={10} bgcolor={'white'} padding={'5px 20px'} borderRadius={'20px'}>Nextjs</Typography>
                            <Typography variant='section2' fontSize={10} bgcolor={'white'} padding={'5px 20px'} borderRadius={'20px'}>React</Typography>
                            <Typography variant='section2' fontSize={10} bgcolor={'white'} padding={'5px 20px'} borderRadius={'20px'}>Anjular</Typography>
                            <Typography variant='section2' fontSize={10} bgcolor={'white'} padding={'5px 20px'} borderRadius={'20px'}>vite</Typography>
                            
                        </Box>
                        <Button sx={{bgcolor:'black',maxWidth:'fit-content', fontFamily:{xs:"10px",md:'15px'}, color:'common.white'}} endIcon={<EastIcon/>}>Lets Talk</Button>
                        
                    </Box>
                    <Box display={'flex'} height={'30%'} bgcolor={'black'} borderRadius={'10px'} width={'20%'} ><img  width={'100px'} height={'100px'} src={'/images/computer.webp'} alt='computer'></img></Box>
                </Box>
            </Grid>
            
          
           
           
        </Grid>
        
        
    </Box>
  )
}

export default Services;
