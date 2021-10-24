import React,{useState} from 'react'
import styled from 'styled-components'

import StarIcon from '@material-ui/icons/Star';
import Currency from "react-currency-formatter";

import {useDispatch} from "react-redux";
import {addToBasket} from "../slices/basketSlice";
import Fade from 'react-reveal/Fade';




function Product({id,title,price,description,category,image,quantity= 1 }) {
   
   //const [rating] = useState(3);
   
 const Max_Rating=5;
 const Min_Rating=1;

   const [rating]= useState(
       Math.floor(Math.random()*(Max_Rating-Min_Rating +1))+ Min_Rating

   );

   const[hasPrime]= useState(Math.random()<0.5)

   
   const dispatch=useDispatch();

   function addItemToBasket(){
   const product={
    id,title,price,description,category,image,hasPrime,quantity: 1
   };

   //sending product as action to redux store  ...basket slice
   dispatch(addToBasket(product))


   };



    return (
        <Container>
            <p className="cat">{category}</p>
   <ImageCont>
   <img className="prd" src={image} />

   </ImageCont>
          

    <h4>{title}</h4>


<Star>
{Array(rating).fill().map((_,i)=>(
    <StarIcon Key={i} className="new"/>
    ))}

</Star>

<p className="descript">{description}</p>

    {/*  {hasPrime && <p>Has prime deleivery</p>}   */}

    <PriceContainer>
  <Currency quantity={price } currency="USD"/>
    </PriceContainer>

    
{hasPrime && (
    <Tick>
        <Dc>
        <img className="Dc" src="https://links.papareact.com/fdw" alt=""/>
        </Dc>
<Dt>
<p> Free Next-day Delievery</p>
</Dt>


</Tick>

)};

<ButtonContain>
<Button onClick={addItemToBasket}>
       Add To Cart
   </Button>


</ButtonContain>
  


        </Container>
    )
}

export default Product

const Container = styled.div `
z-index:30;
position:relative;
display:flex;
flex-direction:column;
//align-items:center;
background-color:#fff;
margin:1.25rem;

animation: Fade 2.5s;

padding:2.5rem;

border-radius:2.2rem;

.cat{
   position:absolute;
    top:0.5rem;
    right:0.5rem;
    font-size: 0.8rem;
    line-height:1rem;
    --tw-text-opacity: 1;
    color: rgba(107, 114, 128, var(--tw-text-opacity));

}

h4{
    margin-top: 0.75;
margin-bottom: 0.75rem;
}

.descript{
   font-size:0.8rem;
   margin-top: 0.5rem;
margin-bottom: 0.5rem;
  width:900px;
display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow-x: hidden;

 

 


@media(min-width:1024px){       //large screen
   width:110%;



  
}

@media(min-width:600px){           //medium screen
    width:110%;
 
 
 
   
 }

 @media(min-width:400px){           //small screen
    width:110%;
 
 
 
   
 }

}


`

const ImageCont=styled.div `
display:flex;
justify-content:center;

img{
    height:190px;
    width:160px;
    object-fit:"contain";
}

`


const Star=styled.div `
display:flex;
.new{
    height:1.25rem;
    --tw-text-opacity: 1;
    color: rgba(245, 158, 11, var(--tw-text-opacity));

}




`


const PriceContainer=styled.div `
margin-bottom:1.25rem;

`

const Tick=styled.div `

display:flex;
align-items:center;
justify-content:space-between;
margin-top:0.5rem;









`


const Dc=styled.div `
display:flex;
align-items:center;
justify-content:center;
img{
    height:3rem;
}

`

const Dt=styled.div `
display:flex;
align-items:center;
justify-content:center;
margin-left:15px;
p{
    font-size:1rem;
}

`

const ButtonContain=styled.div `
display:flex;
justify-content:center;
margin-top:auto;

`

const Button=styled.button `
font-size:1rem;


width:100%;

border-radius:5px;
padding:0.3rem;

background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
--tw-gradient-from: #fde68a;
--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(253, 230, 138, 0));
--tw-gradient-to: #fbbf24;



--tw-border-opacity: 1;
border-color: rgba(251, 191, 36, var(--tw-border-opacity));


display:flex;
align-items:center;
justify-content:center;
cursor:pointer;

:hover{
    &:active{
        --tw-gradient-from: #fbbf24;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(251, 191, 36, 0));
    }
   
}




`


