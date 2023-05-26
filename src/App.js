import React from 'react';
import Home from './Home';
import Addblog from './addblog';
import Navbar from './Navbar';

const App = ()=>  {
  return (
    <>
    
    <Navbar/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addblog" element={<Addblog />} />
          
       </Routes>
    </>
  );
};

export default App;