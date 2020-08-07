import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {increment,decrement,add,subtract,addresults,deleteres} from './../../store/actions/index'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={()=> this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={()=> this.props.onSubCounter(5)}  />
                <button onClick={() => this.props.onClickResult(this.props.ctr)}>Result</button>
                <ul>
                    {this.props.ResultArr.map(el=>(
                        <li key={el.id} onClick={() => this.props.deleteRes(el.id)}>{el.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapPropsToState = state => {
    return  {
        ctr: state.ctr.counter,
        ResultArr: state.res.results
    }
}

const mapDispatchToState = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment()),
        onDecrementCounter: () => dispatch(decrement()),
        onAddCounter: (value) => dispatch(add(value)),
        onSubCounter: (value) => dispatch(subtract(value)),
        onClickResult: (value) => dispatch(addresults(value)),
        deleteRes: (id,value) => dispatch(deleteres(id))
    }
}

export default connect(mapPropsToState,mapDispatchToState)(Counter);