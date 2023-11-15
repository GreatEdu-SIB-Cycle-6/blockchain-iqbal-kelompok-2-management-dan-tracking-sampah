import React from "react";

function ThemeSetting() {
    return (
        <>
            <div className="theme-setting-wrapper">
            <div id="settings-trigger">
              <i className="ti-settings" />
            </div>
            <div id="theme-settings" className="settings-panel">
              <i className="settings-close ti-close" />
              <p className="settings-heading">Sidebar Color</p>
              <div
                className="sidebar-bg-options selected"
                id="sidebar-light-theme"
              >
                <div className="img-ss rounded-circle bg-light border mr-3" />
                Light
              </div>
              <div className="sidebar-bg-options" id="sidebar-dark-theme">
                <div className="img-ss rounded-circle bg-dark border mr-3" />
                Dark
              </div>
              <p className="settings-heading mt-2">Header Color</p>
              <div className="color-tiles mx-0 px-4">
                <div className="tiles success" />
                <div className="tiles warning" />
                <div className="tiles danger" />
                <div className="tiles info" />
                <div className="tiles dark" />
                <div className="tiles default" />
              </div>
            </div>
          </div>
        </>
    );
}

export default ThemeSetting;