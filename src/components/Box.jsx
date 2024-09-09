import React from 'react';

export default function Box({ title, description, style, children }) {
  return (
    <a href="#" className={style}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700">{description}</p>
      {children}
    </a>
  );
}
