import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../features/transactions/transactionAPI";
import Transaction from "./Transaction";

export default function Transactions() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <>
      <p className='second_heading'>Your Transactions:</p>

      <div className='conatiner_of_list_of_transactions'>
        <ul>
          {data.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </>
  );
}
