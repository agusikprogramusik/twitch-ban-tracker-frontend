import React, { useState } from 'react';
import './App.css';
import BannedUsers from './components/BannedUsers.js';

function App() {
  const [view, setView] = useState('bannedUsers');

  const handleViewChange = (newView) => {
    console.log(`Changing view to: ${newView}`);
    setView(newView);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => handleViewChange('bannedUsers')}>Banned Users</button>
        </div>
      </header>
      <main className="App-container">
        {view === 'bannedUsers' && <BannedUsers />}
      </main>
    </div>
  );
}

export default App;