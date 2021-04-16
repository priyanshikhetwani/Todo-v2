import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let todostyles={
        minHeight: "85vh"
        
    }
    return (
        <div className="container" style={todostyles}>
            <h3 className="text-center mb-4">Your Todo List</h3>
            {props.todos.length === 0 ? <h5 className="text-center">No todos to display</h5> :
            props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}
        

        </div>
    );
}

