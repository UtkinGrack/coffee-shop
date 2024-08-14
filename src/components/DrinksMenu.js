import React from 'react';

export const drinks = [
    { id: 1, name: 'Капучино', description: 'Кофе с молочной пеной', price: 150 },
    { id: 2, name: 'Эспрессо', description: 'Крепкий черный кофе', price: 100 },
    { id: 3, name: 'Латте', description: 'Кофе с молоком', price: 130 },
    { id: 4, name: 'Капучино', description: 'Молоко с кофе', price: 130 },
];

function DrinksMenu({ onDrinkSelect }) {
    return (
        <div className='drinks-menu'>
            <div className='ellipse-menu-title'></div>
            <h1 className='drinks-menu-title'>Выберите напиток</h1>
            <ul className='drinks-list'>
                {drinks.map(drink => (
                    <li key={drink.id} className='drink-item' onClick={() => onDrinkSelect(drink)}>
                        <h2 className='drink-name'>{drink.name}</h2>
                        <p className='drink-description'>{drink.description}</p>
                        <p className='drink-price'>Цена: {drink.price} руб.</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DrinksMenu;