import React, {useState} from 'react';

const NewGoal = (props)=> {
    const [enteredText, setEnteredText] = useState('');
    
    
    const addGoalHandler = (e)=>{
        e.preventDefault();

        const newGoal = {
            id: Math.floor(Math.random().toString()*100),
            text: enteredText
        }
        
        setEnteredText('');
        props.onAddGoal(newGoal);
    };

    const textChangeHandler = (e) => {
        setEnteredText(e.target.value);
    }

  return (
    <form onSubmit={addGoalHandler}>
        <input type="text"  value = {enteredText} onChange={textChangeHandler}/>
        <button type='submit' >Add Goals</button>
    </form>
  )
}

export default NewGoal