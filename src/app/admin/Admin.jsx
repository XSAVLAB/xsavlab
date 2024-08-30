// import React from 'react'
import {ColorModeContext,useMode} from './theme'
import { CssBaseline,ThemeProvider } from '@mui/material'
import { Routes,Route } from 'react-router-dom'
import Topbar  from "./Components/pages/globals/Topbar"
import Navbar from './Components/pages/globals/NavBar'
import Dashboard from './Components/pages/Dashboard'
import Team from './Components/pages/Team'
import Invoice from './Components/pages/Invoice'
import Contact from './Components/pages/Contacts'
import Calendar from './Components/pages/Calendar'
import Form from './Components/pages/Form'
import Faq from './Components/pages/Faq'
import BarChart from './Components/pages/BarChart'
import LineChart from './Components/pages/LineChart'
import PieChart from './Components/pages/PieChart'
import GeographyChart from './Components/pages/GeographyChart'
import './admin.css'

const Admin = () => {
  const [theme,colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Navbar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/contacts' element={<Contact/>}/>
              <Route path='/invoices' element={<Invoice/>}/>
              <Route path='/calendar' element={<Calendar/>}/> 
              <Route path='/form' element={<Form/>}/>
              <Route path='/faq' element={<Faq/>}/>
              <Route path='/bar' element={<BarChart/>}/>
              <Route path='/pie' element={<PieChart/>}/>
              <Route path='/line' element={<LineChart/>}/>
              <Route path='/geography' element={<GeographyChart/>}/>
            </Routes>
          </main>
        </div>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
   
  )
}

export default Admin
