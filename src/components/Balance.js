import { useSelector } from "react-redux";

export default function Balance() {
  const { data } = useSelector((state) => state.transactions);

  const totalAmount = data.reduce(
    (prev, data) =>
      data.type === "income" ? prev + data.amount : prev - data.amount,
    0
  );

  return (
    <div className='top_card'>
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span>{totalAmount}</span>
      </h3>
    </div>
  );
}
