import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter basename={window.valkyrie?.basename}>
        <Routes>
          <Route path="" element={<h1>Hello</h1>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
