import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const color = transaction.amount < 0 ? 'minus' : 'plus';

    const {deleteTransaction} = useContext(GlobalContext)

    return (
        <li className={color}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}