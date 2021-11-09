import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Faq from './Faq';
import RoadMap from './Road';
import Lunch from './Lunch';

function Main() {
    return (
        <div >
<Router>
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/RoadMap" element={<RoadMap />} /> 
        <Route path="/Faq" element={<Faq />} /> 
        <Route path="/Lunch" element={<Lunch />} /> 
      </Routes>
   </Router>
        </div>
    )
}

export default Main;