import React from 'react'
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import Slider from "react-slick";
import {data} from '../Cases/data';
import Casecard from '../Cases/Casecard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

type Props = {}

const Case = (props: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      };
    return (
        <Box component='div'  className='about-case-wrapper'>
            <Box component='div' className='case-top'>
                <Typography variant='h4' className='case-heading'>Our Success Stories</Typography>
            </Box>
            <Box component='div' className='case-middle'>
                        <Slider {...settings}>
                            {data.map((item,index) =>(
                                <Casecard key={index} id={index} caseDescription={item.caseDesc} features={item.features} companyicon={item.comapnyicon} comapnyDescription={item.comapnydesc} rightImg={item.rightimg} cardbackground={item.cardbackground}/>
                                
                            ))}
                        </Slider>
            </Box> 
            <Box component='div' className='case-bottom'>
                <Box component='div' className='more-case-study'>
                    <Typography className='more-case-study-text'>See more our amazing case studies</Typography>
                    <Button className='white-button' endIcon={<ArrowRightAltIcon/>}>See more cases</Button>
                </Box>
            </Box>

        </Box>
    )
}

export default Case