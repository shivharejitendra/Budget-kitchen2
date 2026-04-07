import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'
const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
          <p className='title'>delivery information</p>
          <div className='multi-fields'>
            <input type="text" placeholder='First -name'/>
            <input type="text" placeholder='Last name'/>
            </div>
            <input type="email" placeholder='Email-Address' />
            <input type="text" placeholder='street'/>
 <div className='multi-fields'>
            <input type="text" placeholder='city'/>
            <input type="text" placeholder='state'/>
            </div>
             <div className='multi-fields'>
            <input type="text" placeholder='zip-code'/>
            <input type="text" placeholder='countery'/>
            </div>
<input type="number" placeholder='Phone' />
             </div>
             <div className='place-order-right'>
                <div className='cart-total'> 
          <h2>Cart Total</h2>
        <div>
          <div className='cart-total-details'>
<p>Subtototal</p>
<p> ₹{getTotalCartAmount()}</p>
          </div>
          <hr />
        <div className='cart-total-details'>
          <p>Delivery Fee</p>
          <p> ₹{getTotalCartAmount()===0?0:50}</p>
        </div>
        <hr />
        <div className='cart-total-details'>
          <b>Total</b>
          <b> ₹{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
        </div>
      </div>
      <button >Proceed to Payment</button>
    </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
