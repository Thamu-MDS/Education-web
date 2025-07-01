import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Courses from './Page/CoursePage';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

// Page Components
import MBAPage from './Page/Courses/MBA';
import MCAPage from './Page/Courses/MCA';
import Contact from './Page/Contact';
import About from './Page/About';     // ✅ Optional, if you want to include
import Mscit from './Page/Courses/MscIt';
import Bcom from './Page/Courses/Bcom';
// import BCAPage from './Page/Courses/BCA';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="pt-20"> {/* Offset for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact/>} />
          <Route path="/courses" element={<Courses />} />

          {/* Individual Course Pages */}
          <Route path="/courses/mba" element={<MBAPage />} />
          <Route path="/courses/mca" element={<MCAPage />} />
          <Route path="/courses/bcom" element={<Bcom/>} /> 
           <Route path="/courses/msc-it" element={<Mscit/>} />
          {/* <Route path="/courses/bca" element={<BCAPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
