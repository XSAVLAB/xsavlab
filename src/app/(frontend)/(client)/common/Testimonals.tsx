'use client';
import { Typography } from '@mui/material'
import Box  from '@mui/material/Box'
import React, { useRef } from 'react'
import FlashGrid from '../../../../../public/svgs/Flashgrid'
import Quotes from '../../../../../public/svgs/Quotes'

const data = [
    {
        logo:<FlashGrid color='white'/>,
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate odio voluptas consequatur neque id eveniet ducimus ratione reprehenderit odit?',
        background:'linear-gradient(90deg, #7a2e8a, #57237c);',
        client:{
            img:'https://diffco.us/wp-content/uploads/2024/08/art.webp',
            name:'Art Daynela',
            position:'CEO and CTO At Flashgrip'
        },

    },
    {
        logo:<FlashGrid color='white'/>,
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate odio voluptas consequatur neque id eveniet ducimus ratione reprehenderit odit?',
        background:'linear-gradient(90deg, #7a2e8a, #57237c);',
        client:{
            img:'https://diffco.us/wp-content/uploads/2024/08/art.webp',
            name:'Art Daynela',
            position:'CEO and CTO At Flashgrip'
        },

    },
    {
        logo:<FlashGrid color='white'/>,
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cupiditate odio voluptas consequatur neque id eveniet ducimus ratione reprehenderit odit?',
        background:'linear-gradient(90deg, #7a2e8a, #57237c);',
        client:{
            img:'https://diffco.us/wp-content/uploads/2024/08/art.webp',
            name:'Art Daynela',
            position:'CEO and CTO At Flashgrip'
        },

    },
    
]

const Testimonals = () => {
    const itemsRef = useRef<(HTMLDivElement)[]>([]);
    const activeRef = useRef(3);

    const loadshow = () => {
        let items = itemsRef.current;
        let active = activeRef.current;
        let stt = 0;

        items[active].style.transform= 'none';
        items[active].style.zIndex='1';
        


        
    }

    return (
        <Box component='section' className='maincontainer'  bgcolor={'white'} >
                <Typography variant='h3' className='heading' > What our Client Think</Typography>
                <Box component='div' className='reviewcontainer'>

                    {data.map((item,index) => (
                        <Box  component='div' className='testimonalcard'  sx={{background: item.background}} >
                        {item.logo}
                        <Typography > <span ><Quotes/></span>{item.comment}</Typography>
                        <Box display='flex' gap={2}>
                            <Box component='img' width='55px' src={item.client.img} alt='ceo'></Box>
                            <Box>
                                <Typography variant='h6' fontWeight='900' >{item.client.name}</Typography>
                                <Typography>{item.client.position}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    ))}

                </Box>
        </Box>
    )
}

export default Testimonals