import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
    return (
      <div className="my-4">
        <img src={spinner} alt="Loading.." />
      </div>
    )
}
