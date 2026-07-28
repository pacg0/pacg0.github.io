import PageBanner from './components/PageBanner.js'

import AboutMe from './pages/AboutMe.js'
import Home from './pages/Home.js'
import Misc from './pages/Misc.js'
import Prog from './pages/Prog.js'
import Games from './pages/Games.js'
import TreeDee from './pages/TreeDee.js'

import './App.css';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router';

function Navigation(){
  return (
    <nav className="Navbar">
      <h1 className="Title">Isidro Godoy</h1>
      <Link className="Navbutton" to="/home">Home</Link>
      <Link className="Navbutton" to="/about-me">About Me</Link>
      <Link className="Navbutton" to="/programming-projects">Programming Projects</Link>
      <Link className="Navbutton" to="/games">Games</Link>
      <Link className="Navbutton" to="/3d-projects">3D Projects</Link>
      <Link className="Navbutton" to="/misc">Misc</Link>
    </nav>  
  ); 


}

// TODO :: 
// Home content :
//  screenshots of various projects (prime weaver, broken dreams, vulkan shit , etc.)
// About Me content ;:
//  image of my fat chud face + description of educational background, studio and stuff
// IMPORTANT ::: links to other things
// programming projects :
//  literally just the vulkan project. lol
// Games :
//   screenshots of prime weaver, broken dreams, viewports of itch games + sub game if possible 
// 3D art :
//  dude . lock in . make some stuff for this i guess .
// misc :
//  final fantasy xiv . some drawingsmaybe

// other tasks :
// unique banners for each page :) 
// make everything pretty :)



function App() {
  return (
    <Router>
      <div className="App">
          <Navigation />
        <header className="App-header"/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/home" element={<Home />} />
            <Route path="/misc" element={<Misc />} />
            <Route path="/programming-projects" element={<Prog />} />
            <Route path="/games" element={<Games />} />
            <Route path="/3d-projects" element={<TreeDee />} />
          </Routes>
          <footer className="App-footer">
            <b>Various Links : </b>
            <div className="footer-container">
              <div>
                <b>Other sites : </b>
                <br/>
                <a href="https://www.linkedin.com/in/isidro-godoy-03b7292a3">Linkedin</a>
                <br/>
                <a href="https://pacg0.itch.io/">itch.io</a>
                <br/>
                <a href="https://github.com/pacg0/">Github</a>
              </div>
              <div>
                <b>Contacts : </b> 
                <br/>
                email : <a href="mailto:pacurro.g@gmail.com">pacurro.g@gmail.com</a>
                <br/>
                Discord : aboress
                <br/>
              </div>
            </div>
          </footer>
      </div>
    </Router>
  );

}

export default App;
