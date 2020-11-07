import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavBarLink(props) {
  return (
    <Link key={props.key} className="m-2 text-dark" to={props.to}>
      {props.title}
    </Link>
  );
}

NavBarLink.propTypes = {};

export default NavBarLink;
