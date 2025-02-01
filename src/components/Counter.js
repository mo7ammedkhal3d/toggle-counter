import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const counterDispatch = useDispatch();

  const counter = useSelector( state => state.counter);

  const incrementHandler = () => {
    counterDispatch({ type: 'increment'})
  };

  const decrementHandler = () => {
    counterDispatch({ type: 'decrement'})
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
