import { useState, useEffect } from 'react';
import styled from 'styled-components';

const CircularProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(timer);
          return 100;
        } else {
          return prevProgress + 1;
        }
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <svg viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="45" />
        <FillCircle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * progress) / 100}
        />
        <Text x="50" y="50">
          {progress}%
        </Text>
      </svg>
    </Container>
  );
};

const Container = styled.div`
  width: 250px;
  height: 250px;
  margin: 0 auto;
`;

const Circle = styled.circle`
  fill: none;
  stroke: #e8eaf2;
  stroke-width: 5;
`;

const FillCircle = styled.circle`
  fill: none;
  stroke: #e4229b;
  stroke-width: 5;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dashoffset 0.5s;
`;

const Text = styled.text`
  fill: #e8eaf2;
  font-size: 20px;
  font-weight: bold;
  dominant-baseline: central;
  text-anchor: middle;
`;

export default CircularProgress;
