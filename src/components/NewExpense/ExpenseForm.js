import './ExpenseForm.css'
import { useState } from 'react';
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('') //prvi nacin
    const [enteredAmount, setEnteredAmount] = useState('')  //prvi nacin
    const [enteredDate, setEnteredDate] = useState('')  //prvi nacin

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '' drugi nacin
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); //prvi nacin

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value) //prvi nacin

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // }) drugi nacin koji bi radio ali ovo dole je tacnije
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value}
        // }) bolji drugi nacin
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // }) drugi nacin
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return ( 
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input
                     type="text"
                    value={enteredTitle}
                     onChange={titleChangeHandler}
                      />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
     );
}
 
export default ExpenseForm;