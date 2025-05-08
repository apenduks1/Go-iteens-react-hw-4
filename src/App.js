import React from 'react';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fafafa' }}>
      <h1>Список рецептів</h1>
      <RecipeList />
    </div>
  );
}

export default App;
