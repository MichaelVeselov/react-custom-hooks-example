import './styles/App.css';

import { useCounter } from './hooks/useCounter.js';

const Counter = () => {
  const { counter, incCounter, decCounter, rndCounter, resetCounter } =
    useCounter();

  return (
    <div className='component'>
      <div className='counter'>{counter}</div>
      <div className='controls'>
        <button onClick={incCounter}>INC</button>
        <button onClick={decCounter}>DEC</button>
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  );
};

const RndCounter = () => {
  const { counter, rndCounter, resetCounter } = useCounter();

  return (
    <div className='component'>
      <div className='counter'>{counter}</div>
      <div className='controls'>
        <button onClick={rndCounter}>RND</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className='app'>
      <Counter />
      <RndCounter />
    </div>
  );
};

export default App;
