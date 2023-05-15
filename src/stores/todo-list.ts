import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface TodoItem {
  id: string;
  text: string;
  date: string;
  completed: boolean;
}

interface TodoListState {
  data: TodoItem[];
  errorMessage: string,
  todoActive: boolean;
    create: (todoRequest: Omit<TodoItem, 'id'>) => void;
    remove: (todoId: string) => void;
    update: (todoId: string, todoRequest: Partial<TodoItem>) => void;
    clear: () => void;
    handleErrorMessage: (errorMessage: string) => void
    handleTodoActive: (value: boolean) => void;
}

const useTodoListStore = create<TodoListState>()(
  persist(
    (set) => ({
      data: [],
      errorMessage: '',
      todoActive: false,
      handleErrorMessage: (errorMessage) => set(() => ({ errorMessage })),
      handleTodoActive: (value) => set(() => ({ todoActive: value })),
      create: (todoRequest) =>
        set((state) => ({
          data: [
            ...state.data,
            {
              ...todoRequest,
              id: Math.random().toString(36).slice(2, 9),
            },
          ],
        })),
      remove: (todoId) =>
        set((state) => ({ 
          data: state.data.filter((todo) => todo.id !== todoId)
        })),
      update: (todoId, todoRequest) =>
        set((state) => ({
          data: state.data.map((todo) =>
            todo.id === todoId ? { ...todo, ...todoRequest } : todo
          ),
        })),
      clear: () => set({ data: [] }),
      }),
    { name: 'todo-list',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);



export default useTodoListStore
