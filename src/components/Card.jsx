import React from 'react'

export default function Card(props) {
  return (
    <div className={props.style}>
        {props.children}
    </div>
  )
}
