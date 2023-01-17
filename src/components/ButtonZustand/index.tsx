import { useCounter } from '../../stores/counter';


export function ButtonZustand() {
  const counter = useCounter((state) => state.count)
  const increment = useCounter((state) => state.increment)

  return (
    <div className="card">
      <button onClick={increment}>
        count with Zustand - {counter}
      </button>
  </div>
  );
}
