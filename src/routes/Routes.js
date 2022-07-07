import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Pdf from '../pages/Pdf';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/pdf" element={<Pdf/>}/>
      </Routes>
    </Router>
  );
}

export default AppRouter;
