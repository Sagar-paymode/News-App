import React from 'react'

const SecondComponent = (props) => {
  console.log(props.data);
  return (
    <div>
      Name: {props?.data?.name}
      <br/>
      Email: {props?.data?.email}
      </div>
  )
}

export default SecondComponent