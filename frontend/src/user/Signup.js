import React,{useCallback} from 'react';
import {withRouter} from "react-router-dom";
import firebaseConfig from "../config/Fire"
import {Modal,Button} from 'react-bootstrap'


const Signup = ({history}) =>{
  const handleSignup =useCallback(async event => {
    event.preventDefault();
    const { email, password} = event.target.elements;
    try{
      await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value); //firebase function
        history.push("/")
    }
    catch(error){
           alert(error)
    }
  },[history]);

  return(
    <Modal.Dialog>
  
    <Modal.Title> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       Signup</Modal.Title>
    

  <Modal.Body>
  <form onSubmit = {handleSignup}>
  &nbsp;
           <br></br>
           <label>Email
              <input name="email" type="email" placeholder="Email"/>
           </label>
           &nbsp;
           <br></br>
           <label>Password
              <input name="password" type="password" placeholder="Password"/>
           </label>
           &nbsp;
           <br></br>
           <Button variant="dark" type="submit"> 
             Signup</Button>
         </form>
  </Modal.Body>

  <Modal.Footer>
    
    
  </Modal.Footer>
</Modal.Dialog>
  
)
}

export default withRouter(Signup);