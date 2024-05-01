import React, {useEffect , useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Header from '../components/Header'

const Home =()=> {
  const navigate = useNavigate()
    const [name,setName] = useState ("")
    const [email,setEmail] = useState("")  
    const [phone,setPhone] = useState("")
    const [record, setRecord] = useState([])

    const handleSubmit =(e) =>{
      e.preventDefault();
      // preventDefault  is used to stop the form submission and page refresh
      // e.target.value will give us the value of input field
      // localstorage.setitem ('user',JSON.stringify(data)) we are storing data in user key

      let object ={
        id: Math.floor(Math.random()*10000),name,phone,email
      }

      let olddata =[...record,object];
      setRecord(olddata);
      localStorage.setItem('users',JSON.stringify(olddata));
      alert("record added");
      setName("");
      setPhone("");
      setEmail(("")) 
      navigate('/view');
    }

    useEffect(()=>{
      let alldata = JSON.parse(localStorage.getItem('users'))
      setRecord(alldata)
    },[])

    return (
      <>
      <Header/>
      < div align="center">
      <h1> ADD USERS </h1>
      <div className='box w-25'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NAME</Form.Label> 
        <Form.Control type="text" onChange={ (e) =>setName(e.target.value) }  value={name} placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" onChange={ (e)=> setPhone(e.target.value) } value={phone} placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" onChange={ (e)=> setEmail(e.target.value) } value={email} placeholder="Phone" />
      </Form.Group>
      <button  type="submit" className= 'btn btn-success'>
        Submit
      </button>
    </Form>
      </div>
      </div>
      </>
    )

}

export default Home