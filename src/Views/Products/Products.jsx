import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import './Products.css';
import customData from '../../customData.json';

class Products extends Component {
    render() {
        const { tag } = this.props;
        const CardFilter = customData.products.map((data, i) => {
            if ((data.ListTags).indexOf(tag) !== -1 || tag === '') {
                return (
                    <Card
                        key={i}
                        Image={data.image}
                        Title={data.title}
                        Tags={data.ListTags} />
                );
            }
        });

        return (
            <>
                <section id="products">
                    {CardFilter}
                </section>
            </>
        );
    }
}

export default Products;