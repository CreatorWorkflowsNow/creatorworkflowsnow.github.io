import React from 'react';


// --brand-green: #86ed78;
export default function Button({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '6px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
}
