import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent  from '@mui/material/CardContent';
import { customerreview } from './data';

import Typography from '@mui/material/Typography';
import React from 'react'


const Testimonials = () => {
  return (
    <Box component='section' width='100vw' bgcolor='white' gap={8} display='flex' flexDirection='column' alignItems='center' py={10} color='black'>
        <Typography variant='h3' textAlign='center' > What Our Customer Think</Typography>
        <Box bgcolor='yellow' display='flex' width='900px'  gap={8} justifyContent="center" p={2} >
            {customerreview.map((item, index) => (
                <Card key={index} sx={{ minWidth: '400px', bgcolor:`${item.color}`,px:'20px',gap:'10px', py:'10px',transform:`${item.parm}` }}>
                    <CardContent  sx={{display:'flex', flexDirection:'column',gap:'10px'}}>
                        <Typography  variant='body2' fontSize='10px' color={'white'} fontWeight='600'>{item.comment}</Typography>
                        <Box component={'img'} src={item.companylogo}  width='25%' height='15%'/>
                        <Typography variant='body' fontSize='12px' color={'white'} fontWeight='700'>{item.review}</Typography>
                    </CardContent>
                    <CardContent sx={{display:'flex', flexDirection:{md:'column',lg:'row'},gap:'20px'}} >
                        <Box component="img" src={item.customer.image} alt="description"  sx={{  width: 50, height: 50,borderRadius: '50%'}} />
                        <Box display={'flex'} flexDirection={'column'} color={'white'} >
                            <Typography variant='body2' fontWeight={'800'}> {item.customer.name}</Typography>
                            <Typography variant='body2'>{item.customer.position}</Typography>
                        </Box>
                    </CardContent>
                </Card>
            ))}

        </Box>

    </Box>
  )
}

export default Testimonials;


 const Testimon = () => {
  return (<>
    <Box   display={'flex'} flexDirection={'column'} px={4}  py={4} minwidth={600}  bgcolor="blue"gap={3} boxShadow={3}  borderRadius={2}>
                <Box component={'img'} src="https://diffco.us/wp-content/uploads/2024/08/ic_flashgrid.webp"  width='25%' height='15%'/>
                <Typography variant='body' color={'white'} fontWeight='600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis est aperiam repudiandae, rerum recusandae delectus laudantium itaque exercitationem aspernatur, ex quos expedita sequi nihil magni, ad odit autem deleniti!</Typography>
                <Box display={'flex'} gap={2}>
                    <Box component="img" src="https://diffco.us/wp-content/uploads/2024/08/razvan.png" alt="description"  sx={{  width: 50, height: 50,borderRadius: '50%'}} />
                        <Box display={'flex'} flexDirection={'column'} color={'white'} >
                            <Typography fontWeight={'800'}> Razvan Spatariu</Typography>
                            <Typography>Senior Software Engineering Manager at Multiverse</Typography>
                        </Box>
                </Box>
            </Box>
            <Box   display={'flex'} flexDirection={'column'} px={4}  py={4} width={600}  bgcolor="blue"gap={3} boxShadow={3}  borderRadius={2}>
                <Box component={'img'} src="https://diffco.us/wp-content/uploads/2024/08/ic_flashgrid.webp"  width='25%' height='15%'/>
                <Typography variant='body' color={'white'} fontWeight='600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis est aperiam repudiandae, rerum recusandae delectus laudantium itaque exercitationem aspernatur, ex quos expedita sequi nihil magni, ad odit autem deleniti!</Typography>
                <Box display={'flex'} gap={2}>
                    <Box component="img" src="https://diffco.us/wp-content/uploads/2024/08/razvan.png" alt="description"  sx={{  width: 50, height: 50,borderRadius: '50%'}} />
                        <Box display={'flex'} flexDirection={'column'} color={'white'} >
                            <Typography fontWeight={'800'}> Razvan Spatariu</Typography>
                            <Typography>Senior Software Engineering Manager at Multiverse</Typography>
                        </Box>
                </Box>
            </Box>
            <Box   display={'flex'} flexDirection={'column'} px={4}  py={4} width={600}  bgcolor="blue"gap={3} boxShadow={3}  borderRadius={2}>
                <Box component={'img'} src="https://diffco.us/wp-content/uploads/2024/08/ic_flashgrid.webp"  width='25%' height='15%'/>
                <Typography variant='body' color={'white'} fontWeight='600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis est aperiam repudiandae, rerum recusandae delectus laudantium itaque exercitationem aspernatur, ex quos expedita sequi nihil magni, ad odit autem deleniti!</Typography>
                <Box display={'flex'} gap={2}>
                    <Box component="img" src="https://diffco.us/wp-content/uploads/2024/08/razvan.png" alt="description"  sx={{  width: 50, height: 50,borderRadius: '50%'}} />
                        <Box display={'flex'} flexDirection={'column'} color={'white'} >
                            <Typography fontWeight={'800'}> Razvan Spatariu</Typography>
                            <Typography>Senior Software Engineering Manager at Multiverse</Typography>
                        </Box>
                </Box>
            </Box>
            <Box   display={'flex'} flexDirection={'column'} px={4}  py={4} width={600}  bgcolor="blue"gap={3} boxShadow={3}  borderRadius={2}>
                <Box component={'img'} src="https://diffco.us/wp-content/uploads/2024/08/ic_flashgrid.webp"  width='25%' height='15%'/>
                <Typography variant='body' color={'white'} fontWeight='600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis est aperiam repudiandae, rerum recusandae delectus laudantium itaque exercitationem aspernatur, ex quos expedita sequi nihil magni, ad odit autem deleniti!</Typography>
                <Box display={'flex'} gap={2}>
                    <Box component="img" src="https://diffco.us/wp-content/uploads/2024/08/razvan.png" alt="description"  sx={{  width: 50, height: 50,borderRadius: '50%'}} />
                        <Box display={'flex'} flexDirection={'column'} color={'white'} >
                            <Typography fontWeight={'800'}> Razvan Spatariu</Typography>
                            <Typography>Senior Software Engineering Manager at Multiverse</Typography>
                        </Box>
                </Box>
            </Box>
            <Box   display={'flex'} flexDirection={'column'} px={4}  py={4} width={600}  bgcolor="blue"gap={3} boxShadow={3}  borderRadius={2}>
                <Box component={'img'} src="https://diffco.us/wp-content/uploads/2024/08/ic_flashgrid.webp"  width='25%' height='15%'/>
                <Typography variant='body' color={'white'} fontWeight='600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis est aperiam repudiandae, rerum recusandae delectus laudantium itaque exercitationem aspernatur, ex quos expedita sequi nihil magni, ad odit autem deleniti!</Typography>
                <Box display={'flex'} gap={2}>
                    <Box component="img" src="https://diffco.us/wp-content/uploads/2024/08/razvan.png" alt="description"  sx={{  width: 50, height: 50,borderRadius: '50%'}} />
                        <Box display={'flex'} flexDirection={'column'} color={'white'} >
                            <Typography fontWeight={'800'}> Razvan Spatariu</Typography>
                            <Typography>Senior Software Engineering Manager at Multiverse</Typography>
                        </Box>
                </Box>
            </Box>
            <Box   display={'flex'} flexDirection={'column'} px={4}  py={4} width={600}  bgcolor="blue"gap={3} boxShadow={3}  borderRadius={2}>
                <Box component={'img'} src="https://diffco.us/wp-content/uploads/2024/08/ic_flashgrid.webp"  width='25%' height='15%'/>
                <Typography variant='body' color={'white'} fontWeight='600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur facilis est aperiam repudiandae, rerum recusandae delectus laudantium itaque exercitationem aspernatur, ex quos expedita sequi nihil magni, ad odit autem deleniti!</Typography>
                <Box display={'flex'} gap={2}>
                    <Box component="img" src="https://diffco.us/wp-content/uploads/2024/08/razvan.png" alt="description"  sx={{  width: 50, height: 50,borderRadius: '50%'}} />
                        <Box display={'flex'} flexDirection={'column'} color={'white'} >
                            <Typography fontWeight={'800'}> Razvan Spatariu</Typography>
                            <Typography>Senior Software Engineering Manager at Multiverse</Typography>
                        </Box>
                </Box>
            </Box>
            </>
  )
}
