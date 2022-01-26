import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import About from './comps/About';
import Cards from './comps/Cards';
import Header from './comps/Header';



export default function App({data}) {
  const [all, setAll] = useState([])
  
  useEffect(() => {
    (async () => {
      const api = await fetch('https://forbes400.herokuapp.com/api/forbes400/?limit=50')
      const data = await api.json()
     
    setAll(data)
    console.log(data)
     
    })()
}, []); 

  return (
    <Router>
    <div>
     <Header all={all} setAll={setAll} />
      <Routes>
        <Route path="/" element={<Cards all={all} setAll={setAll}/>}/>
        <Route path="/home" element={<Cards all={all} setAll={setAll}/>}/>

      </Routes>

    </div>
      </Router>
  )
}



