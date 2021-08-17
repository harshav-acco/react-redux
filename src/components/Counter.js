import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import classes from './Counter.module.css';
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementCounter = () => {
    dispatch(counterActions.increment());
  };
  const incrementCounterByNumber = () => {
    dispatch(counterActions.incrementCounterByNumber(10));
  };
  const decrementCounterBy5 = () => {
    dispatch(counterActions.decrementCounterBy5(5));
  };
  const decrementCounter = () => {
    dispatch(counterActions.decrement());
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        showCounter && 
        <div className={classes.value}>{counter}</div>
      }
      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={incrementCounterByNumber}>Increment by 10</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={decrementCounterBy5}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends React.PureComponent {
//   decrementCounter = () => {
//     this.props.decrement();
//   }

//   incrementCounter = () => {
//     this.props.increment();
//   }

//   toggleCounterHandler = () => {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementCounter}>Increment</button>
//           <button onClick={this.decrementCounter}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   counter: state.counter,
// });

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch({
//     type: "increment"
//   }),
//   decrement: () => dispatch({
//     type: "decrement"
//   })
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
