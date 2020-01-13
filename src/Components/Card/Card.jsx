import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    render() {

        const {
            Image,
            Title,
            Tags,
        } = this.props;

        const ListTags = Tags.map((Tag, i) => <p key={i}>{Tag}</p>);

        return (
            <>
                <div className="card">
                    <img src={Image} alt="" />
                    <h3>{Title}</h3>
                    <div className="description">
                        <div className="tags">
                            {ListTags}
                        </div>
                        <button>Adicionar ao carrinho</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;
