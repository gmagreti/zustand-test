import { createContext, useState } from "react";

export const CounterContext = createContext({} as any);

export const CounterProvider = ({ children }: any) => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
}

