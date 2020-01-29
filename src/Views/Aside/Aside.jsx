import React, { Component } from 'react';
import Search from './assets/Search.svg';
import customData from '../../customData.json';
import './Aside.css';


class Aside extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            value: '',
        };

    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { query } = this.props;
        const { value } = this.state;
        query(value);
    }

    render() {
        // tags usadas
        let allTags = [];
        // tags repetidas
        let usedTags = [];
        for (const data of customData.products) {
            for (const tags of data.ListTags) {
                if (allTags.indexOf(tags) === -1) {
                    allTags.push(tags);
                }
                usedTags.push(tags);
            }
        }

        //construir vetor de frequencia
        let freqTags = [];
        for (let i = 0; i < allTags.length; i++) {
            freqTags.push(0);
            for (let j = 0; j < usedTags.length; j++) {
                if (allTags[i] === usedTags[j]) {
                    freqTags[i]++;
                }
            }
        }
        // buble sort no vetor de frequencia
        for (let i = 0; i < allTags.length - 1; i++) {
            for (let j = 0; j < allTags.length - 1 - i; j++) {
                if (freqTags[j] < freqTags[j + 1]) {
                    [freqTags[j], freqTags[j + 1]] = [freqTags[j + 1], freqTags[j]];
                    [allTags[j], allTags[j + 1]] = [allTags[j + 1], allTags[j]];
                }
            }
        }

        const { value } = this.state;
        return (
            <aside>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit"><img src={Search} alt="" /></button>
                    <input value={value} onChange={this.handleChange} type="text" name="tag" id="tag" placeholder="Filter by tag" />
                </form>

                <div id="tags">
                    {allTags.map((tag, i) =>
                        <p key={i}>{tag}</p>
                    )}
                </div>
            </aside>
        );
    }
}

export default Aside;