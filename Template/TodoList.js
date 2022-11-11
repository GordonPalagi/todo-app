import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {

    const [todos, setTodos] = useState([]);

    // if the text is not equal to text, or (some kind of regex)
    // then just return... meaning it won't update if the text matches these conditions
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return 
        }

        // we set a variable so we can add the new todo with
        // the old todo's, by using the spread operator.
        const newTodos = [todo, ...todos]

        // this is where we set the newTodos
        setTodos(newTodos);

    };


    // removeTodo takes the todos array and filters it. 
    // if the todoId equals the id that is given to the function
    // it filters out that element.
    // then we set the todo list, with the element removed. 
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };


    // similar to remove, we give the function a todoId, and a newvalue variable.
    // if it matches any of the conditions, it's doesn't update.
    // else, we map the previous state, if the item's id equals the old,
    // then we keep that item. As it was never updated. 
    // if it does match the id, then the new vaule is saved. 
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return 
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }


    // still not sure what this does.
    // it swtiches the "completed state" to false.
    // then sets the todo as the item.
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    };

  return (
    <div>
        <h1>What's the plan</h1>
        {/* We add a function to the todoForm called onsubmit
        which is testing to see if the text matches a condition.
        if it passes that condition we add the old todo's with the new todos.
        the new todo's then becomes the new state. */}
        <TodoForm onSubmit={addTodo} />
        <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
        />
    </div>
  )
}

export default TodoList