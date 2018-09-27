import React from 'react'

export default function Details(props){

    const types = props.type.map((type, i) => {
      return <p key={i}>Type:{type[i].type.name}</p>
    })
    
    return(

      <div className='details'>
        {types}
      </div>
    )
}