import React from 'react'
import { NameContext,LastContext } from '../App'
const CompC = () => {
  return (
    <div>
        <h1>This is component C</h1>

        <NameContext.Consumer>
        {
            (name)=>{
                return(
                    <LastContext.Consumer>
                    {
                        (lastname)=>{
                            return (
                                <p>{name} {lastname}</p>
                            )
                        }
                    }
                    </LastContext.Consumer>
                )
            }
        }
        </NameContext.Consumer>
      
    </div>
  )
}

export default CompC