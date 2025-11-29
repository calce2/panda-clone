import React from 'react';

const Sidebar = () => {
    const menuItems = [
        { icon: '🏠', label: 'Home', active: true },
        { icon: '🏆', label: 'BJ Ranking' },
        { icon: '🔥', label: 'Hot Issue' },
        { icon: '🎮', label: 'Game' },
        { icon: '💬', label: 'Talk' },
        { icon: '🎵', label: 'Music' },
    ];

    return (
        <aside className="sidebar">
            <div className="menu-section">
                <h3 className="section-title">MENU</h3>
                <ul className="menu-list">
                    {menuItems.map((item, index) => (
                        <li key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
                            <span className="icon">{item.icon}</span>
                            <span className="label">{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="menu-section">
                <h3 className="section-title">FAVORITES</h3>
                <div className="empty-state">
                    <p>Login to see your favorite BJs</p>
                </div>
            </div>

            <style jsx>{`
        .sidebar {
          width: var(--sidebar-width);
          background-color: var(--bg-secondary);
          height: calc(100vh - var(--header-height));
          position: fixed;
          top: var(--header-height);
          left: 0;
          border-right: 1px solid var(--border-color);
          padding: 24px 16px;
          overflow-y: auto;
        }

        .section-title {
          font-size: 12px;
          color: var(--text-secondary);
          font-weight: 700;
          margin-bottom: 12px;
          padding-left: 12px;
        }

        .menu-list {
          list-style: none;
          margin-bottom: 32px;
        }

        .menu-item {
          display: flex;
          align-items: center;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          color: var(--text-secondary);
          transition: var(--transition);
          margin-bottom: 4px;
        }

        .menu-item:hover {
          background-color: var(--bg-hover);
          color: var(--text-primary);
        }

        .menu-item.active {
          background-color: rgba(58, 210, 227, 0.1);
          color: var(--accent-color);
        }

        .icon {
          margin-right: 12px;
          font-size: 18px;
        }

        .label {
          font-size: 14px;
          font-weight: 500;
        }

        .empty-state {
          padding: 20px;
          text-align: center;
          background-color: var(--bg-primary);
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 13px;
        }
      `}</style>
        </aside>
    );
};

export default Sidebar;
