'use client'
import { useState, useRef, MouseEvent } from "react";
import { motion, useSpring } from "framer-motion";
import "./client.css";
import Box from "@mui/material/Box";
import { Card, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {clientdata,featureClient,products,client_Stories} from "./data";
import CloseIcon from '@mui/icons-material/Close';



interface Cordinates {
  x: number;
  y: number;
}

const Client = () => {
  const [mousePosition, setMousePosition] = useState<Cordinates>({ x: 0, y: 0 });
  const boxRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    // Get bounding box of the container
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // X position relative to the container
      const y = e.clientY - rect.top;  // Y position relative to the container
      setMousePosition({ x, y });
    }
  };

  // Smooth animation with spring-like movement
  const springX = useSpring(mousePosition.x, { stiffness: 100, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 100, damping: 20 });

  return (
    <Box component="section" className="maincontainer">
      
      <motion.div className='animated-client-container'  ref={boxRef} onMouseMove={handleMouseMove} >
          <motion.div className='glow-circle' style={{top: `${mousePosition.y - 50}px`, left: `${mousePosition.x - 50}px`}} />
            <Box component='div' className="client-logo-container">
              <Typography className="client-heading">Success project stories with our clients </Typography>
                <Box component='div' className="client-list">
                  {clientdata.map((item,index) => (
                  <Box component='div' className="client" key={index}>
                     <Box component='img' className="client-logo" src={item.logo} alt="client logo"/>
                  </Box>))}
                </Box>
            </Box>

      </motion.div>
      <Box component='div' className='client-container' >
            <Box component='div' className="prod-container">
              <Typography className='client-heading'>Years of experience creating successful products</Typography>
                <Box component='div' className="feature-client">
                  {products.map((item,index) =>(
                    <Box component='div' key={index} className="product-box" >
                        <Typography className="prod-heading"><span className='count'>{item.count}</span>{item.operator}</Typography>
                        <Typography className="prod-subheading">{item.desc}</Typography>
                    </Box>
                  ))}
                </Box>
            </Box>
            <Box  component='div' className="client-stories-container">
              <Box component='div' className="client-masonry-grid">
              {client_Stories.map((card,index) =>(
                  <Box component='div' key={index} className='client-story-card'>
                      <Box component='img' src={card.image} className="client-story-img"/>
                      <Typography className="client-story-heading">{card.title}</Typography>
                      <Typography className="client-story-body">{card.text}</Typography>
                  </Box>
                ) )}
              </Box>
            </Box>
      </Box>
      <Box component='div' className='client-container'>
        <Typography className="client-heading"> Our clients are featured on </Typography>
        <Box component='div' className="feature-client">
            {featureClient.map((item,index) =>(
              <Box component='img' className="feature-client-logo" key={index} src={item} alt="logo"/>
            ))}
        </Box>
      </Box>

    </Box>
      
  );
};

export default Client;

{/* <Box component='div' className='client-container'>
        <motion.div className="client-logo-container" ref={boxRef} onMouseMove={handleMouseMove}>
          <motion.div className="glow-circle" style={{top: `${mousePosition.y - 50}px`, left: `${mousePosition.x - 50}px`}}/>
          <Box component="div" className="logo-container">
            <Typography className="client-heading">Success project stories with our clients </Typography>
            <Box component='div' className="client-list">
              {data.map((item,index) => (
                <Box component='div' className="client" key={index}>
                  <Box component='img' className="client-logo" src={item.logo} alt="client logo"></Box>
                  {/* {(item.logo === 'https://diffco.us/wp-content/uploads/2023/10/1@2x.webp')?(
                    <Box component='div' className="client-content"></Box>

              //     ):''} */}
              //   {/* </Box>
              // ))}
      //       </Box>
      //     </Box>
      //   </motion.div>
      // </Box>
     
    // </Box> */}
