import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import React from 'react';
import Container from './components/layout/Container'
import Projects from './components/pages/Projects'
import Healthy from './components/pages/Healthy'
import Service from './components/pages/Service'
import Blog from './components/pages/Blog'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'



function App() {
  return (
    <Router>
      <Navbar />
    
      <Container customClass='min-height'>
        <Routes>
          
          <Route exact path="/" element={<Home/>}>
              
          </Route>

          <Route exact path="/projects" element={<Projects/>}>
              
          </Route>

          <Route exact path="/company" element={<Company/>}>
              
          </Route>
          <Route exact path="/contact" element={<Contact/>}>
              
          </Route>
          <Route exact path="/newproject" element={<NewProject/>}>
              
          </Route>
          
        </Routes>
      </Container>
      <Container customClass='min-height'>
      <Routes>
          
          <Route exact path="/" element={<Healthy/>}>
              
          </Route>

        </Routes>
      </Container>
      <Container customClass='min-height'>

      <Routes>
          
          <Route exact path="/" element={<Service/>}>
              
          </Route>

        </Routes>
        </Container>

        <Container customClass='min-height'>

      <Routes>
          
          <Route exact path="/" element={<Blog/>}>
              
          </Route>

        </Routes>
        </Container>

      

      <Footer />
    </Router>
  );
}

export default App;
