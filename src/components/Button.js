import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Button = ({ label, link }) => {
  return (
    <Link to={link} className="button">
      {label}
    </Link>
  );
};

export default Button;