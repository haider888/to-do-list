import React from 'react'
import './TodoTasks.css'
function TodoTasks({todo ,handleDelete ,handleUpdate}) {

    return (
        <div className="container">
        <div className="todotaskContainer">
            
            {todo.map(item => {
                return(
                    
                        <table>
                            <tr key={item.id}>
                                <td className='tdtask'>{item.text}</td>
                                <td><button className='btndel' onClick={()=>handleDelete(item.id)}>Delete</button></td>
                                <td><button className='btnupd'  onClick={()=>handleUpdate(item.id)}>Update</button></td>
                            </tr>
                        </table>
                   
                        
                    )
            })}
        </div>
        </div>
    )
}

export default TodoTasks
