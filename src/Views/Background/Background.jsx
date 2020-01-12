import React, { Component } from 'react';
import CarBuy from './assets/carBuy.svg';
import Search from './assets/Search.svg';
import Pool from './assets/Pool.svg';
import Card from '../../Components/Card/Card';
import './assets/Background.css';
import customData from './data.json';

function Header() {
    return (
        <header>
            <div class="title">
                <img src={Pool} alt="" />
                <div class="text">
                    <h1>Piscinas Brasil</h1>
                    <h3>Inutensilios para Piscina</h3>
                </div>
            </div>
            <img src={CarBuy} alt="Ícone de Carrinho de Compras" />
        </header>
    );
}

function Aside() {
    return (
        <aside>
            <form action="">
                <button type="submit"><img src={Search} alt="" /></button>
                <input type="text" name="tag" id="tag" placeholder="Filter by tag" />
            </form>

            <div id="tags">
                <p>Consertar</p>
                <p>Brincar</p>
                <p>Decoração</p>
                <p>Ostentação</p>
            </div>
        </aside>
    );
}


class Background extends Component {
    render() {
        const CardMap = customData.products.map((data) =>
            <Card Image={data.image}
                Title={data.title}
                Tags={data.ListTags} />);

        return (
            <>
                <Header />
                <Aside />

                <section id="products">
                    {CardMap}
                </section>
            </>
        );
    }
}
export default Background;