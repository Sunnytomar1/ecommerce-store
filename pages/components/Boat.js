import React from 'react'
import styled from 'styled-components'


function Boat() {
    return (
  
            
      <Container>


<Banner>
           <Menu>

      
           <TextContent>
               <h1>Boats Solo</h1>
               <p>Wireless</p>
               <h3>Go far beyond as you can and experience the crisp sound you never  experienced this before</h3>
               
           </TextContent>
<BtnCon>

<Btn>
               Order Now
           </Btn>
</BtnCon>
         

  
             </Menu>
           
  
             <BoatImage>
  <img src="/images/head.png" alt=""/>

  </BoatImage>
      
  
       </Banner>

      </Container>
           

    
    )
}

export default Boat



const Container=styled.div `

display:flex;
justify-content:center;

padding:20px;



//@media(min-width:700px){
  //margin-right:10px;
  //margin-left:10px;
  //overflow:hidden;
//}





`

const Banner=styled.div `

background-color:black;
width:110%;
height:400px;
display:flex;
flex-direction:row;

@media(max-width:700px){
    flex-direction:column;
    height:800px;
    margin:0 -20px;
}











`

const Menu=styled.div `
display:flex;
align-items:center;
flex-direction:column;






`

const TextContent=styled.div `
padding:20px;
h1{
    --tw-text-opacity: 1;
    color: rgba(75, 85, 99, var(--tw-text-opacity));
    font-size:60px;
}

p{
    --tw-text-opacity: 1;
    color: rgba(245, 158, 11, var(--tw-text-opacity));
    margin-left:10rem;
    font-size:40px;
    margin-top:-10px;

    
}

h3{
    color:white;
    margin-top:60px;
   
}

`

const BtnCon=styled.div `
width:60%;
margin:0 auto;
margin-left:50px;
display:flex;
justify-content:center;
align-items:center;

@media(max-width:600px){
    justify-content:center;
}


`

const Btn=styled.button `
height:44px;
width:150px;
--tw-bg-opacity: 1;
background-color: rgba(146, 64, 14, var(--tw-bg-opacity));

border-radius:9999px;
border:1px solid #fff;
display:flex;
align-items:center;
justify-content:center;

color:white;
cursor:pointer;

margin-top:30px;
margin-left:100px;
font-size:15px;



`

const BoatImage=styled.div `


img{

    height:350px;
    width:400px;

   
  
}



`

