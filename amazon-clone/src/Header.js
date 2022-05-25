import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='header'>

        <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
        
        <div className='header_searchbar'>
            <input className='header__searchbarinput' type="text"/>
            {/*logo*/}
        </div>
        
        <div className='header__navigation'>
            <div className='nav__element'>
                <span className='element__lineone'>Hello</span>
                <span className='element__linetwo'>Sign In</span>
            </div>
            <div className='nav__element'>
                <span className='element__lineone'>Hello</span>
                <span className='element__linetwo'>Sign In</span>
            </div>
            <div className='nav__element'>
                <span className='element__lineone'>Hello</span>
                <span className='element__linetwo'>Sign In</span>
            </div>
        </div>
    </div>
  )
}

export default Header  