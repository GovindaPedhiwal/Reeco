import React from 'react'
import {TfiShoppingCart} from 'react-icons/tfi'
import {MdOutlineExpandMore} from 'react-icons/md'
import './header.css'
const Header = () => {
  return (
    <div className="header">
        <div className="container">
        <div className="header-left">
            <div className="header-name">
                <p>Reeco</p>
            </div>
            <div className="menu">
                <div className="menu-list">
                    <div className="menu-item">
                        <a href="/">Store</a>
                    </div>
                    <div className="menu-item">
                        <a href="/">Orders</a>
                    </div>
                    <div className="menu-item">
                        <a href="/">Analytics</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-right">
            <div className="cart-logo">
                <TfiShoppingCart size={25}/>
                <span className="quantity">5</span>
            </div>
            <div className="username">
                <p>
                    Hello, James
                    <MdOutlineExpandMore size={30}/>
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header