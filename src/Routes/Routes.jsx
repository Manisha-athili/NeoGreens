import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LandingPage from '../Pages/LandingPage';

// Import your pages here
// Example: const Home = lazy(() => import('../Pages/Home'));

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterRoutes>
         <Route path="/" element={<LandingPage />} />
        {/* Add more routes here */}
{/*      
<Route path="/about" element={<About />} /> 
 <Route path="/about" element={<AboutPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/products" element={<ProductsPage />} />
*/}


      </RouterRoutes>
    </Suspense>
  );
};

export default Routes;
