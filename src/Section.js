import React from 'react';

const Section = ({ id, children }) => (
  <div id={id} style={{ height: '100vh' }}>
    {children}
  </div>
);


 
  export default Section