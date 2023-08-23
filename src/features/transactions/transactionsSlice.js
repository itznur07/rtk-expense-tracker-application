import { createSlice } from "@reduxjs/toolkit";
import {
  addTransactions,
  deleteTransactions,
  getTransactions,
} from "./transactionAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
  editData: {},
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = "";
      state.data = action.payload;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.data = [];
    });
    builder.addCase(addTransactions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addTransactions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.data = state.data.push(action.payload);
    });
    builder.addCase(addTransactions.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.data = [];
    });
    builder.addCase(deleteTransactions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTransactions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = "";
      state.data.filter((transaction) => transaction.id !== action.payload);
    });
    builder.addCase(deleteTransactions.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
      state.data = [];
    });
  },
});

export default transactionsSlice.reducer;
