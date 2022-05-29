import React from 'react'
import "./Header.css"
import {AddLocation , SearchOutlined,ShoppingCart} from "@mui/icons-material"


export default function Header() {
  return (
    <div className='header'>
        <div className="headerwrapper">
            <div className="left">
                <div className="amazonlogo">
                    <img src={require("./logo.png")} alt="cannot display" className="companyname" />
                    <span className="india">.in</span>
                </div>
                <div className="customername">
                    <AddLocation className='Iconforloc'/>
                    <div className="details">
                    <span className="name">Deliver to Poonam</span>
                    <span className="address">Yavatmal 445001</span>
                    </div>
                    
                </div>
            </div>
            <div className="search">
                <input type="text" className="searchbarinput" />
                <div className="searchiconcontainer">
                <SearchOutlined className="searchicon" fontSize='large'/>
                </div>
            </div>
            <div className="right">
               <div className="details1">
                   <span className="name">Hello , Siddhesh</span>
                   <span className="adderss">Accounts &amp; Lists</span>
                </div>
                <div className="details1">
                   <span className="name">Returns</span>
                   <span className="adderss">&amp; Orders</span>
                </div> 
                <div className="cart">
                <ShoppingCart className="shoppingcart"/>
                <p className="nofitems">5</p>
                <span className="nameof">CART</span>
                </div>
                 
            </div>
        </div>
    </div>
  )
}
