// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react';
import * as propTypes from 'prop-types';
import '../box-styles.css';

function Box({style, className = '', size, children}) {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
    >
      {children}
    </div>
  );
}

Box.propTypes = {
  style: propTypes.object,
  className: propTypes.string,
  size: propTypes.oneOf(['small', 'medium', 'large']),
};

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
);
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
);

const sizelessBox = <Box>sizeless Box</Box>;
function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {sizelessBox}
    </div>
  );
}

export default App;
