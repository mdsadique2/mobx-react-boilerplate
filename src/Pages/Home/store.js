import { makeObservable, observable, action } from 'mobx';
 
export default class HomeStore {

    @observable 
    searchQuery = '';

    @observable 
    counter = 0;


    constructor() {
        makeObservable(this);
    }
 
    @action setSearchQuery = (value) => {
        this.searchQuery = value;
    };

    @action onIncrement = () => {
        this.counter++;
    }
     
    @action onDecrement = () => {
        this.counter--;
    }


    fetchSearchResults () {

    }
 

}