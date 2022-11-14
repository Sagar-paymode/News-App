import React,{useState} from 'react'

const NewComponent = () => {
    const [name,setName] = useState();
    const [clicked,setClicked] = useState(false)
    const onHandlerChange = (e) =>{
        setName(e.target.value)
    }
    const onClickEvent = ()=>{
        setClicked(true);
    }
  return (
    <div>
        <input type="text" placeholder='Enter value' onChange={onHandlerChange}/>
        <p>Input value is: {(clicked)?name:null}</p>
    </div>
  )
}

export default NewComponent