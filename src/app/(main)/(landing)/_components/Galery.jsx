import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { Starbucks } from '../../../../../public/svgs/Starbucks';
import { WholeFood } from '../../../../../public/svgs/WholeFood';
import EmailIcon from '@mui/icons-material/Email';
import EastIcon from '@mui/icons-material/East';

const Galery = () => {
  return (
    <Box component='section'   bgcolor='white' py={10} px={{xs:3,md:7,lg:40}} display='flex' flexDirection='column' gap={2} alignItems='center'>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={13}>
            <Typography variant='h4'  fontWeight='900'>Products we developed are used by</Typography>
            <Box id='productUsedBy' mt={10} width={'100%'} flexWrap={'wrap'} justifyContent={'center'} columnGap={'8px'} rowGap={'48px'} display={'flex'}>
                <Box flex={'0 0 16%'}>
                    <Starbucks></Starbucks>
                </Box>
                <Box flex={'0 0 16%'}>
                    <Starbucks></Starbucks>
                </Box>
                <Box flex={'0 0 16%'}>
                    <WholeFood/>
                </Box>
                <Box flex={'0 0 16%'}>
                    <Starbucks></Starbucks>
                </Box>
                <Box flex={'0 0 16%'}>
                    <Starbucks></Starbucks>
                </Box>
                <Box flex={'0 0 16%'}>
                    <WholeFood/>
                </Box>
                <Box flex={'0 0 16%'}>
                    <Starbucks></Starbucks>
                </Box><Box flex={'0 0 16%'}>
                    <Starbucks></Starbucks>
                </Box>
            </Box>
        </Box>
        <Box width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={13}>
            <Typography variant='h3' fontWeight='900'>How we can help you</Typography>
            <Typography variant='body2' pt={1}>Using powerful, industry-specific software solutions, our team can help you achieve your business goals.</Typography>
            <Box display={'flex'}  mt={8} width='75%' justifyContent='space-between' >
                <Box display='flex' bgcolor={'white'} borderRadius={2} flexDirection='column' gap={2} padding='32px 24px' alignItems='center' justifyContent='center'>
                    < MonitorHeartIcon/>
                    <Typography>HealthCare</Typography>   
                </Box>
                <Box display='flex' bgcolor={'white'} borderRadius={2} flexDirection='column' gap={2} padding='32px 24px' alignItems='center' justifyContent='center'>
                    < MonitorHeartIcon/>
                    <Typography>HealthCare</Typography>   
                </Box>
                <Box display='flex' bgcolor={'white'} borderRadius={2} flexDirection='column' gap={2} padding='32px 24px' alignItems='center' justifyContent='center'>
                    < MonitorHeartIcon/>
                    <Typography>HealthCare</Typography>   
                </Box>
                <Box display='flex' bgcolor={'white'} borderRadius={2} flexDirection='column' gap={2} padding='32px 24px' alignItems='center' justifyContent='center'>
                    < MonitorHeartIcon/>
                    <Typography>HealthCare</Typography>   
                </Box>
                <Box display='flex' bgcolor={'white'} borderRadius={2} flexDirection='column' gap={2} padding='32px 24px' alignItems='center' justifyContent='center'>
                    < MonitorHeartIcon/>
                    <Typography>HealthCare</Typography>   
                </Box>
                <Box display='flex' bgcolor={'white'} borderRadius={2} flexDirection='column' gap={2} padding='32px 24px' alignItems='center' justifyContent='center'>
                    < MonitorHeartIcon/>
                    <Typography>HealthCare</Typography>   
                </Box>
                <Box display='flex' bgcolor={'white'} borderRadius={2} flexDirection='column' gap={2} padding='32px 24px' alignItems='center' justifyContent='center'>
                    < MonitorHeartIcon/>
                    <Typography>HealthCare</Typography>   
                </Box>
            </Box>
        </Box>
        <Box width={'100%'} display={'flex'} gap={5} flexDirection='column' justifyContent='center' alignItems='center' mt={15}>
            <Typography variant='h3'  fontWeight='900' sx={{ fontWeight: 900, lineHeight: 1.2, textAlign: 'center' }}>How XsavLab helps you<br/>deliver the best results</Typography>
            <Box display='flex' gap={0}>
                <Box display='flex' flexDirection='column' bgcolor={'yellow'} padding={'38px'} borderRadius={6} width={'400px'} gap={3} sx={{transform:'rotate(3deg)'}}>
                    <EmailIcon/>
                    <Typography variant='h6' fontWeight='900'>clear Communication</Typography>
                    <Typography variant='body2'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quidem laboriosam ex tempora amet ipsa officiis eos cum repellendus non.</Typography>
                </Box>
                <Box display='flex' flexDirection='column' bgcolor={'yellow'} padding={'38px'} borderRadius={6} width={'400px'} gap={3}sx={{transform:'rotate(-3deg)'}}>
                    <EmailIcon/>
                    <Typography variant='h6' fontWeight='900'>clear Communication</Typography>
                    <Typography variant='body2'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quidem laboriosam ex tempora amet ipsa officiis eos cum repellendus non.</Typography>
                </Box>
                <Box display='flex' flexDirection='column' bgcolor={'yellow'} padding={'38px'} borderRadius={6} width={'400px'} gap={3} sx={{transform:'rotate(3deg)'}}>
                    <EmailIcon/>
                    <Typography variant='h6' fontWeight='900'>clear Communication</Typography>
                    <Typography variant='body2'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quidem laboriosam ex tempora amet ipsa officiis eos cum repellendus non.</Typography>
                </Box>
            </Box>
        </Box>
        <Box  width={'100%'} display={'flex'} px={10} gap={5} flexDirection='column' justifyContent='center' alignItems='center' mt={15}>
            <Box  sx={{backgroundImage:'url(https://diffco.us/wp-content/uploads/2024/08/how-we-build-bg@2x-1024x484.webp)',display:'flex', flexDirection:'column',gap:4, color:'white', width: '100%',minHeight: '396px', backgroundSize: 'cover',borderRadius:3, backgroundPosition:'center', backgroundRepeat:'no-repeat',padding:10}}>
                <Typography variant='h5' fontWeight={'900'} >How We Build</Typography>
                <Typography variant='body' maxWidth={'40%'} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur sunt delectus excepturi totam dignissimos iure error maxime recusandae distinctio?</Typography>
                <Button variant='contained' sx={{width:'150px',borderRadius:'30px', background: 'linear-gradient(90deg, #FF5733 0%, #FF0066 100%)',}} endIcon={<EastIcon/>}>Lets Talk</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Galery;