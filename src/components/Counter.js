import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {

  const counterDispatch = useDispatch();

  const counter = useSelector( state => state.counter.counter);
  const show = useSelector( state => state.counter.showCounter);

  const incrementHandler = () => {
    counterDispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    counterDispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    counterDispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    counterDispatch(counterActions.toggleCounter());
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
