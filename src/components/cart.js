import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { clearCart, decreaseCart, getTotals, increaseItem, removeFromCart } from '../features/cartSlice'

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())

    }, [cart])
    const removeHandler = (cartItem) => {
        dispatch(removeFromCart(cartItem))
    }
    const decreaseHandler = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }
    const increaseHandler = (cartItem) => {
        dispatch(increaseItem(cartItem))
    }
    const clearHandler = () => {
        dispatch(clearCart())
    }
    return (
        <div className='cart-container'>
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className='cart-empty'>
                    <p>Your cart is empty</p>
                    <div className='start-shopping'>
                        <Link to="/Mobile_shope" >
                            <span>Start Shopping</span>
                        </Link>


                    </div>

                </div>) : (
                <div>
                    <div className='titles'>
                        <h3 className='product-title'>Product</h3>
                        <h3 className='price'>Price</h3>
                        <h3 className='quantity'>Quantity</h3>
                        <h3 className='total'>Total</h3>

                    </div>
                    <div className='cart-items'>
                        {cart.cartItems.map(cartItem =>
                            <div className='cart-item' key={cartItem.id}>
                                <div className='cart-product'>
                                    <img src={cartItem.image} alt={cartItem.name} />
                                    <div className='cart-product-desc'>
                                        <h3>{cartItem.name}</h3>
                                        {/* <p>{cartItem.desc}</p> */}
                                        <button onClick={() => removeHandler(cartItem)}>Remove</button>
                                    </div> </div>
                                <div className='cart-product-price'>
                                    ${cartItem.price}

                                </div>
                                <div className='cart-product-quantity'>
                                    <button onClick={() => { decreaseHandler(cartItem) }}>-</button>
                                    <div className='count'>{cartItem.cartQuantity}</div>
                                    <button onClick={() => increaseHandler(cartItem)}>+</button>

                                </div>
                                <div className='cart-product-total-price'>
                                    ${cartItem.price * cartItem.cartQuantity}

                                </div>

                            </div>

                        )}
                        <div className='cart-summary'>
                            <button onClick={() => { clearHandler() }} className='clear-cart'>Clear Cart</button>
                            <div className='cart-checkout'>
                                <div className='subtotal'>
                                    <span>Subtotal</span>
                                    <span className='amount'>${cart.cartTotalAmount}</span>
                                </div>
                                <p>taxes and shipping calculated at checkout</p>
                                <button>Check Out</button>

                            </div>

                        </div>

                    </div>
                </div>)}

        </div>
    )
}

export default Cart
