import React, { Component } from 'react';
import { observer }  from 'mobx-react';
import {Link} from "react-router-dom";
 
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.store = props.store;
    }
  
    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <h3>{this.store.counter}</h3>
                <button onClick={this.store.onIncrement} type="button">Increment</button>
                <button onClick={this.store.onDecrement} type="button">Decrement</button>
                <h3>
                    <Link to="/search">Search</Link>
                </h3>
            </div>
        );
    }
}
 
export default Home;