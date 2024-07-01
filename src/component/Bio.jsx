import React from 'react'
import double from "../images/double.svg"
import thumka from "../images/thumka.svg"
import audio from "../images/audio.svg"

function Bio() {
  return (
    <div className='bio'>
      <div className='bioIcon'> 
        <img src={double} alt="" />
        <h4>Testimonials</h4>
      </div>
      <p>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
      <div className='bioBottom'>
        <img src={audio} alt="" />
        <img src={thumka} alt="" />
      </div>
    </div>
  )
}

export default Bio
