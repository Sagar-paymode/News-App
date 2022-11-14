import React,{useState} from 'react'
import './myStyle.css'
import SecondComponent from './SecondComponent'

const obj ={
  name:'Shilwant',
  lastname:'Gupta',
  email:'shilwant@gmail.com'
}
const FirstComponent = () => {
const [name,setName] = useState('Shilwant');


const  updateName =()=>{
  setName('Shiva');
}

  return (
    <div>
        <button className="button btn btn-primary" style={{'color':'white',fontSize:'24px'}} onClick={updateName}>Click me</button>
        <h1>Name: {name}</h1>
        <SecondComponent data={obj}/>
    </div>
  )
}

export default FirstComponent
