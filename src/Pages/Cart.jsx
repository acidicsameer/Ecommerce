import React from 'react'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
 const navigate=useNavigate();
const gotoPayment=()=>{
   navigate("/payment")

}

  return (
    <div>
    <button   onClick={gotoPayment}  className=' bg-amber-500 rounded-2xl p-4 '> Payment Now </button>
    </div>
  )
}

export default Cart
