import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import CheckoutProduct from './components/CheckoutProduct'
import Currency from "react-currency-formatter"
import { selectItems, selectTotal, selectTotalItems } from "./slices/basketSlice";
import { useSelector } from "react-redux";
import { loadStripe} from "@stripe/stripe-js";
import { elements } from "@stripe/react-stripe-js";
import {groupBy} from "lodash";
//import {useStateValue} from "./StateProvider";
import { useRouter } from 'next/router';

import axios from "axios";


//const stripePromise = loadStripe(process.env.stripe_public_key);

function Payment() {


    const items= useSelector(selectItems);
    
    //const stripe= useStripe();
   //const elements= useElements();
   const total= useSelector(selectTotal);
  // const selectTotalItem = useSelector(selectTotalItems)

  
  
  
  //async function createCheckoutSession() {
   // const stripe = await stripePromise;

    // Call the backend to create a checkout session...
  //  const checkoutSession = await axios.post(
     //   "/api/create-checkout-session",
    //    {
   //         items,
           // email: session.user.email,
     //   }
   // );

    // After have created a session, redirect the user/customer to Stripe Checkout
    //const result = await stripe.redirectToCheckout({
     //   sessionId: checkoutSession.data.id,
   // });

  //  if (result.error) {
  //      alert(result.error.message); // @todo : Improve that!
  //  }
//}






    const groupedItems=Object.values(groupBy(items,"id"));

    return (
        <Container>
            <Header/>
       <DelieveryAddress>
           <Top >
    <h1>CHECKOUT ({items.length}): items</h1>

           </Top>
  <Title>
    <h5>  Delievery Address</h5>
  </Title>

  <Address>
    <p>email </p>     {/* we write user?.email  */}
      <p>123 lane california</p>
      <p>los angels</p>
      <p>california</p>
  </Address>

       </DelieveryAddress>

       <ReviewItems>
<ReviewTitle>
    <h3>Review items and delievery</h3>
</ReviewTitle>

<PaymentItems>
    {groupedItems.map((item,i)=> (

        <CheckoutProduct
        
        key={i}
 id={item[0].id}
 title={item[0].title}
 price={item[0].price}
 description={item[0].description}
 category={item[0].category}
 image={item[0].image}
 hasPrime={item[0].hasPrime}
 quantity={item.length}

        />
    ))}
</PaymentItems>

       </ReviewItems>

       
       <PaymentSection>
    
    <PaymentTitle>
        <h3>payment method</h3>
    </PaymentTitle>

    <PaymentDetails>


    <>
 <h2>Subtoal({items.length} ) items:
 <span>
   <Currency quantity={total} currency="USD"/>
 </span>
 </h2>

 
 <Button   >
                               Proceed to Checkout
                            </Button>
  

 
    
   
 
 
 
 
   

</>


    </PaymentDetails>



       </PaymentSection>

    

        </Container>
    )
}

export default Payment


const Container=styled.div `
background-color:#fafafa;
//height:95vh;

`

const Top=styled.div `


`

const DelieveryAddress=styled.div `
background-color:white;
margin-top:30px;

h1{
    display:flex;
    justify-content:center;
}
border-bottom: 4px solid #f9f7f6;
`



const Address=styled.div `

`

const Title=styled.div `
margin-top:70px;
h5{
    font-wight:700;
    font-size:18px;
}

`


const ReviewItems=styled.div `
background-color:white;

border-bottom: 4px solid #f9f7f6;
`


const ReviewTitle=styled.div `


`

const PaymentItems=styled.div `

`


const PaymentSection=styled.div `
background-color:white;
height:200px;

`

const PaymentTitle=styled.div `



`


const PaymentDetails=styled.div `


`


const Button=styled.button `
--tw-bg-opacity: 1;
background-color: rgba(55, 65, 81, var(--tw-bg-opacity));
color:white;
font-size:15px;
font-weight:700;
text-transform:uppercase;
height:40px;
width:200px;
cursor:pointer;
margin-top:1rem;


@media(max-width:700px){
    font-size:13px;
    width:170px;
}

:hover{
    --tw-bg-opacity: 1;
background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}

@media(max-width:700px){
    margin-top:1rem;
}

`