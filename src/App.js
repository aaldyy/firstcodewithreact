import React from 'react'
import Navbar from './components/Navbar';
import Router from './router';
// import Random from './views/Random';
// import Soal from './views/Soal'
// import Persamaan from './views/Persamaan'


function App() {

  return (
    
    <div >
      <Navbar />           
        <div className="py-4" >        
        <Router />
        </div>

    </div>
  );
}

export default App;
