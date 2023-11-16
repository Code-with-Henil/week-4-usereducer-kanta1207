export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'REMOVE_TODO'; payload: number };

export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];

    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
