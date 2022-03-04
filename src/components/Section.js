import React from 'react'
import "./section.css";
import Bottle from "../images/bottle.png";
import Cap from "../images/cap.png"
import Right from "../images/Right.png"
const Section2 = () => {

    return (
        <div className='section'>
            <div className='image'>
                <img className='cap' src={Cap} alt="" />
                <img className="bottle" src={Bottle} alt="" />
                <div className='left'>
                    <h2>All-new Filtered Tech.</h2>
                    <p>A revolutionary portable water filtration system combining high-performance Nano Zero filter with a seamless, low-pressure drinking experience. Take hydration into your own hands.</p>
                    <button>BUY NOW</button>
                </div>
            </div>
            <div className='text'>
                <h2>LARQ Bottle PureVis</h2>
                <h4>Brilliantly clean water</h4>
                <p>Neutralizes up to 99%* of bacteria such as E.coli using PureVis technology. Learn more.
                </p>
                <h4>Self-cleaning & worry-free</h4>
                <p>Intelligently activates every 2 hours to keep your water and bottle stink-free.
                </p>
                <img className="right_img" src={Right} alt="" />
            </div>
        </div>
    )
}

export default Section2