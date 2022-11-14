import React,{useEffect,useState} from 'react'
import {getUserData} from './../action/userAction'
import { useDispatch,useSelector } from 'react-redux'

const UserList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUserData());
    }, [])
    const data = useSelector(state=>state.users)

    console.log(data)

   return( (data.loading)?
            <h1>Loading...</h1>
            :
   
            <div>
                <table className='border table'>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.users?.map((res,i)=>{
                                return (
                                    <tr key={res.id}>
                                        <td>{++i}</td>
                                        <td>{res.name}</td>
                                        <td>{res.username}</td>
                                        <td>{res.email}</td>
                                    </tr>   
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    
    )
 
}

export default UserList