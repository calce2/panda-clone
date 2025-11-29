import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LiveGrid from './components/LiveGrid';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main>
        <LiveGrid />
      </main>

      <style jsx>{`
        .app {
          min-height: 100vh;
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
}

export default App;
