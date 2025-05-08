import React from 'react';
import styled from 'styled-components';
import Difficulty from './Difficulty';

const recipes = [
  { id: 1, name: 'Борщ', difficulty: 0 },
  { id: 2, name: 'Лазанья', difficulty: 1 },
  { id: 3, name: 'Суші', difficulty: 3 },
];

const RecipeCard = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 12px 0;
  border-radius: 12px;
  background-color: #fff;
  transition: 0.3s;
  ${(props) =>
    props.difficulty === 3 &&
    `
    border-color: #c00;
    background-color: #ffe6e6;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
  `}
`;

export default function RecipeList() {
  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} difficulty={recipe.difficulty}>
          <h2>{recipe.name}</h2>
          <Difficulty difficulty={recipe.difficulty} />
        </RecipeCard>
      ))}
    </div>
  );
}
