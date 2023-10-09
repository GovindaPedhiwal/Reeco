import React, { useEffect, useState } from 'react'
import { AiOutlineClose,AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import './editorderpopup.css'
import fooditem1 from '../../../assets/images/fooditem1.jpg'
import { useUpdateOrderMutation } from '../../../services/order';
import Constants from '../../../constants/constants';

const EditProductPopup = ({selectedOrder, getOrders, close}) => {
    const [orderForm, setOrderForm] = useState({
        price: 0,
        quantity: '',
        comments: ''        
    })
    const [updateOrder] = useUpdateOrderMutation()
    useEffect(() => {
        setOrderForm({
            price: selectedOrder?.price,
            quantity: selectedOrder?.quantity,
            comments: selectedOrder?.comments
        })
    },[])
    async function submitProductDetails() {
        if(orderForm?.price < 0) {
            alert('Price should be positive value only')
            return;
        }
        if(orderForm?.quantity < 0) {
            alert('Quantity should be positive value only')
            return;
        }
        close();
        let product_status;
        if(selectedOrder?.price !== orderForm?.price && selectedOrder?.quantity !== orderForm?.quantity) {
            product_status = Constants.PRICE_QUANTITY_UPDATED
        } else if(selectedOrder?.price !== orderForm?.price) {
            product_status = Constants.PRICE_UPDATED
        } else if(selectedOrder?.quantity !== orderForm?.quantity) {
            product_status = Constants.QUANTITY_UPDATED
        }
        const modifiedData = {
            id: selectedOrder?.id,
            ...orderForm,
            status: product_status ?? selectedOrder?.status,
        }
        try {
            await updateOrder(modifiedData).unwrap()
        } catch(error) {
            console.log(error);
        }
    }
    function incrementQuantity() {
        setOrderForm({
            ...orderForm,
            quantity: orderForm.quantity + 1
        })
    }
    function decrementQuantity() {
        if(orderForm.quantity !== 0) {
            setOrderForm({
                ...orderForm,
                quantity: orderForm.quantity - 1
            })
        }
    }
    let classNames = require('classnames')
  return (
        <div className="editproduct-popup">
            <div className="editproduct-header">
                <AiOutlineClose onClick={close} className="close" size={24}/>
            </div>
            <div className="product-name">
                <p> 
                   {selectedOrder?.product_name}
                </p>
                <p>
                    {selectedOrder?.brand}
                </p>
            </div>
            <div className="product-details">
                <div className="left">
                    <div className="product-img">
                        <img src={fooditem1} alt="food" />
                    </div>
                </div>
                <div className="right">
                    <div className="product-form">
                        <div className="product-row">
                            <div className="product-col">
                                <span>Price ($)</span>
                            </div>
                            <div className="product-col">
                                <input type="text" name="" id="" value={orderForm?.price} onChange={(e) => setOrderForm({
                                    ...orderForm,
                                    price: e.target.value
                                })}/>
                            </div>
                        </div>
                        <div className="product-row">
                            <div className="product-col">
                                <span>Quantity</span>
                            </div>
                            <div className="product-col">
                                <AiOutlinePlus className="increment" size={23} onClick={incrementQuantity}/>
                                    <input type="text" name="" id="" value={orderForm?.quantity} onChange={(e) => setOrderForm({
                                        ...orderForm,
                                        quantity: e.target.value
                                    })}/>
                                <AiOutlineMinus className="decrement" size={23} onClick={decrementQuantity}/>
                            </div>
                        </div>
                        <div className="product-row">
                            <div className="product-col">
                                <span>Total</span>
                            </div>
                            <div className="product-col">
                                <span className="total_price">
                                    ${orderForm?.price * orderForm?.quantity}         
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reason">
                <div className="reason-header">
                    <span>Choose reason</span>
                    <span>(Optional)</span>
                </div>
                <div className="reason-list">
                    {
                        selectedOrder?.product_decline_reason?.map((reason,idx) => {
                            return <span className={
                                classNames({
                                    'reason-item': true,
                                    'selected': orderForm?.comments === reason,                                    
                                }) } key={idx} onClick={(e) => {
                                    setOrderForm({
                                        ...orderForm,
                                        comments: reason
                                    })
                                }}>{reason}</span>
                        })
                    }
                </div>
            </div>
            <div className="actions">
                <button className="btn cancel-btn" onClick={() => {
                    close();
                }}>Cancel</button>
                <button className="btn btn-border send-btn"
                    onClick={() => {
                        submitProductDetails();
                    }}
                >
                Send
            </button>
        </div>
      </div>
  )
}

export default EditProductPopup;