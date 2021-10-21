import './App.css';
import {Form} from "react-bootstrap"
function App(){
  
    return(
        <div className= "App" style={{backgroundColor:"blue"}}> {/*style={myStyle}*/}
            <h1>Introduction to ReactJS</h1>{/*this is a comment */}
            <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="enter your full name here ..." />
         </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Label>Email</Form.Label>
        <Form.Control  type="email" placeholder="enter your email here ..."/>
      </Form.Group>
    </Form>
            </div>
    );
}

export default App;