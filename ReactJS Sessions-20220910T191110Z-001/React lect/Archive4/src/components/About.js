import React,{useState} from 'react'

const About = () => {
    const [list,setList] = useState(['abc','xyz','pqr'])
    const [invalue, setInvalue] = useState('');
    const onChangeHandler = (e)=>{
        setInvalue(e.target.value)
    }
  return (
    <div>
        <input type="text" onChange={onChangeHandler} value={invalue}/>
        {
            list.map((li,index)=>{
                return (
                    <p key={index}>{li} <button>Delete</button></p>
                )
            })
        }
    </div>
  )
}

export default About