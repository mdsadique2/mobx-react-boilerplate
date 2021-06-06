import React, { Component } from 'react';
import { makeObservable } from 'mobx';
import { observer }  from 'mobx-react';
import {Link} from "react-router-dom";
@observer
class Search extends Component {
    constructor(props) {
        super(props);
        this.store = props.store;
    }
  
    render() {
        return (
            <div>
                <h2>Search Page</h2>
                <h3>{this.store.search}</h3>
                <h3>
                    <Link to="/">Home</Link>
                </h3>
                
            </div>
        );
    }
}
 
export default Search;