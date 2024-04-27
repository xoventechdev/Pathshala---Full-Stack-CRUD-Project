import React, { useState } from "react";

const Header = () => {
  const [isAlertsDropdownOpen, setIsAlertsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleAlertsDropdown = () => {
    setIsAlertsDropdownOpen(!isAlertsDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="bi bi-layout-text-sidebar-reverse"></i>
      </button>

      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">
        {/* Nav Item - Search Dropdown (Visible Only XS) */}

        {/* Nav Item - Alerts */}
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            onClick={toggleAlertsDropdown}
            aria-haspopup="true"
            aria-expanded={isAlertsDropdownOpen ? "true" : "false"}
          >
            <i className="bi bi-bell"></i>
            {/* Counter - Alerts */}
            <span className="badge badge-danger badge-counter">3+</span>
          </a>
          {/* Dropdown - Alerts */}
          <div
            className={`dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in ${
              isAlertsDropdownOpen ? "show" : ""
            }`}
            aria-labelledby="alertsDropdown"
          >
            <h6 className="dropdown-header">Alerts Center</h6>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="bi bi-file-binary-fill"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 12, 2019</div>
                <span className="font-weight-bold">
                  A new monthly report is ready to download!
                </span>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-success">
                  <i className="bi bi-file-binary-fill"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 7, 2019</div>
                $290.29 has been deposited into your account!
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-warning">
                  <i className="bi bi-file-binary-fill"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 2, 2019</div>
                Spending Alert: We've noticed unusually high spending for your
                account.
              </div>
            </a>
            <a
              className="dropdown-item text-center small text-gray-500"
              href="#"
            >
              Show All Alerts
            </a>
          </div>
        </li>

        <div className="topbar-divider d-none d-sm-block" />
        {/* Nav Item - User Information */}
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            onClick={toggleUserDropdown}
            aria-haspopup="true"
            aria-expanded={isUserDropdownOpen ? "true" : "false"}
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Md Kamal Hosen
            </span>
            <i className="bi bi-person-circle"></i>
          </a>
          {/* Dropdown - User Information */}
          <div
            className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${
              isUserDropdownOpen ? "show" : ""
            }`}
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="#">
              <i className="bi bi-person-fill p-1"></i>
              Profile
            </a>
            <a className="dropdown-item" href="#">
              <i className="bi bi-gear-fill p-1"></i>
              Settings
            </a>
            <div className="dropdown-divider" />
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="bi bi-box-arrow-in-right p-1"></i>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
