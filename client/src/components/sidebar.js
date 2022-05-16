import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './icon';

export default function Sidebar() {
  return (
    <div style={{ maxWidth: '30px',
      position: 'fixed',
      top: '64px',
      padding: "14px",
      minHeight: "100vh",
      background: "#1a76d2",
      zIndex: 10
      }}>
      <Link to='/'>
        <Icon type='dashboard' />
      </Link>
      <Link to='/recordList'><Icon type='transaction' /></Link>
      <Link to='/accounts'><Icon type='card' /></Link>
      <Link to='/recordList'><Icon type='budget' /></Link>
    </div>
  );
}
