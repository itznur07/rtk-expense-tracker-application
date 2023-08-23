import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../../features/transactions/transactionAPI";
import Transaction from "./Transaction";

export default function Transactions() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  let content;

  if (isLoading) content = <div>Loading...</div>;

  if (!isLoading && !isError && data?.length > 0)
    content = (
      <ul>
        {data?.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    );

  return (
    <>
      <p className='second_heading'>Your Transactions:</p>

      <div className='conatiner_of_list_of_transactions'>{content}</div>
    </>
  );
}
