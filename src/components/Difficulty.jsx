import React from 'react';
import styled from 'styled-components';

const Diff = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 0.9em;
  background-color: ${({ difficulty }) =>
    difficulty === 0 ? '#d4edda' :
    difficulty === 1 ? '#fff3cd' :
    '#f8d7da'};
  color: ${({ difficulty }) =>
    difficulty === 0 ? '#155724' :
    difficulty === 1 ? '#856404' :
    '#721c24'};
`;

export default function Difficulty({ difficulty }) {
  return (
    <Diff difficulty={difficulty}>
      {difficulty === 0
        ? 'Легкий'
        : difficulty === 1
        ? 'Середній'
        : 'Складний'}
    </Diff>
  );
}
