import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
	let [title, setTitle] = useState(props.title);
	//const [Date, setDate] = useState(props.date)
	console.log("hello from component");
	const clickHandler = () => {
		setTitle("up");
		console.log(title);
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title Now123</button>
		</Card>
	);
}

export default ExpenseItem;
