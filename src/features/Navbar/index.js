import React from "react";
import styled from "styled-components";
import styles from "./styles";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";

function Navbar({ className }) {
  return (
    <header className={className}>
        <Link to="/">Trendie</Link>
        <Link to="/create-product">Create Product</Link>
    </header>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Navbar)`
  ${styles}
`;
