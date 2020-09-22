import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import styles from './styles'
import { Link } from "react-router-dom";

function Product({ item, className}) {
  const productImage = require(`../../assets/${item.imageURL}`);
  return (
    <li className={className}>
      <Link to={`/update-product/${item.id}`}>
        <img className="Products__image" src={productImage} alt={item.name} />
        <div className="Products__name">{item.name}</div>
        <small className="Products__type">{item.type}</small>
      </Link>
    </li>
  );
}

Product.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired
};

export default styled(Product)`
    ${styles}
`;