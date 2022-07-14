import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Pdf from '../pages/Pdf';

function AppRouter() {

  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById('spinner')

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/pdf" element={<Pdf />} />
          </Routes>
        </Router>
      </>)
    );
}

export default AppRouter;
