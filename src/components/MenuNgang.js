import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../config/routes';

// Arrow Function components
export const MenuNgang = () => {
    return (
        <div style={{marginBottom: "30px"}}>
            {routes.map((item) => (
                <Link key={item.path} to={item.path} className="menuItem" ><b>{item.label}</b></Link>
            ))}
        </div>
    )
};