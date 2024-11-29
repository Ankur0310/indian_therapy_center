import React from 'react';

const CirclePattern2 = () => {
  const circleSize = 2; // Size of each circle
  const padding = 17; // Padding between circles

  const createCircles = () => {
    const circles = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        circles.push(
          <circle
            key={`${i}-${j}`}
            cx={(i + 1) * (circleSize * 2 + padding)}
            cy={(j + 1) * (circleSize * 2 + padding)}
            r={circleSize}
            fill="rgba(249,86,30,0.4)"
          />
        );
      }
    }
    return circles;
  };

  return (
    <svg width="300" height="300">
      {createCircles()}
    </svg>
  );
};

export default CirclePattern2;
