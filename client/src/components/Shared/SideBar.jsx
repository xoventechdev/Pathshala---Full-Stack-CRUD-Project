import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isBooksCollapsed, setIsBooksCollapsed] = useState(false);
  const [isAuthorCollapsed, setIsAuthorCollapsed] = useState(false);
  const [isCategoryCollapsed, setIsCategoryCollapsed] = useState(false);
  const [isUserCollapsed, setIsUserCollapsed] = useState(false);

  const toggleBooksCollapse = () => {
    setIsBooksCollapsed(!isBooksCollapsed);
  };

  const toggleAuthorCollapse = () => {
    setIsAuthorCollapsed(!isAuthorCollapsed);
  };

  const toggleCategoryCollapse = () => {
    setIsCategoryCollapsed(!isCategoryCollapsed);
  };

  const toggleUserCollapse = () => {
    setIsUserCollapsed(!isUserCollapsed);
  };

  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          Pathshala <sup>2</sup>
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>

      <li className="nav-item">
        <a
          className={`nav-link collapsed ${isBooksCollapsed ? "" : "active"}`}
          href="#"
          onClick={toggleBooksCollapse}
          aria-expanded={isBooksCollapsed ? "true" : "false"}
        >
          <i className="fas fa-fw fa-cog"></i>
          <i className="bi bi-book-fill"></i>
          <span>Book</span>
        </a>
        <div
          className={`collapse ${isBooksCollapsed ? "show" : ""}`}
          id="collapseBooks"
          aria-labelledby="headingBooks"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/list-book">
              View Book
            </Link>
            <Link className="collapse-item" to="/add-book">
              Add Book
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className={`nav-link collapsed ${isAuthorCollapsed ? "" : "active"}`}
          href="#"
          onClick={toggleAuthorCollapse}
          aria-expanded={isAuthorCollapsed ? "true" : "false"}
        >
          <i className="fas fa-fw fa-cog"></i>
          <i className="bi bi-pencil-square"></i>
          <span>Author</span>
        </a>
        <div
          className={`collapse ${isAuthorCollapsed ? "show" : ""}`}
          id="collapseAuthor"
          aria-labelledby="headingAuthor"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/list-author">
              View Author
            </Link>
            <Link className="collapse-item" to="/add-author">
              Add Author
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className={`nav-link collapsed ${
            isCategoryCollapsed ? "" : "active"
          }`}
          href="#"
          onClick={toggleCategoryCollapse}
          aria-expanded={isCategoryCollapsed ? "true" : "false"}
        >
          <i className="fas fa-fw fa-cog"></i>
          <i className="bi bi-bookmark"></i>
          <span>Category</span>
        </a>
        <div
          className={`collapse ${isCategoryCollapsed ? "show" : ""}`}
          id="collapseCategory"
          aria-labelledby="headingCategory"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/list-category">
              View Category
            </Link>
            <Link className="collapse-item" to="/add-category">
              Add Category
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className={`nav-link collapsed ${isUserCollapsed ? "" : "active"}`}
          href="#"
          onClick={toggleUserCollapse}
          aria-expanded={isUserCollapsed ? "true" : "false"}
        >
          <i className="fas fa-fw fa-cog"></i>
          <i className="bi bi-person-circle"></i>
          <span>User</span>
        </a>
        <div
          className={`collapse ${isUserCollapsed ? "show" : ""}`}
          id="collapseUser"
          aria-labelledby="headingUser"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/list-user">
              View User
            </Link>
            <Link className="collapse-item" to="/add-user">
              Add User
            </Link>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />

      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table"></i>
          <i className="bi bi-person-lines-fill"></i>
          <span>User Request</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="bi bi-gear-fill"></i>
          <i className="fas fa-fw fa-table"></i>
          <span>Setting</span>
        </a>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
};

export default SideBar;
