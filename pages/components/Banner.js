import React from 'react'
import styled from 'styled-components'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slide from 'react-reveal/Slide';



function Banner() {
    return (
        <Container>
            <div className="invisibleGradient"/>   
   <Carousel
     autoPlay
     infinite loop
     showStatus={false}
     showIndicators={false}
     showThumbs={false}
     interval={5000}>


  <BannerOne>
<img loading="lazy" src ="/images/a2.png" alt="" />
  </BannerOne>

  <BannerTwo>
<img loading="lazy" src ="/images/a3.jpg" alt="" />

  </BannerTwo>

  <BannerThree>
<img loading="lazy" src ="/images/a1.png" alt="" />

  </BannerThree>

  

  





     </Carousel>

        </Container>
    )
}

export default Banner

const Container=styled.div `
position:relative;
max-width:1200px;
margin:0 auto;

animation: Slide 1.5s;

max-width:1200px;


`



const BannerOne=styled.div `

img{
    max-height:500px;
  
}

`

const BannerTwo=styled.div `

img{
    max-height:500px;
    
}
`

const BannerThree=styled.div `
img{
    max-height:500px;
  
}

`




