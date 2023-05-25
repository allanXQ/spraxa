import {ThemeProvider, Typography, createTheme } from '@mui/material';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
import Jobs from './pages/Jobs';
import { Route, Routes } from 'react-router';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  );
}

export default App;
