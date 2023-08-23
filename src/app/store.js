import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/transactions/transactionsSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});
