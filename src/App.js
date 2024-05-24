import React, { useEffect, useState } from 'react';
import Loading from './components/loading/Loading';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { smooth } from "./utils/smooth";
import { link } from "./utils/link";
import HomeView from './layout/HomeView';

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    smooth();
    link();
  }, []);

  return (
    <>
      {loading ? (
        <Loading onComplete={handleLoadingComplete} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeView />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
