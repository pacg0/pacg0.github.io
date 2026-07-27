import AboutMe from './pages/AboutMe.js'
import Home from './pages/Home.js'
import Misc from './pages/Misc.js'
import Prog from './pages/Prog.js'
import TooDee from './pages/TooDee.js'
import TreeDee from './pages/TreeDee.js'

import logo from './logo.svg';
import banner from './banner.jpg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router';

function Navigation(){
  return (
    <nav className="Navbar">
      <h1 className="pgheader">Isidro Godoy</h1>
      <Link className="Navbutton" to="/home">Home</Link>
      <Link className="Navbutton" to="/about-me">About Me</Link>
      <Link className="Navbutton" to="/programming-projects">Programming Projects</Link>
      <Link className="Navbutton" to="/2d-projects">2D Projects</Link>
      <Link className="Navbutton" to="/3d-projects">3D Projects</Link>
      <Link className="Navbutton" to="/misc">Misc</Link>
    </nav>  
  ); 


}

// TODO :: 
// Home :
//  collection of the stuff i am MOSTTT!!!! proud offff
// About Me ;:
//  short description of educational background, etc.
// programming projects :
//  games and such . embedded viewport for sub game, itch games .. /??
// 2D art :
//   lol
// 3D art :
//  it would be cool to have viewports to inspect models, etc. 
// misc :
// idk!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// other tasks :
// unique banners for each page :) 
// make everything pretty :)



function App() {
  return (
    <Router>
      <div className="App">
          <Navigation />
        <header className="App-header">
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/home" element={<Home />} />
            <Route path="/misc" element={<Misc />} />
            <Route path="/programming-projects" element={<Prog />} />
            <Route path="/2d-projects" element={<TooDee />} />
            <Route path="/3d-projects" element={<TreeDee />} />
          </Routes>
        <main id="home" className="App-main">
          
        </main>
      </div>
    </Router>
  );


  // return (
  //   <div className="App">
  //     <Navigation>
  //     </Navigation>
  //     <header className="App-header">
  //       {/* <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */}
  //     </header>
  //   </div>
  // );
}

export default App;
