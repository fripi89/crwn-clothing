import React from 'react';

import './menu-item.component.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="menu-item-content">
            <h1 className="menu-item-title">{title}</h1>
            <span className="menu-item-subtitle">shop now</span>
        </div>
    </div>
);

export default MenuItem;
