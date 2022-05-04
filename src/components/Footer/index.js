import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1 className="heading">Connect with me!</h1>
      <nav className="contactbar">
        <ul>
          <li>
            <a
              href="mailto:TranAndrewWebDev@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-envelope-open-text fa-4x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AndrewT11"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github fa-4x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andrew-tran-011/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="fa fa-linkedin-square fa-4x"></i>
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/document/d/1KgYkTOHGvnS2QV2N9UOBaQT37B4zkiIASSHcqXPRzKE/edit">
              <i className="far fa-file fa-4x"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
