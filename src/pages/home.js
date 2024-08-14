import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Выберите напиток</h1>
      <Link to="/drink-selection">Перейти к выбору напитка</Link>
    </div>
  );
}

export default Home;