import React from 'react'
import people from "../images/people.svg"
import place from "../images/place.svg"
import product from "../images/product.svg"
import program from "../images/program.svg"

function Card() {
  return (
    <div className='cardContainer'>
        <div className="carditemsOne">
            <div> <img src={people} alt="" /> </div>
            <div>
                <p>
                Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.
                </p>
            </div>
            <div>
                <button>Connect</button>
            </div>
        </div>

        <div className="carditemsTwo">
            <div> <img src={place} alt="" /> </div>
            <div>
                <p>
                Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycu
                </p>
            </div>
            <div>
                <button>Meet up</button>
            </div>
        </div>

        <div className="carditemsThree">
            <div> <img src={product} alt="" /> </div>
            <div>
                <p>
                Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.                </p>
            </div>
            <div>
                <button>Get it</button>
            </div>
        </div>

        <div className="carditemsFour">
            <div> <img src={program} alt="" /> </div>
            <div>
                <p>
                Find events, meetups and workshops related to your hobby.  Register or buy tickets online.                </p>
            </div>
            <div>
                <button>Attend</button>
            </div>
        </div>
        
    </div>
  )
}

export default Card
