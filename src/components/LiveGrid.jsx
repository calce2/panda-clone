import React from 'react';

const LiveGrid = () => {
    // Mock data
    const streams = Array(12).fill(null).map((_, i) => ({
        id: i,
        title: `Live Stream Title ${i + 1} - Come join the fun!`,
        bj: `BJ Name ${i + 1}`,
        viewers: Math.floor(Math.random() * 5000) + 100,
        tags: ['Talk', 'Music', 'Game'][Math.floor(Math.random() * 3)],
        thumbnail: `https://picsum.photos/seed/${i + 100}/400/225`
    }));

    return (
        <div className="live-grid-container">
            <h2 className="page-title">
                <span className="pulse-dot">🔴</span> Live Now
            </h2>

            <div className="grid">
                {streams.map((stream) => (
                    <div key={stream.id} className="stream-card">
                        <div className="thumbnail-wrapper">
                            <img src={stream.thumbnail} alt={stream.title} className="thumbnail" />
                            <div className="live-badge badge-live">LIVE</div>
                            <div className="viewer-count">👤 {stream.viewers.toLocaleString()}</div>
                            <div className="play-overlay">▶</div>
                        </div>
                        <div className="stream-info">
                            <div className="avatar"></div>
                            <div className="details">
                                <h3 className="stream-title">{stream.title}</h3>
                                <div className="stream-meta">
                                    <span className="bj-name">{stream.bj}</span>
                                    <span className="tag">#{stream.tags}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .live-grid-container {
          padding: 32px;
          margin-left: var(--sidebar-width);
          margin-top: var(--header-height);
          min-height: 100vh;
        }

        .page-title {
          font-size: 24px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
        }
        
        .pulse-dot {
          animation: pulse 1.5s infinite;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }

        .stream-card {
          background-color: var(--bg-secondary);
          border-radius: var(--card-radius);
          overflow: hidden;
          transition: var(--transition);
          cursor: pointer;
          border: 1px solid transparent;
        }

        .stream-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md), var(--shadow-glow);
          border-color: rgba(58, 210, 227, 0.3);
        }

        .thumbnail-wrapper {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
        }

        .thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .stream-card:hover .thumbnail {
          transform: scale(1.1);
        }
        
        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          width: 48px;
          height: 48px;
          background: rgba(0,0,0,0.6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          opacity: 0;
          transition: var(--transition);
          backdrop-filter: blur(4px);
        }
        
        .stream-card:hover .play-overlay {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .live-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 4px 10px;
          font-size: 11px;
          letter-spacing: 0.5px;
          z-index: 10;
        }

        .viewer-count {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background-color: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          color: white;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .stream-info {
          padding: 16px;
          display: flex;
          gap: 12px;
        }

        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
          flex-shrink: 0;
          border: 2px solid transparent;
          transition: var(--transition);
        }
        
        .stream-card:hover .avatar {
          border-color: var(--accent-color);
        }

        .details {
          flex: 1;
          overflow: hidden;
        }

        .stream-title {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: var(--text-primary);
        }

        .stream-meta {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: var(--text-secondary);
        }

        .bj-name {
          font-weight: 500;
          transition: color 0.2s;
        }
        
        .stream-card:hover .bj-name {
          color: var(--accent-color);
        }

        .tag {
          color: var(--accent-color);
          background: rgba(58, 210, 227, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 11px;
        }
      `}</style>
        </div>
    );
};

export default LiveGrid;
