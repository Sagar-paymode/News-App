import React,{useState} from 'react'

const About = () => {
    const [list,setList] = useState(['abc','xyz','pqr'])
  return (
    <div>
        
        {
            list.map((li,index)=>{
                return (
                    <p key={index}>{li}</p>
                )
            })
        }
    </div>
  )
}

export default About