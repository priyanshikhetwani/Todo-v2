import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    let myStyle = {
        width: "50%",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFE6"
        
    }
    
    return (
       <center>
      <div className="card mb-3" style={myStyle}>
    <div className="card-body">
    <h5 className="card-title">{todo.title}</h5>
    <p className="card-text">{todo.desc}</p>
    <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
</div>
</center>
        
        // <>
        // {((todo.sno%4)===0)?
        // <div className="row">
        //     <div className="card col-md-3 clearfix" style={myStyle}>
        //     <div className="card-body">
        //     <h5 className="card-title">{todo.title}</h5>
        //      <p className="card-text">{todo.desc}</p>
        //       <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
        // </div>
        // </div>
        // <br/>
        // </div>
        //     :
        // <>
        // <span>
        // <div className="card col-md-3 clearfix" style={myStyle}>
        //     <div className="card-body">
        //     <h5 className="card-title">{todo.title}</h5>
        //      <p className="card-text">{todo.desc}</p>
        //       <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
        // </div>
        // </div>
        // <br/>
        // </span>
        // </>
    
    // </>
       
);
}



// <div className="mb-3">
            /* <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button> */



        // </div>
    