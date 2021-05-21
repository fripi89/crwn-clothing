import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.component.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className="menu-item-content">
            <h1 className="menu-item-title">{title}</h1>
            <span className="menu-item-subtitle">shop now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
