import Box  from '@mui/material/Box'
import  { useState } from 'react'

function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
      return 'active';
    } else if (indexes.nextIndex === cardIndex) {
      return 'next';
    } else if (indexes.previousIndex === cardIndex) {
      return 'prev';
    }
    return 'inactive';
  }

const Experiment = () => {
    const cardItems=[
        {
            img:'https://diffco.us/wp-content/uploads/2024/08/ic_flashgrid.webp',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid similique amet vero est in et nihil vitae dolorum veniam, enim veritatis repellendus architecto natus. Optio facere non repellat expedita.',
            user:{img:'https://diffco.us/wp-content/uploads/2024/08/razvan.png',name:'Razvan Spatariu',position:'Senior Software Engineering Manager at Multiverse'}
        },
        {
            img:'https://diffco.us/wp-content/uploads/2024/08/ic_flashgrid.webp',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid similique amet vero est in et nihil vitae dolorum veniam, enim veritatis repellendus architecto natus. Optio facere non repellat expedita.',
            user:{img:'https://diffco.us/wp-content/uploads/2024/08/razvan.png',name:'Razvan Spatariu',position:'Senior Software Engineering Manager at Multiverse'}
        },
        {
            img:'https://diffco.us/wp-content/uploads/2024/08/ic_flashgrid.webp',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid similique amet vero est in et nihil vitae dolorum veniam, enim veritatis repellendus architecto natus. Optio facere non repellat expedita.',
            user:{img:'https://diffco.us/wp-content/uploads/2024/08/razvan.png',name:'Razvan Spatariu',position:'Senior Software Engineering Manager at Multiverse'}
        },
        {
            img:'https://diffco.us/wp-content/uploads/2024/08/ic_flashgrid.webp',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid similique amet vero est in et nihil vitae dolorum veniam, enim veritatis repellendus architecto natus. Optio facere non repellat expedita.',
            user:{img:'https://diffco.us/wp-content/uploads/2024/08/razvan.png',name:'Razvan Spatariu',position:'Senior Software Engineering Manager at Multiverse'}
        }, {
            img:'https://diffco.us/wp-content/uploads/2024/08/ic_flashgrid.webp',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid similique amet vero est in et nihil vitae dolorum veniam, enim veritatis repellendus architecto natus. Optio facere non repellat expedita.',
            user:{img:'https://diffco.us/wp-content/uploads/2024/08/razvan.png',name:'Razvan Spatariu',position:'Senior Software Engineering Manager at Multiverse'}
        },

    ]
    const [indeex,setIndex] = useState({previous:0,current:0,next:1})
    return (
        <Box width={'100vw'} height={'100vh'}>
            

        </Box>
    )
}

export default Experiment;