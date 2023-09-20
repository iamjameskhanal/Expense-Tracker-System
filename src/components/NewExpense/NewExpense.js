import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React, {useState} from 'react';
const NewExpense = (props) => {
    const [isEditing, setIsEditing]=useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        
        const expense_Data= {
        ...enteredExpenseData,
        id:Math.random.toString()
        };
        console.log(expense_Data);
        props.onSaveExpenses(expense_Data);
        setIsEditing(false);
    }
    const startEditingHandler = () =>{
        setIsEditing(true);
    }

    const stopEditingHandler=() => {
        setIsEditing(false);
    }
  
    return (
        <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData= {saveExpenseDataHandler} onCancel = {stopEditingHandler}/>}
        </div>
    );

}

export default NewExpense;