import React,{useState} from 'react'

const FormValidation = () => {
    const [formdata,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        contact:''
    })
    const [formerr,setFormErr] = useState({
        nameErr:'',
        emailErr:'',
        passwordErr:'',
        contactErr:''
    })

    const [eregex,setEregex] = useState('');

    const checkValidation = () =>{

        if(formdata.name == ''){
            console.log('Name is required.')
        }
        if(formdata.email == ''){
            console.log('email is required.')
        }else if(!/.+@.+\.[A-Za-z]+$/.test(formdata.email)){
            console.log('Email should contain @ and .')
        }
        if(formdata.password == ''){
            console.log('password is required.')
        }
        if(formdata.contact == ''){
            console.log('contact is required.')
        }
    }

    const onChangeHandler = (e)=>{
        const {name,value} = e.target;

        if(name === 'name'){
            formdata.name = value;
        }
        if(name === 'email'){
            formdata.email = value;
        }
        if(name === 'password'){
            formdata.email = value;
        }
        if(name === 'contact'){
            formdata.contact = value;
        }
    }
  return (
    <div>
        <input type="text" onChange={onChangeHandler} name="name" placeholder='Name'/><br/>
        <input type="text" onChange={onChangeHandler} name="email" placeholder='Email' /><br/>
        <input type="text" onChange={onChangeHandler} name="password" placeholder='Password'/><br/>
        <input type="text" onChange={onChangeHandler} name="contact" placeholder='Contact'/><br/>
        <button onClick={checkValidation}>Submit</button>

    </div>
  )
}

export default FormValidation