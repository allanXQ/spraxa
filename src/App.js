import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
import Jobs from './pages/Jobs';
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Services from './pages/Services';
import MobileApps from './pages/services/MobileApps';
import AppManagement from './pages/services/AppManagement';
import PlatformSolutions from './pages/services/PlatformSolutions';
import BigData from './pages/services/BigData';
import AppDevelopment from './pages/services/AppDevelopment';
import MobileAppDev from './pages/services/MobileAppDev';
import Technology from './pages/services/Technology';
import RootLayout from './Layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='jobs' element={<Jobs/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='terms' element={<Terms/>}/>
      <Route path='privacy' element={<Privacy/>}/>
      <Route path='services' element={<Services/>}/>
        <Route path='mobileapps' element={<MobileApps/>}/>
        <Route path='appmanagement' element={<AppManagement/>}/>
        <Route path='platformsolutions' element={<PlatformSolutions/>}/>
        <Route path='bigdata' element={<BigData/>}/>
        <Route path='appdevelopment' element={<AppDevelopment/>}/>
        <Route path='mobileappdev' element={<MobileAppDev/>}/>
      {/* </Route> */}
      <Route path='technology' element={<Technology/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
        
  )
);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
