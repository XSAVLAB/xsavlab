import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import {history} from './data';

type Props = {}

type HistoryProps = {
    year:string,
    text:string,
    className:string
}

const HistoryBox = ({year,text}: HistoryProps) => {
  return (
    <Box component='div' className='history-box'>
        <Typography className='about-history-date'>{year}</Typography>
        <Typography className='about-history-text'>{text}</Typography>
    </Box>
  )
}


const History = (props: Props) => {
  const [position, setPosition] = useState<number[]>(
    Array.from({ length: history.length }, (_, i) => i)
  );
  
  const handleNext = () => {
    setPosition((prev) => {
      const update = prev.map((prevIndex) => (prevIndex + 1) % history.length);
      return update;
    });
  };
  
  return (
    <Box component='div' className='about-wrapper'>
        <Typography className='about-heading'> Our history</Typography>
         <Box component='div' className='history-container'>
          {/* <Slider {...settings} className='history-slider'>
               {history.map((item,index)=>(
                <HistoryBox key={index} year={item.year} text={item.text} className={(active === index)?'history-active':''}/>
               ))}
              </Slider> */}
         </Box>

            
    </Box>
  )
}

export default History