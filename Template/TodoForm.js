import React, { useState, useEffect, useRef  } from 'react'

function TodoForm(props) {

    // we need a state to set the input.
    // the input right now is an empty string
    const [input, setInput] = useState('');


    // useRef is a simple hook that allows you to focus
    // on whatever the ref is set to.
    const inputRef = useRef(null);

    // useEffect is used here to only let the
    // useRef hook to update once per rerender.
    useEffect(() => {
        inputRef.current.focus();
    }, [])






    // when typed the onChange will capture the text.
    // here we simply set the text to the target value.
    // then when the input is submitted, the input that
    // is put into the props object, will be updated. 
    const handleChange = e => {
        setInput(e.target.value);
    }
    
    // upon submit, we want to give the props an id
    // and set the input to whatever text was typed.
    const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input
        });
        setInput('');
      };
    
    

    // this is the submit form. A template that allows us to submit
    // the new text as a todo item.
  return (
   <form className='todo-form' onSubmit={handleSubmit}>
    <input 
        type="text" 
        placeholder="Add a todo"
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
    ></input>
    <button className='todo-button'>Add todo</button>
   </form>
  )
}

export default TodoForm