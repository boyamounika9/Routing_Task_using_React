import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Courses from './Courses'
import Dashboard from './Dashboard'
import Profile from './Profile'

function App() {
  return (
    <div>
        <Router>
      
        <Routes>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
     
        </Routes>
     
    </Router>
    </div>
  )
}

export default App