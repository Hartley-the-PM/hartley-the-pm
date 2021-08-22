import React, { useState, useEffect } from 'react';
import Resume from './Resume/Resume';

import { PortfolioProvider } from '../context/context';

import { resumeData } from '../mock/data';

function App() {
  const [resume, setResume] = useState({});

  useEffect(() => {
    setResume({ ...resumeData });
  }, []);

  return (
    <PortfolioProvider value={{ resume }}>
      <Resume />
    </PortfolioProvider>
  );
}

export default App;
