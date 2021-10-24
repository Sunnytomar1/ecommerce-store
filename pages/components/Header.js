import React from 'react'
import styled from 'styled-components'



import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';


import {useRouter} from "next/router";
import { useSelector } from "react-redux";
import {selectItems } from "../slices/basketSlice";

import {signIn, signOut, useSession} from "next-auth/client";



function Header({i}) {

   const router=useRouter();
   const items=useSelector(selectItems);
   const user=useSelector(selectItems);
   //const selectTotalItem = useSelector(selectTotalItems);
    return (
        <Container>
            <TopNav>
                <LogoImage Key={i} onClick={()=>router.push('/')} >

   <img
   
   src="/images/favicon.png" alt=""
  
   
   
   />

                </LogoImage>

                <SearchBar>
                    <input type="text" placeholder="Search.." className="InputField"/>
              <SearchButton>
              <SearchIcon Key={i} />
                  </SearchButton>     
    
             

                </SearchBar>

                <RightMenu>


   <Login onClick={()=>router.push('/Login')}>
       <p>Hi,Sunny Tomar</p>
       <span >
           Welcome to Stark</span>
       </Login>

       <SaveLater>
<p> Saved </p>
<p>Order List</p>
           
       </SaveLater>

            <CartButton>
 <IconShopping onClick={()=>router.push('/checkout')}>

     <span>
     {items.length}
     </span>
               <ShoppingCartIcon Key={i} className="Sc"/>
</IconShopping>
        
          <p className="CartText">Cart</p>

           </CartButton> 


                </RightMenu>

               

            </TopNav>

            <BottomNav>

<p>
<MenuIcon className="Menu"/>
All
</p>


<p>Electronics</p>
<p>Groceries</p>
<p>Buisness</p>
<p>Shoes</p>
<p>Jackets</p>
<p className="tw">Brands</p>
<p className="tu">Health</p>





            </BottomNav>
        </Container>
    )
}

export default Header




const Container=styled.div `
position:sticky;
top:0;
z-index:1090;




`

const TopNav=styled.div `

background-color:#131921;
padding:0.25rem;
padding-top: 0.5rem;
padding-bottom: 0.5rem;

display:flex;
align-items:center;
height:80px;

//flex-grow:1;

`

const LogoImage=styled.div `
margin-top:0.5rem;
display:flex;
align-items:center;
margin-left:0.5rem;
flex-grow:1;
cursor:pointer;

img{
    height:70px;
    width:80px;
    margin-left:30px;
    object-fit:"contain";

}


@media(max-width:1268px){
    flex-grow:0;
}


`

const SearchBar=styled.div `
display:flex;
align-items:center;

flex-grow:1;

--tw-bg-opacity: 1;
background-color: rgba(251, 191, 36, var(--tw-bg-opacity));


:hover{
    --tw-bg-opacity: 1;
background-color: rgba(245, 158, 11, var(--tw-bg-opacity));
}

cursor:pointer;
border-radius: 0.375rem;






.InputField{
 padding:0.94rem;
 font-weight:700;


flex-grow:1;
flex-shrink:1;
border-top-left-radius: 0.375rem;
border-bottom-left-radius: 0.375rem;


:focus{
    outline:none;
}
}



@media(max-width:900px){
    display:none;
}



`


const SearchButton=styled.div `

color:white;
display:flex;
align-items:center;

padding:0.5rem;




`

const RightMenu=styled.div `
color:white;

display:flex;
align-items:center;
font-size: 0.85rem;


flex:1;
justify-content:space-between;
margin-left:1.5rem;
margin-right:1.5rem;



white-space: nowrap;


@media(max-width:1068px){
    font-size:0.78rem;
    display:flex;
    
}



	

`

const Login=styled.div `
display:flex;
flex-direction:column;
margin-bottom:4px;
font-weight:700;
cursor:pointer;

p{
    margin-bottom:5px;
}


@media(max-width:950px){
    display:none;
}



`

const SaveLater=styled.div `
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:4px;
cursor:pointer;

p{
    margin-bottom:3px;
    font-weight:700;
    color:yellow;
}

@media(max-width:950px){
    display:none;
}




`

const CartButton=styled.div `

:hover{
    color:green;
}

display:flex;
cursor:pointer;

p{
    font-weight:800;
}

.CartText{
    @media(max-width:650px){
        display:none;
    }
}

@media(max-width:950px){
   width:100%;
   display:flex;
   justify-content:flex-end;
   
}



position:relative;  //done for putting number above the basket

`

const IconShopping=styled.div `
span{
    height:1rem;
    width:1rem;
    border-radius:9999px;
display:flex;
align-items:center;
justify-content:center;
color:black;
font-weight:700;



    --tw-bg-opacity: 1;
    background-color: rgba(251, 191, 36, var(--tw-bg-opacity));


    position:absolute;
    top:0;
    right:40%;
    
  @media(max-width:900px){
      right:0;
  }

  @media(max-width:700px){
      right:0;
  }

  

}

.Sc{
    font-size:2.5rem;

  
}



`


const BottomNav=styled.div `
background-color:#232F3F;

height:60px;

display:flex;
align-items:center;
color:white;

font-size:14.5px;

.tw{
    @media(max-width:800px){
        display:none;
       
    }
}


.tu{
    @media(max-width:800px){
        display:none;
       
    }
}



p{
    display:flex;
    align-items:center;
   flex:0.1;
    
  cursor:pointer;

    @media(max-width:1050px){
        font-size:11px;
        flex:0.4;
    }

  
    
    
    
.Menu{
    margin-right:0.5rem;
    margin-left:1rem;
}





}




`    
































