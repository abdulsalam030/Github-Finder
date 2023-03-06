import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
function App() {
  return (
   <Router>
    <div className='flex flex-col justify-between h-screen'>
      <Navbar/>
      <div className='container bg-gray-500 mx-auto px-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/notfound' element={<Notfound/>}/>
          <Route path='/*' element={<Notfound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
   </Router>
   

  );
}

export default App;
