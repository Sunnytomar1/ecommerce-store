import React,{useState} from 'react'
import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';
import Currency from "react-currency-formatter";
import {useDispatch} from "react-redux";
//import { selectTotalItems } from "../slices/basketSlice";
//import { useSelector } from "react-redux";
//import QuantityC from "./QuantityC"


import {removeFromBasket, addToBasket,removeGroupedFromBasket,} from "../slices/basketSlice";


function CheckoutProduct(props) {

    const dispatch= useDispatch();
    //const selectTotalItem = useSelector(selectTotalItems);
    

    //const [quantity,setQuantity]=useState('');
  
 
    //const [quantityUp, setQuantityUp] = useState(quantity)

const id=props.id;
const title=props.title;
const rating = props.rating;
    const price = props.price;
    const description = props.description;
    const category = props.category;
    const image = props.image;
    const hasPrime = props.hasPrime;
    const quantity=props.quantity;
    const total=price*quantity;










    //const Max_Rating=5;
 //const Min_Rating=1;
   // const [rating]= useState(
   //     Math.floor(Math.random()*(Max_Rating-Min_Rating +1))+ Min_Rating
 
   // );



    

    function addItemToBasket(){
       const product={
         id,title,price,description,category,image,hasPrime,
        };

        dispatch(addToBasket(product));
    }



    function removeItemFromBasket(){
         // remove item from redux

          dispatch(removeFromBasket({id}));
       
        
    }


   

    function removeGroupFromBasket() {
        dispatch(removeGroupedFromBasket({ id }));
    }


   

    

    return (
        <Container>
            
<First>
    <img src={image}/>
</First>

<Middle>
    <p className="tt">{title}</p>
    <Sts>
  {Array(rating).fill().map((_,i)=>(
      <StarIcon Key={i}/>
  ))}
    </Sts>
    <p className="dc">{description}</p>

      
    
   
    
</Middle>

<Pris>

{/*{quantity} x <Currency quantity={price} currency="USD" /> ={" "}*/ } 
                <span>
                    <Currency quantity={total} currency="USD" />
                </span>
</Pris>

<Last>
    
    <O1>
    
    <Indec>
               <Substraction  onClick={removeItemFromBasket}>
     -
               </Substraction>

               <Quant>
  Quantity: <span>{quantity}</span>
               </Quant>

               <Addition onClick={addItemToBasket}>

    +
               </Addition>
               
            </Indec>
   

    </O1>
   
   <O2>

   <Btn2 onClick={removeGroupFromBasket}>
        Remove Item
    </Btn2>
   </O2>


    
   
    
</Last>

   








        </Container>
    )
}

export default CheckoutProduct

const Container = styled.div `
display:grid;
grid-template-columns:repeat(4,minmax(0,1fr));
margin-top:70px;

@media(max-width:600px){
    grid-template-columns:repeat(3,minmax(0,1fr));
}


`


const First=styled.div `

img{
    height:150px;
    width:110px;
    object-fit:contain;

    @media(max-width:700px){
        height:150px;
        width:100px;
        margin-left:-15px;
    }
   
}

`

const Middle=styled.div `
grid column: span 3/ span 3;
margin-left:1.25rem;
margin-right:1.25rem;


.tt{
    font-weight:700;
    font-size:18px;
    --tw-text-opacity: 1;
    color: rgba(245, 158, 11, var(--tw-text-opacity));

    @media(max-width:700px){
        font-size:14px;
        width:25vw;
        margin-left:-10px;
    }
  
}

.dc{
   margin-top:1.3rem;
    font-size:13px;
   font-weight:600;
   

   display:-webkit-box;
   -webkit-box-orient:vertical;
   -webkit-line-clamp:3;
   overflow:hidden;

   @media(max-width:700px){
    font-size:12px;
    width:25vw;
    margin-left:-10px;
}

}

`

const Sts=styled.div `
display:flex;
align-items:center;

--tw-text-opacity: 1;
color: rgba(217, 119, 6, var(--tw-text-opacity));

@media(max-width:700px){
    margin-left:-10px;
}

`

const Pris=styled.div `
font-size:19px;
margin-left:2rem;
display:flex;
align-items:center;
justify-content:center;

`

const Last=styled.div `
max-width:2000%;
display:flex;
flex-direction:column;
align-items:center;

//margin-left:-2rem;

@media(max-width:600px){
    display:flex;
    flex-direction:row;
    
    width:40vw;
    margin-top:30px;
    margin-left:110px;
   
  
}

`


const O1=styled.div `

display:flex;
justify-content:space-between;
align-items:center;
@media(max-width:600px){
    margin-top:37px;
   width:100%;
  
  
}
`



const Indec=styled.div `
display:flex;
align-items:center;
justify-content:center;

`




const Substraction=styled.button `
--tw-bg-opacity: 1;
background-color: rgba(251, 191, 36, var(--tw-bg-opacity));
border-radius:5px;
font-size:17px;
color:white;
border:1px solid white;
padding:4px;
display:flex;
height:35px;
display:flex;
justify-content:center;
align-items:center;

cursor:pointer;
width:35px;
font-size:24px;

@media(max-width:600px){
    display:flex;
  
    font-size:16px;
    
  
}


`

const Quant=styled.div `
margin-left:30px;

`


const Addition=styled.button `

--tw-bg-opacity: 1;
background-color: rgba(251, 191, 36, var(--tw-bg-opacity));
border-radius:5px;
font-size:17px;
color:white;
border:1px solid white;
padding:4px;
width:35px;
margin-left:50px;
height:35px;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
font-size:34px;

`






const O2=styled.div `
@media(max-width:600px){
    margin-top:-32px;
    width:100%;
  
}

`









const Btn2=styled.button `

margin-top:2rem;
--tw-bg-opacity: 1;
background-color: rgba(245, 158, 11, var(--tw-bg-opacity));
border-radius:5px;
font-size:17px;
color:white;
border:1px solid white;
padding:4px;
cursor:pointer;

@media(max-width:600px){
    
   font-size:15px;
   
}


`










