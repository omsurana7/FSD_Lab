// src/App.js

import React from 'react';
import './App.css'; // Import your main CSS file for styling
import ResumeBuilder from './Resume_Builder'; // Import the ResumeBuilder component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume Builder Application</h1>
        <p>Create and manage your resume easily!</p>
      </header>
      <main>
        <ResumeBuilder />
      </main>
    </div>
  );
}

export default App;

