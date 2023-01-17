import { useState } from "react";
import { createContext, useContextSelector } from 'use-context-selector';

export const CounterContext = createContext({} as any);

export const CounterUseSelectorProvider = ({ children }: any) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
}

export const useCounterSelector = () => {
  const counter = useContextSelector(CounterContext, (state) => state.count);
  const increment = useContextSelector(CounterContext, (state) => state.increment);

  return { counter, increment };
}
