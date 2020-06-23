import React from 'react';
import { Container, Ring } from './styles';

const Spinner = ({
  scale = 1,
  color = 'blue',
}: {
  scale?: number;
  color?: 'blue' | 'white';
}) => (
  <Container scale={scale}>
    <Ring color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Ring>
  </Container>
);

export default Spinner;
