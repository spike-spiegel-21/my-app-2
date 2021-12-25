import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [isEditingExpense, setEditingExpesnse] = useState(false);
	const editingExpenseOpenHandler = (event) => {
		setEditingExpesnse(true);
	};
	const editingExpenseCloseHandler = (event) => {
		setEditingExpesnse(false);
	};

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			id: Math.random().toString(),
			...enteredExpenseData,
		};
		props.onAddExpense(expenseData);
		setEditingExpesnse(false);
		//console.log(expenseData);
	};

	return (
		<div className="new-expense">
			{!isEditingExpense && (
				<button onClick={editingExpenseOpenHandler}>
					Add New Expense
				</button>
			)}

			{isEditingExpense && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onOpenClick={editingExpenseCloseHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
