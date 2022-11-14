import React,{useEffect, useState} from 'react'

const ApiComponent = () => {
    const [data,setData] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json =>
         setData(json)
         
         )
}, [])

    console.log(data);
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>username</th>
                    <th>email</th>
                </tr>
                </thead>
<tbody>
          
        {
            data?.map((res)=>{
                return (
                    <tr key={res.id}>
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

export default ApiComponent