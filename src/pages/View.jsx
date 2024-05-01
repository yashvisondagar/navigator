import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const About = () => {

  const [data, setData] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const deleteUser = (id) => {
    let alldata = [...data];
    let deletee = alldata.filter(item => item.id != id);
    setData(deletee);
    localStorage.setItem('users',JSON.stringify(deletee));
    alert("Record delete")
  }


  return (
    <>
      <Header />
      <h1>View User</h1>
      <div className="row">
        {
          data.map((item) => {
            return (
              <div key={item.id} className="col-lg-4 mb-5 d-flex justify-content-center">

                <Card key={item.id} style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Text>{`Name :- ${item.name}`}</Card.Text>
                    <Card.Text>{`Phone :- ${item.phone}`}</Card.Text>
                    <Card.Text>{`Email :- ${item.email}`}</Card.Text>
                    <Button onClick={ () => deleteUser(item.id) } variant="danger">Delete</Button>
                    <Link to={`/edit/${item.id}`}>
                      <Button variant="primary m-3">Edit</Button>
                    </Link>
                  </Card.Body>
                </Card>

              </div>
            )
          })
        }

      </div>
    </>
  )
}

export default About
