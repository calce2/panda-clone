import React from 'react';

const Header = () => {
    return (
        <header className="header glass">
            <div className="header-left">
                <div className="logo text-gradient">PANDA TV</div>
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
          /* background-color removed to allow glass effect */
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
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -1px;
          cursor: pointer;
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
          position: relative;
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--text-primary);
        }
        
        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -22px;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--accent-color);
          border-radius: 3px 3px 0 0;
          box-shadow: 0 -2px 10px var(--accent-color);
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
          padding: 6px 6px 6px 24px;
          border: 2px solid transparent;
          transition: var(--transition);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
        }

        .search-bar:focus-within {
          border-color: var(--accent-color);
          background-color: var(--bg-secondary);
          box-shadow: 0 0 0 4px rgba(58, 210, 227, 0.1);
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
          transition: transform 0.2s;
        }
        
        .search-btn:hover {
          transform: scale(1.1);
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
