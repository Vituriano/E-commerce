import React from 'react';
import CarBuy from './assets/carBuy.svg';
import Pool from './assets/Pool.svg';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="title">
                <img src={Pool} alt="" />
                <div className="text">
                    <h1>Piscinas Brasil</h1>
                    <h3>Inutensilios para Piscina</h3>
                </div>
            </div>
            <img src={CarBuy} alt="Ícone de Carrinho de Compras" />
        </header>
    );
}

export default Header;
