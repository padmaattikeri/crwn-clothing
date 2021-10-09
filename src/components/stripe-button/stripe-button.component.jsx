import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ji86oSDFTfeXLYuGAiUN6sOGmPMFaP1BAwBKZKFDyKwLCQeB4GX7GCslpoq0CHWpYSdMw7jJ48nAD8tS3wNUwLO00RKSw1PO7';


const onToken = token =>{
    console.log(token);
    alert('Payment Successful');
}

return (
    <StripeCheckout
        label='Pay Now'
        name='CRWN Cloathing Ltd.'
        billingAddress
        shippingAddress
        image=''
        description = {`Your Total is $${price}`}
        amount = {priceForStripe}
        panelLebel = 'Pay Now'
        token = { onToken }
        stripeKey = { publishableKey }
    />
);
};

export default StripeCheckoutButton;