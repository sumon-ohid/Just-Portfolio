import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarketingPage from './templates/homepage/Homepage';
import NotFoundPage from './templates/not-found/NotFoundPage';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MarketingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
}
