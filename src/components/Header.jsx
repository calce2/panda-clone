import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">PANDA TV</div>
        <nav className="nav-links">
          <a href="#" className="active">Live</a>
          <a href="#">VOD</a>
          <a href="#">Ranking</a>
        </nav>
      </div>

      <div className="header-center">
        <div className="search-bar">
          <input type="text" placeholder="Search for BJ or content..." />
          <button className="search-btn">🔍</button>
        </div>
      </div>

      <div className="header-right">
        <button className="btn btn-ghost">Login</button>
        <button className="btn btn-primary">Sign Up</button>
      </div>

      <style jsx>{`
        .header {
          height: var(--header-height);
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          color: var(--accent-color);
          letter-spacing: -1px;
        }

        .nav-links {
          display: flex;
          gap: 24px;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 16px;
          transition: var(--transition);
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--text-primary);
        }

        .header-center {
          flex: 1;
          max-width: 600px;
          margin: 0 40px;
        }

        .search-bar {
          display: flex;
          background-color: var(--bg-primary);
          border-radius: 24px;
          padding: 4px 4px 4px 20px;
          border: 1px solid transparent;
          transition: var(--transition);
        }

        .search-bar:focus-within {
          border-color: var(--accent-color);
        }

        .search-bar input {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--text-primary);
          outline: none;
          font-size: 14px;
        }

        .search-btn {
          background: transparent;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
          font-size: 16px;
        }

        .header-right {
          display: flex;
          gap: 12px;
        }
      `}</style>
    </header>
  );
};

export default Header;
