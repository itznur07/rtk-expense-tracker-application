import { useDispatch } from "react-redux";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import { deleteTransactions } from "../../features/transactions/transactionAPI";

export default function Transaction({ transaction }) {
  const { id } = transaction;
  const dispatch = useDispatch();

  

  const handleDelete = (id) => {
    dispatch(deleteTransactions(id));
  };

  return (
    <li className='transaction income'>
      <p>{transaction.name}</p>
      <div className='right'>
        <p>৳ {transaction.amount}</p>
        <button className='link'>
          <img alt='Edit' className='icon' src={editImage} />
        </button>
        <button className='link'>
          <img
            onClick={() => handleDelete(id)}
            alt='Delete'
            className='icon'
            src={deleteImage}
          />
        </button>
      </div>
    </li>
  );
}
