import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchBar: "",
    currentSearch: "",
  },
  reducers: {
    change: (state, action) => {
      state.searchBar = action.payload;
    },
    focus: (state, action) => {
      state.currentSearch = action.payload;
    }
  },
});

export const { change, focus } = searchSlice.actions;

// If I want to make it async
export const changeAsync = term => dispatch => {
  setTimeout(() => {
    dispatch(change(term));
  }, 1000);
};

export const selectSearchBar = state => state.search.searchBar;
export const selectSearchCurrent = state => state.search.currentSearch;

export default searchSlice.reducer;