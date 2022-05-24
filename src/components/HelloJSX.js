import React from 'react';

const HelloJSX = () => {
  // menggunakan jsx
  return (
    <div id='helloId' className='helloClassName'>
      <h1>Hello JSX !</h1>
    </div>
  );

  //   tanpa jsx
  //   return React.createElement(
  //     'div',
  //     {
  //       id: 'helloId',
  //       className: 'helloClassName',
  //     },
  //     React.createElement('h1', null, 'Hello tanpa JSX !')
  //   );
};

export default HelloJSX;
