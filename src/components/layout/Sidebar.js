import React from "react";

export const Sidebar = () => {
  return (
    <div className="main-container-sidebar">
      <li className="main-nav__item">
        <a href="http://www.nabeeprofile.cf">
          <img
            src="https://www.massey.ac.nz/massey/fms/Massey%20News/2014/11/images/fern-on-green1.jpg"
            alt="logo"
          />
        </a>
      </li>
      <li className="main-nav__item main-nav__item-active">
        <a href="http://www.nabeeprofile.cf">
          <i className="fas fa-user" style={{ color: "#fff" }}></i>
        </a>
      </li>
      <li className="main-nav__item ">
        <a href="http://www.nabeeprofile.cf">
          <i className="fas fa-link" style={{ color: "#fff" }}></i>
        </a>
      </li>
      <li className="main-nav__item">
        <a href="http://www.nabeeprofile.cf">
          <i className="fas fa-video" style={{ color: "#fff" }}></i>
        </a>
      </li>
      <li className="main-nav__item main-nav__item--cta">
        <a href="http://www.nabeeprofile.cf">
          <i className="fas fa-blog" style={{ color: "#fff" }}></i>
        </a>
      </li>
      <li className="main-nav__item">
        <a href="http://www.nabeeprofile.cf">
          <i className="fas fa-file" style={{ color: "#fff" }}></i>
        </a>
      </li>
      <li className="main-nav__item main-nav__item--cta">
        <a href="http://www.nabeeprofile.cf">
          <i className="fas fa-book" style={{ color: "#fff" }}></i>
        </a>
      </li>
    </div>
  );
};

export default Sidebar;
