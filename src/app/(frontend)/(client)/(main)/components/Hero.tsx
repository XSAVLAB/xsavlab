'use client';

import { Box, Typography } from "@mui/material";
import {motion,useAnimation, useInView, useMotionValueEvent, useScroll, useTransform} from 'framer-motion';
import { FC, useEffect, useRef} from "react";

const Hero :FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const quotesanim = useTransform(scrollYProgress, [0,0.75], [0, -1200]);
    const imganim = useTransform(scrollYProgress, [0,0.75], [0, 900]);
    

  useEffect(() => {
    console.log(scrollYProgress.get());
  }, [scrollYProgress]);
    return(
        <Box component='section' className="container" sx={{flexDirection:{xs:'column',lg:'row'}}} >
            <Box component='div' className="itemcontainer"  sx={{minWidth:'55%'}}>
                <motion.div style={{x:quotesanim}} ref={ref}>
                    <Typography py={{xs:'50px' ,md:'10px',lg:'150px'}} fontSize={{xs:'40px',md:'30px',lg:'30px',xl:'55px '}} className='quotes'>Transform your vision into reality with <br/> <span className="textgradient">Xsav Labs</span> <br/>where<br/> <span className="textgradient">top-tier software development meets <br/>unparalleled expertise.</span> </Typography>
                </motion.div>
                <Box component='div' className='boxcontainer'>
                    <Box component='div' className="transparentbox">kernvk</Box>
                    <Box component='div' className="transparentbox">kernvk</Box>
                    <Box component='div' className="transparentbox">kernvk</Box>
                </Box>
            </Box>
            <Box component='div' className="itemcontainer" justifyContent='center' sx={{minWidth:'45%'}}  >
                <motion.div ref={ref} style={{x:imganim}}>
                    <Box component='img' width={'100%'} src="images/cyber-security-13-3.webp"/>
                </motion.div>
                
            </Box>
        </Box>
    )
};
export default Hero;