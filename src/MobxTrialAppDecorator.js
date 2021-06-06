import React, { Component } from 'react';
import { extendObservable, makeObservable } from 'mobx';
import { observer }  from 'mobx-react';
import { observable } from 'mobx';
// import { observer }  from 'mobx-react';
 
@observer
class MobxTrialAppDecorator extends Component {

  @observable 
  counter = 0;

  constructor() {
    super();
    makeObservable(this)
  }
 
  onIncrement = () => {
    this.counter++;
    console.log("===========", this.counter)

  }
 
  onDecrement = () => {
    this.counter--;
    console.log("======*****=====", this.counter)
  }
 
  render() {
    return (
      <div>
        {this.counter}
        <button onClick={this.onIncrement} type="button">Increment</button>
        <button onClick={this.onDecrement} type="button">Decrement</button>
      </div>
    );
  }
}
 
export default MobxTrialAppDecorator;
// export default observer(MobxTrialAppDecorator);