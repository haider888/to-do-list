import React,{useState} from 'react'






function Todo({inputvalue,setinputvalue,todo,settodo}) {
    

const handleSubmit=(e)=>{
    e.preventDefault();
    setinputvalue('')
    settodo([...todo,{id:Date.now(),text: inputvalue}])
}





    return (
        <div>
            <div className="container">
            <div className="todoContainer">
                <div className='title'>
                    <h2>Todo-list</h2>
                </div>
                <form action="" className='todoForm' onSubmit={handleSubmit}> 
                    <input type="text" value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}/>
                    <button className='add-btn' type='submit'>Add Task</button>
                </form>
                <div className='title'>
                    <h2>Yousr'S Daily Tasks</h2>
                </div>
                    <table>
                        <td className='thone'>Tasks</td>
                        <td>Delete</td>
                        <td>Update</td>
                    </table>
                    
            </div>

          
            </div>
        </div>
    )
}

export default Todo
