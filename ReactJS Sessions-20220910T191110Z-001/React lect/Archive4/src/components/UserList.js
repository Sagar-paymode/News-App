import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const UserList = () => {
    const [userlist,setUserlist] = useState([])
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
        })
        .then(function (res) {
            setUserlist(res.data)
        })
        .catch((err)=>{
            console.log(err)
        });
    },[])
    
  return (
    <>
    <h1 className='my-5'>Users List</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        userlist?.map((user,index)=>{
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td><button><Link to={'/users/'+user.id}>View</Link></button></td>
                </tr>
            )
        })
       }
      </tbody>
    </Table>
    </>
  )
}

export default UserList