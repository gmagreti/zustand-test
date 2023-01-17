import { useCounterSelector } from '../../context/CounterUseSelectorProvider';

export function Button3() {
  const { counter, increment } = useCounterSelector();

  return (
    <div className="card">
      <button onClick={increment}>
        count with Use Context Selector - {counter}
      </button>
    </div>
  );
}
