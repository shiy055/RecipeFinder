/**
 * @file Header.js
 * @description A simple, styled navigation bar built using React Bootstrap.
 * Displays the app title in a dark-themed header.
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * @function Header
 * @component
 * @returns {JSX.Element}
 * @description Renders the top navigation bar with branding text.
 * This static header appears on all pages and gives the app its identity.
 */
const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div className="container-fluid">
      {/* App Title */}
      <span className="navbar-brand">Italian Recipe Finder</span>
    </div>
  </nav>
);

export default Header;
