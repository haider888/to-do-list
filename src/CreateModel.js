import React,{useState} from 'react'
import { Button,Modal } from 'react-bootstrap';



function CreateModel({show,setShow ,inputdata,setinputdata,todo,settodo,toggle,edittodo}) {

     
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(inputdata && !toggle ){
            settodo(
                todo.map(elem=>{
                if(elem.id === edittodo){
                 return {...elem, text:inputdata};
                }
                return elem;
            }) )}}

  const handleClose = () => setShow(false);

    return (
        
     <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your's Daily Tasks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="" className='todoForm' onSubmit={handleSubmit} > 
                    <input type="text" value={inputdata} onChange={(e)=>setinputdata(e.target.value)}/>
                    <Button variant="primary" className='save-btn'  type='submit' onClick={handleClose}>Save</Button>
            </form></Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>)
            
    
}

export default CreateModel
