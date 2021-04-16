import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description can not be blank.")
        }else{
        addTodo(title, desc);
        setTitle("");
        setDesc("");
        }

    }
    const styles = {
        width: "50%"
        
    }
    const mystyle = {
        backgroundColor: "#FFFFE6"
    }
    return (
        <div className="container mt-3 mb-3" style={styles}>
            <h3 className="text-center">Add Todo's</h3>
            <form onSubmit={submit}>
            <div className="mb-3">
                {/* <label for="formGroupExampleInput" class="form-label">Example label</label> */}
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Title" style={mystyle}/>
            </div>
                <div className="mb-3" >
                    {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} style={mystyle} className="form-control" id="desc" placeholder="Description" />
            </div>
            <div className="mb-3">
                <button className="btn btn-success btn-sm">Add</button>
            </div>
            </form>
        </div>
    )
}
