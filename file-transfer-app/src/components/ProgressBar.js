// src/components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ progress }) => (
  <div style={{ width: '100%', backgroundColor: '#ccc' }}>
    <div style={{ width: `${progress}%`, backgroundColor: '#4caf50', height: '24px' }}></div>
  </div>
);

export default ProgressBar;
