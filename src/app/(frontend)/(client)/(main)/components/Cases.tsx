import { Stack, Typography } from "@mui/material";
import Box  from "@mui/material/Box";
import { img } from "framer-motion/client";
import { FC } from "react";

const data=[{
  companylogo:'https://diffco.us/wp-content/uploads/2024/08/mv-logo@2x-300x109.webp',
  features:['Edtech','Traning','Saas'],
  comment:'We helped with developing comprehensive support solutions for internal processes and collaborative tools',
  companycomment:'Diffco supplied us with the skilled engineers we needed to meet our ambitious goals. Their account manager proactively addressed concerns, ensuring our expectations were met.',
  client:{
    img:'https://diffco.us/wp-content/uploads/2024/08/art.webp',
    name:'Art Daynela',
    position:'CEO and CTO At Flashgrip'
  },
  img:'https://diffco.us/wp-content/uploads/2024/08/mv-image@2x.webp',
  bgcolor:'blue'
},
{
  companylogo:'https://diffco.us/wp-content/uploads/2024/08/mv-logo@2x-300x109.webp',
  features:['Edtech','Traning','Saas'],
  comment:'We helped with developing comprehensive support solutions for internal processes and collaborative tools',
  companycomment:'Diffco supplied us with the skilled engineers we needed to meet our ambitious goals. Their account manager proactively addressed concerns, ensuring our expectations were met.',
  client:{
    img:'https://diffco.us/wp-content/uploads/2024/08/art.webp',
    name:'Art Daynela',
    position:'CEO and CTO At Flashgrip'
  },
  img:'https://diffco.us/wp-content/uploads/2024/08/mv-image@2x.webp',
  bgcolor:'blue'
},
{
  companylogo:'https://diffco.us/wp-content/uploads/2024/08/mv-logo@2x-300x109.webp',
  features:['Edtech','Traning','Saas'],
  comment:'We helped with developing comprehensive support solutions for internal processes and collaborative tools',
  companycomment:'Diffco supplied us with the skilled engineers we needed to meet our ambitious goals. Their account manager proactively addressed concerns, ensuring our expectations were met.',
  client:{
    img:'https://diffco.us/wp-content/uploads/2024/08/art.webp',
    name:'Art Daynela',
    position:'CEO and CTO At Flashgrip'
  },
  img:'https://diffco.us/wp-content/uploads/2024/08/mv-image@2x.webp',
  bgcolor:'blue'
}
]


const Cases :FC = () => {
  return (
    <Box component='section' className='maincontainer'>
        <Typography variant='h3' fontSize='3rem' fontWeight='900'>Succes Stories</Typography>

        <Box component='div' className="caseoutercontainer" px={{xs:'20px',lg:'400px'}}>

              <Stack spacing={10}>
        {data.map((item, index) => (
          <Box 
            component='div' 
            key={`cases${index}`} 
            className='cases' 
            width={{xs: '100%', md: '900px', xl: '900px'}} 
            flexDirection={{xs: 'column-reverse', lg: 'row'}} 
            bgcolor={item.bgcolor}>
            
            <Box component='div' className="introsec">
              <Box component='img' width='30%' src={item.companylogo} alt="logo" />
              <Box component='div' className="featurecontainer">
                {item.features.map((feature) => (
                  <Typography variant="body2" className="features">{feature}</Typography>
                ))}
              </Box>
              <Typography variant="h5" className="comment">{item.comment}</Typography>
              <Typography>{item.companycomment}</Typography>
              <Box component='div' className="clientsec">
                <Box component='img' width='55px' src={item.client.img} alt='ceo' />
                <Box>
                  <Typography variant='h6' fontWeight='900'>{item.client.name}</Typography>
                  <Typography>{item.client.position}</Typography>
                </Box>
              </Box>
            </Box>
            
            <Box component='div'>
              <Box component='img' width='100%' src={item.img} alt="image" />
            </Box>
          </Box>
        ))}
      </Stack>

        </Box>

    </Box>
  )
}

export default Cases