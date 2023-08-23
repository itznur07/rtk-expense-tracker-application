import { createSlice } from "@reduxjs/toolkit";
import { getTransactions } from "./transactionAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
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
  },
});

export default transactionsSlice.reducer;
