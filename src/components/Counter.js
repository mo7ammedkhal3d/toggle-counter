import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const counterDispatch = useDispatch();

  const counter = useSelector( state => state.counter);
  const show = useSelector( state => state.showState);

  const incrementHandler = () => {
    counterDispatch({ type: 'increment'})
  };

  const increaseHandler = () => {
    counterDispatch({ type: 'increase', amount: 10 })
  };

  const decrementHandler = () => {
    counterDispatch({ type: 'decrement'})
  };

  const toggleCounterHandler = () => {
    counterDispatch({ type: 'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
