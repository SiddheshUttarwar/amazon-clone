import React from 'react'
import "./Navigation.css"
import {DensityMedium} from "@mui/icons-material"

export default function Navigation() {
  return (
    <div className='navigation'>
        <nav className="navigationwrapper">
            <ul className="navigationitems">
                <a href="https://www.google.com" className="gotogoogle"><DensityMedium className="extraitems"/></a>
                <li className="item"><b>All</b></li>
                <li className="item"><b>Fresh</b></li>
                <li className="item"><b>Mobiles</b></li>
                <li className="item"><b>New Releases</b></li>
                <li className="item"><b>Gift Ideas</b></li>
                <li className="item"><b>Buy Again</b></li>
                <li className="item"><b>AmazonBasics</b></li>
                <li className="item"><b>Home Improvement</b></li>
            </ul>
        </nav>
    </div>
  )
}
