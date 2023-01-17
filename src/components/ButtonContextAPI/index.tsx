import { useContext } from 'react';
import { CounterContext } from '../../context/CounterProvider';


export function ButtonContextAPI() {
  const { counter, increment } = useContext(CounterContext);

  return (
    <div className="card">
      <button onClick={increment}>
        count with Context API - {counter}
      </button>
  </div>
  );
}
