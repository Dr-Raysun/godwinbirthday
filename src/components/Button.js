import React from "react";

import { Link } from "react-router-dom";

export const Button = ({ children }) => {
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button>{children}</button>
    </Link>
  );
};
