import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
	const [filteredYear, setFileterdYear] = useState("2020");
	const changeFilterDataHandler = (currFilterValue) => {
		setFileterdYear(currFilterValue);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					onChangeFilter={changeFilterDataHandler}
					selectedFilter={filteredYear}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />;
			</Card>
		</div>
	);
}

export default Expenses;
