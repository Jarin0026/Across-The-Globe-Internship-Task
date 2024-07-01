import React from 'react'
import lady from "../images/lady.svg"

function Female() {
  return (
    <div className='community'>
        <h1>Your <span className='passion'>Hobby</span>, Your <span className='hobby'>Community...</span></h1>
        <div>
        <button>Get Started</button>
        </div>
        <img src={lady} alt="" />
    </div>
  )
}

export default Female
