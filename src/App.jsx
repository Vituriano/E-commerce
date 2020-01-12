import React, { Component } from 'react';
import Background from './Views/Background/Background'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <>
                <Background />
            </>
        );
    }
}
export default App;