import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransactions } from "../features/transactions/transactionAPI";

export default function Form() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const newTransaction = {
    name: name,
    type: type,
    amount: Number(amount),
  };

  const dispatch = useDispatch();

  /** <!-- field reset function --> */
  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(addTransactions(newTransaction));
    reset();
  };

  return (
    <div className='form'>
      <h3>Add new transaction</h3>
      <form onSubmit={handleCreate}>
        <div className='form-group'>
          <label for='transaction_name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='My Salary'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-group radio'>
          <label for='transaction_type'>Type</label>
          <div className='radio_group'>
            <input
              type='radio'
              value='income'
              name='type'
              checked={type === "income"}
              onChange={(e) => setType("income")}
            />
            <label for='transaction_type'>Income</label>
          </div>
          <div className='radio_group'>
            <input
              type='radio'
              value='expense'
              name='type'
              checked={type === "expense"}
              onChange={(e) => setType("expense")}
              placeholder='Expense'
            />
            <label for='transaction_type'>Expense</label>
          </div>
        </div>

        <div className='form-group'>
          <label for='transaction_amount'>Amount</label>
          <input
            type='number'
            placeholder='300'
            name='amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button type='submit' className='btn'>
          Add Transaction
        </button>
      </form>
      <button className='btn cancel_edit'>Cancel Edit</button>
    </div>
  );
}
