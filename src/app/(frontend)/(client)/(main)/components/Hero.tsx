'use client';

import { Box, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useEffect, useRef } from "react";

const Hero: FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    // Transform values for the animations based on the scroll progress
    const quotesAnimation = useTransform(scrollYProgress, [0, 0.75], [0, -1200]);
    const imageAnimation = useTransform(scrollYProgress, [0, 0.75], [0, 900]);

    useEffect(() => {
        console.log(scrollYProgress.get()); // Logs scroll progress value
    }, [scrollYProgress]);

    return (
        <Box
            component="section"
            className="hero-container"
            ref={ref} // Move the ref to the section container
            sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', gap: 2 }}
        >
            {/* Text Section */}
            <Box component="div" className="hero-container-text" sx={{ flex: 1 }}>
                <motion.div style={{ x: quotesAnimation }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem' },
                            fontFamily: 'Arial, sans-serif',
                            fontWeight: 700,
                            color: '#ffffff',
                            lineHeight: 1.2,
                        }}
                    >
                        Bring your ideas to life with Xsav Labs
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '2rem' },
                            fontFamily: 'Georgia, serif',
                            fontWeight: 500,
                            color: '#e0e0e0',
                            mt: 2,
                        }}
                    >
                        -expert software solutions tailored for success.
                    </Typography>
                </motion.div>
            </Box>

            {/* Image Section */}
            <Box component="div" className="hero-container-img" sx={{ flex: 1 }}>
                <motion.div style={{ x: imageAnimation }}>
                    <Box component="img" width="85%" src="images/cyber-security-13-3.webp" alt="Cyber Security" />
                </motion.div>
            </Box>
        </Box>
    );
};

export default Hero;
