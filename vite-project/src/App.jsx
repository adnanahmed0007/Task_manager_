 

  import React from 'react';
  import { Route, Routes } from 'react-router-dom';
  import Home from '../../../../vite-project/src/component/Home';
  import Login from '../../../../vite-project/src/component/Login';
  import Signup from '../../../../vite-project/src/component/Signup';
  import TaksGet from '../../../../vite-project/src/component/TaksGet';
  import Header from '../../../../vite-project/src/component/Header';
  import Datashow from '../../../../vite-project/src/component/Datashow';
  
  const App = () => {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/taskget" element={<TaksGet />} />
          <Route path="/datashow" element={<Datashow />} />
        </Routes>
  
        {/* Navigation Buttons */}
         
      </div>
    );
  };
  
  export default App;
  
