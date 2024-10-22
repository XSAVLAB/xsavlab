'use client'
import Button from '@mui/material/Button'
import Typography  from '@mui/material/Typography'
import Box  from '@mui/material/Box'
import './blog.css'
import {data} from './data'
import { useState } from 'react'
import BlogCard from './BlogCard'
import Subscribe from '../Common/Subscribe'


type Props = {}
const menus=['Everything', 'Podcasts and Interviews','Achievements','Clients','Insights',]
const Blog = (props: Props) => {
  const [activebutton,setActiveButton] = useState<string>('Everything');
  const [visibleBlogs, setVisibleBlogs] = useState<number>(10);

  const showMoreBlogs = () => {
    setVisibleBlogs(prevCount => prevCount + 10); 
  };
  return (
    <Box component='section' className='wraper-container'>
        <Typography variant='h3' className='blog-heading'>Browse our thoughts and news</Typography>
        <Box component='div' className='blog-menu'>
            {menus.map((menu,index) =>(
                <Button variant='text' key={`menu_button_${index}`} className={`blog-menu-btn ${(activebutton === menu)?'active':''}`} onClick={() => (setActiveButton(menu))}>{menu}</Button>
            ))}
        </Box>
        <Box component='div' className='blog-container'>
          {data.slice(0, visibleBlogs).map((item,index)=>(
           <BlogCard key={index} id={index} image={item.image} title={item.title} date={item.date} desc={item.desc} />
          ))}
        </Box>
        {visibleBlogs < data.length && (
        <Button variant='text' className='blog-show-more-btn' onClick={showMoreBlogs}>Show more articles</Button>
        )}
        <Subscribe />
    </Box>
  )
}

export default Blog;

