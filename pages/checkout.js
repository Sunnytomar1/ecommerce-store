import React from 'react'
import styled from 'styled-components'

import Header from "./components/Header";
import { selectItems, selectTotal } from "./slices/basketSlice";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/client";
import CheckoutProduct from "./components/CheckoutProduct";
import {groupBy} from "lodash";
import Currency from "react-currency-formatter"
import { useRouter } from 'next/router';
//import { loadStripe } from "@stripe/stripe-js";
//import axios from 'axios';

//const stripePromise = loadStripe(process.env.stripe_public_key);




function Checkout() {
    
    const items= useSelector(selectItems);
    const total= useSelector(selectTotal);
    //const selectTotalItem = useSelector(selectTotalItems)

    const router= useRouter();
 //  const [session]=useSession();

    //const createCheckoutSession = async () =>{
       // const stripe= await stripePromise;

        //call the backend to create checkout-session

     {/*  const checkoutSession = await axios.post('https://api/create-checkout-session',
        {
            items: items,
           // email:session.user.email,
        });

        //redirect user/customer to stripe checkout

        const result = await stripe.redirectToCheckout({
           sessionId: checkoutSession.data.id,

        });

        if(result.error) {
            alert(result.error.message)
        }
      
    };  */ }  

    
 const groupedItems=Object.values(groupBy(items,"id"));
  
    return (
        <Container>
            <Header />

<Content>

    <Left>
    <img src="https://links.papareact.com/ikj" loading="lazy"/> 


<Box>

    <h1> {items.length===0?"Cart is Empty":"The Shopping Cart"}  </h1>
 

 {groupedItems.map((item, i)=>(
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



</Box>


   

    
    </Left>

    
    <Right>

<>
<h2 >
                            Subtotal ({items.length} items):{" "}
                            <span>
                                <Currency quantity={total} currency="USD" />
                            </span>

                            </h2>
 <Button  onClick={()=> router.push('/payment')} >
                               Proceed to Checkout
                            </Button>
  

 
    
   
                            
 
 
 
   

</>





</Right>



</Content>


          
        </Container>
    )
}

export default Checkout

const Container=styled.div `
background-color:#fafafa;




`

const Content=styled.div `

display:flex;


@media(min-width:1024px){
    display:flex;
}

@media(max-width:1536px){
    margin-left:auto;
    margin-right:auto;

}

@media(max-width:700px){
    flex-direction:column;

}


`

const Left=styled.div `

margin:1.25rem;
--tw-drop-shadow: drop-shadow(0 1px 1px rgba(0,0,0,0.05));

flex:0.7;


img{
    height:220px;
   width:100%;
object-fit:contain;

@media(max-width:700px){
    height:160px;
    object-fit:fill;
}

    
 }

`

const Box=styled.div `

padding:1.25rem;
background-color:white;
margin-top:1.25rem;
margin-bottom:1.25rem;
display:flex;

flex-direction:column;

h1{
    font-size:18px;
    
    border-bottom:2px solid #fafafa;
    padding-bottom: 1rem;
}

`

const Right=styled.div `
flex:0.3;
padding:2rem;

background-color:white;
h2{
    font-size:19px;
    color:black;

    @media(max-width:700px){
        font-size:22px;
    }
}

@media(max-width:700px){
    display:flex;
    flex-direction:column;
   margin-top:40px;
    justify-content:center;
    padding:2rem;

}

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













