import React from 'react';

const Description = ({ children }) => {
  const description = (
    <>
      <main
        id="description"
        style={{
          background: 'transparent',
        }}
      >
        {children}

      </main>
    </>
  );

  return description;
};

export default Description;
