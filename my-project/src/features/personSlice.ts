import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Person {
  id: string;
  name: string;
  age: number;
}

interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: JSON.parse(localStorage.getItem('persons') || '[]'),
};

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.persons.push(action.payload);
      localStorage.setItem('persons', JSON.stringify(state.persons));
    },
    editPerson: (state, action: PayloadAction<Person>) => {
      const index = state.persons.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.persons[index] = action.payload;
        localStorage.setItem('persons', JSON.stringify(state.persons));
      }
    },
    deletePerson: (state, action: PayloadAction<string>) => {
      state.persons = state.persons.filter((p) => p.id !== action.payload);
      localStorage.setItem('persons', JSON.stringify(state.persons));
    },
  },
});

export const { addPerson, editPerson, deletePerson } = personSlice.actions;

export default personSlice.reducer;
