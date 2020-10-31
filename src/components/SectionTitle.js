import React from 'react';

const SectionTitle = ({ children, className = '' }) => {
  return <h1 className={`text-primary text-md font-bold ${className}`}>{children}</h1>;
};

export default SectionTitle;
