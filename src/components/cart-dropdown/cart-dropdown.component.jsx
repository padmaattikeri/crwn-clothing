import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from "../../redux/cart/cart.selectors";

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history}) => (
    <div className = "cart-dropdown">
        <div className = "cart-items">
            {
                cartItems.length ? 
                ( cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                ) : (
                    <span className = "empty-message">Yout Cart Is Empty</span>
                )
            }
            <CustomButton onClick = {()=>history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
);

const mapstateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default withRouter(connect(mapstateToProps)(CartDropdown));