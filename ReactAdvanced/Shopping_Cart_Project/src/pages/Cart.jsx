import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
const Cart = () => {
  const {cart}=useSelector((state)=>state);
  console.log("printing cart");
  console.log(cart);
  const [totalAmount,setTotalAmount]=useState(0);
// whenever there is changes in cart array ,we update total amt 
  useEffect(()=>{
    setTotalAmount(
      cart.reduce((acc,curr)=>acc+curr,0)
    )
  },[cart])
  return (
    <div>
      {
        cart.length > 0 ?
        ((<div>

            <div>
              {
                cart.map((item,index)=>{
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>
            <div>

              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                  <span>Total Items : {cart.length}</span>
                </p>
              </div>

              <div>
                <p>Total Amount :${totalAmount}</p>
              </div>

            </div>
        </div>)):
        // If there is no data in the cart then empty the cart and return the shop now page
        (<div>
          <h1>Cart is Empty</h1>
          <NavLink to='/'>
            <button>Shop Now </button>
          </NavLink>
        </div>) 
      }
    </div>
  )
}

export default Cart