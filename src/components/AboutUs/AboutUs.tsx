import Button  from '@mui/material/Button';
import Box  from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Service from '@/components/Common/Service';
import Value from './Value';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import './aboutus.css';
import Team from './Team';
import History from './History';
import ContactForm from '@/components/Common/ContactForm'
import Clients from './Clients';
import Case from './Case';

type Props = {}



const AboutUs = (props: Props) => {
    return (
        <Box component='section' className='wraper-container'>
            <Box component='div' className='about-wrapper'>
                <Box component='div' className='about-desc'>
                    <Typography className='about-heading'>We are expert professionals. We can turn your business idea into a real software solution. </Typography>
                    <Typography className='about-subsection'>Diffco specializes in custom software development, creating and evolving solutions and products to fuel business growth. With decades of development experience, a deep understanding of global markets, and unmatched technical expertise, our team has everything you need to create great web service platforms, mobile applications, SaaS, and AI. </Typography>
                    <Button variant='text' className='let-chat-btn' endIcon={<TrendingFlatIcon/>}>Let's chat</Button>
                </Box>
            </Box>
            <Service/>
            <Box component='div' className='about-wrapper'>
                <Value/>
                <Clients/>
                <History/>
                <Team/> 
            </Box>
            <Case/>
            <ContactForm/>
        </Box>
    )
    }

    export default AboutUs;

    //     We gain traction in the AI market with generative pre-trained transformers (GPT) and large language model (LLM)