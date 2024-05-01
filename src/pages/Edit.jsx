import React ,{ useEffect , useState } from 'react'
import Header from '../components/Header'
import Form from 'react-bootstrap/Form';
import {Link , useNavigate, useParams} from 'react-router-dom';


const Edit = () =>{
  const {editid} = useParams();
  const navigate = useNavigate()
  const [name,setName] = useState("");
  const [phone,setPhone] =useState("")
  const [email,setEmail] =useState("");
  const [record, setRecord] =useState ((JSON.parse(localStorage.getItem('users'))) || [])

  const handleSubmit = (e) =>{
    e.preventDefault();

    let olddata =[...record];
    let update =olddata.map((val)=>{

      if(val.id == editid){
        return{
          ...val,
          name: name,
          phone: phone,
          email: email
        }
      }
      return val;
    })
    localStorage.setItem('users',JSON.stringify(update));
    alert("record updated");
    navigate('/view');
  }

  useEffect (()=>{
    let data = record.find(item => item.id == editid);
    if(data){
      setEmail(data.email)
      setName(data.name)
      setPhone(data.phone)
    }
  },[editid])

  return(
      <>
      <Header/>
      < div align="center">
      <h1>EDIT USERS </h1>
      <div className='box w-25'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NAME</Form.Label> 
        <Form.Control type="text" onChange={ (e) =>setName(e.target.value) }  value={name} placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" onChange={ (e)=> setPhone(e.target.value) } value={phone} placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" onChange={ (e)=> setEmail(e.target.value) } value={email} placeholder="Email" />
      </Form.Group>
      <button  type="submit" className= 'btn btn-success m-3'>
        Update
      </button>
    </Form>
      </div>
      </div>
      </>
  )
}

export default Edit;