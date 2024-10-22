'use client'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React from 'react'
import './cases.css'

type Props = {
    id:number,
    caseDescription:string,
    features: string[],
    companyicon:string,
    comapnyDescription:string,
    rightImg:string,
    cardbackground:string
}

const Casecard = ({id,caseDescription,features,companyicon,comapnyDescription,rightImg,cardbackground}: Props) => {
  return (
    <Box component='div' className='case-base' bgcolor={cardbackground} key={id}>
        <Box component='div' className='case-card'>
            <Box component='div' className='case-card-content-left'>
                <Typography className='case-desc' >{caseDescription}</Typography>
                <Box component='div'  className='case-features-container'>
                    {features.map((feature,index) =>(
                         <Typography className='case-feature' key={feature}>{feature}</Typography>
                    ))}
                </Box>
                <Box component='img' src={companyicon} className='case-card-icon' alt='icon'/>
                <Typography className='case-company-desc'>{comapnyDescription}</Typography>
                <Button variant='contained' className='case-study-btn'>See case study</Button>
            </Box>
            <Box component='div' className='case-card-content-right'>
            <Box component='img' src={rightImg} className='case-card-image'  alt='icon' />
            </Box>
        </Box>
  </Box>
  )
}

export default Casecard;