import React from 'react';
import Main from "./components/Main";
import * as S from "./components/Styled"
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyle } from './components/Styled';

export default function App (){

  return (
    <>

    <GlobalStyle/>
    <Header></Header>
    
    <Main></Main>

    <Footer></Footer>

    </>
  )


};