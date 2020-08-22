
import {Modal,Button} from 'react-bootstrap'
import firebaseConfig from "../config/Fire"
import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";

import { AuthContext } from "../Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/userHome");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;    //need to fix this !!
  }

  return(
    <Modal.Dialog>
    
      <Modal.Title>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Login</Modal.Title>
    
  
    <Modal.Body>
    <form onSubmit = {handleLogin}>
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
             <Button variant="dark" type="submit">Login</Button>
           </form>
    </Modal.Body>
  
    <Modal.Footer>
      
     
    </Modal.Footer>
  </Modal.Dialog>
)
}

export default withRouter(Login);