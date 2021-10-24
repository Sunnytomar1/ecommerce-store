import React, { useState } from 'react';
import styled from 'styled-components';
//import { auth } from './firebase';
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { useStateValue } from "./StateProvider";




function Login() {

  

  









const [email, setEmail] = useState();
const [password, setPassword] = useState();
const router = useRouter();




const dispatch= useDispatch();

 // useEffect(() => {
   //will only run once when app component loads

//   auth.onAuthStateChanged(authUser => {
//     console.log('the user is', authUser);

 //    if(authUser) {

     //the user just logged in/ the user was logged in
//    dispatch({
//      type: 'setUser',
 //    user: authUser
 //  })

   //  }else{
//the user is logged out

//  dispatch({
 // type: 'setUser',
//  user: null
//})

//   }
//   })

//  })

































const signIn = e => {
   e.preventDefault();
  //firebase login step...
auth.signInWithEmailAndPassword(email,password)
.then(auth => {
    router.push('/');
}).catch(error => alert(error.message)); 

}


const register = e => {
    e.preventDefault();
 
//firebase register step ....
auth.createUserWithEmailAndPassword(email,password).then((auth)=>{

    //successfully created new user with email
    console.log(auth);

if(auth){
    router.push('/');
}

}).catch(error => alert(error.message))

}







































    return (
        <Container>
            <Content>
            <Logo>
                <img src="/images/favicon.png"/>

            </Logo>

           <Detail>
               <h5>E-mail</h5>
               <input type="text" placeholder="Enter your email" className="i1"  value={email} onChange={e => setEmail(e.target.value)} />

           </Detail>

           <DetailTwo>
               <h5>Password</h5>
<input type="password" placeholder="Enter your password" className="i2" value={password} onChange= {e => setPassword(e.target.value)} />
               
           </DetailTwo>

            <LoginButton>
                <Left onClick={signIn}>
                Sign  In

                </Left>

                <Right onClick={register}>
   Create Your Account
                </Right>
               
            </LoginButton>

            </Content>
           
        </Container>
    )
}

export default Login


const Container=styled.div `

background-color:#f8f8f8;
height:100vh;
display:grid;
place-items:center;

`

const Content=styled.div `
height:480px;
width:430px;
background-color:#fff;
box-shadow:0 1px 3px #fafafa;
padding:20px;

`


const Logo=styled.div `
display:flex;
justify-content:center;

img{
    height:90px;

    
}

`


const Detail=styled.div `
margin-top:20px;
margin-left:30px;
color: rgba(107, 114, 128, var(--tw-text-opacity));
h5{
    font-size:20px;
  
}

.i1{
    font-weight:700;
    width:300px;
    height:40px;
    outline:none;
    padding:0.5rem;
}

`


const DetailTwo=styled.div `
margin-top:40px;
margin-left:30px;
h5{
    font-size:20px;
}

.i2{
    font-weight:700;
    width:300px;
    height:40px;
padding:0.5rem;
  
        outline:none;
   
}
`

const LoginButton=styled.div `


display:flex;
flex-direction:column;
justify-content:space-around;
margin-top:40px;



`

const Left=styled.button `
--tw-bg-opacity: 1;
background-color: rgba(251, 191, 36, var(--tw-bg-opacity));
color:white;
font-weight:700;
font-size:18px;
border-radius:0.5rem;
cursor:pointer;
border:2px solid #a88734;
width:100%;
padding:0.6rem;


`


const Right=styled.button `
--tw-bg-opacity: 1;
background-color: rgba(75, 85, 99, var(--tw-bg-opacity));
color:white;
font-weight:700;
font-size:18px;
border-radius:0.5rem;
cursor:pointer;
border:1px solid white;
width:100%;
margin-top:25px;
padding:0.7rem;


`