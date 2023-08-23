import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

/** <!-- Get transactions --> */
export const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async () => {
    const res = await axios.get("/transactions");
    return res.data;
  }
);

/** <!-- Post transactions --> */
export const addTransactions = createAsyncThunk(
  "transactions/addTransactions",
  async (data) => {
    const res = await axios.post("/transactions", data);
    return res.data;
  }
);

/** <!-- Put transactions --> */
export const updateTransactions = async (id, updatedData) => {
  const res = await axios.put(`/transactions/${id}`, updatedData);
  return res.data;
};

/** <!-- Delete transactions --> */
export const deleteTransactions = createAsyncThunk(
  "transactions/deleteTransactions",
  async (id) => {
    const res = await axios.delete(`/transactions/${id}`);
    return res.data;
  }
);
