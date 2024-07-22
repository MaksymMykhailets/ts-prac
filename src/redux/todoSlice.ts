import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/types';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.todos.push(payload);
    },
    deleteTodo: (state, { payload }: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
