import React,{useContext} from 'react'
import CompC from './CompC'
import { NameContext,LastContext } from '../App'

const CompB = () => {

    const name = useContext(NameContext)
    const lastname = useContext(LastContext)

  return (
    <div>
        <CompC />
        <hr/>
        <p>{name} {lastname}</p>
    </div>
  )
}

export default CompB