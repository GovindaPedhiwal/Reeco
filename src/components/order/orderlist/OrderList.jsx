import React, { useState } from 'react'
import './orderlist.css'
import {AiOutlinePrinter,AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'
import fooditem1 from '../../../assets/images/fooditem1.jpg'
import {TiTick} from 'react-icons/ti'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import MissingProductPopup from '../missingorderpopup/MissingOrderPopup'
import EditProductPopup from '../editorderpopup/EditOrderPopup'
import { useGetAllOrdersQuery, useUpdateOrderMutation } from '../../../services/order'
import Constants from '../../../constants/constants'
const OrderList = () => {
    const [query, setQuery] = useState('')
    const { data: orders } = useGetAllOrdersQuery()
    const [updateOrder] = useUpdateOrderMutation()
    async function updatedOrderStatus(selectedOrder) {
        const modifiedData = {
            id: selectedOrder?.id,
            status: Constants.APPROVED,
        }
        console.log('passing',modifiedData);
        try {
            await updateOrder(modifiedData).unwrap()
        } catch(error) {
            console.log(error);
        }
 }
    let classNames = require('classnames')
    return (
        <div className="orderlist">
            <div className="search-order">
                <div className="searchbox">
                    <input type="text" name="" id="" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <AiOutlineSearch size={24}/>
                </div>
                <div className="orderlist-btn">
                    <button className="btn btn-border add-btn">Add item</button>
                    <button className="btn print-btn">
                        <AiOutlinePrinter size={35}/>
                    </button>
                </div>
            </div>
            <div className="orderlist-wrapper">
                <table>
                    <thead className="orderlist-header">
                        <tr>
                            <td>Product Name</td>
                            <td>Brand</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody className="food-list">
                       {
                           orders?.length ? orders?.map((order,idx) => {
                               return <tr className="food-item" key={idx}>
                                        <td className="food-logo-cell">
                                            <span className="food-img">
                                                <img src={fooditem1} alt="food" />
                                            </span>
                                            <span>
                                            {order?.product_name}
                                            </span>
                                        </td>
                                        <td>{order?.brand}</td>
                                        <td>{order?.price}</td>
                                        <td>{order?.quantity}</td>
                                        <td>${order?.price * order?.quantity}</td>
                                        <td>
                                            <span className={
                                                classNames({
                                                    'status': order?.status,
                                                    'danger-bg': order?.status === 'Missing - Urgent',
                                                    'warning-bg': order?.status === 'Missing',
                                                    'success-bg': !['Missing - Urgent', 'Missing'].includes(order?.status)
                                                    
                                                }) }>
                                                {order?.status}
                                            </span>
                                            <div className="order-actions">
                                                <TiTick size={30} onClick={(e) => updatedOrderStatus(order)} className={
                                                     classNames({
                                                        'success-txt': ['Approved','Price and Quantity updated','Price updated','Quantity updated'].includes(order?.status),
                                                    }) }/>
                                                <Popup trigger={<AiOutlineClose size={25} className={
                                                    classNames({
                                                        'danger-txt': order?.status === 'Missing - Urgent',
                                                        'warning-txt': order?.status === 'Missing',                                                        
                                                    }) }/>} modal>
                                                    {close => (
                                                        <MissingProductPopup selectedOrder={order} close={close}/>
                                                    )}
                                                </Popup>

                                                <Popup trigger={<button className="btn button">Edit</button>} modal>
                                                    {close => (
                                                        <EditProductPopup selectedOrder={order} close={close}/>
                                                    )}
                                                </Popup>
                                            </div>
                                        </td>
                                </tr>
                           }) : null
                       }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderList