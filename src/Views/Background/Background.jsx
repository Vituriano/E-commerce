import React, { Component } from 'react';
import CarBuy from './assets/carBuy.svg'
import Search from './assets/Search.svg'
import Pool from './assets/Pool.svg'
import Card from '../../Components/Card/Card'
import './assets/Background.css'

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const ListTags = ["ola", "bele"];
        return (
            <>
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
                <section id="products">
                    <Card Image="https://i.pinimg.com/originals/8b/5f/cc/8b5fcc5ce822256464e5a0766aab672f.jpg"
                        Title="Macarrão de pool"
                        Tags={ListTags} />

                    <Card Image="https://i.pinimg.com/originals/8b/5f/cc/8b5fcc5ce822256464e5a0766aab672f.jpg"
                        Title="Macarrão de pool"
                        Tags={ListTags} />

                    <Card Image="https://i.pinimg.com/originals/8b/5f/cc/8b5fcc5ce822256464e5a0766aab672f.jpg"
                        Title="Macarrão de pool"
                        Tags={ListTags} />
                </section>
            </>
        );
    }
}
export default Background;