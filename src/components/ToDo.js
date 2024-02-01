    import React, { useState } from 'react'

    export default function ToDO() {
        const [task, setTask] = useState('')

        const [todos, setTodos] = useState([])
        
        function addItem(e){
           if(e){e.preventDefault();

               if(task === ""){
                   alert('Enter a task first')
                }else{
                setTodos([...todos,task]);
                setTask('')
                }
            }else{
                setTodos([...todos])
            }
        }
            
        function deleteItem(index){
            todos.splice(index,1)
            addItem();
        }
        
        
        return (
            <div >
                <div className="Container">
            <form onSubmit={addItem}>
                
                <input
                    className='txt'
                    type="text" 
                    placeholder='write a todo...' 
                    value={task} 
                    onChange={(e)=>{setTask(e.target.value)}}/>
                
                <button className="btn btn-outline-success" type='submit' id='btn-2'> Add Item </button>
                
            </form>
              
                <ul>
                {todos.map((todo,index)=>{
                    return (
                        <div key={index}>
                            <li >{todo}
                            <button className='btn btn-outline-danger' id="btn1" onClick={()=>deleteItem(index)}>Delete</button>
                            </li>
                        </div>
                    )
                })}
                </ul>
                </div>
            </div>
        )
        
    }
