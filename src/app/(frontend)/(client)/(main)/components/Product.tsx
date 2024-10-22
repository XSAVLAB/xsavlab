'use Client'

import { Box, Typography } from "@mui/material";

const clients =['https://diffco.us/wp-content/uploads/2024/08/ub-whole-foods.svg',
                'https://diffco.us/wp-content/uploads/2024/08/ub-starbucks.svg',
                "https://diffco.us/wp-content/uploads/2024/08/ub-multiverse.svg",
                "https://diffco.us/wp-content/uploads/2024/08/ub-pivotree.svg",
                "https://diffco.us/wp-content/uploads/2024/08/ub-nuance.svg",
                "https://diffco.us/wp-content/uploads/2024/08/ub-mars.svg",
                "https://diffco.us/wp-content/uploads/2024/08/ub-ae.svg",
                "https://diffco.us/wp-content/uploads/2024/08/ub-nokia.svg",
                "https://diffco.us/wp-content/uploads/2024/08/ub-chemtreat.svg",
                "https://diffco.us/wp-content/uploads/2024/08/ub-shift.svg",
                "https://diffco.us/wp-content/uploads/2024/08/ub-hilton.svg",
];

const categories = [
    { name: 'Healthcare', logo: 'https://diffco.us/wp-content/uploads/2024/08/ic-ch-1.svg' },
    { name: 'Finance', logo: 'https://diffco.us/wp-content/uploads/2024/08/ic-ch-2.svg' },
    { name: 'Technology', logo: 'https://diffco.us/wp-content/uploads/2024/08/ic-ch-3.svg' },
    { name: 'Retail and E-commerce', logo: 'https://diffco.us/wp-content/uploads/2024/08/ic-ch-4.svg' },
    { name: 'SaaS', logo: 'https://diffco.us/wp-content/uploads/2024/08/ic-ch-5.svg' },
    { name: 'Business services', logo: 'https://diffco.us/wp-content/uploads/2024/08/ic-ch-6.svg' },
    { name: 'Media and entertainment', logo: 'https://diffco.us/wp-content/uploads/2024/08/ic-ch-7.svg' },
    { name: 'AI', logo: 'https://diffco.us/wp-content/uploads/2024/08/ic-ch-8.svg' }
  ];
const Product = () => {
  return (
    <Box component='section' className='container'>
        <Box component='div' className='productcont' >
            <Typography className="productheading" fontSize={{xs:'20px',md:'24px',lg:'32px',xl:'40px'}}>Products we developed are used by</Typography>
                <Box display='flex' flexWrap='wrap' justifyContent='center' columnGap={1} rowGap={6}   boxSizing='border-box'>
                    {clients.map((logo,index) => (
                        <Box component='img' className="companylogo" key={`client_${index}`} src={logo} alt="company logo" />
                    ))}
                </Box>
        </Box>
        <Box component='div' className='productcont' >
            <Box>
                <Typography className="productheading" fontSize={{xs:'20px',md:'24px',lg:'32px',xl:'40px'}}>How we can help you</Typography>
                <Typography color="black">Using powerful, industry-specific software solutions, our team can help you achieve your business goals.</Typography>
            </Box>
            <Box display='flex'  gap={{xs:1,md:3}} justifyContent={'center'} flexWrap='wrap' color='black'>
                {categories.map((item,index) =>(
                    <Box component='div' className="categories" key={index} >
                        <Box component='img' src={item.logo} alt={item.name} />
                        <Typography sx={{fontSize:'12px', fontWeight:'600',wordWrap:'normal',lineHeight:'1'}} >{item.name}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
        <Box component='div' className='productcont'>
                <Typography className="productheading" fontSize={{xs:'20px',md:'24px',lg:'32px',xl:'40px'}} >Success stories of our clients</Typography>
                <Box >
                    <Box display='flex' flexDirection={{xs:'column-reverse',lg:'row'}}>
                        <Box display='flex' flexDirection='column' padding={10}>

                        </Box>
                    </Box>
                </Box>
        </Box>
    </Box>
  )
}

export default Product;

{/* <Box component={'section'} className='container' > */}
{/* <Box component='div' className='productcont' >
    <Typography className="productheading" fontSize={{xs:'20px',md:'24px',lg:'32px',xl:'40px'}}>Products we developed are used by</Typography>
    <Box display='flex' flexWrap='wrap' justifyContent='center' columnGap={1} rowGap={6}   boxSizing='border-box'>
        {clients.map((logo,index) => (
            <Box component='img' className="companylogo" key={`client_${index}`} src={logo} alt="company logo" />
        ))}
    </Box>
</Box>
<Box component='div' className='productcont' >
    <Box>
        <Typography className="productheading" fontSize={{xs:'20px',md:'24px',lg:'32px',xl:'40px'}}>How we can help you</Typography>
        <Typography color="black">Using powerful, industry-specific software solutions, our team can help you achieve your business goals.</Typography>
    </Box>
    <Box display='flex'  gap={{xs:1,md:3}} justifyContent={'center'} flexWrap='wrap' color='black'>
        {categories.map((item,index) =>(
            <Box component='div' className="categories" key={index} >
                <Box component='img' src={item.logo} alt={item.name} />
                <Typography sx={{fontSize:'12px', fontWeight:'600',wordWrap:'normal',lineHeight:'1'}} >{item.name}</Typography>
            </Box>
        ))}
    </Box>
</Box>
<Box component='div' className='productcont'>
        <Typography className="productheading" fontSize={{xs:'20px',md:'24px',lg:'32px',xl:'40px'}} >Success stories of our clients</Typography>
        <Box >
            <Box display='flex' flexDirection={{xs:'column-reverse',lg:'row'}}>
                <Box display='flex' flexDirection='column' padding={10}>

                </Box>
            </Box>
        </Box>
</Box> */}
{/* </Box> */}