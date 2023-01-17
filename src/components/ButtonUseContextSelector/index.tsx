import { useCounterSelector } from '../../context/CounterUseSelectorProvider';

export function ButtonUseContextSelector() {
  const { counter, increment } = useCounterSelector();

  return (
    <div className="card">
      <button onClick={increment}>
        count with Use Context Selector - {counter}
      </button>
    </div>
  );
}
