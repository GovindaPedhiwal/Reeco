import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'
import './orderdetails.css'
import {FaBowlFood} from 'react-icons/fa6'
import {PiBowlFoodFill, PiBowlFoodThin} from 'react-icons/pi'
import {MdFastfood,MdOutlineFoodBank} from 'react-icons/md'
import {GiOpenedFoodCan} from 'react-icons/gi'
import {SiIfood} from 'react-icons/si'
import {IoFastFoodSharp} from 'react-icons/io5'
import OrderList from '../orderlist/OrderList'

const OrderDetails = () => {
  return (
    <div>
        <div className="order-approve">
            <div className="container">
                <div className="order-id">
                    <p>Orders <AiOutlineRight />  Order 32457ABC</p>
                </div>
                <div className="approve">
                    <div className="approve-number">
                        Order 32457ABC
                    </div>
                    <div className="order-btns">
                        <button className="btn btn-border">Back</button>
                        <button className="btn btn-border approve-btn">Approve order</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="order-details">
            <div className="container">
                <div className="order-status">
                    <div className="row">
                        <div className="col">
                            <span>Supplier</span>
                            <p>East coast fruits & vegetables</p>
                        </div>
                        <div className="col">
                            <span>Shipping date</span>
                            <p>Thu,Feb 10</p>
                        </div>
                        <div className="col">
                            <span>Total</span>
                            <p>$ 15,028.3</p>
                        </div>
                        <div className="col">
                            <span>Category</span>
                            <div>
                                <span><FaBowlFood /><PiBowlFoodFill /><PiBowlFoodThin /><SiIfood />
                                </span>
                                <br />
                                <span> 
                                <MdFastfood /><MdOutlineFoodBank /><GiOpenedFoodCan /><IoFastFoodSharp />
                                </span>
                            </div>
                        </div>
                        <div className="col">
                            <span>Department</span>
                            <p>300-444-678</p>
                        </div>
                        <div className="col">
                            <span>Status</span>
                            <p>Awaiting your approval</p>
                        </div>
                    </div>
                </div>
                
                <OrderList />
            </div>
        </div>

    </div>
  )
}

export default OrderDetails