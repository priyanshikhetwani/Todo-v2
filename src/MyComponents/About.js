import React from 'react'

export const About = () => {
    const styles = {
        minHeight: "85vh",
        color: "white"
    }
    return (
        <div className="text-center" style={styles}>
        <h3 className="mb-3 mt-2">Manage and Visualize your todos'</h3>
        <div>
            TodoList is a beautifully simple, free todo list,
            task list that will help keep your busy life organised everyday. 
            No matter who you are or what you do TodoList can help!
            <p>It is truly usable with great user experience.</p>
        </div>
        </div>    
        )
}
