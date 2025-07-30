import React from "react";
import "./TopBar.css";
import avatar from './image/anh.jpg';
import avatar1 from './image/anhVN.jpg';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="hot">🔥</span>
        <span className="message">
          Something you love is now on sale!{" "}
          <a href="#" className="buy-now">
            Buy now&nbsp;!
          </a>
        </span>
      </div>

      <div className="topbar-right">
        <span className="lang">
          <img src={avatar1} alt="flag" className="flag-icon" />
          EN
        </span>

        <span className="icon">🔲</span>
        <span className="icon">🔍</span>
        <span className="icon">⭐</span>
        <span className="icon">🌞</span>

        <div className="icon-badge">
          🛒
          <span className="badge red">2</span>
        </div>

        <div className="icon-badge">
          🔔
          <span className="badge green">4</span>
        </div>

        <div className="avatar-section">
          <img src={avatar} alt="avatar" className="avatar" />
          <div className="text-group">
            <span className="username">Emay Walter</span>
            <span className="role">admin ▾</span>
          </div>
        </div>
      </div>
    </div>
  );
}
