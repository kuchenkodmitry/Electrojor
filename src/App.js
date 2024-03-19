import './App.css';
import React from "react";
import Home from './pages/home';
import { Routes, Route } from "react-router-dom";
import AdminPanel from './pages/admin/admin';


function App() {
  const loh = true
  if(loh){
    console.log('HUI');
    React.useEffect(() => {
      console.log('HUI');
    }, [])
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminPanel/>}/>
        <Route path='/admin/:params' element={<AdminPanel/>}/>
      </Routes>
    </>
  );
}

export default App;
