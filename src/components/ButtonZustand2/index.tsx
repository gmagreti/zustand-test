import { useCounter } from '../../stores/counter';

export function ButtonZustand2() {
  const counterTwo = useCounter((state) => state.counTwo)
  const incrementTwo = useCounter((state) => state.incrementTwo)
  return (
    <div className="card">
      <button onClick={incrementTwo}>
        countTwo with Zustand2 - {counterTwo}
      </button>
  </div>
  );
}
