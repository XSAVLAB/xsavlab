import React, { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
 // Assuming you have some basic CSS

function Slider() {
  const itemsRef = useRef([]);
  const activeRef = useRef(3); // Set the initial active index

  useEffect(() => {
    loadShow();
  }, []);

  const loadShow = () => {
    let items = itemsRef.current;
    let active = activeRef.current;
    let stt = 0;

    // Active item styles
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Following items styles
    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${12 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(5px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    // Preceding items styles
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = 'blur(5px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  const handleNext = () => {
    if (activeRef.current < itemsRef.current.length - 1) {
      activeRef.current++;
      loadShow();
    }
  };

  const handlePrev = () => {
    if (activeRef.current > 0) {
      activeRef.current--;
      loadShow();
    }
  };

  return (
    <Box  className="slider" sx={{ display: 'flex', alignItems: 'center' }}>
      <Button id="prev" onClick={handlePrev}>
        Prev
      </Button>
      <Box padding={30} sx={{ display: 'flex', overflow: 'hidden', flex: 1 }}>
        {Array.from({ length: 7 }).map((_, index) => (
          <Box
            key={index}
            className="item"
            ref={(el) => (itemsRef.current[index] = el)}
            sx={{
              minWidth: 300,
              minHeight: 200,
              margin: '0 10px',
              background: 'lightblue',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Item {index + 1}
          </Box>
        ))}
      </Box>
      <Button id="next" onClick={handleNext}>
        Next
      </Button>
    </Box>
  );
}

export default Slider;
