import { create } from 'zustand';

interface CounterState {
  count: number;
  counTwo: number;
  increment: () => void;
  incrementTwo: () => void;
}

export const useCounter = create<CounterState>((set) => ({
  count: 0,
  counTwo: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  incrementTwo: () => set((state) => ({ counTwo: state.counTwo + 1 })),
}))