import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
	// let [title, setTitle] = useState(props.title);
	//const [Date, setDate] = useState(props.date)
	// console.log("hello from component");
	// const clickHandler = () => {
	// 	setTitle("up");
	// 	console.log(title);
	// };
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">${props.amount}</div>
				</div>
			</Card>
		</li>
	);
}

export default ExpenseItem;
