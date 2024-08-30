import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

const Blog = () => {
  return (
    <Box component='section' minWidth={'100vw'} minHeight={'100vh'} bgcolor='White' display='flex' pt={8} alignItems='center' flexDirection='column' gap={5}> 
        <Typography variant='h3' textAlign={'center'} fontWeight='900'> Browse our latest blog articles</Typography>
        <Box display='flex' gap={5}>
            <Typography fontWeight='700'>EveryThing</Typography>
            <Typography fontWeight='700'>Podcast and Interview</Typography>
            <Typography fontWeight='700'>Achievement</Typography>
            <Typography fontWeight='700'>Clients</Typography>
            <Typography fontWeight='700'>Insights</Typography>
        </Box>
        <Box bgcolor='gray' >
            <Box component='img' src='https://diffco.us/wp-content/uploads/2023/08/Vadim-Peskov-Podcast-Interview-with-Outsource-Accelerator-Diffco-1-812x360.jpg' borderRadius={5}></Box>
        </Box>
    </Box>
  )
}

export default Blog