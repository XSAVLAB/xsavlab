'use client'
import {Box,Button,Typography} from '@mui/material'
import { useState } from 'react'
import Casecard from './Casecard';
import {data} from './data';

import './cases.css';


type Props = {}

const buttons=['All Industries','E-Commerce','Finance','Goverment','Healthcare','Media & Entertainment','Retail','Saas','Security','Tech','Travel'];

const Case = (props: Props) => {
  const [activebutton,setActiveButton] = useState<string>(buttons[0]);
  return (
    <Box component='section' className='wraper-container'>
      <Box component='div' className='case-main-container'>
        <Typography variant='h5' className='cases-heading'> Our Cases</Typography>
        <Box component='div' className='menu-container'>
          {buttons.map((button,index) =>(
            <Button key={index}  className={`case-menu-button ${(activebutton === button)?'active':''}`} onClick={() => (setActiveButton(button))}>{button}</Button>
          ))}
        </Box>
          <Box component='div' className='case-container'>
            {data.map((item,index) =>(
                <Casecard key={index} id={index} caseDescription={item.caseDesc} features={item.features} companyicon={item.comapnyicon} comapnyDescription={item.comapnydesc} rightImg={item.rightimg} cardbackground={item.cardbackground}/>
            ))}
          </Box>
      </Box>
    </Box>
  )
}

export default Case;