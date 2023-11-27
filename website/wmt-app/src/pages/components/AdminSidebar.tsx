import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/admin-dashboard"
              onClick={() => {
                window.location.href = "/admin-dashboard";
              }}
            >
              <i className="icon-grid menu-icon" />
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/admin-input"
              onClick={() => {
                window.location.href = "/admin-input";
              }}
            >
              <i className="icon-paper menu-icon" />
              <span className="menu-title">Waste Input</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/admin-validation"
              onClick={() => {
                window.location.href = "/admin-validation";
              }}
            >
              <i className="icon-check menu-icon" />
              <span className="menu-title">Validation</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/admin-sendwaste"
              onClick={() => {
                window.location.href = "/admin-sendwaste";
              }}
            >
              <i className="icon-arrow-right menu-icon" />
              <span className="menu-title">Send Waste</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/admin-tracking"
              onClick={() => {
                window.location.href = "/admin-tracking";
              }}
            >
              <i className="icon-search menu-icon" />
              <span className="menu-title">Tracking</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/admin-change"
              onClick={() => {
                window.location.href = "/admin-change";
              }}
            >
              <i className="icon-repeat menu-icon" />
              <span className="menu-title">Change Admin</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AdminSidebar;
