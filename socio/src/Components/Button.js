import React from 'react';
import { FaIconName } from "../"; // Replace 'FaIconName' with the actual icon you want to use

const Button = ({ text, icon, onClick, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      <button className="custom-button">
        {icon && <FaIconName size={20} />} {/* Replace 'FaIconName' with the actual icon */}
        {text}
      </button>
    </a>
  );
};

export default Button;