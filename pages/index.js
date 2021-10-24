import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
//import Head from 'next/head'

import Header from './components/Header'
import Main from './components/Main'
import styled from 'styled-components'
import ProductFeed from './components/ProductFeed'
import Boat from './components/Boat'

//import { useEffect } from "react";
//import { useDispatch } from "react-redux";
//import { useStateValue } from "./StateProvider";

//import { auth } from "./firebase";

//import styles from '../styles/Home.module.css'


export default function Home({products,i}) {

 


  return (

   

<Container>
      <Head>
      
        <title>Stark</title>

        
      </Head>


      <Header/>
     <Main/>
    

<ProductFeed key={i} products={products}/>
<Boat/>

     
    </Container>
  )
}


  


export async function getServerSideProps(context){
  const products=await fetch("https://fakestoreapi.com/products").then(

(res)=>res.json()

  );

  return { props: {
    products,
  },
  
  };

}







const Container= styled.div `

//--tw-bg-opacity: 1;
//background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
background-color:#fafafa;

`














// Get>>>https://fakestoreapi.com/products


