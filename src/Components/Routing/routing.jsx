import {BrowserRouter,Routes, Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
const Routing=()=>{
    return(
        <BrowserRouter className="container">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
           
           <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/about" element={<About />}/>
               <Route path="/contact" element={<Contact />}/>
           </Routes>
            
        </BrowserRouter>
    )
}
export default Routing;