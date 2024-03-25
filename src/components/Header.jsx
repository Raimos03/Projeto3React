import logo from "../assets/logo.png";
import cel from "../assets/app.svg";
import celpb from "../assets/appbk.svg";
import * as S from "./Styled";

export default function Header(){
    return(
    <>

    <S.Header>

        <S.FrameHeader>
            <S.Logo src={logo} alt="logo"></S.Logo>
            
            <S.Menu>

                <S.BaixeApp>

                    <S.Cel src={cel}></S.Cel>
                    <S.Menuli >Baixe o App</S.Menuli>
                
                </S.BaixeApp >

                <S.Peca>

                    <S.Menuli>Peça seu Mequi</S.Menuli> 
                    <S.CelBK src={celpb}></S.CelBK>

                </S.Peca>
                
            </S.Menu>

        </S.FrameHeader>

    </S.Header>
    
    </>)
}