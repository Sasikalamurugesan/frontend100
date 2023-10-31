import React,{useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';
const Payment=()=>{
const[product,setproduct]=useState({


    productId:1,
    quantity:2,
    ProductBy:"spicemart",
    price:2000*100,

});
const makePayment = (token)=>{
 const body={
    token,product
 }
 const headers={
    "Content-Type":"application/json"
 }
 return fetch("https://sasi-be.onrender.com/Payment",{method:"POST",
headers,
body:JSON.stringify(body)}).then((response)=>{
    console.log(response);
}
)
.catch((err)=>{
    console.log(err);
});
}
    return(
        <div>
    <StripeCheckout name="Buy products" amount={product.price} currency="INR" 
    token={makePayment}
    stripeKey="pk_test_51O2RTMSASiIK7zhThObwqQewtADyedIPCkN1rlJLEogkOund2fx8szs1AtrABsGdsbOhXy6QH7s8FDm1hSsK9Tm200YXw8dZwy">
      <button>Buy Products at{product.price/100}</button>
    </StripeCheckout>
  </div>
    );

  
};
  export default Payment;