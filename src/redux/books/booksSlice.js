import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/uRddr6OSr0tnEmWTsb26/books';

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,

};

export const fetchBooks = createAsyncThunk('book/get', async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const add = createAsyncThunk('book/add', async (payload) => {
  try {
    const response = await axios.post(baseUrl, payload);
    return [response.data, payload];
  } catch (err) {
    return err.message;
  }
});

export const deleteBook = createAsyncThunk('book/delete', async (payload) => {
  try {
    const response = await axios.delete(`${baseUrl}/${payload}`);
    return [response.data, payload];
  } catch (err) {
    return err.message;
  }
});

export const booksSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = Object.keys(action.payload).map((key) => ({
        item_id: key,
        ...action.payload[key][0],
      }));
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Add a book
    builder.addCase(add.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload[1]);
    });

    builder.addCase(add.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Delete a book
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload[1],
      );
    });

    builder.addCase(deleteBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
