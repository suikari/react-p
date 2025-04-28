import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './menu';
import App from './Menu/App';
import State from './Menu/State';
import Effect from './Menu/UseEffect1';
import Product from './Menu/ProductMain';
import Review from './Menu/Review';
import Ref from './Menu/Ref';
import BoxSx from './Menu/BoxSx';
import ContextEx from './Menu/ContextEx';
import Main from './Menu/Main';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        
        <Route path="/app" element={<App />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/product" element={<Product />} />
        <Route path="/review" element={<Review />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/box" element={<BoxSx />} />
        <Route path="/context" element={<ContextEx />} />
        <Route path="/main" element={<Main />} />

        
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;