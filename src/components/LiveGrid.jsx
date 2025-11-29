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
            <h2 className="page-title">🔴 Live Now</h2>

            <div className="grid">
                {streams.map((stream) => (
                    <div key={stream.id} className="stream-card">
                        <div className="thumbnail-wrapper">
                            <img src={stream.thumbnail} alt={stream.title} className="thumbnail" />
                            <div className="live-badge">LIVE</div>
                            <div className="viewer-count">👤 {stream.viewers.toLocaleString()}</div>
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
        }

        .stream-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
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
          transition: var(--transition);
        }

        .stream-card:hover .thumbnail {
          transform: scale(1.05);
        }

        .live-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: #ff3b30;
          color: white;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 700;
        }

        .viewer-count {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background-color: rgba(0,0,0,0.7);
          color: white;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 12px;
        }

        .stream-info {
          padding: 16px;
          display: flex;
          gap: 12px;
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #333;
          flex-shrink: 0;
        }

        .details {
          flex: 1;
          overflow: hidden;
        }

        .stream-title {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .stream-meta {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: var(--text-secondary);
        }

        .bj-name {
          color: var(--text-primary);
        }

        .tag {
          color: var(--accent-color);
        }
      `}</style>
        </div>
    );
};

export default LiveGrid;
