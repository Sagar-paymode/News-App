import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const UserDetails = () => {
    const {id} = useParams();
    const [user,setUser] = useState({})
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users/'+id,
        })
        .then(function (res) {
            setUser(res.data)
        })
        .catch((err)=>{
            console.log(err)
        });
    }, [id])
    
  return (
    <div>
        Name: {user.name} <br/>
        Username : {user.username} <br/>
        Email : {user.email} <br/>
    </div>
  )
}

export default UserDetails