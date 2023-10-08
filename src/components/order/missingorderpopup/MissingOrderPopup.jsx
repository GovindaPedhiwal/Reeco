import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useUpdateOrderMutation } from '../../../services/order';
import './missingorderpopup.css'

const MissingProductPopup = ({selectedOrder, close}) => {
    const [updateOrder] = useUpdateOrderMutation()
    async function submitOrderStatus(data) {
        const modifiedData = {
            id: selectedOrder?.id,
            status: data?.status
        }
        try {
            await updateOrder(modifiedData).unwrap()
        } catch(error) {
            console.log(error);
        }
    }
  return (
        <div className="missing-popup">
            <div className="missing-header">
                <p>Missing Product</p>
                <AiOutlineClose onClick={close} className="close" size={24}/>
            </div>
            <div className="description">
                <p>
                   Is '{selectedOrder?.product_name}' urgent?
                </p>
            </div>
            <div className="actions">
                <button className="btn no-btn" onClick={() => {
                    submitOrderStatus({status: 'Missing'})
                    close();
                }}>No</button>
                <button className="btn yes-btn"
                    onClick={() => {
                        submitOrderStatus({status: 'Missing - Urgent'});
                    close();
                    }}
                >
                Yes
            </button>
        </div>
      </div>
  )
}

export default MissingProductPopup