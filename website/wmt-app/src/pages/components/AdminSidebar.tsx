import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/admindashboard">
                    <i className="icon-grid menu-icon" />
                    <span className="menu-title">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admininput">
                    <i className="icon-paper menu-icon" />
                    <span className="menu-title">Waste Input</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                    <i className="icon-search menu-icon" />
                    <span className="menu-title">Tracking</span>
                </Link>
              </li>
            </ul>
          </nav>
        </>
    );
}

export default AdminSidebar;