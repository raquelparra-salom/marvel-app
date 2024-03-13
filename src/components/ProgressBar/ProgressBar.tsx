import React, { useState, useEffect } from 'react';
import './styled.scss'; // Importar el archivo de estilos Sass

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        return nextProgress >= 100 ? 100 : nextProgress;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bar-wrapper">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
