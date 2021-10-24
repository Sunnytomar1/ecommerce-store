import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import Slide from 'react-reveal/Slide';







function ProductFeed({products}) {
    return (
        <Container>

     

        {products.slice(0,4).map(({id,title,price,description,category,image})=>(
    <Product 
      
Key={id}
id={id}
      title={title}
      price={price}
      description={description}
      category={category}
    image={image}
   
    
    />

))}
      
          

    
<Festive>
<img src="https://links.papareact.com/dyz" alt=""/>

</Festive>



   <ProductRowTwo>

   {products.slice(4,5).map(({id,title,price,description,category,image})=>(
    <Product 
     Key={id}
     id={id}
      title={title}
      price={price}
      description={description}
      category={category}
    image={image}
    
    />

))}
   </ProductRowTwo>
    


{products.slice(5, products.length).map(({id,title,price,description,category,image})=>(
    <Product 
    Key={id}
    id={id}
      title={title}
      price={price}
      description={description}
      category={category}
    image={image}
    
    />

))}



          
      

        </Container>

     
    );
}

export default ProductFeed

const Container=styled.div `

background-color:#fafafa;
padding:-1rem;
//position:relative;
display:grid;
grid-auto-flow: row dense;   //use up all the space if it sees any empty


@media(min-width:768px){
    grid-template-columns: repeat(2,minmax(0,1fr))
}

@media(min-width:1024px){
    grid-template-columns: repeat(3,minmax(0,1fr))
  
    
}

@media(min-width:1280px){
    grid-template-columns: repeat(4,minmax(0,1fr))
}

@media(min-width:1024px){
    margin-top:-4rem;
    margin-left:auto;
    margin-right:auto;
}


@media(min-width:600px){
    margin-top:-4rem;
   margin-left:auto;
    margin-right:auto;
}




`




const Festive=styled.div `



 
animation: Slide infinite 2s ;

    grid-column: 1 / -1;

    img{
        width:100%;
        
     

        @media(max-width:1100px){
            height:220px;
            
        }

        
    }


  `

  



  const ProductRowTwo=styled.div `


animation:animationDown infinite 1.5s;
  @media(min-width:768px){
    grid-column: span 2 / span 2;
    
  }

 

  

 
  
  `

 







