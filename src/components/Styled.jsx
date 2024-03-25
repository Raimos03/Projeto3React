import styled, { createGlobalStyle, css } from "styled-components";
import Main from "./Main";



export const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing:border-box; 
    font-family: sans-serif;
}

body {

    background-color: #380a0a;
    color: #380a0a;
    /*height: 1200px;*/

}


main {

    width: 100%;
    /*height: 1200px;*/
    background-color:#FFC72C ;

}

h2{

    margin: 20px;
    margin-bottom: 30px;
}

h3{

    color: white;
    font-family: sans-serif;
    font-size: 2.7rem;
    width: 100vw ;
  
    text-align: center;
    padding: 20px;
}

`



export const Header = styled.header`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 150px;
    background-color: #ffff;
    color: #f4f4f8;  

`

export const FrameHeader = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65vw;
    //border: 2px solid red;

`

export const Logo = styled.img`
    width: 80px;
    height: 80px;

`
export const Logo2 = styled.img`
    width: 50px;
    height: 50px;
`

export const Logo3 = styled.img`
    width: 200px;
    height: 70px;
`

export const  Cel = styled.img`

    width: 42px;
    height:42px;

`
export const CelBK = styled.img`
    width: 42px;
    height:42px;

`


export const BaixeApp = styled.div`
    height:30px;
    width: 10vw;
    //border: 2px solid yellow;
    display: flex;

    align-items: center;
    justify-content: space-around;
    padding: 3px;

`
export const Peca = styled.div`
    height:65px;
    width: 12vw;
    //border: 2px solid purple;

    border-radius: 10px;

    background-color: #FFC72C;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

`

const Display = css`
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;

    height:70px;
    width: 30vw;
    //border: 2px solid green;

`

export const Menuli = styled.div`

    font-size: 1.2rem;
    color: black; 
    font-family: sans-serif;

`


export const FrameMain = styled.div`

    width: 75%;
    height: 170vh;
    //border: 2px solid red;
    background-color: #FFC72C;
    margin: auto;

`
export const Main1 = styled.div`

    padding: 80px;
    width: 100%;
    height: 95vh;

    //border: 4px solid green;
   
    display: flex;
    align-items:center;
    justify-content:space-around;
    flex-flow: row wrap;

`
export const Main2 = styled.div`

    width: 100%;
    height: 75vh;
    
    //border: 3px solid blue;
    background-color: #FEB706;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    flex-flow: row wrap;
    padding: 30px;

    
`

export const HambMain = styled.img`

    width: 480px;
    height: 480px;

`
export const Letra = styled.h1`

    width: 790px;
    font-size: 70px;
    font-weight 800;
    color: white; 
    padding:20px;


`
export const Red = styled.h1`
    font-size: 70px;
    font-weight 800;
    color: red;
    display:inline-block;
`
export const Icones = styled.div`

    width: 40vw;
    height: 200px;
    //border: 3px solid brown;
    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    

`

export const MiniHamb = styled.img`
    width: 160px;
    height: 160px;
`
export const MiniBatata = styled.img`
    width: 160px;
    height: 160px;
`
export const MiniSorvete = styled.img`
    width: 160px;
    height: 160px;
`


export const Card=styled.div`
    
    width: 15vw;
    height: 480px;
    background-color: #FFFFFF;
    border-radius: 30px;
    margin-top:50px;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 

    padding: 15px;
    margin-bottom: 100px;

`

export const Banner = styled.img`

    height: 200px;
    width:100%;
    object-fit: cover;
   

`

export const Footer=styled.footer`
    width: 100%;
    height: 12vh;
    background-color: #f7f7f7;
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    //border: 2px solid blue;

`
export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    width: 75vw;
    //border: 2px solid green;

`
export const Footer1 = styled.div`

    display:flex;
    width: 250px;
    height: 80px;

    justify-content: space-between;
    align-items: center;
    padding: 5px;
    //border: 3px solid red;
`


export const Footer2 = styled.div`
    display:flex;
    width: 500px;
    height: 100px;

    justify-content: space-between;
    align-items: center;
    padding: 5px;
    //border: 3px solid red;


`

export const p = styled.p `

    font-family: sans-serif;
    font-size: 1rem;
    color: #1a1919;
    
`