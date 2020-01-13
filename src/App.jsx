import React, { Component } from 'react';
import Products from './Views/Products/Products'
import Header from './Views/Header/Header'
import Aside from './Views/Aside/Aside'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.handleQuery = this.handleQuery.bind(this);
        this.state = {
            tag: '',
        };
    }
    handleQuery(value) {
        this.setState({
            tag: value,
        });
    }
    render() {
        const { tag } = this.state;
        return (
            <>
                <Header />
                <div id="body">
                    <Aside query={this.handleQuery}/>
                    <Products tag={tag}/>
                </div>
            </>
        );
    }
}
export default App;